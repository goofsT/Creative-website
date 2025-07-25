<template>
  <div class="about">
    <!-- 页面标题 -->
    <section class="page-header">
      <div class="container">
        <h1 v-html="t('about.title')"></h1>
      </div>
    </section>

    

    <!-- 关于内容 -->
    <section class="about-content">
      <div class="container">
        <div class="about-content__grid">
          <div class="about-content__text">
            <h2 v-html="t('about.subtitle')"></h2>
            <p class="">
              {{ t('about.description') }}
            </p>
            <div class="tea-categories">
              <h4>{{ t('about.categories.title') }}</h4>
              <ul>
                <li v-for="item in categories" :key="item.name">
                  <strong>{{ t(item.name) }}</strong> - {{ t(item.desc) }}
                </li>
              </ul>
            </div>
          </div>
          <div class="about-content__image">
            <div class="image-container">
              <img src="@/assets/images/tea/pexels-vlada-karpovich-6802896.jpg" :alt="t('about.imageAlt')" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 我们的方法 -->
    <section class="methodology">
      <div class="container">
        <h2 v-html="t('about.benefits.title')"></h2>
        <div class="methodology__grid">
          <div class="methodology-card">
            <div class="methodology-card__icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <h3>{{ t('about.benefits.antioxidant.title') }}</h3>
            <p>{{ t('about.benefits.antioxidant.description') }}</p>
          </div>
          <div class="methodology-card">
            <div class="methodology-card__icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path
                  d="M17 9c.5 0 1 .4 1 1v10c0 .5-.4 1-1 1H7c-.5 0-1-.4-1-1V10c0-.5.4-1 1-1h10zM17 9v-2c0-2.2-1.8-4-4-4s-4 1.8-4 4v2">
                </path>
                <circle cx="12" cy="15" r="1"></circle>
              </svg>
            </div>
            <h3>{{ t('about.benefits.flavor.title') }}</h3>
            <p>{{ t('about.benefits.flavor.description') }}</p>
          </div>
          <div class="methodology-card">
            <div class="methodology-card__icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                <line x1="6" y1="1" x2="6" y2="4"></line>
                <line x1="10" y1="1" x2="10" y2="4"></line>
                <line x1="14" y1="1" x2="14" y2="4"></line>
              </svg>
            </div>
            <h3>{{ t('about.benefits.sleep.title') }}</h3>
            <p>{{ t('about.benefits.sleep.description') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 联系我们 -->
    <section class="cta">
      <div class="container">
        <div class="cta__content">
          <h2 v-html="t('about.cta.title')"></h2>
          <p>{{ t('about.cta.description') }}</p>
          <router-link :to="currentLanguage === 'en' ? '/en/contact' : '/contact'" class="btn">{{ t('common.contactUs') }}</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, getCurrentInstance } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { t, currentLanguage } from '@/i18n/index.js'

gsap.registerPlugin(ScrollTrigger)

const categories = [
  { name: 'about.categories.items.0.name', desc: 'about.categories.items.0.desc' },
  { name: 'about.categories.items.1.name', desc: 'about.categories.items.1.desc' },
  { name: 'about.categories.items.2.name', desc: 'about.categories.items.2.desc' },
  { name: 'about.categories.items.3.name', desc: 'about.categories.items.3.desc' },
  { name: 'about.categories.items.4.name', desc: 'about.categories.items.4.desc' },
]

const { proxy } = getCurrentInstance();

// 显示茶叶功效信息弹框
const showTeaInfo = () => {
  proxy.$message.show({
    title: t('about.popup.title'),
    message: t('about.popup.message'),
    type: 'info',
    duration: 0,
    showButtons: true,
    confirmButtonText: t('about.popup.button')
  });
};

onMounted(() => {
  // 页面标题动画
  gsap.from('.page-header h1', {
    y: 50,
    opacity: 0,
    duration: 1
  })

  // 关于内容动画
  gsap.from('.about-content__text', {
    scrollTrigger: {
      trigger: '.about-content',
      start: 'top 80%',
    },
    x: -50,
    opacity: 0,
    duration: 0.8
  })

  gsap.from('.about-content__image', {
    scrollTrigger: {
      trigger: '.about-content',
      start: 'top 80%',
    },
    x: 50,
    opacity: 0,
    duration: 0.8
  })

  // 方法论卡片动画
  gsap.from('.methodology h2', {
    scrollTrigger: {
      trigger: '.methodology',
      start: 'top 90%',
    },
    y: 30,
    opacity: 0,
    duration: 0.6
  })

  gsap.from('.methodology-card', {
    scrollTrigger: {
      trigger: '.methodology__grid',
      start: 'top 90%',
    },
    y: 30,
    opacity: 0,
    duration: 0.6
  })

  // CTA动画
  gsap.from('.cta__content', {
    scrollTrigger: {
      trigger: '.cta',
      start: 'top 80%',
    },
    y: 50,
    opacity: 0,
    duration: 0.8
  })
})
</script>

<style lang="scss" scoped>
.about {
  overflow-x: hidden;
}

// 页面标题
.page-header {
  height: 40vh;
  min-height: 300px;
  background-color: var(--color-bg);
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/src/assets/images/tea/VCG211522801789.png');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  h1 {
    font-size: 4rem;

    span {
      color: var(--color-accent);
    }

    @media (max-width: 768px) {
      font-size: 3rem;
    }

    @media (max-width: 576px) {
      font-size: 2.5rem;
    }
  }
}

// 关于内容
.about-content {
  padding: 6rem 0;

  &__grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;

    @media (max-width: 992px) {
      grid-template-columns: 1fr;
      gap: 3rem;
    }
  }

  &__text {
    h2 {
      margin-bottom: 2rem;

      span {
        color: var(--color-accent);
      }
    }

    p {
      margin-bottom: 1.5rem;
      font-size: 1.1rem;
      line-height: 1.8;
    }

    blockquote {
      border-left: 4px solid var(--color-accent);
      padding-left: 1.5rem;
      margin: 2rem 0;

      p {
        font-size: 1.5rem;
        font-style: italic;
        line-height: 1.4;
      }
    }
  }

  &__image {
    .image-container {
      height: 500px;
      position: relative;
      overflow: hidden;
      border-radius: 5px;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);

      &::before {
        content: '';
        display: block;
        padding-top: 125%;
      }

      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
}

// 茶叶品类列表
.tea-categories {
  margin-top: 2rem;

  h4 {
    margin-bottom: 1rem;
    color: var(--color-accent);
  }

  ul {
    list-style-type: none;
    padding: 0;

    li {
      margin-bottom: 0.8rem;
      padding-left: 1.5rem;
      position: relative;

      &::before {
        content: '•';
        position: absolute;
        left: 0;
        color: var(--color-accent);
        font-size: 1.2rem;
      }
    }
  }
}

// 方法论
.methodology {
  padding: 5rem 0;
  background-color: var(--color-secondary);

  h2 {
    text-align: center;
    margin-bottom: 3rem;

    span {
      color: var(--color-accent);
    }
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }
}

.methodology-card {
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 5px;
  padding: 2rem;
  text-align: center;
  transition: var(--transition);

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  }

  &__icon {
    margin-bottom: 1.5rem;

    svg {
      color: var(--color-accent);
    }
  }

  h3 {
    margin-bottom: 1rem;
  }

  p {
    color: #ccc;
    font-size: 0.95rem;
    line-height: 1.6;
  }
}

// CTA
.cta {
  padding: 6rem 0;
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/images/cta-bg.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  &__content {
    max-width: 700px;
    margin: 0 auto;
    text-align: center;

    h2 {
      font-size: 3rem;
      margin-bottom: 1.5rem;

      span {
        color: var(--color-accent);
      }

      @media (max-width: 768px) {
        font-size: 2.5rem;
      }
    }

    p {
      font-size: 1.2rem;
      margin-bottom: 2rem;

      @media (max-width: 768px) {
        font-size: 1rem;
      }
    }

    .btn {
      padding: 1rem 3rem;
      font-size: 1.1rem;
    }
  }
}

// 移动端优化
@media (max-width: 768px) {
  .about-header {
    &__content {
      padding: 8rem 0 4rem;
    }

    &__title {
      font-size: 2.5rem;
    }
  }

  .methodology {
    &__grid {
      grid-template-columns: 1fr;
    }
  }
}

@media (max-width: 576px) {
  .about-header {
    &__content {
      padding: 6rem 0 3rem;
    }

    &__title {
      font-size: 2rem;
    }
  }

  .methodology {
    padding: 2.5rem 0;

    &__title {
      font-size: 1.5rem;
      margin-bottom: 1.5rem;
    }

    &__subtitle {
      font-size: 1rem;
      margin-bottom: 2rem;
    }
  }
}
</style>