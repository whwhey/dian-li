# Dian Li (炫酷奥特曼) 的个人主页

欢迎来到 Dian Li 的个人网站！这是一个展示社交媒体内容和粉丝互动的创意网站。

## 关于

我是 Dian Li，网名"炫酷奥特曼"，今年21岁，生活在北京。我的座右铭是"相信光"，因为我从小就是奥特曼的粉丝。目前我在抖音上有4,357位粉丝，获得了8.0万个赞。

## 功能特性

- 🎬 视频展示 - 展示我的抖音作品
- 📊 数据统计 - 粉丝、获赞、播放量数据
- ✨ 奥特曼主题 - 光效动画和红色蓝色主题
- 🎯 精彩瞬间 - 最受欢迎的视频排行
- 📱 社交媒体链接 - 多平台直达
- 🌙 深色主题 - 宇宙空间风格

## 技术栈

- HTML5
- CSS3 (含光效动画和响应式设计)
- JavaScript (ES6+)
- 无需构建工具，开箱即用

## 本地预览

1. 克隆或下载此项目
2. 在浏览器中打开 `index.html`
3. 或使用本地服务器：
   ```bash
   # 使用 Python
   python -m http.server 8000

   # 使用 Node.js (需要安装 http-server)
   npx http-server
   ```
4. 在浏览器中访问 `http://localhost:8000`

## 项目结构

```
dian-li/
├── index.html          # 主页
├── css/                # 样式文件
│   ├── main.css
│   ├── modules.css
│   └── responsive.css
├── js/                 # JavaScript 文件
│   ├── main.js
│   └── video-player.js
├── data/               # 数据文件
│   ├── videos.json
│   └── stats.json
├── assets/             # 静态资源
│   └── images/
└── README.md           # 说明文档
```

## 内容管理

### 添加视频

编辑 `data/videos.json` 文件，添加新的视频：

```json
{
  "id": 1,
  "title": "视频标题",
  "slug": "video-slug",
  "description": "视频描述",
  "thumbnail": "🎬",
  "category": "ultraman",
  "duration": 45,
  "views": 25000,
  "likes": 3456,
  "comments": 234,
  "date": "2024-03-26",
  "featured": true
}
```

### 更新统计数据

编辑 `data/stats.json` 文件，更新社交媒体数据。

## 主题定制

### 修改配色方案

编辑 `css/main.css` 文件中的 CSS 变量：

```css
:root {
    --theme-red: #ef4444;      /* 奥特曼红 */
    --theme-blue: #3b82f6;     /* 奥特曼蓝 */
    --theme-yellow: #fbbf24;   /* 能量黄 */
    --theme-cyan: #06b6d4;     /* 光束青 */
    /* ... 更多变量 */
}
```

### 修改个人信息

在各个 HTML 文件中搜索并替换以下内容：
- 姓名：Dian Li
- 用户名：炫酷奥特曼
- 年龄：21岁
- 位置：北京
- 社交媒体链接

## GitHub Pages 部署

### 步骤一：创建 GitHub 仓库

1. 在 GitHub 上创建新仓库 `dian-li`
2. 设置仓库为 Public
3. 进入仓库的 Settings → Pages
4. 在 Source 下选择 "Deploy from a branch"
5. 选择 "Branch: main" 和 "Folder: / (root)"
6. 点击 Save

### 步骤二：上传代码

```bash
# 初始化 Git
git init
git add .
git commit -m "Initial commit: Dian Li's personal website"

# 添加远程仓库
git remote add origin https://github.com/yourusername/dian-li.git

# 推送到 GitHub
git branch -M main
git push -u origin main
```

等待几分钟，你的网站就会在 `https://yourusername.github.io/dian-li/` 上线。

### 自定义域名（可选）

1. 在根目录创建 `CNAME` 文件
2. 添加你的域名：`yourdomain.com`
3. 在域名提供商处配置 DNS

## 浏览器支持

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)
- 移动浏览器

## 特效说明

- **光束动画**：背景中流动的光束效果
- **粒子效果**：漂浮的光点粒子
- **悬停特效**：卡片悬停时的光效和动画
- **滚动进度**：页面顶部的进度条

## 社交媒体

- 🎵 **抖音**：@炫酷奥特曼 (https://v.douyin.com/pHlvbSip16g/)
- 📱 **微博**：即将上线
- 📺 **B站**：即将上线

## 许可证

MIT License

## 联系方式

- 抖音：@炫酷奥特曼
- 邮箱：business@dianli.com (商务合作)

---

**相信光，照亮前行的路！** ✨
