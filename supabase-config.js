// Supabase 配置文件
// 部署前请将此文件中的占位符替换为实际的 Supabase 配置

const SUPABASE_CONFIG = {
    // 从 Vercel 环境变量读取，或在此处硬编码
    URL: 'YOUR_SUPABASE_URL',
    ANON_KEY: 'YOUR_SUPABASE_ANON_KEY'
};

// 导出配置
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SUPABASE_CONFIG;
}
