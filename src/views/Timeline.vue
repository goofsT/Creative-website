<template>
  <div class="timeline">
    <!-- 页面标题 -->
    <section class="page-header">
      <div class="container">
        <h1>茶叶<span>制作过程</span></h1>
      </div>
    </section>
    
    <!-- 时间线内容 -->
    <section class="timeline-content">
      <div class="container">
        <!-- 绿茶制作过程 -->
        <h2 class="tea-type-title">绿茶<span>制作工艺</span></h2>
        
        <div class="timeline__wrapper">
          <div class="timeline__line"></div>
          
          <div 
            v-for="(item, index) in greenTeaItems" 
            :key="'green-'+index" 
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
                <h4>主要工艺要点</h4>
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
        
        <!-- 红茶制作过程 -->
        <h2 class="tea-type-title">红茶<span>制作工艺</span></h2>
        
        <div class="timeline__wrapper">
          <div class="timeline__line"></div>
          
          <div 
            v-for="(item, index) in blackTeaItems" 
            :key="'black-'+index" 
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
                <h4>主要工艺要点</h4>
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
        <h2>茶文化<span>传承</span></h2>
        <div class="future-vision__content">
          <div class="future-vision__text">
            <p>富硒茶的制作工艺凝聚了数百年的智慧结晶，我们致力于将这一传统工艺与现代科技相结合，创造更健康、更优质的茶叶产品。</p>
            <p>我们期待与您一起，品味自然馈赠的健康茶饮，共同传承中华茶文化。</p>
            <router-link to="/contact" class="btn">联系我们</router-link>
          </div>
          <div class="future-vision__image">
            <img src="/src/assets/images/tea/tea-cup.jpg" alt="茶文化传承" />
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

// 绿茶时间线数据
const greenTeaItems = ref([
  {
    year: '第一步',
    title: '鲜叶采摘',
    description: '富硒绿茶的制作始于精心采摘。采茶工人在清晨露水未干时采摘一芽一叶或一芽二叶的嫩芽，确保茶叶品质的基础。富硒土壤培育的茶树，其叶片含有丰富的硒元素，对人体健康极为有益。',
    image: '/src/assets/images/tea/pexels-gu-ko-2150570603-31756541.jpg',
    achievements: [
      '选择富硒土壤区域的茶园',
      '严格把控采摘标准',
      '保持鲜叶完整度'
    ]
  },
  {
    year: '第二步',
    title: '杀青工艺',
    description: '绿茶制作的关键步骤是杀青，通过高温迅速破坏茶叶中的酶活性，阻止氧化，保留茶叶的绿色和鲜爽。杀青通常采用锅炒或蒸汽方式，温度控制在120-130℃，时间约为3-5分钟。',
    image: '/src/assets/images/tea/VCG211244284652.png',
    achievements: [
      '精准控制杀青温度',
      '掌握茶叶变化状态',
      '保留茶叶中的有效成分'
    ]
  },
  {
    year: '第三步',
    title: '揉捻成型',
    description: '杀青后的茶叶需要通过揉捻使其成型。揉捻过程使茶叶卷曲成条形或珠形，同时促进茶汁外溢，增强茶叶风味。绿茶的揉捻力度较轻，以保持茶叶的自然形态。',
    image: '/src/assets/images/tea/VCG211319770239.jpg',
    achievements: [
      '控制揉捻力度和时间',
      '形成特色茶形',
      '保持茶叶完整性'
    ]
  },
  {
    year: '第四步',
    title: '烘干精制',
    description: '最后一步是烘干，将茶叶中的水分降至5%以下，确保茶叶可以长期保存。绿茶烘干温度一般控制在80-100℃，烘干过程还能进一步形成茶叶的香气。烘干后的茶叶经过筛选、分级、包装，成为最终的富硒绿茶产品。',
    image: '/src/assets/images/tea/VCG211522801755.png',
    achievements: [
      '控制烘干温度曲线',
      '确保茶叶均匀干燥',
      '精细分级包装'
    ]
  }
])

// 红茶时间线数据
const blackTeaItems = ref([
  {
    year: '第一步',
    title: '鲜叶采摘',
    description: '富硒红茶的制作同样始于精心采摘。红茶一般采摘一芽二叶或一芽三叶，相比绿茶可以采用稍成熟的叶片。富硒土壤培育的茶树所产茶叶，富含硒元素，具有更高的营养价值。',
    image: '/src/assets/images/tea/pexels-anna-pou-8330364.jpg',
    achievements: [
      '选择富硒土壤茶园',
      '采摘适合制作红茶的茶叶',
      '确保鲜叶质量'
    ]
  },
  {
    year: '第二步',
    title: '萎凋工艺',
    description: '红茶制作中萎凋是非常重要的步骤。采摘的鲜叶需要铺放在萎凋槽中，在适宜的温度和湿度下进行12-18小时的萎凋。这一过程中，茶叶失去部分水分，叶片变软，为后续发酵做准备。',
    image: '/src/assets/images/tea/VCG211186850243.jpg',
    achievements: [
      '控制萎凋环境温湿度',
      '定期翻动茶叶确保均匀萎凋',
      '判断萎凋程度的适宜性'
    ]
  },
  {
    year: '第三步',
    title: '揉捻破碎',
    description: '萎凋后的茶叶需要进行揉捻，这一步骤会破坏茶叶细胞组织，使茶多酚与氧气充分接触，为后续发酵创造条件。红茶的揉捻力度较大，时间也较长，以充分破坏叶片组织。',
    image: '/src/assets/images/tea/VCG211574899634.jpg',
    achievements: [
      '控制揉捻力度和时间',
      '确保茶叶细胞充分破碎',
      '促进茶汁外溢'
    ]
  },
  {
    year: '第四步',
    title: '发酵工艺',
    description: '红茶制作的特色在于发酵过程。揉捻后的茶叶在适宜的温湿度环境下进行氧化发酵，茶多酚在酶的作用下氧化为茶黄素、茶红素等物质，形成红茶特有的色泽、香气和滋味。',
    image: '/src/assets/images/tea/VCG211514259609.jpg',
    achievements: [
      '控制发酵环境',
      '监测发酵程度',
      '把握最佳发酵时间点'
    ]
  },
  {
    year: '第五步',
    title: '烘干精制',
    description: '发酵完成后，需要通过烘干停止发酵过程并降低茶叶水分含量。红茶烘干温度一般为80-90℃，烘干过程还能进一步形成红茶特有的香气。烘干后的茶叶经过筛选、分级、包装，成为最终的富硒红茶产品。',
    image: '/src/assets/images/tea/VCG211522801789.png',
    achievements: [
      '控制烘干温度和时间',
      '确保茶叶均匀干燥',
      '精细分级包装'
    ]
  }
])

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