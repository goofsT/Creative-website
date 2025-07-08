<template>
  <div class="timeline">
    <!-- 页面标题 -->
    <section class="page-header">
      <div class="container">
        <h1>时间<span>线</span></h1>
      </div>
    </section>
    
    <!-- 时间线内容 -->
    <section class="timeline-content">
      <div class="container">
        <div class="timeline__wrapper">
          <div class="timeline__line"></div>
          
          <div 
            v-for="(item, index) in timelineItems" 
            :key="index" 
            class="timeline-item"
            :class="{ 'timeline-item--right': index % 2 !== 0 }"
          >
            <div class="timeline-item__content">
              <div class="timeline-item__year">{{ item.year }}</div>
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
              
              <div class="timeline-item__image" v-if="item.image">
                <img :src="item.image" :alt="item.title" />
              </div>
              
              <div class="timeline-item__achievements" v-if="item.achievements && item.achievements.length">
                <h4>主要成就</h4>
                <ul>
                  <li v-for="(achievement, i) in item.achievements" :key="i">
                    {{ achievement }}
                  </li>
                </ul>
              </div>
            </div>
            <div class="timeline-item__dot"></div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- 未来展望 -->
    <section class="future-vision">
      <div class="container">
        <h2>未来<span>展望</span></h2>
        <div class="future-vision__content">
          <div class="future-vision__text">
            <p>我们的旅程仍在继续。随着技术的进步和社会的发展，我们将继续探索设计的新边界，创造更加令人惊叹的视觉体验。</p>
            <p>我们期待着与您一起，共同创造未来的视觉语言。</p>
            <router-link to="/contact" class="btn">与我们合作</router-link>
          </div>
          <div class="future-vision__image">
            <img src="/images/future-vision.jpg" alt="未来展望" />
          </div>
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

// 时间线数据
const timelineItems = ref([
  {
    year: '2020',
    title: '创立初期',
    description: '我们的创意工作室在这一年成立，由一群充满激情的设计师和艺术家组成，致力于探索未来视觉概念。',
    image: '/images/timeline-1.jpg',
    achievements: [
      '成立创意工作室',
      '完成首个概念设计项目',
      '建立核心设计团队'
    ]
  },
  {
    year: '2021',
    title: '扩展与成长',
    description: '随着项目的增加，我们的团队逐渐扩大，并开始与国际客户合作，将我们的设计理念带到全球舞台。',
    image: '/images/timeline-2.jpg',
    achievements: [
      '团队规模扩大至15人',
      '首次国际合作项目',
      '建立专业3D建模部门'
    ]
  },
  {
    year: '2022',
    title: '技术突破',
    description: '这一年，我们在技术方面取得了重大突破，开发了专有的设计工具和渲染技术，大大提高了工作效率和作品质量。',
    image: '/images/timeline-3.jpg',
    achievements: [
      '开发专有设计工具',
      '改进渲染技术',
      '获得技术创新奖'
    ]
  },
  {
    year: '2023',
    title: '行业认可',
    description: '我们的努力得到了行业的认可，多个项目获得国际设计大奖，并被知名媒体报道，提高了工作室的知名度和影响力。',
    image: '/images/timeline-4.jpg',
    achievements: [
      '获得国际设计大奖',
      '媒体广泛报道',
      '与顶级品牌建立合作关系'
    ]
  },
  {
    year: '2024',
    title: '全球扩张',
    description: '为了更好地服务全球客户，我们在多个国家设立了办事处，并继续扩大团队规模，吸引更多优秀的创意人才加入。',
    image: '/images/timeline-5.jpg',
    achievements: [
      '在三个国家设立办事处',
      '团队规模扩大至50人',
      '完成20个大型项目'
    ]
  },
  {
    year: '2025',
    title: '创新与未来',
    description: '展望未来，我们将继续推动设计边界，探索新技术和新方法，为客户创造更加惊艳的视觉体验和解决方案。',
    image: '/images/timeline-6.jpg',
    achievements: [
      '启动研发新一代设计工具',
      '成立未来设计研究院',
      '发布《未来视觉设计趋势》报告'
    ]
  }
])

onMounted(() => {
  // 页面标题动画
  gsap.from('.page-header h1', { 
    y: 50, 
    opacity: 0, 
    duration: 1 
  })
  
  // 时间线动画
  gsap.from('.timeline__line', {
    scrollTrigger: {
      trigger: '.timeline__wrapper',
      start: 'top 80%',
      end: 'bottom 20%',
      scrub: true
    },
    scaleY: 0,
    transformOrigin: 'top center'
  })
  
  // 时间线项目动画
  const timelineItems = document.querySelectorAll('.timeline-item')
  timelineItems.forEach((item) => {
    const direction = item.classList.contains('timeline-item--right') ? 50 : -50
    
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: 'top 80%',
      },
      x: direction,
      opacity: 0,
      duration: 0.8
    })
    
    gsap.from(item.querySelector('.timeline-item__dot'), {
      scrollTrigger: {
        trigger: item,
        start: 'top 80%',
      },
      scale: 0,
      opacity: 0,
      duration: 0.5,
      delay: 0.3
    })
  })
  
  // 未来展望动画
  gsap.from('.future-vision h2', {
    scrollTrigger: {
      trigger: '.future-vision',
      start: 'top 80%',
    },
    y: 50,
    opacity: 0,
    duration: 0.8
  })
  
  gsap.from('.future-vision__text', {
    scrollTrigger: {
      trigger: '.future-vision__content',
      start: 'top 80%',
    },
    x: -50,
    opacity: 0,
    duration: 0.8,
    delay: 0.3
  })
  
  gsap.from('.future-vision__image', {
    scrollTrigger: {
      trigger: '.future-vision__content',
      start: 'top 80%',
    },
    x: 50,
    opacity: 0,
    duration: 0.8,
    delay: 0.3
  })
})
</script>

<style lang="scss" scoped>
.timeline {
  overflow-x: hidden;
}

// 页面标题
.page-header {
  height: 40vh;
  min-height: 300px;
  background-color: var(--color-bg);
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images/timeline-header.jpg');
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

// 时间线内容
.timeline-content {
  padding: 6rem 0;
}

.timeline__wrapper {
  position: relative;
  padding: 2rem 0;
}

.timeline__line {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 4px;
  background-color: var(--color-accent);
  transform: translateX(-50%);
  
  @media (max-width: 768px) {
    left: 30px;
  }
}

.timeline-item {
  position: relative;
  margin-bottom: 6rem;
  width: 50%;
  padding-right: 3rem;
  
  &--right {
    margin-left: 50%;
    padding-right: 0;
    padding-left: 3rem;
  }
  
  &__content {
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 5px;
    padding: 2rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    position: relative;
    
    &::before {
      content: '';
      position: absolute;
      top: 20px;
      right: -10px;
      width: 20px;
      height: 20px;
      background-color: rgba(255, 255, 255, 0.05);
      transform: rotate(45deg);
    }
  }
  
  &--right &__content::before {
    right: auto;
    left: -10px;
  }
  
  &__year {
    display: inline-block;
    background-color: var(--color-accent);
    color: var(--color-bg);
    padding: 0.3rem 1rem;
    border-radius: 20px;
    font-weight: 600;
    margin-bottom: 1rem;
  }
  
  h3 {
    margin-bottom: 1rem;
    font-size: 1.8rem;
  }
  
  p {
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }
  
  &__image {
    margin-bottom: 1.5rem;
    border-radius: 5px;
    overflow: hidden;
    
    img {
      width: 100%;
      height: auto;
    }
  }
  
  &__achievements {
    h4 {
      color: var(--color-accent);
      margin-bottom: 1rem;
      font-size: 1.2rem;
    }
    
    ul {
      list-style-type: disc;
      padding-left: 1.5rem;
      
      li {
        margin-bottom: 0.5rem;
        color: #ccc;
      }
    }
  }
  
  &__dot {
    position: absolute;
    top: 20px;
    right: -8px;
    width: 16px;
    height: 16px;
    background-color: var(--color-accent);
    border-radius: 50%;
    
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 30px;
      height: 30px;
      border: 2px solid var(--color-accent);
      border-radius: 50%;
      opacity: 0.5;
    }
  }
  
  &--right &__dot {
    right: auto;
    left: -8px;
  }
  
  @media (max-width: 768px) {
    width: auto;
    padding-right: 0;
    padding-left: 60px;
    margin-left: 0;
    
    &--right {
      margin-left: 0;
      padding-left: 60px;
    }
    
    &__content::before {
      display: none;
    }
    
    &__dot {
      left: 28px;
      right: auto;
    }
    
    &--right &__dot {
      left: 28px;
    }
  }
}

// 未来展望
.future-vision {
  padding: 6rem 0;
  background-color: var(--color-secondary);
  
  h2 {
    text-align: center;
    margin-bottom: 3rem;
    
    span {
      color: var(--color-accent);
    }
  }
  
  &__content {
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
    p {
      font-size: 1.1rem;
      line-height: 1.8;
      margin-bottom: 1.5rem;
    }
    
    .btn {
      margin-top: 1rem;
    }
  }
  
  &__image {
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    
    img {
      width: 100%;
      height: auto;
      display: block;
    }
  }
}
</style> 