<template>
  <div class="home">
    <!-- 英雄区域 -->
    <section class="hero">
      <div class="hero__content">
        <h1>创意<span>设计</span></h1>
        <h2>视觉未来主义者</h2>
        <p>我们将未来的视觉概念带入现实，创造令人惊叹的设计体验</p>
        <div class="hero__buttons">
          <router-link to="/work" class="btn">探索作品</router-link>
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
        <h2>最新<span>公告</span></h2>
        <div class="announcements__grid">
          <div class="announcement-card">
            <h3>当前展览</h3>
            <h4>赛博朋克：通过电影展望可能的未来</h4>
            <p>2024年10月6日至2026年4月12日</p>
            <a href="#" class="btn btn--small">了解更多</a>
          </div>
          <div class="announcement-card">
            <h3>近期展览</h3>
            <h4>未来消遣</h4>
            <p>纽约市地标展览，展示40年的创意设计作品</p>
            <p>2025年3月27日至5月21日</p>
            <a href="#" class="btn btn--small">了解更多</a>
          </div>
        </div>
      </div>
    </section>

    <!-- 引用区域 -->
    <section class="quote">
      <div class="container">
        <blockquote>
          <p>"我称科幻为'提前实现的现实'"</p>
          <cite>- 创意设计师</cite>
        </blockquote>
      </div>
    </section>

    <!-- 作品展示 -->
    <section class="featured-works">
      <div class="container">
        <h2>精选<span>作品</span></h2>
        <div class="featured-works__grid">
          <div class="work-card" v-for="i in 3" :key="i">
            <div class="work-card__image" :style="{ backgroundImage: `url(/images/work-${i}.jpg)` }"></div>
            <div class="work-card__content">
              <h3>概念设计 {{ i }}</h3>
              <p>未来城市景观和交通工具的视觉概念</p>
              <router-link to="/work" class="btn btn--small">查看详情</router-link>
            </div>
          </div>
        </div>
        <div class="featured-works__more">
          <router-link to="/work" class="btn">查看全部作品</router-link>
        </div>
      </div>
    </section>

    <!-- 通讯订阅 -->
    <section class="newsletter">
      <div class="container">
        <div class="newsletter__content">
          <h2>订阅<span>通讯</span></h2>
          <p>我们为2025年及以后计划了很多内容。成为第一个了解最新消息的人。</p>
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
      trigger: '.announcements__grid',
      start: 'top 80%',
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

// 英雄区域
.hero {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  background-color: var(--color-bg);
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images/hero-bg.jpg');
  background-size: cover;
  background-position: center;
  color: var(--color-text);
  padding: 2rem;
  
  &__content {
    max-width: 800px;
    
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
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-5px);
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
  background-color: var(--color-secondary);
  
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
</style> 