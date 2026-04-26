# 部署指南 - Vercel + Supabase

## 一、Vercel 部署步骤

### 方式1：通过 GitHub 部署（推荐）

1. **创建 GitHub 仓库**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/pet-gacha.git
   git push -u origin main
   ```

2. **在 Vercel 中导入项目**
   - 访问 https://vercel.com
   - 点击 "Add New Project"
   - 选择 "Import Git Repository"
   - 选择你的 GitHub 仓库
   - Framework Preset: 选择 "Other"
   - 点击 Deploy

### 方式2：直接上传部署

1. **压缩项目文件**
   ```
   将项目文件夹压缩为 zip 文件
   ```

2. **在 Vercel 中上传**
   - 访问 https://vercel.com
   - 点击 "Add New Project"
   - 选择 "Upload"
   - 拖拽或选择 zip 文件上传
   - 点击 Deploy

---

## 二、Supabase 数据库配置

### 1. 创建 Supabase 项目

1. 访问 https://supabase.com
2. 注册/登录账号
3. 点击 "New Project"
4. 填写项目名称和密码
5. 等待项目创建完成（约1-2分钟）

### 2. 获取连接信息

1. 进入项目 Dashboard
2. 点击左侧 "Settings" → "API"
3. 复制以下信息：
   - **URL**: `https://xxxxxx.supabase.co`
   - **anon public**: `eyJhbG...` (以 eyJ 开头的长字符串)

### 3. 创建数据库表

1. 点击左侧 "SQL Editor"
2. 新建查询
3. 复制 `supabase-setup.sql` 文件中的全部内容
4. 点击 "Run" 执行

### 4. 配置环境变量

在 Vercel 项目设置中添加环境变量：

```
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your-anon-key-here
```

**设置路径：**
- Vercel Dashboard → 你的项目 → Settings → Environment Variables

### 5. 更新前端配置

修改 `supabase.js` 文件中的配置：

```javascript
const SUPABASE_URL = 'https://your-actual-project.supabase.co';
const SUPABASE_ANON_KEY = 'your-actual-anon-key';
```

---

## 三、部署后验证

### 1. 检查网站是否可访问
- 访问 Vercel 提供的域名（如 `https://pet-gacha.vercel.app`）
- 确认登录页面正常显示

### 2. 测试数据库连接
- 登录游戏
- 进行一些操作（抽卡、养成等）
- 在 Supabase Dashboard → Table Editor 中查看数据是否同步

### 3. 检查功能完整性
- [ ] 登录功能正常
- [ ] 抽卡功能正常
- [ ] 养成系统正常
- [ ] 金币系统正常
- [ ] 进化系统正常
- [ ] 数据保存和读取正常

---

## 四、常见问题

### Q1: 部署后样式丢失？
**A:** 检查 `vercel.json` 配置是否正确，确保静态资源路径正确。

### Q2: Supabase 连接失败？
**A:** 
1. 检查 URL 和 ANON_KEY 是否正确
2. 确认 Supabase 项目已启动（未暂停）
3. 检查 RLS 策略是否配置正确

### Q3: 数据没有保存到云端？
**A:** 
1. 检查浏览器控制台是否有错误
2. 确认 `supabase.js` 中的配置已更新
3. 检查网络连接

### Q4: 如何备份数据？
**A:** 
1. 在 Supabase Dashboard → Database → Backups 中可导出
2. 或使用项目中的导出功能

---

## 五、技术栈

- **前端**: HTML5 + CSS3 + Vanilla JavaScript
- **部署**: Vercel (静态托管)
- **数据库**: Supabase (PostgreSQL)
- **认证**: Supabase Auth (可选)

---

## 六、文件说明

```
pet-gacha/
├── index.html          # 主页面
├── style.css           # 样式文件
├── script.js           # 游戏逻辑
├── supabase.js         # Supabase 数据库操作
├── supabase-setup.sql  # 数据库表结构
├── vercel.json         # Vercel 配置
├── package.json        # 项目配置
├── .env.example        # 环境变量示例
└── DEPLOY.md           # 本部署指南
```

---

## 七、联系方式

如有问题，请查看：
- Vercel 文档: https://vercel.com/docs
- Supabase 文档: https://supabase.com/docs
