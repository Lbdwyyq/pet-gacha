-- Supabase 数据库表结构设置
-- 在Supabase SQL编辑器中执行以下代码

-- 创建游戏存档表
CREATE TABLE IF NOT EXISTS game_saves (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id TEXT UNIQUE NOT NULL,
    player_name TEXT,
    game_data JSONB NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- 创建索引
CREATE INDEX IF NOT EXISTS idx_game_saves_user_id ON game_saves(user_id);
CREATE INDEX IF NOT EXISTS idx_game_saves_updated_at ON game_saves(updated_at);

-- 设置行级安全策略 (RLS)
ALTER TABLE game_saves ENABLE ROW LEVEL SECURITY;

-- 允许用户读取自己的数据
CREATE POLICY "允许用户读取自己的存档"
    ON game_saves FOR SELECT
    USING (auth.uid()::text = user_id);

-- 允许用户插入自己的数据
CREATE POLICY "允许用户创建自己的存档"
    ON game_saves FOR INSERT
    WITH CHECK (auth.uid()::text = user_id);

-- 允许用户更新自己的数据
CREATE POLICY "允许用户更新自己的存档"
    ON game_saves FOR UPDATE
    USING (auth.uid()::text = user_id);

-- 创建更新时间触发器
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = timezone('utc'::text, now());
    RETURN NEW;
END;
$$ language 'plpgsql';

DROP TRIGGER IF EXISTS update_game_saves_updated_at ON game_saves;
CREATE TRIGGER update_game_saves_updated_at
    BEFORE UPDATE ON game_saves
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- 创建用户统计表
CREATE TABLE IF NOT EXISTS user_stats (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id TEXT UNIQUE NOT NULL,
    total_gacha_count INTEGER DEFAULT 0,
    legendary_count INTEGER DEFAULT 0,
    rare_count INTEGER DEFAULT 0,
    common_count INTEGER DEFAULT 0,
    total_coins_earned INTEGER DEFAULT 0,
    total_coins_spent INTEGER DEFAULT 0,
    last_login TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- 设置用户统计表的RLS
ALTER TABLE user_stats ENABLE ROW LEVEL SECURITY;

CREATE POLICY "允许用户读取自己的统计"
    ON user_stats FOR SELECT
    USING (auth.uid()::text = user_id);

CREATE POLICY "允许用户更新自己的统计"
    ON user_stats FOR UPDATE
    USING (auth.uid()::text = user_id);

-- 创建全局统计视图
CREATE OR REPLACE VIEW global_stats AS
SELECT
    COUNT(DISTINCT user_id) as total_players,
    SUM((game_data->>'totalGachaCount')::int) as total_gacha_count,
    SUM((game_data->'resources'->>'coin')::int) as total_coins_in_circulation
FROM game_saves;

-- 创建宠物收集排行榜视图
CREATE OR REPLACE VIEW pet_collection_leaderboard AS
SELECT
    user_id,
    player_name,
    jsonb_array_length(game_data->'myPets') as pet_count,
    (game_data->'resources'->>'coin')::int as coin_count,
    updated_at
FROM game_saves
ORDER BY pet_count DESC, coin_count DESC;
