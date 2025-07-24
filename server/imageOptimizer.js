const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

/**
 * 图片优化中间件
 * 支持以下查询参数：
 * - width: 图片宽度
 * - height: 图片高度
 * - quality: 图片质量 (1-100)
 * - format: 图片格式 (webp, jpeg, png)
 * 
 * 示例: /assets/images/product/lvlin.webp?width=500&format=webp&quality=80
 */
function imageOptimizer(options = {}) {
  // 默认配置
  const config = {
    cacheDir: path.join(__dirname, 'cache'),
    supportedFormats: ['webp', 'jpeg', 'png', 'jpg'],
    defaultQuality: 80,
    maxAge: 604800, // 缓存7天
    ...options
  };

  // 确保缓存目录存在
  if (!fs.existsSync(config.cacheDir)) {
    fs.mkdirSync(config.cacheDir, { recursive: true });
  }

  return async (req, res, next) => {
    // 只处理图片请求
    const imageExtensions = /\.(jpg|jpeg|png|gif|webp|svg)$/i;
    if (!imageExtensions.test(req.path) || !req.query || Object.keys(req.query).length === 0) {
      return next();
    }

    try {
      // 图片路径
      const imagePath = path.join(__dirname, '../dist', req.path);
      if (!fs.existsSync(imagePath)) {
        return next();
      }

      // 解析查询参数
      const width = parseInt(req.query.width) || null;
      const height = parseInt(req.query.height) || null;
      const quality = parseInt(req.query.quality) || config.defaultQuality;
      let format = req.query.format && config.supportedFormats.includes(req.query.format.toLowerCase()) 
        ? req.query.format.toLowerCase() 
        : path.extname(req.path).substring(1).toLowerCase();
      
      // 修复格式名称
      if (format === 'jpg') format = 'jpeg';

      // 创建缓存键
      const cacheKey = `${path.basename(req.path)}-w${width || 'auto'}-h${height || 'auto'}-q${quality}-${format}`;
      const cachePath = path.join(config.cacheDir, cacheKey);

      // 检查缓存
      if (fs.existsSync(cachePath)) {
        const stat = fs.statSync(cachePath);
        res.setHeader('Content-Type', `image/${format}`);
        res.setHeader('Cache-Control', `public, max-age=${config.maxAge}`);
        res.setHeader('Last-Modified', stat.mtime.toUTCString());
        return fs.createReadStream(cachePath).pipe(res);
      }

      // 处理图片
      let imageProcessor = sharp(imagePath);

      // 调整大小
      if (width || height) {
        imageProcessor = imageProcessor.resize(width, height, {
          fit: 'inside',
          withoutEnlargement: true
        });
      }

      // 设置质量和格式
      if (format === 'webp') {
        imageProcessor = imageProcessor.webp({ quality });
      } else if (format === 'jpeg') {
        imageProcessor = imageProcessor.jpeg({ quality });
      } else if (format === 'png') {
        imageProcessor = imageProcessor.png({ quality });
      }

      // 保存到缓存
      await imageProcessor.toFile(cachePath);

      // 设置响应头
      res.setHeader('Content-Type', `image/${format}`);
      res.setHeader('Cache-Control', `public, max-age=${config.maxAge}`);
      
      // 发送处理后的图片
      fs.createReadStream(cachePath).pipe(res);
    } catch (error) {
      console.error('图片处理错误:', error);
      next(); // 出错时继续使用原始图片
    }
  };
}

module.exports = imageOptimizer; 