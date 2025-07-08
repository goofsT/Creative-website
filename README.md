# 创意设计网站

这是一个基于Vue 3和Vite的创意设计网站，灵感来源于Syd Mead的官方网站。

## 功能特点

- 响应式设计，适配各种屏幕尺寸
- 平滑的页面过渡动画
- 基于GSAP的滚动动画效果
- 作品展示和筛选功能
- 互动式时间线
- 联系表单

## 技术栈

- Vue 3 (组合式API)
- Vite
- Vue Router
- GSAP (动画库)
- SCSS (样式预处理器)

## 项目结构

```
├── public/             # 静态资源
├── src/                # 源代码
│   ├── components/     # 组件
│   ├── router/         # 路由配置
│   ├── styles/         # 全局样式
│   ├── views/          # 页面组件
│   ├── App.vue         # 根组件
│   └── main.js         # 入口文件
├── index.html          # HTML模板
├── vite.config.js      # Vite配置
└── package.json        # 项目依赖
```

## 安装与运行

1. 克隆项目

```bash
git clone https://github.com/yourusername/creative-design-website.git
cd creative-design-website
```

2. 安装依赖

```bash
npm install
```

3. 开发模式运行

```bash
npm run dev
```

4. 构建生产版本

```bash
npm run build
```

## 页面说明

- **首页**: 展示创意工作室的概览和最新公告
- **关于**: 介绍工作室的理念、方法和团队成员
- **作品**: 展示工作室的项目作品，可按类别筛选
- **时间线**: 展示工作室的发展历程
- **联系**: 联系表单和联系信息

## 自定义配置

### 颜色主题

可在 `src/styles/main.scss` 文件中修改颜色变量：

```scss
:root {
  --color-bg: #000000;
  --color-text: #ffffff;
  --color-accent: #9c7b2e;
  --color-secondary: #333333;
}
```

### 添加新页面

1. 在 `src/views/` 目录下创建新的页面组件
2. 在 `src/router/index.js` 中添加路由配置
3. 在 `src/components/Header.vue` 中添加导航链接

## 注意事项

- 需要添加实际的图片到 `public/images/` 目录
- 联系表单需要配置后端API进行实际提交
- 地图功能需要集成地图API (如Google Maps或百度地图)

## 许可

MIT 