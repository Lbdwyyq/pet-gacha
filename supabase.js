// Supabase 数据库配置和API
// 从 supabase-config.js 读取配置

// 优先使用全局配置对象（如果存在）
const SUPABASE_URL = (typeof SUPABASE_CONFIG !== 'undefined' && SUPABASE_CONFIG.URL) ||
                     'YOUR_SUPABASE_URL';

const SUPABASE_ANON_KEY = (typeof SUPABASE_CONFIG !== 'undefined' && SUPABASE_CONFIG.ANON_KEY) ||
                          'YOUR_SUPABASE_ANON_KEY';

// 初始化Supabase客户端
let supabase = null;

// 加载Supabase库
async function initSupabase() {
    if (supabase) return supabase;

    try {
        // 动态加载Supabase JS库
        if (typeof window.supabase === 'undefined') {
            await loadScript('https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.min.js');
        }

        if (SUPABASE_URL === 'YOUR_SUPABASE_URL') {
            console.log('Supabase未配置，使用本地存储');
            return null;
        }

        supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
        console.log('Supabase初始化成功');
        return supabase;
    } catch (error) {
        console.error('Supabase初始化失败:', error);
        return null;
    }
}

// 加载外部脚本
function loadScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
}

// ==================== 用户数据操作 ====================

// 保存用户游戏数据到Supabase
async function saveGameToSupabase(userId, gameData) {
    const client = await initSupabase();
    if (!client) {
        // 降级到本地存储
        localStorage.setItem('petHabitGacha', JSON.stringify(gameData));
        return { success: true, local: true };
    }

    try {
        const { data, error } = await client
            .from('game_saves')
            .upsert({
                user_id: userId,
                game_data: gameData,
                updated_at: new Date().toISOString()
            }, {
                onConflict: 'user_id'
            });

        if (error) throw error;
        return { success: true, data };
    } catch (error) {
        console.error('保存到Supabase失败:', error);
        // 降级到本地存储
        localStorage.setItem('petHabitGacha', JSON.stringify(gameData));
        return { success: true, local: true, error: error.message };
    }
}

// 从Supabase加载用户游戏数据
async function loadGameFromSupabase(userId) {
    const client = await initSupabase();
    if (!client) {
        // 从本地存储加载
        const saved = localStorage.getItem('petHabitGacha');
        return saved ? JSON.parse(saved) : null;
    }

    try {
        const { data, error } = await client
            .from('game_saves')
            .select('game_data')
            .eq('user_id', userId)
            .single();

        if (error) {
            if (error.code === 'PGRST116') {
                // 没有找到数据，尝试从本地加载
                const saved = localStorage.getItem('petHabitGacha');
                return saved ? JSON.parse(saved) : null;
            }
            throw error;
        }

        return data.game_data;
    } catch (error) {
        console.error('从Supabase加载失败:', error);
        // 从本地存储加载
        const saved = localStorage.getItem('petHabitGacha');
        return saved ? JSON.parse(saved) : null;
    }
}

// ==================== 排行榜操作 ====================

// 获取金币排行榜
async function getCoinLeaderboard(limit = 10) {
    const client = await initSupabase();
    if (!client) return [];

    try {
        const { data, error } = await client
            .from('game_saves')
            .select('user_id, game_data->resources->coin, game_data->playerName')
            .order('game_data->resources->coin', { ascending: false })
            .limit(limit);

        if (error) throw error;
        return data;
    } catch (error) {
        console.error('获取排行榜失败:', error);
        return [];
    }
}

// ==================== 宠物收集统计 ====================

// 获取全服宠物收集统计
async function getGlobalCollectionStats() {
    const client = await initSupabase();
    if (!client) return null;

    try {
        const { data, error } = await client
            .from('game_saves')
            .select('game_data->collection');

        if (error) throw error;

        // 统计所有宠物的收集次数
        const stats = {};
        data.forEach(save => {
            if (save.collection) {
                Object.keys(save.collection).forEach(petId => {
                    stats[petId] = (stats[petId] || 0) + 1;
                });
            }
        });

        return stats;
    } catch (error) {
        console.error('获取收集统计失败:', error);
        return null;
    }
}

// ==================== 数据同步 ====================

// 同步本地数据到云端
async function syncToCloud(userId) {
    const localData = localStorage.getItem('petHabitGacha');
    if (!localData) return { success: false, message: '没有本地数据' };

    const gameData = JSON.parse(localData);
    const result = await saveGameToSupabase(userId, gameData);

    if (result.success && !result.local) {
        return { success: true, message: '数据已同步到云端' };
    } else if (result.success && result.local) {
        return { success: false, message: '云端保存失败，已保存到本地' };
    } else {
        return { success: false, message: result.error || '同步失败' };
    }
}

// 从云端同步数据到本地
async function syncFromCloud(userId) {
    const cloudData = await loadGameFromSupabase(userId);

    if (cloudData) {
        localStorage.setItem('petHabitGacha', JSON.stringify(cloudData));
        return { success: true, message: '数据已从云端同步到本地', data: cloudData };
    } else {
        return { success: false, message: '云端没有数据' };
    }
}

// ==================== 导出功能 ====================

// 导出游戏数据为JSON文件
function exportGameData() {
    const data = localStorage.getItem('petHabitGacha');
    if (!data) {
        showToast('没有可导出的数据');
        return;
    }

    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `pet-gacha-backup-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    showToast('数据已导出');
}

// 导入游戏数据
function importGameData(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const data = JSON.parse(e.target.result);
                localStorage.setItem('petHabitGacha', JSON.stringify(data));
                showToast('数据已导入，请刷新页面');
                resolve({ success: true });
            } catch (error) {
                showToast('导入失败：文件格式错误');
                reject({ success: false, error: error.message });
            }
        };
        reader.readAsText(file);
    });
}

// 初始化时尝试加载Supabase
document.addEventListener('DOMContentLoaded', () => {
    initSupabase().then(client => {
        if (client) {
            console.log('Supabase已就绪');
        } else {
            console.log('使用本地存储模式');
        }
    });
});
