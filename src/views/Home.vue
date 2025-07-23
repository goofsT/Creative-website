<template>
  <div class="home">
    <div class="video-container">
      <video class="hero__video" autoplay muted loop playsinline>
        <source src="@/assets/mv/take_tea.mp4" type="video/mp4">
      </video>
    </div>
    <section class="hero">
      
      <div class="hero__content">
        <h1>恩施<span class="color-red">富硒茶</span></h1>
        <h2>天赐恩山好水，天然富硒滋养</h2>
        <p>—— 高山云雾 · 原生态手工茶 ——</p>
        <div class="hero__buttons">
          <router-link to="/work" class="btn">探索产品</router-link>
          <router-link to="/contact" class="btn btn--outline">联系我们</router-link>
        </div>
      </div>
      <div class="hero__scroll">
        <span>向下滚动</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
      </div>
    </section>

    <!-- 公告区域 -->
    <section class="announcements">
      <div class="container">
        <h2>茶叶<span>资讯</span></h2>
        <div class="flex gap-4 justify-between">
          <div class="announcement-card">
            <h3>新茶</h3>
            <h4>2025春茶预售开始</h4>
            <p>恩施高山云雾富硒绿茶，限量发售</p>
          </div>
          <div class="announcement-card">
            <h3>活动</h3>
            <h4>7折品尝</h4>
            <p>免费品尝2025年春茶</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 引用区域 -->
    <section class="quote">
      <div class="container">
        <blockquote>
          <p>"好茶，如好友，淡而不薄，浓而不苦，回味悠长"</p>
          <cite>- 恩施茶艺师</cite>
        </blockquote>
      </div>
    </section>

    <!-- 作品展示 -->
    <!-- <section class="featured-works">
      <div class="container">
        <h2>精选<span>茶品</span></h2>
        <div class="featured-works__grid">
          <div class="work-card">
            <div class="work-card__image" style="background-image: url(@/assets/images/tea/VCG211244284652.png)"></div>
            <div class="work-card__content">
              <h3>恩施玉露</h3>
              <p>高山云雾出好茶，富硒土壤培育的顶级手工绿茶</p>
              <router-link to="/work" class="btn btn--small">查看详情</router-link>
            </div>
          </div>
          <div class="work-card">
            <div class="work-card__image" style="background-image: url(@/assets/images/tea/VCG211514259609.jpg)"></div>
            <div class="work-card__content">
              <h3>富硒红茶</h3>
              <p>传统工艺精制，醇厚甘甜，回味悠长</p>
              <router-link to="/work" class="btn btn--small">查看详情</router-link>
            </div>
          </div>
          <div class="work-card">
            <div class="work-card__image" style="background-image: url(@/assets/images/tea/tea-leaves.jpg)"></div>
            <div class="work-card__content">
              <h3>特级茶礼盒</h3>
              <p>精选富硒绿茶与红茶，高档礼盒包装，送礼佳品</p>
              <router-link to="/work" class="btn btn--small">查看详情</router-link>
            </div>
          </div>
        </div>
        <div class="featured-works__more">
          <router-link to="/work" class="btn">查看全部茶品</router-link>
        </div>
      </div>
    </section> -->

    <!-- 通讯订阅 -->
    <section class="newsletter">
      <div class="container">
        <div class="newsletter__content">
          <h2>订阅<span>茶讯</span></h2>
          <p>订阅我们的电子通讯，获取新茶上市、茶艺活动和限时优惠信息。</p>
          <form @submit.prevent="subscribeNewsletter">
            <input type="email" placeholder="您的电子邮箱" v-model="email" required />
            <button type="submit" class="btn">订阅</button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const email = ref('')

const subscribeNewsletter = () => {
  alert('感谢订阅！')
  email.value = ''
}

onMounted(() => {
  // 视频滚动视差效果
  gsap.to('.video-container', {
    scrollTrigger: {
      trigger: '.home',
      start: 'top top',
      end: 'bottom top',
      scrub: true
    },
    y: 200, // 滚动时视频向下移动的距离，可以调整
    scale: 1.1 // 滚动时视频略微放大，可以调整
  })

  // 英雄区域动画
  const heroTimeline = gsap.timeline()
  heroTimeline.from('.hero__content h1', { y: 50, opacity: 0, duration: 1 })
    .from('.hero__content h2', { y: 50, opacity: 0, duration: 0.8 }, '-=0.5')
    .from('.hero__content p', { y: 50, opacity: 0, duration: 0.8 }, '-=0.5')
    .from('.hero__buttons', { y: 50, opacity: 0, duration: 0.8 }, '-=0.5')
    .from('.hero__scroll', { y: -20, opacity: 0, duration: 0.8 }, '-=0.3')

  // 滚动触发动画
  gsap.from('.announcements h2', {
    scrollTrigger: {
      trigger: '.announcements',
      start: 'top 80%',
    },
    y: 50,
    opacity: 0,
    duration: 0.8
  })

  gsap.from('.announcement-card', {
    scrollTrigger: {
      trigger: '.announcements',
      start: 'top 90%',
    },
    y: 50,
    opacity: 0,
    stagger: 0.2,
    duration: 0.8
  })

  gsap.from('.quote blockquote', {
    scrollTrigger: {
      trigger: '.quote',
      start: 'top 80%',
    },
    scale: 0.9,
    opacity: 0,
    duration: 1
  })

  gsap.from('.featured-works h2', {
    scrollTrigger: {
      trigger: '.featured-works',
      start: 'top 80%',
    },
    y: 50,
    opacity: 0,
    duration: 0.8
  })

  gsap.from('.work-card', {
    scrollTrigger: {
      trigger: '.featured-works__grid',
      start: 'top 80%',
    },
    y: 50,
    opacity: 0,
    stagger: 0.2,
    duration: 0.8
  })

  gsap.from('.newsletter__content', {
    scrollTrigger: {
      trigger: '.newsletter',
      start: 'top 80%',
    },
    y: 50,
    opacity: 0,
    duration: 0.8
  })
})
</script>

<style lang="scss" scoped>
.home {
  overflow-x: hidden;
}

.video-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -1;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
  }
}

.hero__video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

// 英雄区域
.hero {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  background-color: transparent;
  color: var(--color-text);
  padding: 2rem;
  overflow: hidden;
  
  &__content {
    max-width: 800px;
    position: relative;
    z-index: 1;
    
    h1 {
      font-size: 5rem;
      margin-bottom: 1rem;
      
      span {
        color: var(--color-accent);
      }
      
      @media (max-width: 768px) {
        font-size: 3.5rem;
      }
      
      @media (max-width: 576px) {
        font-size: 2.5rem;
      }
    }
    
    h2 {
      font-size: 2rem;
      margin-bottom: 1.5rem;
      font-weight: 400;
      
      @media (max-width: 768px) {
        font-size: 1.5rem;
      }
    }
    
    p {
      font-size: 1.2rem;
      max-width: 600px;
      margin: 0 auto 2rem;
      
      @media (max-width: 768px) {
        font-size: 1rem;
      }
    }
  }
  
  &__buttons {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    
    @media (max-width: 576px) {
      flex-direction: column;
      width: 100%;
      max-width: 300px;
      margin: 0 auto;
    }
    
    .btn--outline {
      background-color: transparent;
      border: 2px solid var(--color-text);
      color: var(--color-text);
      
      &:hover {
        background-color: var(--color-text);
        color: var(--color-bg);
      }
    }
  }
  
  &__scroll {
    position: absolute;
    bottom: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--color-text);
    animation: bounce 2s infinite;
    
    span {
      margin-bottom: 0.5rem;
      font-size: 0.9rem;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    
    svg {
      animation: arrowDown 2s infinite;
    }
  }
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

@keyframes arrowDown {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(5px);
  }
  60% {
    transform: translateY(3px);
  }
}

// 公告区域
.announcements {
  padding: 6rem 0;
  
  h2 {
    text-align: center;
    margin-bottom: 3rem;
    
    span {
      color: var(--color-accent);
    }
  }
  
  &__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }
}

.announcement-card {
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 5px;
  width: 40%;
  transition: var(--transition);
  backdrop-filter: blur(6px);
  
  &:hover {
    transform: translateY(-5px);
    border:1px solid rgb(76, 138, 76);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  }
  
  h3 {
    color: var(--color-accent);
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }
  
  h4 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  
  p {
    color: #ccc;
    margin-bottom: 1.5rem;
  }
  
  .btn--small {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }
}

// 引用区域
.quote {
  padding: 6rem 0;
  background-color: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(8px);
  
  blockquote {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
    
    p {
      font-size: 2.5rem;
      font-style: italic;
      line-height: 1.4;
      margin-bottom: 1.5rem;
      
      @media (max-width: 768px) {
        font-size: 1.8rem;
      }
    }
    
    cite {
      font-size: 1.2rem;
      color: var(--color-accent);
    }
  }
}

// 作品展示
.featured-works {
  padding: 6rem 0;
  background-color: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(8px);
  
  h2 {
    text-align: center;
    margin-bottom: 3rem;
    
    span {
      color: var(--color-accent);
    }
  }
  
  &__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
  }
  
  &__more {
    text-align: center;
  }
}

.work-card {
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 5px;
  overflow: hidden;
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
    
    .work-card__image {
      transform: scale(1.05);
    }
  }
  
  &__image {
    height: 250px;
    background-size: cover;
    background-position: center;
    transition: transform 0.5s ease;
  }
  
  &__content {
    padding: 1.5rem;
    
    h3 {
      margin-bottom: 0.5rem;
    }
    
    p {
      color: #ccc;
      margin-bottom: 1.5rem;
    }
  }
}

// 通讯订阅
.newsletter {
  padding: 6rem 0;
  background-color: var(--color-secondary);
  
  &__content {
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
    
    h2 {
      margin-bottom: 1rem;
      
      span {
        color: var(--color-accent);
      }
    }
    
    p {
      margin-bottom: 2rem;
      color: #ccc;
    }
    
    form {
      display: flex;
      gap: 1rem;
      
      @media (max-width: 576px) {
        flex-direction: column;
      }
      
      input {
        flex: 1;
        padding: 0.8rem 1rem;
        background-color: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.2);
        color: var(--color-text);
        font-size: 1rem;
        border-radius: 3px;
        
        &::placeholder {
          color: #999;
        }
        
        &:focus {
          outline: none;
          border-color: var(--color-accent);
        }
      }
    }
  }
}

// 移动端优化
@media (max-width: 768px) {
  .hero {
    &__content {
      padding: 6rem 0 4rem;
    }
    
    &__title {
      font-size: 2.5rem;
    }
    
    &__subtitle {
      font-size: 1.1rem;
      max-width: 100%;
    }
  }
  
  .announcements {
    &__grid {
      grid-template-columns: 1fr;
    }
  }
  
  .featured-works {
    &__grid {
      grid-template-columns: 1fr;
    }
  }
}

@media (max-width: 576px) {
  .hero {
    &__content {
      padding: 5rem 0 3rem;
    }
    
    &__title {
      font-size: 2rem;
      letter-spacing: 1px;
    }
    
    &__subtitle {
      font-size: 1rem;
      margin-bottom: 1.5rem;
    }
    
    &__buttons {
      flex-direction: column;
      align-items: stretch;
      gap: 0.8rem;
      
      .btn {
        text-align: center;
      }
    }
  }
  
  .quote {
    padding: 3rem 0;
    
    &__text {
      font-size: 1.3rem;
      padding: 0 1rem;
    }
    
    &__author {
      font-size: 0.9rem;
    }
  }
  
  .newsletter {
    &__title {
      font-size: 1.5rem;
    }
    
    &__form {
      flex-direction: column;
      
      input {
        width: 100%;
        margin-right: 0;
        margin-bottom: 0.8rem;
      }
      
      button {
        width: 100%;
      }
    }
  }
  
  .announcement-card {
    padding: 1.2rem;
    
    &__title {
      font-size: 1.1rem;
    }
  }
  
  .featured-works {
    &__item {
      margin-bottom: 1.5rem;
      
      &-title {
        font-size: 1.2rem;
      }
    }
  }
}
</style> 