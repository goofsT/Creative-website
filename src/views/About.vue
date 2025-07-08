<template>
  <div class="about">
    <!-- 页面标题 -->
    <section class="page-header">
      <div class="container">
        <h1>关于<span>我们</span></h1>
      </div>
    </section>
    
    <!-- 关于内容 -->
    <section class="about-content">
      <div class="container">
        <div class="about-content__grid">
          <div class="about-content__text">
            <h2>视觉<span>未来主义者</span></h2>
            <p>我们是一家专注于未来视觉概念设计的创意工作室。我们的作品跨越电影、游戏、建筑和产品设计等多个领域，为客户提供前瞻性的视觉解决方案。</p>
            <p>自成立以来，我们一直致力于将科幻概念与实用设计相结合，创造出既有未来感又具有可行性的作品。我们相信，好的设计不仅仅是美观的，还应该是有意义的、有目的的。</p>
            <p>我们的团队由来自全球各地的设计师、艺术家和技术专家组成，他们带来了丰富多样的视角和经验。这种多元化使我们能够应对各种挑战，并为客户提供独特而创新的解决方案。</p>
            <blockquote>
              <p>"我称科幻为'提前实现的现实'"</p>
            </blockquote>
            <p>这句话体现了我们的核心理念：今天的想象就是明天的现实。我们的设计不仅仅是幻想，而是对未来可能性的探索和预见。</p>
          </div>
          <div class="about-content__image">
            <div class="image-container">
              <img src="@/assets/images/tea/tea-cup.jpg" alt="创意工作室" />
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- 我们的方法 -->
    <section class="methodology">
      <div class="container">
        <h2>我们的<span>方法</span></h2>
        <div class="methodology__grid">
          <div class="methodology-card">
            <div class="methodology-card__icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path><line x1="2" y1="12" x2="22" y2="12"></line></svg>
            </div>
            <h3>研究与探索</h3>
            <p>我们深入研究科技趋势、社会变化和设计理论，为我们的创意过程提供坚实的基础。</p>
          </div>
          <div class="methodology-card">
            <div class="methodology-card__icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>
            </div>
            <h3>概念发展</h3>
            <p>我们将想法转化为概念草图，然后通过迭代和反馈不断完善，直到达到最佳效果。</p>
          </div>
          <div class="methodology-card">
            <div class="methodology-card__icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
            </div>
            <h3>视觉实现</h3>
            <p>我们使用最先进的工具和技术，将概念转化为令人惊叹的视觉作品，包括插画、3D模型和动画。</p>
          </div>
          <div class="methodology-card">
            <div class="methodology-card__icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
            </div>
            <h3>展示与叙事</h3>
            <p>我们不仅创造视觉效果，还讲述故事，让每个项目都有情感共鸣和深层含义。</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- 团队成员 -->
    <section class="team">
      <div class="container">
        <h2>我们的<span>团队</span></h2>
        <div class="team__grid">
          <div class="team-member" v-for="i in 4" :key="i">
            <div class="team-member__image">
              <img :src="`/images/team-${i}.jpg`" :alt="`团队成员 ${i}`" />
            </div>
            <div class="team-member__info">
              <h3>设计师 {{ i }}</h3>
              <p>创意总监 / 概念艺术家</p>
              <div class="team-member__social">
                <a href="#" aria-label="Instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="#" aria-label="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- 客户与合作伙伴 -->
    <section class="clients">
      <div class="container">
        <h2>我们的<span>客户</span></h2>
        <div class="clients__logos">
          <div class="client-logo" v-for="i in 6" :key="i">
            <img :src="`/images/client-${i}.png`" :alt="`客户 ${i}`" />
          </div>
        </div>
      </div>
    </section>
    
    <!-- 联系我们 -->
    <section class="cta">
      <div class="container">
        <div class="cta__content">
          <h2>准备好<span>合作</span>了吗？</h2>
          <p>我们期待与您一起创造未来的视觉体验。</p>
          <router-link to="/contact" class="btn">联系我们</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

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
      start: 'top 80%',
    },
    y: 50,
    opacity: 0,
    duration: 0.8
  })
  
  gsap.from('.methodology-card', {
    scrollTrigger: {
      trigger: '.methodology__grid',
      start: 'top 80%',
    },
    y: 50,
    opacity: 0,
    stagger: 0.2,
    duration: 0.8
  })
  
  // 团队成员动画
  gsap.from('.team h2', {
    scrollTrigger: {
      trigger: '.team',
      start: 'top 80%',
    },
    y: 50,
    opacity: 0,
    duration: 0.8
  })
  
  gsap.from('.team-member', {
    scrollTrigger: {
      trigger: '.team__grid',
      start: 'top 80%',
    },
    y: 50,
    opacity: 0,
    stagger: 0.2,
    duration: 0.8
  })
  
  // 客户动画
  gsap.from('.clients h2', {
    scrollTrigger: {
      trigger: '.clients',
      start: 'top 80%',
    },
    y: 50,
    opacity: 0,
    duration: 0.8
  })
  
  gsap.from('.client-logo', {
    scrollTrigger: {
      trigger: '.clients__logos',
      start: 'top 80%',
    },
    y: 20,
    opacity: 0,
    stagger: 0.1,
    duration: 0.5
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
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images/about-header.jpg');
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

// 方法论
.methodology {
  padding: 6rem 0;
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

// 团队
.team {
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
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2.5rem;
  }
}

.team-member {
  &__image {
    margin-bottom: 1.5rem;
    border-radius: 5px;
    overflow: hidden;
    
    img {
      width: 100%;
      height: auto;
      transition: var(--transition);
    }
    
    &:hover img {
      transform: scale(1.05);
    }
  }
  
  &__info {
    h3 {
      margin-bottom: 0.5rem;
    }
    
    p {
      color: #999;
      margin-bottom: 1rem;
      font-size: 0.9rem;
    }
  }
  
  &__social {
    display: flex;
    gap: 1rem;
    
    a {
      color: #ccc;
      transition: var(--transition);
      
      &:hover {
        color: var(--color-accent);
      }
    }
  }
}

// 客户
.clients {
  padding: 6rem 0;
  background-color: var(--color-secondary);
  
  h2 {
    text-align: center;
    margin-bottom: 3rem;
    
    span {
      color: var(--color-accent);
    }
  }
  
  &__logos {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 3rem;
  }
}

.client-logo {
  width: 150px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.6;
  transition: var(--transition);
  
  &:hover {
    opacity: 1;
  }
  
  img {
    max-width: 100%;
    max-height: 100%;
    filter: brightness(0) invert(1);
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
</style> 