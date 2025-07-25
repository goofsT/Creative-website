<template>
  <div class="language-switcher">
    <button 
      class="language-btn" 
      :class="{ 'active': currentLanguage === 'en' }" 
      @click="changeLanguage('en')"
    >
      EN
    </button>
    <span class="divider">|</span>
    <button 
      class="language-btn" 
      :class="{ 'active': currentLanguage === 'zh' }" 
      @click="changeLanguage('zh')"
    >
      中文
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const currentLanguage = ref('en');

// 初始化语言设置
onMounted(() => {
  // 从localStorage获取保存的语言设置，如果没有则根据URL判断
  const savedLang = localStorage.getItem('language');
  if (savedLang) {
    currentLanguage.value = savedLang;
  } else {
    // 根据URL路径判断当前语言
    const path = window.location.pathname;
    if (path.startsWith('/en/')) {
      currentLanguage.value = 'en';
    } else {
      currentLanguage.value = 'zh';
    }
  }
  
  // 设置文档的语言
  document.documentElement.lang = currentLanguage.value === 'en' ? 'en-US' : 'zh-CN';
  
  // 触发首次语言设置
  emitLanguageChange(currentLanguage.value);
});

// 监听语言变化
watch(currentLanguage, (newLang) => {
  // 保存语言设置到localStorage
  localStorage.setItem('language', newLang);
  
  // 设置文档的语言
  document.documentElement.lang = newLang === 'en' ? 'en-US' : 'zh-CN';
  
  // 触发语言变化事件
  emitLanguageChange(newLang);
});

// 切换语言
const changeLanguage = (lang) => {
  if (currentLanguage.value === lang) return;
  
  currentLanguage.value = lang;
  
  // 根据当前路由和语言设置重定向
  const currentPath = router.currentRoute.value.path;
  let newPath;
  
  if (lang === 'en') {
    // 如果当前不是英文路径，则添加/en前缀
    if (!currentPath.startsWith('/en/')) {
      newPath = currentPath === '/' ? '/en/' : `/en${currentPath}`;
    } else {
      newPath = currentPath;
    }
  } else {
    // 如果当前是英文路径，则移除/en前缀
    if (currentPath.startsWith('/en/')) {
      newPath = currentPath.replace('/en', '') || '/';
    } else {
      newPath = currentPath;
    }
  }
  
  // 如果路径变化了，则导航到新路径
  if (newPath !== currentPath) {
    router.push(newPath);
  }
};

// 发送语言变化事件
const emitLanguageChange = (lang) => {
  window.dispatchEvent(new CustomEvent('languageChange', { 
    detail: { language: lang } 
  }));
};
</script>

<style lang="scss" scoped>
.language-switcher {
  display: flex;
  align-items: center;
  margin-left: 1rem;
}

.language-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 0.9rem;
  padding: 0.25rem 0.5rem;
  color: var(--color-text);
  opacity: 0.7;
  transition: all 0.3s ease;
  
  &:hover {
    opacity: 1;
  }
  
  &.active {
    opacity: 1;
    font-weight: 600;
    color: var(--color-accent);
  }
}

.divider {
  margin: 0 0.25rem;
  color: var(--color-text);
  opacity: 0.5;
}

@media (max-width: 768px) {
  .language-switcher {
    margin-left: 0.5rem;
  }
  
  .language-btn {
    font-size: 0.8rem;
    padding: 0.25rem;
  }
}
</style> 