<template>
  <div class="timeline">
    <!-- 页面标题 -->
    <section class="page-header">
      <div class="container">
        <h1 v-html="t('timeline.title')"></h1>
      </div>
    </section>
    
    <!-- 时间线内容 -->
    <section class="timeline-content">
      <div class="container">
        <!-- 绿茶制作过程 -->
        <h2 class="tea-type-title" v-html="t('timeline.greenTitle')"></h2>
        
        <div class="timeline__wrapper">
          <div class="timeline__line"></div>
          
          <div 
            v-for="(item, index) in greenTeaItems" 
            :key="'green-'+index" 
            class="timeline-item"
            :class="{ 'timeline-item--right': index % 2 !== 0 }"
          >
            <div class="timeline-item__content">
              <div class="timeline-item__year">{{ t(item.year) }}</div>
              <h3>{{ t(item.title) }}</h3>
              <p>{{ t(item.description) }}</p>
              
              <div class="timeline-item__image" v-if="item.image">
                <img :src="item.image" :alt="t(item.title)" />
              </div>
              
              <div class="timeline-item__achievements" v-if="item.achievements && item.achievements.length">
                <h4>{{ t('timeline.achievementsTitle') }}</h4>
                <ul>
                  <li v-for="(achievement, i) in item.achievements" :key="i">
                    {{ t(achievement) }}
                  </li>
                </ul>
              </div>
            </div>
            <div class="timeline-item__dot"></div>
          </div>
        </div>
        
        <!-- 红茶制作过程 -->
        <h2 class="tea-type-title" v-html="t('timeline.blackTitle')"></h2>
        
        <div class="timeline__wrapper">
          <div class="timeline__line"></div>
          
          <div 
            v-for="(item, index) in blackTeaItems" 
            :key="'black-'+index" 
            class="timeline-item"
            :class="{ 'timeline-item--right': index % 2 !== 0 }"
          >
            <div class="timeline-item__content">
              <div class="timeline-item__year">{{ t(item.year) }}</div>
              <h3>{{ t(item.title) }}</h3>
              <p>{{ t(item.description) }}</p>
              
              <div class="timeline-item__image" v-if="item.image">
                <img :src="item.image" :alt="t(item.title)" />
              </div>
              
              <div class="timeline-item__achievements" v-if="item.achievements && item.achievements.length">
                <h4>{{ t('timeline.achievementsTitle') }}</h4>
                <ul>
                  <li v-for="(achievement, i) in item.achievements" :key="i">
                    {{ t(achievement) }}
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
        <h2 v-html="t('timeline.futureTitle')"></h2>
        <div class="future-vision__content">
          <div class="future-vision__text">
            <p>{{ t('timeline.futureP1') }}</p>
            <p>{{ t('timeline.futureP2') }}</p>
            <router-link :to="currentLanguage === 'en' ? '/en/contact' : '/contact'" class="btn">{{ t('common.contactUs') }}</router-link>
          </div>
          <div class="future-vision__image">
            <img src="/src/assets/images/tea/chuancheng.jpg" :alt="t('timeline.futureImageAlt')" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { t, currentLanguage } from '@/i18n/index.js'

gsap.registerPlugin(ScrollTrigger)

// 绿茶时间线数据
const greenTeaItems = ref([])
// 红茶时间线数据
const blackTeaItems = ref([])

// 根据当前语言生成数据
const generateItems = () => {
  // 绿茶数据
  greenTeaItems.value = [
    {
      year: 'timeline.green.step1.year',
      title: 'timeline.green.step1.title',
      description: 'timeline.green.step1.description',
      image: '/src/assets/images/tea/pexels-gu-ko-2150570603-31756541.jpg',
      achievements: [
        'timeline.green.step1.achievements.0',
        'timeline.green.step1.achievements.1',
        'timeline.green.step1.achievements.2'
      ]
    },
    {
      year: 'timeline.green.step2.year',
      title: 'timeline.green.step2.title',
      description: 'timeline.green.step2.description',
      image: '/src/assets/images/tea/shaqing.png',
      achievements: [
        'timeline.green.step2.achievements.0',
        'timeline.green.step2.achievements.1',
        'timeline.green.step2.achievements.2'
      ]
    },
    {
      year: 'timeline.green.step3.year',
      title: 'timeline.green.step3.title',
      description: 'timeline.green.step3.description',
      image: '/src/assets/images/tea/roulian.jpg',
      achievements: [
        'timeline.green.step3.achievements.0',
        'timeline.green.step3.achievements.1',
        'timeline.green.step3.achievements.2'
      ]
    },
    {
      year: 'timeline.green.step4.year',
      title: 'timeline.green.step4.title',
      description: 'timeline.green.step4.description',
      image: '/src/assets/images/tea/honggan1.jpg',
      achievements: [
        'timeline.green.step4.achievements.0',
        'timeline.green.step4.achievements.1',
        'timeline.green.step4.achievements.2'
      ]
    }
  ]

  // 红茶数据
  blackTeaItems.value = [
    {
      year: 'timeline.black.step1.year',
      title: 'timeline.black.step1.title',
      description: 'timeline.black.step1.description',
      image: '/src/assets/images/tea/pexels-gu-ko-2150570603-31756541.jpg',
      achievements: [
        'timeline.black.step1.achievements.0',
        'timeline.black.step1.achievements.1',
        'timeline.black.step1.achievements.2'
      ]
    },
    {
      year: 'timeline.black.step2.year',
      title: 'timeline.black.step2.title',
      description: 'timeline.black.step2.description',
      image: '/src/assets/images/tea/honggan.jpg',
      achievements: [
        'timeline.black.step2.achievements.0',
        'timeline.black.step2.achievements.1',
        'timeline.black.step2.achievements.2'
      ]
    },
    {
      year: 'timeline.black.step3.year',
      title: 'timeline.black.step3.title',
      description: 'timeline.black.step3.description',
      image: '/src/assets/images/tea/roulian.jpg',
      achievements: [
        'timeline.black.step3.achievements.0',
        'timeline.black.step3.achievements.1',
        'timeline.black.step3.achievements.2'
      ]
    },
    {
      year: 'timeline.black.step4.year',
      title: 'timeline.black.step4.title',
      description: 'timeline.black.step4.description',
      image: '/src/assets/images/tea/fajiao.jpg',
      achievements: [
        'timeline.black.step4.achievements.0',
        'timeline.black.step4.achievements.1',
        'timeline.black.step4.achievements.2'
      ]
    },
    {
      year: 'timeline.black.step5.year',
      title: 'timeline.black.step5.title',
      description: 'timeline.black.step5.description',
      image: '/src/assets/images/tea/hongchahonggan.jpg',
      achievements: [
        'timeline.black.step5.achievements.0',
        'timeline.black.step5.achievements.1',
        'timeline.black.step5.achievements.2'
      ]
    }
  ]
}

// 初始生成数据
generateItems()

// 监听语言变化，重新生成数据
watch(currentLanguage, () => {
  generateItems()
})

// 原有的timelineItems不再使用，但保留以备不时之需
const timelineItems = ref([])

onMounted(() => {
  // 页面标题动画
  gsap.from('.page-header h1', { 
    y: 50, 
    opacity: 0, 
    duration: 1 
  })
  
  // 茶类标题动画
  gsap.from('.tea-type-title', {
    scrollTrigger: {
      trigger: '.tea-type-title',
      start: 'top 80%',
    },
    y: 30,
    opacity: 0,
    duration: 0.8,
    stagger: 0.5
  })
  
  // 时间线动画
  const timelineLines = document.querySelectorAll('.timeline__line')
  timelineLines.forEach((line) => {
    gsap.from(line, {
      scrollTrigger: {
        trigger: line.parentElement,
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: true
      },
      scaleY: 0,
      transformOrigin: 'top center'
    })
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

// 茶类标题
.tea-type-title {
  text-align: center;
  margin: 4rem 0 2rem;
  font-size: 2.5rem;
  
  span {
    color: var(--color-accent);
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
}

// 移动端优化
@media (max-width: 768px) {
  .timeline-header {
    &__content {
      padding: 8rem 0 4rem;
    }
    
    &__title {
      font-size: 2.5rem;
    }
  }
  
  .timeline {
    &__tabs {
      flex-direction: column;
      margin-bottom: 2rem;
      
      button {
        width: 100%;
        margin-bottom: 0.5rem;
      }
    }
  }
  
  .timeline-item {
    &::before {
      left: 15px;
    }
    
    &__content {
      margin-left: 40px;
      width: calc(100% - 40px);
    }
    
    &__year {
      left: 0;
      top: 0;
      transform: none;
      width: 30px;
      height: 30px;
      font-size: 0.8rem;
    }
  }
  
  .future-vision {
    &__grid {
      grid-template-columns: 1fr;
    }
  }
}

@media (max-width: 576px) {
  .timeline-header {
    &__content {
      padding: 6rem 0 3rem;
    }
    
    &__title {
      font-size: 2rem;
    }
  }
  
  .timeline {
    padding: 2.5rem 0;
    
    &__title {
      font-size: 1.5rem;
      margin-bottom: 1.5rem;
    }
    
    &__tabs {
      margin-bottom: 1.5rem;
      
      button {
        padding: 0.5rem;
        font-size: 0.9rem;
      }
    }
  }
  
  .timeline-item {
    margin-bottom: 2rem;
    padding-bottom: 1.5rem;
    
    &__content {
      padding: 1rem;
    }
    
    &__title {
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
    }
    
    &__description {
      font-size: 0.9rem;
      margin-bottom: 1rem;
    }
    
    &__image {
      height: 180px;
      margin-bottom: 1rem;
    }
    
    &__achievements {
      &-title {
        font-size: 1rem;
        margin-bottom: 0.5rem;
      }
      
      &-list {
        font-size: 0.9rem;
        
        li {
          margin-bottom: 0.3rem;
          padding-left: 1.2rem;
          
          &::before {
            width: 6px;
            height: 6px;
            top: 7px;
          }
        }
      }
    }
  }
  
  .future-vision {
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
  
  .vision-card {
    padding: 1rem;
    margin-bottom: 1.5rem;
    
    &__icon {
      width: 50px;
      height: 50px;
      margin-bottom: 1rem;
      
      svg {
        width: 25px;
        height: 25px;
      }
    }
    
    &__title {
      font-size: 1.1rem;
      margin-bottom: 0.5rem;
    }
    
    &__text {
      font-size: 0.9rem;
    }
  }
}
</style> 