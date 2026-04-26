// 宠物习惯召唤 - Pet Habit Gacha
// 修复版 - 所有按钮功能正常

// ==================== 狗狗数据库（15只真实狗狗）====================
// 概率分布：
// - 01-05号（毛毛、雪宝、棉花糖、小短腿、柴柴）：70%
// - 06-10号（边牧博士、拉拉、金宝、哈哈、阿拉）：20%
// - 11-15号（牛牛、公主、警长、小猎、喜乐）：10%
const DOGS_DATABASE = [
    // 普通狗狗 70% (01-05号)
    {
        id: 1,
        name: '毛毛',
        image: 'image/01_pomeranian.png',
        breed: '博美犬',
        rarity: 'common',
        personality: '活泼可爱',
        description: '一只毛茸茸的博美小狗，像个小毛球一样可爱',
        feature: '金黄色的蓬松毛发，尾巴卷曲得像朵花',
        stats: { cute: 85, active: 75, loyal: 70, smart: 65 }
    },
    {
        id: 2,
        name: '雪宝',
        image: 'image/02_samoyed.png',
        breed: '萨摩耶',
        rarity: 'common',
        personality: '甜美温柔',
        description: '微笑天使萨摩耶，总是带着甜甜的笑容',
        feature: '雪白蓬松的长毛，笑起来特别治愈',
        stats: { cute: 90, active: 70, loyal: 80, smart: 72 }
    },
    {
        id: 3,
        name: '棉花糖',
        image: 'image/03_bichon.png',
        breed: '比熊犬',
        rarity: 'common',
        personality: '粘人可爱',
        description: '像棉花糖一样软萌的比熊犬，人见人爱',
        feature: '纯白色的卷毛，摸起来像云朵一样软',
        stats: { cute: 88, active: 60, loyal: 75, smart: 70 }
    },
    {
        id: 4,
        name: '小短腿',
        image: 'image/04_corgi.png',
        breed: '柯基犬',
        rarity: 'common',
        personality: '呆萌搞笑',
        description: '短腿小柯基，跑起来屁股一扭一扭的超可爱',
        feature: '短短的小腿，长长的身体，走路摇摇摆摆',
        stats: { cute: 82, active: 65, loyal: 80, smart: 78 }
    },
    {
        id: 5,
        name: '柴柴',
        image: 'image/05_shiba.png',
        breed: '柴犬',
        rarity: 'common',
        personality: '独立傲娇',
        description: '来自日本的柴犬，表情丰富超有趣',
        feature: '橘红色的毛发，三角形的耳朵竖立着',
        stats: { cute: 80, active: 75, loyal: 70, smart: 85 }
    },

    // 稀有狗狗 20% (06-10号)
    {
        id: 6,
        name: '边牧博士',
        image: 'image/06_bordercollie.png',
        breed: '边境牧羊犬',
        rarity: 'rare',
        personality: '聪明机警',
        description: '智商排名第一的边牧，学习能力超强',
        feature: '黑白相间的毛色，眼神充满智慧',
        stats: { cute: 75, active: 95, loyal: 85, smart: 100 }
    },
    {
        id: 7,
        name: '拉拉',
        image: 'image/07_labrador.png',
        breed: '拉布拉多',
        rarity: 'rare',
        personality: '友善温和',
        description: '最受欢迎的导盲犬，对人超级友善',
        feature: '金黄色的短毛，尾巴像水獭一样粗壮',
        stats: { cute: 78, active: 85, loyal: 95, smart: 88 }
    },
    {
        id: 8,
        name: '金宝',
        image: 'image/08_golden.png',
        breed: '金毛寻回犬',
        rarity: 'rare',
        personality: '温柔绅士',
        description: '大暖男金毛，对人非常温柔体贴',
        feature: '金黄色的长毛，性格温顺友好',
        stats: { cute: 82, active: 80, loyal: 98, smart: 85 }
    },
    {
        id: 9,
        name: '哈哈',
        image: 'image/09_husky.png',
        breed: '哈士奇',
        rarity: 'rare',
        personality: '搞怪活泼',
        description: '拆迁办主任哈士奇，表情帝兼话痨',
        feature: '蓝眼睛，黑白灰相间的毛发，喜欢狼嚎',
        stats: { cute: 85, active: 100, loyal: 60, smart: 75 }
    },
    {
        id: 10,
        name: '阿拉',
        image: 'image/10_alaskan.png',
        breed: '阿拉斯加',
        rarity: 'rare',
        personality: '憨厚稳重',
        description: '大型犬阿拉斯加，看起来威武其实很温柔',
        feature: '厚实的毛发，体型庞大但性格温顺',
        stats: { cute: 80, active: 75, loyal: 90, smart: 82 }
    },

    // 传说狗狗 10% (11-15号)
    {
        id: 11,
        name: '牛牛',
        image: 'image/11_frenchbulldog.png',
        breed: '法国斗牛犬',
        rarity: 'legendary',
        personality: '呆萌倔强',
        description: '法斗牛牛，外表凶萌内心温柔的小胖子',
        feature: '扁平的脸，大大的耳朵，身材结实',
        stats: { cute: 88, active: 50, loyal: 85, smart: 75 }
    },
    {
        id: 12,
        name: '公主',
        image: 'image/12_poodle.png',
        breed: '贵宾犬',
        rarity: 'legendary',
        personality: '高贵优雅',
        description: '优雅的贵宾公主，聪明又漂亮',
        feature: '卷曲的毛发，可以修剪成各种造型',
        stats: { cute: 90, active: 70, loyal: 88, smart: 98 }
    },
    {
        id: 13,
        name: '警长',
        image: 'image/13_germanshepherd.png',
        breed: '德国牧羊犬',
        rarity: 'legendary',
        personality: '勇敢正直',
        description: '威风凛凛的德牧警长，守护正义的化身',
        feature: '黑棕相间的毛色，眼神坚定有力',
        stats: { cute: 75, active: 95, loyal: 100, smart: 96 }
    },
    {
        id: 14,
        name: '小猎',
        image: 'image/14_beagle.png',
        breed: '比格犬',
        rarity: 'legendary',
        personality: '好奇活泼',
        description: '大耳朵比格犬，嗅觉灵敏的猎兔犬',
        feature: '大大的垂耳朵，三色毛发，叫声洪亮',
        stats: { cute: 88, active: 90, loyal: 80, smart: 85 }
    },
    {
        id: 15,
        name: '喜乐',
        image: 'image/15_sheltie.png',
        breed: '喜乐蒂牧羊犬',
        rarity: 'legendary',
        personality: '聪明温顺',
        description: '小型牧羊犬喜乐蒂，优雅又聪明',
        feature: '长长的毛发，像小型的苏格兰牧羊犬',
        stats: { cute: 92, active: 80, loyal: 95, smart: 94 }
    }
];

// 习惯数据库
const HABITS_DATABASE = [
    { id: 1, name: '跟随守护', emoji: '👣', desc: '喜欢跟在你身后，做你的小跟班' },
    { id: 2, name: '捡球达人', emoji: '🎾', desc: '看到球就兴奋，百玩不厌' },
    { id: 3, name: '干饭小能手', emoji: '🍽️', desc: '吃饭积极不挑食，光盘行动践行者' },
    { id: 4, name: '撒娇卖萌', emoji: '🥺', desc: '用可爱征服你，讨抱抱高手' },
    { id: 5, name: '安静陪伴', emoji: '😴', desc: '默默陪伴在身边，不吵不闹' },
    { id: 6, name: '看家护院', emoji: '🏠', desc: '警惕性高，守护家园的小卫士' },
    { id: 7, name: '社交达人', emoji: '🤝', desc: '喜欢和其他狗狗玩耍，朋友遍天下' },
    { id: 8, name: '聪明伶俐', emoji: '🧠', desc: '学东西很快，指令一遍就会' }
];

// 稀有度配置
// 概率分布：普通70% | 稀有20% | 传说10%
const RARITY_CONFIG = {
    common: { name: '普通', stars: '⭐', probability: 0.70, color: '#95a5a6' },
    rare: { name: '稀有', stars: '⭐⭐', probability: 0.20, color: '#3498db' },
    legendary: { name: '传说', stars: '⭐⭐⭐⭐⭐', probability: 0.10, color: '#f39c12' }
};

// ==================== 三池配置 ====================
const POOL_CONFIG = {
    limited: {
        id: 'limited',
        name: '☆限定UP☆',
        icon: '🐶',
        borderColor: '#FFD700',
        description: '奶萌比格 UP率提升50%',
        currency: 'diamond',
        singleCost: 100,
        tenCost: 900,
        // 概率分布：
        // 01-05号（毛毛、雪宝、棉花糖、小短腿、柴柴）：70%
        // 06-10号（边牧博士、拉拉、金宝、哈哈、阿拉）：20%
        // 11-15号（牛牛、公主、警长、喜乐）：5%
        // 14号（小猎/比格）：5% UP宠物
        dogProbabilities: {
            // 70% - 普通狗狗
            1: 0.14,  // 毛毛 博美
            2: 0.14,  // 雪宝 萨摩耶
            3: 0.14,  // 棉花糖 比熊
            4: 0.14,  // 小短腿 柯基
            5: 0.14,  // 柴柴 柴犬
            // 20% - 稀有狗狗
            6: 0.04,   // 边牧博士
            7: 0.04,   // 拉拉
            8: 0.04,   // 金宝
            9: 0.04,   // 哈哈
            10: 0.04,  // 阿拉
            // 5% - 传说狗狗（非UP）
            11: 0.0125, // 牛牛
            12: 0.0125, // 公主
            13: 0.0125, // 警长
            15: 0.0125, // 喜乐
            // 5% - UP宠物
            14: 0.05   // 小猎 比格犬 UP
        }
    },
    standard: {
        id: 'standard',
        name: '☆常驻卡池☆',
        icon: '🐕',
        borderColor: '#C0C0C0',
        description: '全系列萌汪',
        currency: 'diamond',
        singleCost: 100,
        tenCost: 900,
        probabilities: {
            common: 0.70,
            rare: 0.20,
            legendary: 0.10
        }
    },
    friendship: {
        id: 'friendship',
        name: '☆友情池☆',
        icon: '🐕',
        borderColor: '#4FC3F7',
        description: '友情抽取，福利满满',
        currency: 'friendship',
        singleCost: 50,
        tenCost: 450,
        probabilities: {
            common: 0.80, // B级
            rare: 0.20,   // A级
            legendary: 0  // 无S级
        }
    },
    coin: {
        id: 'coin',
        name: '☆金币卡池☆',
        icon: '🪙',
        borderColor: '#f39c12',
        description: '金币抽取，超值优惠',
        currency: 'coin',
        singleCost: 1000,
        tenCost: 9000,
        probabilities: {
            common: 0.75,
            rare: 0.20,
            legendary: 0.05
        }
    }
};

// 保底配置
// 10次必出传说
const PITY_CONFIG = {
    legendary: { threshold: 10, rarity: 'legendary' }
};

// 性格数据库（PRD 5.2）
const PERSONALITY_DATABASE = {
    active: { id: 'active', name: '活泼型', icon: '🏃', effect: '训练经验+20%', expBonus: 1.2 },
    lazy: { id: 'lazy', name: '慵懒型', icon: '😴', effect: '心情下降慢', moodRate: 0.7 },
    greedy: { id: 'greedy', name: '贪吃型', icon: '🍖', effect: '喂食效果+30%', feedBonus: 1.3 },
    clingy: { id: 'clingy', name: '粘人型', icon: '❤️', effect: '亲密度+30%', loveBonus: 1.3 },
    independent: { id: 'independent', name: '独立型', icon: '🌲', effect: '亲密度增长慢', loveBonus: 0.7 },
    stubborn: { id: 'stubborn', name: '倔强型', icon: '🔥', effect: '可能不听话', failChance: 0.3 },
    talented: { id: 'talented', name: '天赋型', icon: '⭐', effect: '属性天生+20%', statBonus: 1.2 },
    tough: { id: 'tough', name: '坚韧型', icon: '💪', effect: '体力消耗-50%', energyRate: 0.5 }
};

// 进化配置（PRD 7.1）
const EVOLUTION_CONFIG = {
    1: { from: '博美', to: '萨摩耶', toId: 2, levelReq: 5, loveReq: 50 },      // 博美 → 萨摩耶
    3: { from: '比熊', to: '博美', toId: 1, levelReq: 5, loveReq: 50 },        // 比熊 → 博美
    4: { from: '柯基', to: '柴犬', toId: 5, levelReq: 5, loveReq: 50 },        // 柯基 → 柴犬
    6: { from: '边牧', to: '德牧', toId: 13, levelReq: 5, loveReq: 50 },       // 边牧 → 德牧
    7: { from: '拉布拉多', to: '金毛', toId: 8, levelReq: 5, loveReq: 50 },    // 拉布拉多 → 金毛
    9: { from: '哈士奇', to: '阿拉斯加', toId: 10, levelReq: 5, loveReq: 50 }  // 哈士奇 → 阿拉斯加
};

// 技能配置（PRD 8.2）
const SKILL_DATABASE = {
    1: ['撒娇', '吠叫', '巡视', '魅力光环'],      // 博美
    2: ['微笑', '舔舐', '雪地跑', '治愈之光'],    // 萨摩耶
    3: ['依偎', '撒娇', '安静', '毛绒抱抱'],      // 比熊
    4: ['颠屁股', '短跑', '撒娇', '牧牛本能'],    // 柯基
    5: ['倔强', '警戒', '微笑', '忠诚'],          // 柴犬
    6: ['学习', '追逐', '战术', '智慧之光'],      // 边牧
    7: ['取物', '搜救', '导盲', '服从'],          // 拉布拉多
    8: ['暖男', '陪伴', '治疗', '取物'],          // 金毛
    9: ['拆家', '嚎叫', '逗趣', '狼嚎'],          // 哈士奇
    10: ['雪橇', '守护', '吼叫', '毛发护盾'],     // 阿拉斯加
    11: ['打鼾', '依偎', '呆萌', '公寓适应'],     // 法斗
    12: ['装可怜', '讨好', '学习', '不掉毛'],     // 泰迪
    13: ['警戒', '服从', '护主', '工作'],          // 德牧
    14: ['嗅觉', '追踪', '撒娇', '友善'],          // 比格
    15: ['跳跃', '撒娇', '毛发护盾', '优雅']      // 喜乐蒂
};

// 探险地点配置（PRD 9.1）
const ADVENTURE_LOCATIONS = [
    { id: 1, name: '自家后院', icon: '🏡', energyCost: 10, coinReward: 10, rareChance: 0.05, unlocked: true },
    { id: 2, name: '社区公园', icon: '🌳', energyCost: 20, coinReward: 25, rareChance: 0.10, unlocked: false },
    { id: 3, name: '宠物乐园', icon: '🎠', energyCost: 35, coinReward: 50, rareChance: 0.20, unlocked: false },
    { id: 4, name: '森林小径', icon: '🌲', energyCost: 50, coinReward: 80, rareChance: 0.30, unlocked: false },
    { id: 5, name: '海边沙滩', icon: '🏖️', energyCost: 60, coinReward: 100, rareChance: 0.40, unlocked: false },
    { id: 6, name: '神秘山洞', icon: '🕳️', energyCost: 80, coinReward: 150, rareChance: 0.60, unlocked: false }
];

// 游戏状态（PRD 11.1）
let gameState = {
    // 资源
    resources: {
        diamond: 1000,      // 钻石
        coin: 50000,        // 金币
        friendship: 500     // 友情点
    },
    // 当前选中
    currentPool: 'standard',     // 当前卡池
    currentPet: null,            // 当前选中的宠物
    // 宠物列表
    myPets: [],                  // 已收集的宠物列表
    collection: {},              // 图鉴收集
    // 养成属性
    nurtureStats: {
        hunger: 80,              // 饱食度
        mood: 90,                // 心情值
        energy: 70,              // 体力值
        love: 60                 // 亲密度
    },
    // 探险系统
    adventureUnlocked: [true, false, false, false, false, false],
    adventureCount: 0,
    // 保底系统
    pityCounters: {
        legendary: 0,            // 传说保底计数
        tenGacha: 0              // 十连保底计数
    },
    totalGachaCount: 0,          // 总抽卡次数
    // 临时数据
    lastDog: null,
    tenGachaPets: []             // 当前十连结果
};

// ==================== 本地存储 ====================
function saveGame() {
    try {
        localStorage.setItem('petHabitGacha', JSON.stringify(gameState));
    } catch (e) {
        console.log('本地存储不可用');
    }
}

function loadGame() {
    try {
        const saved = localStorage.getItem('petHabitGacha');
        if (saved) {
            const parsed = JSON.parse(saved);
            gameState = { ...gameState, ...parsed };
            // 确保保底计数器存在
            if (!gameState.pityCounters) {
                gameState.pityCounters = { legendary: 0 };
            }
        }
    } catch (e) {
        console.log('本地存储不可用');
    }
}

// ==================== 页面切换 ====================
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }
}

// ==================== 资源管理 ====================
function updateResourceDisplay() {
    const diamondEl = document.getElementById('diamond-count');
    const friendshipEl = document.getElementById('friendship-count');
    const coinEl = document.getElementById('coin-count');

    if (diamondEl) diamondEl.textContent = gameState.resources.diamond;
    if (friendshipEl) friendshipEl.textContent = gameState.resources.friendship;
    if (coinEl) coinEl.textContent = gameState.resources.coin;
}

function consumeResource(type, amount) {
    if (gameState.resources[type] >= amount) {
        gameState.resources[type] -= amount;
        updateResourceDisplay();
        saveGame();
        return true;
    }
    return false;
}

function addResource(type, amount) {
    gameState.resources[type] += amount;
    updateResourceDisplay();
    saveGame();
}

// ==================== 保底显示更新 ====================
function updatePityDisplay() {
    const legendaryRemaining = PITY_CONFIG.legendary.threshold - gameState.pityCounters.legendary;

    const pityLegendaryEl = document.getElementById('pity-legendary');

    if (pityLegendaryEl) {
        pityLegendaryEl.textContent = `再抽 ${legendaryRemaining} 次必出传说`;
        // 接近保底时高亮显示
        if (legendaryRemaining <= 3) {
            pityLegendaryEl.classList.add('pity-warning');
        } else {
            pityLegendaryEl.classList.remove('pity-warning');
        }
    }
}

// ==================== 三池抽卡逻辑 ====================
// 根据当前卡池进行抽卡
function drawDog() {
    const pool = POOL_CONFIG[gameState.currentPool];
    const isLimitedPool = gameState.currentPool === 'limited';
    const isFriendshipPool = gameState.currentPool === 'friendship';

    let selectedDog = null;
    let isPity = false;

    // 限定池使用单独的概率配置（按狗狗ID）
    if (isLimitedPool) {
        const random = Math.random();
        let cumulative = 0;

        // 使用限定池的狗狗概率配置
        const dogProbs = pool.dogProbabilities;

        for (const [dogId, prob] of Object.entries(dogProbs)) {
            cumulative += prob;
            if (random <= cumulative) {
                selectedDog = DOGS_DATABASE.find(dog => dog.id === parseInt(dogId));
                break;
            }
        }

        // 如果抽到传说狗狗（11-15号），检查保底
        if (selectedDog && selectedDog.rarity === 'legendary') {
            gameState.pityCounters.legendary = 0;
            // 标记是否为UP宠物
            if (selectedDog.id === 14) {
                console.log('🎉 抽到UP宠物：' + selectedDog.name);
            }
        } else {
            // 增加保底计数
            gameState.pityCounters.legendary++;
            // 检查是否触发保底
            if (gameState.pityCounters.legendary >= PITY_CONFIG.legendary.threshold) {
                // 保底：随机给一个传说狗狗
                const legendaryDogs = DOGS_DATABASE.filter(dog => dog.rarity === 'legendary');
                selectedDog = legendaryDogs[Math.floor(Math.random() * legendaryDogs.length)];
                gameState.pityCounters.legendary = 0;
                isPity = true;
                console.log('🎉 触发传说保底！');
            }
        }
    }
    // 常驻池和友情池使用稀有度概率
    else {
        // 增加保底计数（常驻池有保底）
        if (!isFriendshipPool) {
            gameState.pityCounters.legendary++;
        }

        let selectedRarity;

        // 检查保底（常驻池）
        if (!isFriendshipPool && gameState.pityCounters.legendary >= PITY_CONFIG.legendary.threshold) {
            selectedRarity = 'legendary';
            gameState.pityCounters.legendary = 0;
            isPity = true;
            console.log('🎉 触发传说保底！');
        }
        // 正常抽卡
        else {
            const random = Math.random();
            let cumulative = 0;
            selectedRarity = 'common';

            // 使用当前卡池的概率配置
            const probabilities = pool.probabilities;

            for (const [rarity, prob] of Object.entries(probabilities)) {
                cumulative += prob;
                if (random <= cumulative) {
                    selectedRarity = rarity;
                    break;
                }
            }

            // 如果抽到传说，重置保底计数
            if (selectedRarity === 'legendary') {
                gameState.pityCounters.legendary = 0;
            }
        }

        // 从该稀有度随机选择
        const dogsOfRarity = DOGS_DATABASE.filter(dog => dog.rarity === selectedRarity);
        selectedDog = dogsOfRarity[Math.floor(Math.random() * dogsOfRarity.length)];
    }

    // 随机分配性格（PRD 5.3：70%概率1种，30%概率2种）
    const personalities = assignPersonalities();

    // 分配技能
    const skills = SKILL_DATABASE[selectedDog.id] || ['普通技能'];

    // 随机分配习惯
    const randomHabit = HABITS_DATABASE[Math.floor(Math.random() * HABITS_DATABASE.length)];

    // 创建完整的宠物数据
    const petData = {
        ...selectedDog,
        uniqueId: Date.now() + Math.random().toString(36).substr(2, 9),
        level: 1,
        exp: 0,
        expMax: 100,
        skillLevel: 0,
        personalities: personalities,
        personalityTags: personalities.map(p => `<span class="personality-tag ${p.id}">${p.icon} ${p.name}</span>`).join(''),
        skills: skills,
        unlockedSkills: [skills[0]], // Lv.1解锁第一个技能
        habit: randomHabit,
        nurtureStats: {
            hunger: 80,      // 饱食度
            mood: 90,        // 心情值
            energy: 70,      // 体力值
            love: 60         // 亲密度
        },
        obtainedAt: new Date().toISOString(),
        isPity: isPity
    };

    // 保存游戏状态
    saveGame();

    // 更新保底显示
    updatePityDisplay();

    return petData;
}

// ==================== 性格分配（PRD 5.3）====================
function assignPersonalities() {
    const personalityKeys = Object.keys(PERSONALITY_DATABASE);
    const count = Math.random() < 0.7 ? 1 : 2; // 70%概率1种，30%概率2种
    const selected = [];

    // 随机选择性格（不重复）
    const shuffled = [...personalityKeys].sort(() => Math.random() - 0.5);
    for (let i = 0; i < count && i < shuffled.length; i++) {
        selected.push(PERSONALITY_DATABASE[shuffled[i]]);
    }

    return selected;
}

// ==================== 抽卡动画 ====================
function startGacha() {
    const dog = drawDog();
    gameState.lastDog = dog;
    
    // 先切换到抽卡动画页面
    showPage('gacha-page');
    
    // 延迟创建闪光效果，确保页面已切换
    setTimeout(() => {
        createSparkles();
    }, 100);
    
    // 动画结束后显示结果
    setTimeout(() => {
        showResult(dog);
    }, 2500);
}

function createSparkles() {
    // 尝试获取当前活动页面的sparkles容器
    const gachaPage = document.getElementById('gacha-page');
    const gachaTenPage = document.getElementById('gacha-ten-page');
    
    let container = null;
    if (gachaPage && gachaPage.classList.contains('active')) {
        container = document.getElementById('sparkles');
    } else if (gachaTenPage && gachaTenPage.classList.contains('active')) {
        container = document.getElementById('sparkles-ten');
    }
    
    if (!container) {
        console.log('未找到sparkles容器');
        return;
    }
    
    container.innerHTML = '';
    
    // 创建12个闪光粒子
    for (let i = 0; i < 12; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        const angle = (i / 12) * 360;
        const distance = 100 + Math.random() * 50;
        sparkle.style.left = `calc(50% + ${Math.cos(angle * Math.PI / 180) * distance}px)`;
        sparkle.style.top = `calc(50% + ${Math.sin(angle * Math.PI / 180) * distance}px)`;
        sparkle.style.animationDelay = `${Math.random() * 0.5}s`;
        container.appendChild(sparkle);
    }
    
    console.log('✨ 闪光效果已创建');
}

// ==================== 结果展示 ====================
function showResult(dog) {
    showPage('result-page');

    const rarity = RARITY_CONFIG[dog.rarity];

    // 更新狗狗卡片
    const dogImage = document.getElementById('result-image');
    const dogName = document.getElementById('result-name');
    const dogStars = document.getElementById('result-stars');
    const rarityBadge = document.getElementById('result-rarity-badge');

    if (dogImage) {
        dogImage.src = dog.image;
        dogImage.alt = dog.name;
    }
    if (dogName) dogName.textContent = dog.name;
    if (dogStars) dogStars.textContent = rarity.stars;
    if (rarityBadge) {
        // 如果是保底，显示特殊标记
        if (dog.isPity) {
            rarityBadge.textContent = rarity.name + ' (保底)';
            rarityBadge.style.background = 'linear-gradient(135deg, #ff6b6b, #ee5a24)';
        } else {
            rarityBadge.textContent = rarity.name;
            rarityBadge.style.background = '';
        }
        rarityBadge.setAttribute('data-rarity', dog.rarity);
    }

    // 更新性格显示
    const resultPersonality = document.getElementById('result-personality');
    if (resultPersonality && dog.personalities) {
        resultPersonality.innerHTML = dog.personalities.map(p =>
            `<span class="personality-tag">${p.icon} ${p.name}</span>`
        ).join('');
    }

    // 更新详细信息
    const resultBreed = document.getElementById('result-breed');
    const resultPersonalityValue = document.getElementById('result-personality-value');
    const resultRarity = document.getElementById('result-rarity');

    if (resultBreed) resultBreed.textContent = dog.breed;
    if (resultPersonalityValue) {
        resultPersonalityValue.textContent = dog.personalities ?
            dog.personalities.map(p => p.name).join('、') : '普通';
    }
    if (resultRarity) {
        resultRarity.textContent = dog.isPity ? rarity.name + ' (保底)' : rarity.name;
        resultRarity.setAttribute('data-rarity', dog.rarity);
    }

    // 更新性格效果展示（PRD 5.4）
    const personalityEffects = document.getElementById('personality-effects');
    if (personalityEffects && dog.personalities) {
        personalityEffects.innerHTML = dog.personalities.map(p => `
            <div class="personality-item">
                <div class="personality-icon">${p.icon}</div>
                <div class="personality-info">
                    <div class="personality-name">${p.name}</div>
                    <div class="personality-effect">${p.effect}</div>
                </div>
            </div>
        `).join('');
    }

    // 更新技能列表（PRD 8）
    const skillsList = document.getElementById('skills-list');
    if (skillsList && dog.skills) {
        skillsList.innerHTML = dog.skills.map((skill, index) => {
            const isUnlocked = dog.unlockedSkills && dog.unlockedSkills.includes(skill);
            const levelReq = index + 1;
            return `
                <div class="skill-item ${isUnlocked ? '' : 'locked'}">
                    <span class="skill-level">Lv.${levelReq}</span>
                    <span class="skill-name">${skill}</span>
                    <span class="skill-status">${isUnlocked ? '✓ 已解锁' : '🔒 未解锁'}</span>
                </div>
            `;
        }).join('');
    }

    // 更新特点
    const resultFeature = document.getElementById('result-feature');
    if (resultFeature) {
        resultFeature.textContent = `${dog.description}。${dog.feature}。`;
    }

    // 更新属性条
    updateStatBar('stat-cute', 'stat-cute-value', dog.stats.cute);
    updateStatBar('stat-active', 'stat-active-value', dog.stats.active);
    updateStatBar('stat-loyal', 'stat-loyal-value', dog.stats.loyal);
    updateStatBar('stat-smart', 'stat-smart-value', dog.stats.smart);

    // 彩纸效果（保底或传说都触发）
    if (dog.rarity === 'legendary' || dog.isPity) {
        createConfetti();
    }
}

// ==================== 十连抽结果展示 ====================
function showTenDrawResult(dogs) {
    showPage('ten-result-page');
    
    const grid = document.getElementById('ten-result-grid');
    const summaryEl = document.getElementById('ten-summary');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    // 统计稀有度
    const rarityCount = {};
    let hasNew = false;
    
    dogs.forEach((dog, index) => {
        const rarity = RARITY_CONFIG[dog.rarity];
        rarityCount[dog.rarity] = (rarityCount[dog.rarity] || 0) + 1;
        
        const isNew = !gameState.collection[dog.id] || 
                      (gameState.collection[dog.id] && 
                       gameState.collection[dog.id].obtainedAt === dog.obtainedAt);
        
        const card = document.createElement('div');
        card.className = `ten-result-card rarity-${dog.rarity}`;
        card.style.animationDelay = `${index * 0.1}s`;
        
        card.innerHTML = `
            <div class="ten-result-image-container">
                <img src="${dog.image}" alt="${dog.name}" class="ten-result-image">
                ${isNew ? '<span class="new-badge">NEW</span>' : ''}
                ${dog.isPity ? '<span class="pity-badge">保底</span>' : ''}
            </div>
            <div class="ten-result-info">
                <span class="ten-result-name">${dog.name}</span>
                <span class="ten-result-rarity" style="color: ${rarity.color}">${rarity.stars}</span>
            </div>
            <div class="ten-result-habit">
                <span>${dog.habit.emoji}</span>
                <span>${dog.habit.name}</span>
            </div>
        `;
        
        // 点击卡片查看详情
        card.addEventListener('click', () => {
            showResult(dog);
        });
        
        grid.appendChild(card);
    });
    
    // 更新统计信息
    if (summaryEl) {
        const summaryParts = [];
        if (rarityCount.legendary) summaryParts.push(`<span class="summary-legendary">传说×${rarityCount.legendary}</span>`);
        if (rarityCount.rare) summaryParts.push(`<span class="summary-rare">稀有×${rarityCount.rare}</span>`);
        if (rarityCount.common) summaryParts.push(`<span class="summary-common">普通×${rarityCount.common}</span>`);
        summaryEl.innerHTML = summaryParts.join(' ');
    }

    // 彩纸效果（如果有传说）
    if (rarityCount.legendary) {
        createConfetti();
    }
}

function updateStatBar(fillId, valueId, value) {
    const fill = document.getElementById(fillId);
    const valueText = document.getElementById(valueId);
    
    if (fill) {
        setTimeout(() => {
            fill.style.width = `${value}%`;
        }, 100);
    }
    if (valueText) valueText.textContent = value;
}

function createConfetti() {
    const container = document.getElementById('confetti');
    if (!container) return;
    
    container.innerHTML = '';
    
    const colors = ['#ffd93d', '#ff9f43', '#ff6b9d', '#a8edea', '#d299c2'];
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = `${Math.random() * 2}s`;
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
        container.appendChild(confetti);
    }
    
    setTimeout(() => {
        container.innerHTML = '';
    }, 5000);
}

// ==================== 养成系统（PRD 6）====================
// 喂食
function feedPet(petId) {
    const pet = gameState.myPets.find(p => p.uniqueId === petId);
    if (!pet) return;

    const cost = 20;
    if (gameState.resources.coin < cost) {
        showToast('💰 金币不足！');
        return;
    }

    // 检查性格加成
    const isGreedy = pet.personalities.some(p => p.id === 'greedy');
    const feedBonus = isGreedy ? 1.3 : 1;

    gameState.resources.coin -= cost;
    pet.nurtureStats.hunger = Math.min(100, pet.nurtureStats.hunger + 30 * feedBonus);
    pet.nurtureStats.mood = Math.min(100, pet.nurtureStats.mood + 10);

    saveGame();
    updateResourceDisplay();
    showToast(`🍖 喂食成功！饱食度+${Math.floor(30 * feedBonus)}`);
}

// 玩耍
function playWithPet(petId) {
    const pet = gameState.myPets.find(p => p.uniqueId === petId);
    if (!pet) return;

    const cost = 10;
    if (gameState.resources.coin < cost) {
        showToast('💰 金币不足！');
        return;
    }

    // 检查性格加成
    const isClingy = pet.personalities.some(p => p.id === 'clingy');
    const isTough = pet.personalities.some(p => p.id === 'tough');
    const loveBonus = isClingy ? 1.3 : 1;
    const energyCost = isTough ? 5 : 10;

    if (pet.nurtureStats.energy < energyCost) {
        showToast('⚡ 体力不足！');
        return;
    }

    gameState.resources.coin -= cost;
    pet.nurtureStats.love = Math.min(100, pet.nurtureStats.love + 25 * loveBonus);
    pet.nurtureStats.mood = Math.min(100, pet.nurtureStats.mood + 15);
    pet.nurtureStats.energy -= energyCost;

    saveGame();
    updateResourceDisplay();
    showToast(`🎾 玩耍成功！亲密度+${Math.floor(25 * loveBonus)}`);
}

// 训练
function trainPet(petId) {
    const pet = gameState.myPets.find(p => p.uniqueId === petId);
    if (!pet) return;

    const cost = 30;
    if (gameState.resources.coin < cost) {
        showToast('💰 金币不足！');
        return;
    }

    // 检查性格加成
    const isActive = pet.personalities.some(p => p.id === 'active');
    const isTough = pet.personalities.some(p => p.id === 'tough');
    const expBonus = isActive ? 1.2 : 1;
    const energyCost = isTough ? 10 : 20;

    if (pet.nurtureStats.energy < energyCost) {
        showToast('⚡ 体力不足！');
        return;
    }

    gameState.resources.coin -= cost;
    pet.exp += 50 * expBonus;
    pet.nurtureStats.energy -= energyCost;

    // 检查升级
    if (pet.exp >= pet.expMax) {
        levelUpPet(pet);
    }

    // 解锁技能
    if (pet.level >= 2 && pet.skills[1] && !pet.unlockedSkills.includes(pet.skills[1])) {
        pet.unlockedSkills.push(pet.skills[1]);
        showToast(`✨ 解锁新技能：${pet.skills[1]}！`);
    }

    saveGame();
    updateResourceDisplay();
    showToast(`💪 训练成功！经验+${Math.floor(50 * expBonus)}`);
}

// 休息
function restPet(petId) {
    const pet = gameState.myPets.find(p => p.uniqueId === petId);
    if (!pet) return;

    // 检查性格加成
    const isTough = pet.personalities.some(p => p.id === 'tough');
    const energyBonus = isTough ? 60 : 40;

    pet.nurtureStats.energy = Math.min(100, pet.nurtureStats.energy + energyBonus);
    pet.nurtureStats.mood = Math.min(100, pet.nurtureStats.mood + 10);

    saveGame();
    showToast(`😴 休息成功！体力+${energyBonus}`);
}

// 升级
function levelUpPet(pet) {
    pet.level++;
    pet.exp = 0;
    pet.expMax = pet.level * 100;

    // 解锁技能
    const skillIndex = pet.level - 1;
    if (pet.skills[skillIndex] && !pet.unlockedSkills.includes(pet.skills[skillIndex])) {
        pet.unlockedSkills.push(pet.skills[skillIndex]);
        showToast(`✨ 升级！解锁技能：${pet.skills[skillIndex]}`);
    }
}

// ==================== 进化系统（PRD 7）====================
function evolvePet(petId) {
    const pet = gameState.myPets.find(p => p.uniqueId === petId);
    if (!pet) return;

    const evolution = EVOLUTION_CONFIG[pet.id];
    if (!evolution) {
        showToast('❌ 该宠物无法进化！');
        return;
    }

    if (pet.level < evolution.levelReq) {
        showToast(`❌ 需要达到Lv.${evolution.levelReq}才能进化！`);
        return;
    }

    if (pet.nurtureStats.love < evolution.loveReq) {
        showToast(`❌ 亲密度需要达到${evolution.loveReq}才能进化！`);
        return;
    }

    // 执行进化
    const newPetData = DOGS_DATABASE.find(d => d.id === evolution.toId);
    if (newPetData) {
        // 保留性格和部分属性
        const oldPersonalities = pet.personalities;
        const oldNurtureStats = pet.nurtureStats;

        Object.assign(pet, newPetData);
        pet.uniqueId = pet.uniqueId; // 保持唯一ID
        pet.level = 1;
        pet.exp = 0;
        pet.expMax = 100;
        pet.personalities = oldPersonalities;
        pet.nurtureStats = oldNurtureStats;
        pet.skills = SKILL_DATABASE[pet.id] || ['普通技能'];
        pet.unlockedSkills = [pet.skills[0]];

        // 奖励金币
        gameState.resources.coin += 200;
        updateResourceDisplay();

        saveGame();
        showToast(`🌟 进化成功！${evolution.from} → ${evolution.to}！奖励200金币`);
    }
}

// ==================== 探险系统（PRD 9）====================
function goAdventure(locationId) {
    const location = ADVENTURE_LOCATIONS.find(l => l.id === locationId);
    if (!location || !location.unlocked) {
        showToast('❌ 该地点尚未解锁！');
        return;
    }

    const pet = gameState.myPets.find(p => p.uniqueId === gameState.currentPet);
    if (!pet) {
        showToast('❌ 请先选择一只宠物！');
        return;
    }

    // 检查性格加成
    const isTough = pet.personalities.some(p => p.id === 'tough');
    const energyCost = isTough ? location.energyCost * 0.5 : location.energyCost;

    if (pet.nurtureStats.energy < energyCost) {
        showToast('⚡ 体力不足！');
        return;
    }

    // 消耗体力
    pet.nurtureStats.energy -= energyCost;

    // 奖励金币
    gameState.resources.coin += location.coinReward;

    // 稀有奖励
    const rareReward = Math.random() < location.rareChance;
    if (rareReward) {
        const bonusCoin = Math.floor(location.coinReward * 0.5);
        gameState.resources.coin += bonusCoin;
        showToast(`🎉 探险成功！获得${location.coinReward}金币 + 稀有奖励${bonusCoin}金币！`);
    } else {
        showToast(`🗺️ 探险成功！获得${location.coinReward}金币！`);
    }

    // 解锁下一个地点
    const nextLocation = ADVENTURE_LOCATIONS.find(l => l.id === locationId + 1);
    if (nextLocation) {
        nextLocation.unlocked = true;
    }

    gameState.adventureCount++;
    saveGame();
    updateResourceDisplay();
}

// ==================== 收藏功能 ====================
function collectDog() {
    if (!gameState.lastDog) return;

    const dog = gameState.lastDog;

    // 添加到我的宠物列表
    gameState.myPets.push(dog);

    if (!gameState.collection[dog.id]) {
        gameState.collection[dog.id] = {
            id: dog.id,
            name: dog.name,
            obtainedAt: new Date().toISOString()
        };
        saveGame();
        showToast(`💖 ${dog.name} 已加入你的收藏！`);
    } else {
        showToast(`🎉 再次遇到了 ${dog.name}！`);
    }
    
    showCollection();
}

function showCollection() {
    showPage('collection-page');

    const grid = document.getElementById('collection-grid');
    const collectedCountEl = document.getElementById('collected-count');
    const totalCountEl = document.getElementById('total-count');

    if (!grid) return;

    grid.innerHTML = '';

    const collectedCount = Object.keys(gameState.collection).length;
    if (collectedCountEl) collectedCountEl.textContent = collectedCount;
    if (totalCountEl) totalCountEl.textContent = DOGS_DATABASE.length;

    DOGS_DATABASE.forEach(dog => {
        const isUnlocked = gameState.collection[dog.id];
        const item = document.createElement('div');
        item.className = `collection-item ${isUnlocked ? '' : 'locked'}`;

        if (isUnlocked) {
            const rarity = RARITY_CONFIG[dog.rarity];
            // 添加 data-rarity 属性用于样式区分
            item.setAttribute('data-rarity', dog.rarity);
            item.innerHTML = `
                <img src="${dog.image}" alt="${dog.name}" class="collection-image">
                <span class="collection-name">${dog.name}</span>
                <span class="collection-rarity" style="color: ${rarity.color}">${rarity.stars}</span>
            `;
        } else {
            item.innerHTML = `
                <div class="collection-image-placeholder">🔒</div>
                <span class="collection-name">???</span>
                <span class="collection-rarity">未解锁</span>
            `;
        }

        grid.appendChild(item);
    });
}

// ==================== Toast提示 ====================
function showToast(message) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    
    toast.textContent = message;
    toast.classList.remove('hidden');
    
    setTimeout(() => {
        toast.classList.add('hidden');
    }, 3000);
}

// ==================== 更新按钮显示（三池系统）====================
function updateDrawButtonCost() {
    const pool = POOL_CONFIG[gameState.currentPool];
    const singleCostEl = document.getElementById('single-cost');
    const tenCostEl = document.getElementById('ten-cost');

    if (singleCostEl) {
        const icon = pool.currency === 'diamond' ? '💎' : '💙';
        singleCostEl.innerHTML = `<span class="cost-icon">${icon}</span><span>${pool.singleCost}</span>`;
    }

    if (tenCostEl) {
        const icon = pool.currency === 'diamond' ? '💎' : '💙';
        tenCostEl.innerHTML = `<span class="cost-icon">${icon}</span><span>${pool.tenCost}</span>`;
    }
}

// ==================== 更新卡池显示 ====================
function updatePoolDisplay() {
    const pool = POOL_CONFIG[gameState.currentPool];

    // 更新中央显示
    const poolNameEl = document.getElementById('current-pool-name');
    const poolDescEl = document.getElementById('current-pool-desc');
    const poolTipEl = document.getElementById('pool-tip');

    if (poolNameEl) poolNameEl.textContent = pool.name;
    if (poolDescEl) poolDescEl.textContent = pool.description;

    // 更新保底提示
    if (poolTipEl) {
        if (gameState.currentPool === 'friendship') {
            poolTipEl.textContent = '✨ 友情抽取，无保底机制 ✨';
        } else {
            poolTipEl.textContent = '✨ 每10次召唤必得传说 ✨';
        }
    }

    // 更新卡池列表高亮
    document.querySelectorAll('.pool-card').forEach(card => {
        card.classList.remove('active');
        if (card.dataset.pool === gameState.currentPool) {
            card.classList.add('active');
        }
    });

    // 更新按钮消耗显示
    updateDrawButtonCost();

    // 更新保底显示
    const pityDisplay = document.querySelector('.pity-display');
    if (pityDisplay) {
        if (gameState.currentPool === 'friendship') {
            pityDisplay.style.display = 'none';
        } else {
            pityDisplay.style.display = 'flex';
            updatePityDisplay();
        }
    }
}

// ==================== 切换卡池 ====================
function switchPool(poolId) {
    if (!POOL_CONFIG[poolId]) return;

    gameState.currentPool = poolId;
    updatePoolDisplay();
    saveGame();

    const pool = POOL_CONFIG[poolId];
    showToast(`🎲 已切换到${pool.name}`);
}

// ==================== 十连抽逻辑 ====================
function startGachaTen() {
    const dogs = [];
    
    // 执行10次抽卡
    for (let i = 0; i < 10; i++) {
        const dog = drawDog();
        dogs.push(dog);
    }
    
    // 保存所有抽到的狗狗到收藏
    dogs.forEach(dog => {
        if (!gameState.collection[dog.id]) {
            gameState.collection[dog.id] = {
                ...dog,
                obtainedAt: new Date().toISOString()
            };
        }
    });
    saveGame();
    
    // 先切换到十连抽动画页面
    showPage('gacha-ten-page');
    
    // 延迟创建闪光效果，确保页面已切换
    setTimeout(() => {
        createSparkles();
    }, 100);
    
    // 动画结束后显示十连抽结果
    setTimeout(() => {
        showTenDrawResult(dogs);
    }, 2500);
}

// ==================== 登录页面动画 ====================
function initLoginPage() {
    const container = document.getElementById('login-pets-container');
    if (!container) return;

    const petImages = [
        'image/09_husky copy.png',
        'image/01_pomeranian.png',
        'image/03_bichon.png',
        'image/02_samoyed.png',
        'image/04_corgi.png',
        'image/05_shiba.png',
        'image/06_bordercollie.png',
        'image/07_labrador.png',
        'image/08_golden.png',
        'image/09_husky.png',
        'image/10_alaskan.png',
        'image/11_frenchbulldog.png',
        'image/12_poodle.png',
        'image/13_germanshepherd.png',
        'image/14_beagle.png',
        'image/15_sheltie.png'
    ];

    container.innerHTML = '';
    petImages.forEach((src, index) => {
        const div = document.createElement('div');
        div.className = 'login-pet-float';
        div.innerHTML = `<img src="${src}" alt="pet">`;
        container.appendChild(div);
    });
}

// ==================== 事件监听 ====================
document.addEventListener('DOMContentLoaded', () => {
    console.log('页面加载完成，初始化游戏...');

    // 初始化登录页面动画
    initLoginPage();

    // 登录按钮
    const btnLogin = document.getElementById('btn-login');
    if (btnLogin) {
        btnLogin.addEventListener('click', () => {
            const username = document.getElementById('login-username').value.trim();
            if (username) {
                gameState.playerName = username;
                saveGame();
                showPage('home-page');
                showToast(`🎉 欢迎，${username}！`);
            } else {
                showToast('请输入你的名字哦！');
            }
        });
    }

    // 加载游戏数据
    loadGame();
    updateResourceDisplay();
    updatePityDisplay(); // 初始化保底显示
    updatePoolDisplay(); // 初始化卡池显示

    // 资源添加按钮（测试用）
    const addDiamondBtn = document.getElementById('add-diamond');
    const addFriendshipBtn = document.getElementById('add-friendship');
    const addCoinBtn = document.getElementById('add-coin');

    if (addDiamondBtn) {
        addDiamondBtn.addEventListener('click', () => {
            addResource('diamond', 100);
            showToast('💎 +100');
        });
    }

    if (addFriendshipBtn) {
        addFriendshipBtn.addEventListener('click', () => {
            addResource('friendship', 50);
            showToast('💙 +50');
        });
    }

    if (addCoinBtn) {
        addCoinBtn.addEventListener('click', () => {
            addResource('coin', 1000);
            showToast('🪙 +1000');
        });
    }

    // 卡池切换
    document.querySelectorAll('.pool-card').forEach(card => {
        card.addEventListener('click', () => {
            const poolId = card.dataset.pool;
            switchPool(poolId);
        });
    });

    // 单抽按钮（三池系统）
    const singleDrawBtn = document.getElementById('single-draw');
    if (singleDrawBtn) {
        singleDrawBtn.addEventListener('click', () => {
            const pool = POOL_CONFIG[gameState.currentPool];
            const cost = pool.singleCost;
            const currency = pool.currency;
            const currencyName = currency === 'diamond' ? '钻石' : '友情点';

            if (consumeResource(currency, cost)) {
                startGacha();
            } else {
                showToast(`💰 ${currencyName}不足！需要${cost}${currencyName}`);
            }
        });
    }

    // 十连抽按钮（三池系统）
    const tenDrawBtn = document.getElementById('ten-draw');
    if (tenDrawBtn) {
        tenDrawBtn.addEventListener('click', () => {
            const pool = POOL_CONFIG[gameState.currentPool];
            const cost = pool.tenCost;
            const currency = pool.currency;
            const currencyName = currency === 'diamond' ? '钻石' : '友情点';

            if (consumeResource(currency, cost)) {
                startGachaTen();
            } else {
                showToast(`💰 ${currencyName}不足！需要${cost}${currencyName}`);
            }
        });
    }
    
    // 顶部功能按钮
    const btnCollection = document.getElementById('btn-collection');
    const btnSetting = document.getElementById('btn-setting');

    if (btnCollection) {
        btnCollection.addEventListener('click', () => {
            showCollection();
        });
    }

    if (btnSetting) {
        btnSetting.addEventListener('click', () => {
            showToast('⚙️ 设置功能开发中...');
        });
    }

    // 底部导航按钮
    const btnShopBottom = document.getElementById('btn-shop-bottom');
    const btnReward = document.getElementById('btn-reward');
    const btnNurture = document.getElementById('btn-nurture');

    if (btnShopBottom) {
        btnShopBottom.addEventListener('click', () => {
            showPage('shop-page');
        });
    }

    if (btnReward) {
        btnReward.addEventListener('click', () => {
            showPage('quest-page');
        });
    }

    if (btnNurture) {
        btnNurture.addEventListener('click', () => {
            showNurturePage();
        });
    }

    // 右侧功能按钮（详情/技能/进化/探险）
    const btnDetail = document.getElementById('btn-detail');
    const btnSkill = document.getElementById('btn-skill');
    const btnEvolve = document.getElementById('btn-evolve');
    const btnAdventure = document.getElementById('btn-adventure');

    if (btnDetail) {
        btnDetail.addEventListener('click', () => {
            if (gameState.lastDog) {
                showResult(gameState.lastDog);
            } else {
                showToast('📖 请先进行召唤获得宠物！');
            }
        });
    }

    if (btnSkill) {
        btnSkill.addEventListener('click', () => {
            if (gameState.lastDog) {
                showResult(gameState.lastDog);
                setTimeout(() => {
                    const skillsSection = document.querySelector('.skills-section');
                    if (skillsSection) {
                        skillsSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                }, 300);
            } else {
                showToast('⚡ 请先进行召唤获得宠物！');
            }
        });
    }

    if (btnEvolve) {
        btnEvolve.addEventListener('click', () => {
            if (gameState.lastDog) {
                const evolution = EVOLUTION_CONFIG[gameState.lastDog.id];
                if (evolution) {
                    showToast(`🌟 ${evolution.from} 可进化为 ${evolution.to}！（需Lv.${evolution.levelReq}）`);
                } else {
                    showToast('❌ 该宠物无法进化！');
                }
            } else {
                showToast('🌟 请先进行召唤获得宠物！');
            }
        });
    }

    if (btnAdventure) {
        btnAdventure.addEventListener('click', () => {
            showToast('🗺️ 探险功能开发中...');
        });
    }
    
    // 商店购买
    document.querySelectorAll('.shop-buy').forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.dataset.item;
            const cost = parseInt(btn.dataset.cost);
            const currency = btn.dataset.currency;
            
            if (consumeResource(currency, cost)) {
                if (item === 'ticket') {
                    const amount = cost === 900 ? 10 : 1;
                    addResource('ticket', amount);
                    showToast(`🎫 获得召唤券 ×${amount}`);
                } else if (item === 'diamond') {
                    addResource('diamond', 100);
                    showToast(`💎 获得钻石 ×100`);
                }
            } else {
                showToast('💰 资源不足！');
            }
        });
    });
    
    // 任务领取
    document.querySelectorAll('.quest-claim').forEach(btn => {
        btn.addEventListener('click', () => {
            btn.disabled = true;
            btn.textContent = '已领取';
            const questId = btn.dataset.quest;
            if (questId === '1') {
                addResource('ticket', 1);
                showToast('🎫 获得召唤券 ×1');
            } else if (questId === '2') {
                addResource('diamond', 50);
                showToast('💎 获得钻石 ×50');
            } else if (questId === '3') {
                addResource('diamond', 100);
                showToast('💎 获得钻石 ×100');
            }
        });
    });
    
    // 返回按钮
    const backFromGacha = document.getElementById('back-from-gacha');
    const backFromResult = document.getElementById('back-from-result');
    const backFromCollection = document.getElementById('back-from-collection');
    const backFromShop = document.getElementById('back-from-shop');
    const backFromQuest = document.getElementById('back-from-quest');
    const backFromGachaTen = document.getElementById('back-from-gacha-ten');
    const backFromTenResult = document.getElementById('back-from-ten-result');
    const backFromNurture = document.getElementById('back-from-nurture');

    if (backFromGacha) {
        backFromGacha.addEventListener('click', () => {
            showPage('home-page');
        });
    }

    if (backFromResult) {
        backFromResult.addEventListener('click', () => {
            showPage('home-page');
        });
    }

    if (backFromCollection) {
        backFromCollection.addEventListener('click', () => {
            showPage('home-page');
        });
    }

    if (backFromShop) {
        backFromShop.addEventListener('click', () => {
            showPage('home-page');
        });
    }

    if (backFromQuest) {
        backFromQuest.addEventListener('click', () => {
            showPage('home-page');
        });
    }

    if (backFromGachaTen) {
        backFromGachaTen.addEventListener('click', () => {
            showPage('home-page');
        });
    }

    if (backFromTenResult) {
        backFromTenResult.addEventListener('click', () => {
            showPage('home-page');
        });
    }

    if (backFromNurture) {
        backFromNurture.addEventListener('click', () => {
            showPage('home-page');
        });
    }

    // 养成操作按钮
    const btnFeed = document.getElementById('btn-feed');
    const btnPlay = document.getElementById('btn-play');
    const btnTrain = document.getElementById('btn-train');
    const btnRest = document.getElementById('btn-rest');

    if (btnFeed) {
        btnFeed.addEventListener('click', () => {
            if (currentNurturePetId) {
                const beforeCoin = gameState.resources.coin;
                const pet = gameState.myPets.find(p => p.uniqueId === currentNurturePetId);
                const beforeHunger = pet ? pet.nurtureStats.hunger : 0;
                feedPet(currentNurturePetId);
                const afterPet = gameState.myPets.find(p => p.uniqueId === currentNurturePetId);
                if (afterPet) {
                    updateNurtureStats(afterPet);
                    updateEvolutionInfo(afterPet);
                }
            }
        });
    }

    if (btnPlay) {
        btnPlay.addEventListener('click', () => {
            if (currentNurturePetId) {
                playWithPet(currentNurturePetId);
                const afterPet = gameState.myPets.find(p => p.uniqueId === currentNurturePetId);
                if (afterPet) {
                    updateNurtureStats(afterPet);
                    updateEvolutionInfo(afterPet);
                }
            }
        });
    }

    if (btnTrain) {
        btnTrain.addEventListener('click', () => {
            if (currentNurturePetId) {
                trainPet(currentNurturePetId);
                const afterPet = gameState.myPets.find(p => p.uniqueId === currentNurturePetId);
                if (afterPet) {
                    updateNurtureStats(afterPet);
                    updateEvolutionInfo(afterPet);
                }
            }
        });
    }

    if (btnRest) {
        btnRest.addEventListener('click', () => {
            if (currentNurturePetId) {
                restPet(currentNurturePetId);
                const afterPet = gameState.myPets.find(p => p.uniqueId === currentNurturePetId);
                if (afterPet) {
                    updateNurtureStats(afterPet);
                    updateEvolutionInfo(afterPet);
                }
            }
        });
    }
    
    // 再抽一次
    const drawAgainBtn = document.getElementById('draw-again');
    if (drawAgainBtn) {
        drawAgainBtn.addEventListener('click', () => {
            const cost = gameState.drawType === 'ticket' ? 1 : 100;
            const currency = gameState.drawType === 'ticket' ? 'ticket' : 'diamond';

            if (consumeResource(currency, cost)) {
                startGacha();
            } else {
                showToast(`💰 ${gameState.drawType === 'ticket' ? '召唤券' : '钻石'}不足！`);
            }
        });
    }

    // 十连抽 - 再来十连
    const drawAgainTenBtn = document.getElementById('draw-again-ten');
    if (drawAgainTenBtn) {
        drawAgainTenBtn.addEventListener('click', () => {
            const cost = gameState.drawType === 'ticket' ? 10 : 900;
            const currency = gameState.drawType === 'ticket' ? 'ticket' : 'diamond';

            if (consumeResource(currency, cost)) {
                startGachaTen();
            } else {
                showToast(`💰 ${gameState.drawType === 'ticket' ? '召唤券' : '钻石'}不足！`);
            }
        });
    }

    // 十连抽 - 全部收下
    const collectAllTenBtn = document.getElementById('collect-all-ten');
    if (collectAllTenBtn) {
        collectAllTenBtn.addEventListener('click', () => {
            showToast('🎉 所有狗狗已收入囊中！');
            showPage('home-page');
        });
    }

    // 收入囊中
    const collectDogBtn = document.getElementById('collect-dog');
    if (collectDogBtn) {
        collectDogBtn.addEventListener('click', () => {
            collectDog();
        });
    }
    
    // 初始化按钮显示
    updateDrawButtonCost();

    // 宠物预览左右导航
    let previewIndex = 13; // 当前预览的宠物索引（默认比格犬id=14，索引13）
    const totalDogs = DOGS_DATABASE.length;

    function updatePreview(index) {
        const dog = DOGS_DATABASE[index];
        if (!dog) return;

        const previewImage = document.getElementById('preview-image');
        const previewName = document.getElementById('preview-name');
        const previewLevel = document.getElementById('preview-level');
        const previewRarity = document.getElementById('preview-rarity');
        const previewPersonality = document.getElementById('preview-personality');

        if (previewImage) {
            previewImage.src = dog.image;
            previewImage.alt = dog.name;
        }
        if (previewName) previewName.textContent = dog.name;
        if (previewLevel) previewLevel.textContent = 'Lv.1';
        if (previewRarity) {
            const rarityText = dog.rarity === 'legendary' ? 'S级传说' : dog.rarity === 'rare' ? 'A级稀有' : 'B级普通';
            previewRarity.textContent = rarityText;
            previewRarity.style.color = RARITY_CONFIG[dog.rarity].color;
        }
        if (previewPersonality) {
            previewPersonality.innerHTML = `
                <span class="tag">${dog.personality}</span>
            `;
        }
    }

    const prevPetBtn = document.getElementById('prev-pet');
    const nextPetBtn = document.getElementById('next-pet');

    if (prevPetBtn) {
        prevPetBtn.addEventListener('click', () => {
            previewIndex = (previewIndex - 1 + totalDogs) % totalDogs;
            updatePreview(previewIndex);
        });
    }

    if (nextPetBtn) {
        nextPetBtn.addEventListener('click', () => {
            previewIndex = (previewIndex + 1) % totalDogs;
            updatePreview(previewIndex);
        });
    }

    // 金币系统按钮
    const btnCoinSystem = document.getElementById('btn-coin-system');
    if (btnCoinSystem) {
        btnCoinSystem.addEventListener('click', () => {
            showCoinSystemPage();
        });
    }

    const backFromCoin = document.getElementById('back-from-coin');
    if (backFromCoin) {
        backFromCoin.addEventListener('click', () => {
            showPage('home-page');
        });
    }

    // 金币获取按钮
    const btnCheckin = document.getElementById('btn-checkin');
    if (btnCheckin) {
        btnCheckin.addEventListener('click', () => {
            gameState.resources.coin += 100;
            addCoinRecord('🎁 每日签到', 100, 'income');
            updateResourceDisplay();
            updateCoinSystemDisplay();
            saveGame();
            showToast('🎉 签到成功！获得100金币');
        });
    }

    const btnAdventureReward = document.getElementById('btn-adventure-reward');
    if (btnAdventureReward) {
        btnAdventureReward.addEventListener('click', () => {
            showToast('🗺️ 请前往探险页面进行探险');
        });
    }

    const btnTaskReward = document.getElementById('btn-task-reward');
    if (btnTaskReward) {
        btnTaskReward.addEventListener('click', () => {
            showPage('quest-page');
        });
    }

    const btnExchange = document.getElementById('btn-exchange');
    if (btnExchange) {
        btnExchange.addEventListener('click', () => {
            if (gameState.resources.diamond >= 1) {
                gameState.resources.diamond -= 1;
                gameState.resources.coin += 10;
                addCoinRecord('💎 钻石兑换', 10, 'income');
                updateResourceDisplay();
                updateCoinSystemDisplay();
                saveGame();
                showToast('💎 兑换成功！1钻石=10金币');
            } else {
                showToast('💎 钻石不足！');
            }
        });
    }

    // 进化系统按钮
    const btnEvolutionSystem = document.getElementById('btn-evolution-system');
    if (btnEvolutionSystem) {
        btnEvolutionSystem.addEventListener('click', () => {
            showEvolutionPage();
        });
    }

    const backFromEvolution = document.getElementById('back-from-evolution');
    if (backFromEvolution) {
        backFromEvolution.addEventListener('click', () => {
            showPage('home-page');
        });
    }

    const btnDoEvolve = document.getElementById('btn-do-evolve');
    if (btnDoEvolve) {
        btnDoEvolve.addEventListener('click', () => {
            doEvolution();
        });
    }

    // 添加钻石弹窗功能
    const btnAddDiamondInline = document.getElementById('btn-add-diamond-inline');
    const addDiamondModal = document.getElementById('add-diamond-modal');
    const btnCancelDiamond = document.getElementById('btn-cancel-diamond');
    const btnConfirmDiamond = document.getElementById('btn-confirm-diamond');
    const diamondAmountInput = document.getElementById('diamond-amount');
    const presetBtns = document.querySelectorAll('.preset-btn');

    // 打开弹窗
    if (btnAddDiamondInline && addDiamondModal) {
        btnAddDiamondInline.addEventListener('click', () => {
            addDiamondModal.classList.remove('hidden');
            if (diamondAmountInput) diamondAmountInput.value = '100';
        });
    }

    // 关闭弹窗
    if (btnCancelDiamond && addDiamondModal) {
        btnCancelDiamond.addEventListener('click', () => {
            addDiamondModal.classList.add('hidden');
        });
    }

    // 点击弹窗外部关闭
    if (addDiamondModal) {
        addDiamondModal.addEventListener('click', (e) => {
            if (e.target === addDiamondModal) {
                addDiamondModal.classList.add('hidden');
            }
        });
    }

    // 预设按钮
    presetBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const amount = btn.dataset.amount;
            if (diamondAmountInput) diamondAmountInput.value = amount;
            // 移除其他按钮的active状态
            presetBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    // 确认添加钻石
    if (btnConfirmDiamond && diamondAmountInput) {
        btnConfirmDiamond.addEventListener('click', () => {
            const amount = parseInt(diamondAmountInput.value) || 0;
            if (amount > 0 && amount <= 99999) {
                gameState.resources.diamond += amount;
                updateResourceDisplay();
                saveGame();
                showToast(`💎 成功添加 ${amount} 钻石！`);
                addDiamondModal.classList.add('hidden');
            } else {
                showToast('请输入有效的钻石数量（1-99999）');
            }
        });
    }

    console.log('游戏初始化完成！');
});

// ==================== 养成页面 ====================
let currentNurturePetId = null;

function showNurturePage() {
    showPage('nurture-page');
    renderNurturePetSelector();
}

function renderNurturePetSelector() {
    const selector = document.getElementById('nurture-pet-selector');
    const panel = document.getElementById('nurture-panel');

    if (!selector) return;

    if (gameState.myPets.length === 0) {
        selector.innerHTML = '<p class="empty-tip">暂无宠物，请先进行召唤！</p>';
        if (panel) panel.style.display = 'none';
        return;
    }

    selector.innerHTML = '';
    gameState.myPets.forEach((pet, index) => {
        const option = document.createElement('div');
        option.className = 'nurture-pet-option' + (index === 0 ? ' active' : '');
        option.innerHTML = `
            <img src="${pet.image}" alt="${pet.name}">
            <span>${pet.name}</span>
        `;
        option.addEventListener('click', () => {
            document.querySelectorAll('.nurture-pet-option').forEach(el => el.classList.remove('active'));
            option.classList.add('active');
            selectNurturePet(pet.uniqueId);
        });
        selector.appendChild(option);
    });

    if (panel) panel.style.display = 'flex';
    selectNurturePet(gameState.myPets[0].uniqueId);
}

function selectNurturePet(petId) {
    currentNurturePetId = petId;
    const pet = gameState.myPets.find(p => p.uniqueId === petId);
    if (!pet) return;

    const image = document.getElementById('nurture-pet-image');
    const name = document.getElementById('nurture-pet-name');
    const level = document.getElementById('nurture-pet-level');
    const personality = document.getElementById('nurture-pet-personality');

    if (image) { image.src = pet.image; image.alt = pet.name; }
    if (name) name.textContent = pet.name;
    if (level) level.textContent = `Lv.${pet.level}`;
    if (personality) {
        personality.innerHTML = pet.personalities.map(p =>
            `<span class="personality-tag">${p.icon} ${p.name}</span>`
        ).join('');
    }

    updateNurtureStats(pet);
    updateEvolutionInfo(pet);
}

function updateNurtureStats(pet) {
    const stats = pet.nurtureStats;

    const hungerBar = document.getElementById('nurture-hunger-bar');
    const hungerValue = document.getElementById('nurture-hunger-value');
    if (hungerBar) hungerBar.style.width = `${stats.hunger}%`;
    if (hungerValue) hungerValue.textContent = Math.floor(stats.hunger);

    const moodBar = document.getElementById('nurture-mood-bar');
    const moodValue = document.getElementById('nurture-mood-value');
    if (moodBar) moodBar.style.width = `${stats.mood}%`;
    if (moodValue) moodValue.textContent = Math.floor(stats.mood);

    const energyBar = document.getElementById('nurture-energy-bar');
    const energyValue = document.getElementById('nurture-energy-value');
    if (energyBar) energyBar.style.width = `${stats.energy}%`;
    if (energyValue) energyValue.textContent = Math.floor(stats.energy);

    const loveBar = document.getElementById('nurture-love-bar');
    const loveValue = document.getElementById('nurture-love-value');
    if (loveBar) loveBar.style.width = `${stats.love}%`;
    if (loveValue) loveValue.textContent = Math.floor(stats.love);

    const expBar = document.getElementById('nurture-exp-bar');
    const expValue = document.getElementById('nurture-exp-value');
    if (expBar) expBar.style.width = `${(pet.exp / pet.expMax) * 100}%`;
    if (expValue) expValue.textContent = `${Math.floor(pet.exp)} / ${pet.expMax}`;
}

function updateEvolutionInfo(pet) {
    const info = document.getElementById('evolution-info');
    if (!info) return;

    const evolution = EVOLUTION_CONFIG[pet.id];
    if (evolution) {
        const canEvolve = pet.level >= evolution.levelReq && pet.nurtureStats.love >= evolution.loveReq;
        info.innerHTML = `
            <strong>🌟 进化路线</strong><br>
            ${evolution.from} → ${evolution.to}<br>
            需要：Lv.${evolution.levelReq} + 亲密度${evolution.loveReq}<br>
            <span style="color: ${canEvolve ? '#00b894' : '#ff6b6b'}; font-weight: 700;">
                ${canEvolve ? '✅ 满足进化条件！' : '❌ 条件未满足'}
            </span>
        `;
    } else {
        info.innerHTML = '<strong>🌟 进化路线</strong><br>该宠物已达到最终形态，无法继续进化。';
    }
}

// ==================== 金币系统 ====================
let coinRecords = [];

function showCoinSystemPage() {
    showPage('coin-system-page');
    updateCoinSystemDisplay();
}

function updateCoinSystemDisplay() {
    const balanceValue = document.getElementById('coin-balance-value');
    const incomeValue = document.getElementById('coin-income-value');
    const expenseValue = document.getElementById('coin-expense-value');
    const recordsList = document.getElementById('coin-records-list');

    if (balanceValue) balanceValue.textContent = gameState.resources.coin.toLocaleString();

    // 计算今日收入和支出
    const today = new Date().toDateString();
    const todayRecords = coinRecords.filter(r => new Date(r.time).toDateString() === today);
    const income = todayRecords.filter(r => r.type === 'income').reduce((sum, r) => sum + r.amount, 0);
    const expense = todayRecords.filter(r => r.type === 'expense').reduce((sum, r) => sum + r.amount, 0);

    if (incomeValue) incomeValue.textContent = `+${income}`;
    if (expenseValue) expenseValue.textContent = `-${expense}`;

    // 渲染消费记录
    if (recordsList) {
        recordsList.innerHTML = '';
        const recentRecords = coinRecords.slice(-10).reverse();
        recentRecords.forEach(record => {
            const item = document.createElement('div');
            item.className = 'record-item';
            item.innerHTML = `
                <span class="record-type">${record.name}</span>
                <span class="record-amount ${record.type}">${record.type === 'income' ? '+' : '-'}${record.amount}🪙</span>
                <span class="record-time">${new Date(record.time).toLocaleTimeString()}</span>
            `;
            recordsList.appendChild(item);
        });
    }
}

function addCoinRecord(name, amount, type) {
    coinRecords.push({
        name,
        amount,
        type,
        time: new Date().toISOString()
    });
    // 只保留最近50条记录
    if (coinRecords.length > 50) coinRecords.shift();
}

// ==================== 进化系统 ====================
let currentEvolutionPetId = null;

function showEvolutionPage() {
    showPage('evolution-page');
    renderEvolutionPetSelector();
}

function renderEvolutionPetSelector() {
    const selector = document.getElementById('evolution-pet-selector');
    const display = document.getElementById('evolution-display');

    if (!selector) return;

    // 筛选可进化的宠物
    const evolvablePets = gameState.myPets.filter(pet => EVOLUTION_CONFIG[pet.id]);

    if (evolvablePets.length === 0) {
        selector.innerHTML = '<p class="empty-tip">暂无可进化的宠物</p>';
        if (display) display.style.display = 'none';
        return;
    }

    selector.innerHTML = '';
    evolvablePets.forEach((pet, index) => {
        const option = document.createElement('div');
        option.className = 'nurture-pet-option' + (index === 0 ? ' active' : '');
        option.innerHTML = `
            <img src="${pet.image}" alt="${pet.name}">
            <span>${pet.name}</span>
        `;
        option.addEventListener('click', () => {
            document.querySelectorAll('.nurture-pet-option').forEach(el => el.classList.remove('active'));
            option.classList.add('active');
            selectEvolutionPet(pet.uniqueId);
        });
        selector.appendChild(option);
    });

    if (display) display.style.display = 'flex';
    selectEvolutionPet(evolvablePets[0].uniqueId);
}

function selectEvolutionPet(petId) {
    currentEvolutionPetId = petId;
    const pet = gameState.myPets.find(p => p.uniqueId === petId);
    if (!pet) return;

    const evolution = EVOLUTION_CONFIG[pet.id];
    if (!evolution) return;

    const targetPet = DOGS_DATABASE.find(d => d.id === evolution.toId);
    if (!targetPet) return;

    // 更新进化前后对比
    const beforeImage = document.getElementById('evo-before-image');
    const beforeName = document.getElementById('evo-before-name');
    const beforeLevel = document.getElementById('evo-before-level');
    const afterImage = document.getElementById('evo-after-image');
    const afterName = document.getElementById('evo-after-name');
    const afterLevel = document.getElementById('evo-after-level');
    const afterCard = document.getElementById('evo-after-card');
    const requirement = document.getElementById('evo-requirement');

    if (beforeImage) { beforeImage.src = pet.image; beforeImage.alt = pet.name; }
    if (beforeName) beforeName.textContent = pet.name;
    if (beforeLevel) beforeLevel.textContent = `Lv.${pet.level}`;
    if (afterImage) { afterImage.src = targetPet.image; afterImage.alt = targetPet.name; }
    if (afterName) afterName.textContent = targetPet.name;
    if (afterLevel) afterLevel.textContent = `Lv.1`;
    if (requirement) requirement.textContent = `需要 Lv.${evolution.levelReq} + 亲密度${evolution.loveReq}`;

    // 检查进化条件
    const canEvolve = pet.level >= evolution.levelReq && pet.nurtureStats.love >= evolution.loveReq;
    if (afterCard) {
        afterCard.className = canEvolve ? 'evolution-pet-card' : 'evolution-pet-card locked';
    }

    // 更新条件列表
    const levelValue = document.getElementById('condition-level-value');
    const levelStatus = document.getElementById('condition-level-status');
    const loveValue = document.getElementById('condition-love-value');
    const loveStatus = document.getElementById('condition-love-status');

    if (levelValue) levelValue.textContent = `Lv.${evolution.levelReq} / Lv.${pet.level}`;
    if (levelStatus) levelStatus.textContent = pet.level >= evolution.levelReq ? '✅' : '❌';
    if (loveValue) loveValue.textContent = `${evolution.loveReq} / ${Math.floor(pet.nurtureStats.love)}`;
    if (loveStatus) loveStatus.textContent = pet.nurtureStats.love >= evolution.loveReq ? '✅' : '❌';

    // 更新属性对比
    const stats = ['cute', 'active', 'loyal', 'smart'];
    const statNames = { cute: '可爱', active: '活跃', loyal: '忠诚', smart: '聪明' };

    stats.forEach(stat => {
        const beforeEl = document.getElementById(`stat-${stat}-before`);
        const afterEl = document.getElementById(`stat-${stat}-after`);
        const bonusEl = document.querySelector(`#stat-${stat}-after + .stat-bonus`);

        const beforeVal = pet.stats[stat];
        const afterVal = targetPet.stats[stat];
        const bonus = afterVal - beforeVal;

        if (beforeEl) beforeEl.textContent = beforeVal;
        if (afterEl) afterEl.textContent = afterVal;
        if (bonusEl) bonusEl.textContent = `+${bonus}`;
    });

    // 更新进化按钮状态
    const evolveBtn = document.getElementById('btn-do-evolve');
    if (evolveBtn) {
        evolveBtn.disabled = !canEvolve;
        evolveBtn.innerHTML = canEvolve
            ? '<span class="evolve-icon">✨</span><span class="evolve-text">开始进化</span>'
            : '<span class="evolve-icon">🔒</span><span class="evolve-text">条件未满足</span>';
    }
}

function doEvolution() {
    if (!currentEvolutionPetId) return;

    const pet = gameState.myPets.find(p => p.uniqueId === currentEvolutionPetId);
    if (!pet) return;

    const evolution = EVOLUTION_CONFIG[pet.id];
    if (!evolution) return;

    // 检查条件
    if (pet.level < evolution.levelReq || pet.nurtureStats.love < evolution.loveReq) {
        showToast('❌ 进化条件未满足！');
        return;
    }

    // 执行进化
    const newPetData = DOGS_DATABASE.find(d => d.id === evolution.toId);
    if (newPetData) {
        // 保留性格和部分属性
        const oldPersonalities = pet.personalities;
        const oldNurtureStats = pet.nurtureStats;

        Object.assign(pet, newPetData);
        pet.uniqueId = currentEvolutionPetId;
        pet.level = 1;
        pet.exp = 0;
        pet.expMax = 100;
        pet.personalities = oldPersonalities;
        pet.nurtureStats = oldNurtureStats;
        pet.skills = SKILL_DATABASE[pet.id] || ['普通技能'];
        pet.unlockedSkills = [pet.skills[0]];

        // 奖励金币
        gameState.resources.coin += 200;
        addCoinRecord('🌟 进化奖励', 200, 'income');
        updateResourceDisplay();
        updateCoinSystemDisplay();

        saveGame();
        showToast(`🎉 进化成功！${evolution.from} → ${evolution.to}！`);

        // 刷新显示
        selectEvolutionPet(currentEvolutionPetId);
    }
}

// 防止意外刷新丢失数据
window.addEventListener('beforeunload', () => {
    saveGame();
});
