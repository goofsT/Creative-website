const sharp = require('sharp');
const path = require('path');
const fs = require('fs');
const { promisify } = require('util');
const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);

// 配置
const config = {
  distDir: path.join(__dirname, '../dist'),
  cacheDir: path.join(__dirname, 'cache'),
  // 需要处理的图片尺寸
  sizes: [
    { width: 320, height: null, suffix: 'xs' },
    { width: 640, height: null, suffix: 'sm' },
    { width: 1024, height: null, suffix: 'md' },
    { width: 1440, height: null, suffix: 'lg' },
  ],
  // 需要转换的格式
  formats: ['webp', 'jpeg'],
  // 质量设置
  quality: {
    webp: 80,
    jpeg: 80,
    png: 80
  }
};

// 确保缓存目录存在
if (!fs.existsSync(config.cacheDir)) {
  fs.mkdirSync(config.cacheDir, { recursive: true });
}

// 递归查找所有图片文件
async function findImages(dir, fileList = []) {
  const files = await readdir(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stats = await stat(filePath);
    
    if (stats.isDirectory()) {
      await findImages(filePath, fileList);
    } else if (/\.(jpg|jpeg|png|webp|gif)$/i.test(file)) {
      fileList.push(filePath);
    }
  }
  
  return fileList;
}

// 优化单个图片
async function optimizeImage(imagePath) {
  const relativePath = path.relative(config.distDir, imagePath);
  const fileName = path.basename(imagePath);
  const ext = path.extname(imagePath).substring(1).toLowerCase();
  
  console.log(`处理图片: ${relativePath}`);
  
  try {
    // 原始图片处理为WebP格式（如果不是WebP）
    if (ext !== 'webp' && config.formats.includes('webp')) {
      const outputPath = path.join(
        config.cacheDir, 
        `${path.basename(fileName, path.extname(fileName))}.webp`
      );
      
      if (!fs.existsSync(outputPath)) {
        await sharp(imagePath)
          .webp({ quality: config.quality.webp })
          .toFile(outputPath);
        console.log(`  生成WebP版本: ${path.basename(outputPath)}`);
      }
    }
    
    // 处理不同尺寸
    for (const size of config.sizes) {
      for (const format of config.formats) {
        // 跳过小于目标尺寸的图片放大
        const metadata = await sharp(imagePath).metadata();
        if (metadata.width < size.width) continue;
        
        const outputPath = path.join(
          config.cacheDir,
          `${path.basename(fileName, path.extname(fileName))}-${size.suffix}.${format}`
        );
        
        if (!fs.existsSync(outputPath)) {
          await sharp(imagePath)
            .resize(size.width, size.height, {
              fit: 'inside',
              withoutEnlargement: true
            })
            [format]({ quality: config.quality[format] || 80 })
            .toFile(outputPath);
          console.log(`  生成 ${size.width}px ${format} 版本`);
        }
      }
    }
    
    return true;
  } catch (error) {
    console.error(`  处理图片出错: ${relativePath}`, error);
    return false;
  }
}

// 主函数
async function main() {
  console.log('开始预处理图片资源...');
  const startTime = Date.now();
  
  try {
    const images = await findImages(config.distDir);
    console.log(`发现 ${images.length} 张图片`);
    
    let successCount = 0;
    let failCount = 0;
    
    for (const imagePath of images) {
      const success = await optimizeImage(imagePath);
      if (success) successCount++;
      else failCount++;
    }
    
    const endTime = Date.now();
    const timeUsed = ((endTime - startTime) / 1000).toFixed(2);
    
    console.log('====================================');
    console.log(`图片处理完成! 用时: ${timeUsed}秒`);
    console.log(`成功: ${successCount}张, 失败: ${failCount}张`);
    console.log(`缓存目录: ${config.cacheDir}`);
    console.log('====================================');
    
  } catch (error) {
    console.error('处理图片出错:', error);
  }
}

// 执行主函数
main().catch(console.error); 