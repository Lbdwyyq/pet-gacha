# 毛绒伙伴 - 宠物抽卡游戏

一个可爱的宠物抽卡游戏，玩家可以通过抽卡获得各种萌宠，并进行养成、进化等玩法。

## 功能特点

- 🎮 多种卡池：限定UP、常驻、友情、金币
- 🐾 丰富的宠物种类和稀有度
- 🌟 宠物养成系统（喂食、玩耍、训练）
- 🔥 宠物进化系统
- 💰 金币系统和任务系统
- 📱 响应式设计，支持移动端

## 技术栈

- HTML5 + CSS3 + JavaScript
- Tailwind CSS（内联）
- Supabase（可选，用于云端数据存储）

## 本地运行

1. 克隆项目到本地
2. 打开 `index.html` 文件即可运行
3. 或使用静态文件服务器：`npx serve .`

## 部署

项目已配置为可直接部署到 Netlify、Vercel 等静态网站托管服务。

### Netlify 部署

1. 登录 Netlify 账号
2. 点击 "Add new site" -> "Import an existing project"
3. 连接你的 Git 仓库
4. 配置构建命令：`echo 'Static site - no build needed'`
5. 配置发布目录：`.`
6. 点击 "Deploy site"

### 环境变量（可选）

如果要使用 Supabase 云存储功能，需要在部署平台设置以下环境变量：

- `SUPABASE_URL` - Supabase 项目 URL
- `SUPABASE_ANON_KEY` - Supabase 匿名密钥

## 游戏玩法

1. **登录**：输入名字开始游戏
2. **抽卡**：使用钻石或其他资源进行宠物召唤
3. **养成**：通过喂食、玩耍、训练提升宠物属性
4. **进化**：当宠物达到一定条件后可以进化
5. **任务**：完成每日任务获取奖励
6. **商店**：购买各种游戏道具

## 项目结构

- `index.html` - 主游戏页面
- `style.css` - 游戏样式
- `script.js` - 游戏逻辑
- `supabase.js` - Supabase 数据库集成
- `image/` - 宠物图片和游戏资源

## 注意事项

- 游戏默认使用本地存储保存数据
- 如需使用 Supabase 云存储，请在 `supabase.js` 中配置你的 Supabase 项目信息
- 游戏数据可以导出为 JSON 文件进行备份
