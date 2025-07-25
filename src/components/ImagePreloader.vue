<template>
  <!-- 该组件不渲染任何可见内容，仅用于预加载图像 -->
</template>

<script setup>
import { onMounted } from 'vue';

// 定义需要预加载的关键图像
const imagesToPreload = [
  // 首页图像
  '/src/assets/images/tea.png',
  
  // 产品页关键图像
  '/src/assets/images/product/lvlin.webp',
  '/src/assets/images/product/lichuan.webp',
  '/src/assets/images/product/tc.webp',
  
  // 研究页图像
  '/src/assets/images/tea/VCG211522801789.png',
  
  // 其他关键图像
  '/src/assets/images/tea/tea-cup.jpg'
];

// 预加载函数
const preloadImages = () => {
  imagesToPreload.forEach(src => {
    const img = new Image();
    img.src = src;
  });
};

onMounted(() => {
  // 使用requestIdleCallback在浏览器空闲时预加载图像，不影响关键渲染路径
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(() => {
      preloadImages();
    }, { timeout: 2000 });
  } else {
    // 对于不支持requestIdleCallback的浏览器，使用setTimeout作为降级处理
    setTimeout(preloadImages, 1000);
  }
});
</script> 