const express = require('express');
const path = require('path');
const history = require('connect-history-api-fallback');
const compression = require('compression');
const fs = require('fs');
const imageOptimizer = require('./imageOptimizer');

const app = express();
const PORT = process.env.PORT || 3000;

// 启用gzip压缩，提高传输速度
app.use(compression({
  level: 6, // 压缩级别 (0-9)，默认为6，更高的值压缩率更好但CPU使用率更高
  threshold: 1024, // 只压缩大于1KB的资源
  filter: (req, res) => {
    // 不压缩已经压缩的资源
    const contentType = res.getHeader('Content-Type') || '';
    if (/^image\//.test(contentType) && 
        !/(\.webp|\.jpg|\.jpeg|\.png|\.gif)$/i.test(req.url)) {
      return false;
    }
    return compression.filter(req, res);
  }
}));

// 静态资源缓存中间件
const cacheTime = {
  images: 86400 * 7, // 图片缓存7天
  static: 86400 * 3, // 其他静态资源缓存3天
  html: 0 // HTML不缓存
};

// 图片优化中间件 (在history中间件之前)
app.use(imageOptimizer({
  cacheDir: path.join(__dirname, 'cache'),
  maxAge: cacheTime.images
}));

// 自定义静态资源中间件
app.use((req, res, next) => {
  const staticFilePath = path.join(__dirname, '../dist', req.path);
  
  // 检测文件是否存在
  if (fs.existsSync(staticFilePath) && fs.statSync(staticFilePath).isFile()) {
    // 根据文件类型设置不同的缓存策略
    if (/\.(jpg|jpeg|png|gif|webp|ico|svg)$/i.test(req.path)) {
      // 图片资源
      res.setHeader('Cache-Control', `public, max-age=${cacheTime.images}`);
    } else if (/\.(js|css|woff|woff2|ttf|eot)$/i.test(req.path)) {
      // 其他静态资源
      res.setHeader('Cache-Control', `public, max-age=${cacheTime.static}`);
    } else if (/\.html$/i.test(req.path)) {
      // HTML文件
      res.setHeader('Cache-Control', 'no-cache');
    }
  }
  next();
});

// 处理HTML5 History模式的路由
app.use(history());

// 静态资源服务
const staticOptions = {
  etag: true, // 启用ETag
  lastModified: true, // 启用Last-Modified
  maxAge: '1d', // 默认缓存时间1天
  index: false, // 禁用目录索引
  immutable: true // 适用于带有版本号的资源
};
app.use(express.static(path.join(__dirname, '../dist'), staticOptions));

// 所有请求都返回index.html
app.get('*', (req, res) => {
  // HTML不缓存
  res.setHeader('Cache-Control', 'no-cache');
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`服务器运行在 http://localhost:${PORT}`);
  console.log(`提供 ${path.join(__dirname, '../dist')} 目录下的静态资源`);
  console.log('图片资源已优化，启用7天缓存和压缩');
  console.log('支持图片动态调整大小和格式，使用方式: /path/to/image.jpg?width=500&format=webp');
}); 