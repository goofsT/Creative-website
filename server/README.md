# 静态资源服务器

这是一个简单的Node.js服务器，用于部署Vue应用构建后的dist目录内容。

## 功能

- 提供静态资源服务
- 支持HTML5 History模式路由
- 启用Gzip压缩，提高加载速度
- 支持自定义端口
- **图片优化功能**：
  - 支持图片动态调整大小和格式
  - 支持图片预处理，提前生成不同尺寸的版本
  - 支持WebP格式自动转换
  - 通过URL参数控制图片大小和质量

## 使用方法

### 安装依赖

```bash
cd server
npm install
```

### 启动服务器

```bash
npm start
```

服务器默认会在 http://localhost:3000 启动，并提供 `../dist` 目录下的静态资源。

### 图片优化

#### 预处理图片（推荐）

在首次部署时，可以预先处理所有图片，生成不同尺寸和格式的缓存版本：

```bash
npm run optimize-images
```

#### 动态调整图片

可以通过URL参数动态调整图片大小、质量和格式：

```
# 调整宽度为500像素
/assets/images/example.jpg?width=500

# 转换为WebP格式，质量设为80
/assets/images/example.jpg?format=webp&quality=80

# 同时调整大小和转换格式
/assets/images/example.jpg?width=800&format=webp&quality=85
```

### 开发模式

使用nodemon启动服务器，支持代码修改自动重启：

```bash
npm run dev
```

### 自定义端口

通过环境变量设置自定义端口：

```bash
PORT=8080 npm start
```

## 部署

在生产环境中部署时，使用deploy脚本可以一步完成构建、图片优化和启动服务：

```bash
# 在项目根目录下
npm run deploy
```

或者分步操作：

```bash
# 在项目根目录下
npm run build  # 构建前端项目，生成dist目录
cd server
npm install    # 安装依赖
npm run optimize-images  # 预处理图片资源
npm start      # 启动服务器提供dist目录内容
``` 