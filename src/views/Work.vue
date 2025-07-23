<template>
  <div class="work">
    <!-- 页面标题 -->
    <section class="page-header">
      <div class="container">
        <h1>我们的<span>茶品</span></h1>
      </div>
    </section>
    
    <!-- 作品筛选 -->
    <section class="work-filter">
      <div class="container">
        <div class="work-filter__categories">
          <button 
            class="filter-btn" 
            :class="{ active: activeCategory === 'all' }" 
            @click="setCategory('all')"
          >
            全部
          </button>
          <button 
            v-for="category in categories" 
            :key="category.id" 
            class="filter-btn" 
            :class="{ active: activeCategory === category.id }" 
            @click="setCategory(category.id)"
          >
            {{ category.name }}
          </button>
        </div>
      </div>
    </section>
    
    <!-- 作品展示 -->
    <section class="work-showcase">
      <div class="container">
        <div class="work-showcase__grid">
          <div 
            v-for="project in filteredProjects" 
            :key="project.id" 
            class="project-card"
            @click="openProject(project)"
          >
            <div class="project-card__image">
              <img :src="project.image" :alt="project.title" />
            </div>
            <div class="project-card__overlay">
              <h3>{{ project.title }}</h3>
              <p>{{ project.category }}</p>
              <span class="view-project">查看项目</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- 项目详情弹窗 -->
    <div class="project-modal" v-if="selectedProject" @click.self="closeProject">
      <div class="project-modal__content">
        <button class="project-modal__close" @click="closeProject">&times;</button>
        
        <div class="project-modal__header">
          <h2>{{ selectedProject.title }}</h2>
          <p>{{ selectedProject.category }}</p>
        </div>
        
        <div class="project-modal__image">
          <img :src="selectedProject.image" :alt="selectedProject.title" />
        </div>
        
        <div class="project-modal__info">
          <div class="project-modal__description">
            <h3>茶描述</h3>
            <p>{{ selectedProject.description }}</p>
          </div>
          
          <div class="project-modal__details">
            <h3>茶详情</h3>
            <ul>
              <li><strong>日期:</strong> {{ selectedProject.date }}</li>
              <li><strong>标签:</strong> {{ selectedProject.services }}</li>
            </ul>
          </div>
        </div>
        
        <div class="project-modal__gallery" v-if="selectedProject.gallery && selectedProject.gallery.length">
          <h3>项目画廊</h3>
          <div class="project-modal__gallery-grid">
            <div 
              v-for="(image, index) in selectedProject.gallery" 
              :key="index" 
              class="gallery-item"
            >
              <img :src="image" :alt="`${selectedProject.title} 图片 ${index + 1}`" />
            </div>
          </div>
        </div>
        <div class="project-modal__gallery" v-if="selectedProject.title === '恩施玉露'">
          <h3>茶文化</h3>
          <div class="project-modal__gallery-grid">
            <div class="gallery-item">
              <div>
                恩施玉露是中国绿茶制作传统技艺中，唯一采用蒸汽杀青的绿茶制作技艺。最早的文字记载是公元780年唐代的《茶经》 它是中国乃至世界现存最早、最完整、最全面介绍茶的第一部专著，被誉为茶叶百科全书。 日本在唐代之后，从中国引进茶树，学习茶叶制作技艺，蒸汽杀青的绿茶制作技艺成为日本主要的绿茶茶叶制作技艺， 其主要的绿茶也称为玉露（Gyokuro）。
              </div>
              <div>
                <img class="w-50px" src="@/assets/images/product/xjp.jpg" alt="">
                2018年夏天, 习主席邀请印度总理品尝恩施玉露. China President Xi entertained India's PM Modi with Enshi Yulu tea  in 2018
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import cityImage from '@/assets/images/tea/VCG21gic3044108.jpg'
import teaImage from '@/assets/images/tea/VCG41N945231298.jpg'
import yulu from '@/assets/images/product/yulu.jpg'
import yulu1 from '@/assets/images/product/yulu1.jpg'
import yulu2 from '@/assets/images/product/yulu2.jpg'

import lichuan from '@/assets/images/product/lichuan.webp'
import lichuan1 from '@/assets/images/product/lichuan1.png'
import lichuan2 from '@/assets/images/product/lichuan2.webp'

import tencai from '@/assets/images/product/tc.webp'
import tencai1 from '@/assets/images/product/tc1.webp'
import tencai2 from '@/assets/images/product/tc2.webp'

import lvlin from '@/assets/images/product/lvlin.webp'
import lvlin1 from '@/assets/images/product/lvlin1.webp'
import lvlin2 from '@/assets/images/product/lvlin2.jpg'


gsap.registerPlugin(ScrollTrigger)

// 分类数据
const categories = ref([
  { id: 'green', name: '绿茶系列' },
  { id: 'black', name: '红茶系列' },
  { id: 'flower', name: '花茶系列' },
  { id: 'gift', name: '礼盒系列' },
  { id: 'special', name: '特色茶品' }
])

// 项目数据
const projects = ref([
  {
    id: 1,
    title: '恩施玉露',
    category: '绿茶系列',
    categoryId: 'green',
    image: yulu1,
    description: '恩施玉露是湖北恩施州的特产名茶，属于绿茶类。产于世界硒都恩施，富含硒元素，具有独特的保健功效。其外形挺直略扁，色泽翠绿，香气清高持久，滋味鲜爽回甘，汤色嫩绿明亮。采用传统工艺精制而成，保留了茶叶的天然营养成分。',
    date: '2025春茶',
    services: '高山云雾茶, 富硒绿茶, 一级茶叶',
    gallery: [yulu, yulu1, yulu2]
  },
  {
    id: 2,
    title: '绿林翠峰',
    category: '绿茶系列',
    categoryId: 'green',
    image: lvlin,
    description: '富硒绿茶采自恩施海拔1200米以上的高山茶园，土壤富含硒元素，茶叶自然吸收硒元素。经过传统杀青、揉捻、烘干等工艺精制而成。茶叶条索紧结，色泽翠绿，香气高爽，滋味鲜醇，具有绿茶的清香和富硒茶的独特口感。',
    date: '2025春茶',
    services: '高山绿茶, 富硒茶, 有机茶',
    gallery: [lvlin,lvlin1,lvlin2]
  },
  {
    id: 3,
    title: '利川红',
    category: '红茶系列',
    categoryId: 'black',
    image: lichuan,
    description: '利川红是利川工夫红茶简称，其茶叶原料选用中茶108、鄂茶1号、鄂茶10号、槠叶齐及地方群体种制作。利川产茶历史悠久，19世纪中叶，利川茶农开始为英资买办商人加工出口红茶，1876年随着宜昌被列为对外通商口岸，利川毛坝成为出口宜红工夫红茶的核心产区之一，1951年利川被国家列为宜红工夫红茶的主要产区，利川红茶已有170多年生产加工历史。',
    date: '2025春茶',
    services: '红茶, 功夫茶, 利川红',
    gallery: [lichuan, lichuan1, lichuan2]
  },
  {
    id: 4,
    title: '藤茶',
    category: '特色茶品',
    categoryId: 'special',
    image: tencai,
    description: '藤茶，学名显齿蛇葡萄，是葡萄科蛇葡萄属显齿蛇葡萄的嫩茎叶，因其茎杆如藤，故称藤茶。藤茶性寒，味甘淡，具有清热解毒、消炎利咽、降脂降压、增强免疫、抗衰老等功效。',
    date: '2025特级茶',
    services: '藤茶, 龙须茶, 降脂降压',
    gallery: [tencai, tencai1, tencai2]
  },
  // {
  //   id: 5,
  //   title: '富硒茶礼盒',
  //   category: '礼盒系列',
  //   categoryId: 'gift',
  //   image: teaImage5,
  //   description: '富硒茶礼盒包含恩施精选绿茶和红茶，采用高档礼盒包装，是送礼的理想选择。礼盒内含恩施玉露、富硒绿茶和恩施红茶，让收礼者能够品尝到不同种类的恩施富硒茶。每款茶叶都采用独立真空包装，保证茶叶的新鲜度和香气。',
  //   date: '2025年礼品系列',
  //   services: '礼品茶, 组合装, 高档包装',
  //   gallery: [teaImage7, teaImage]
  // },
  // {
  //   id: 6,
  //   title: '有机富硒茶',
  //   category: '特色茶品',
  //   categoryId: 'special',
  //   image: teaImage6,
  //   description: '有机富硒茶采用有机种植方式，不使用任何化学肥料和农药，生长在纯净的高山环境中。茶园位于恩施海拔1500米以上的高山地区，远离污染，土壤天然富含硒元素。茶叶经过严格的有机认证，保证了产品的纯净和安全。具有清香持久，滋味鲜爽的特点。',
  //   date: '2025有机认证茶',
  //   services: '有机茶, 富硒茶, 生态茶',
  //   gallery: [teaPlantation, teaLeaves]
  // },
  // {
  //   id: 7,
  //   title: '腾茶',
  //   category: '特色茶品',
  //   categoryId: 'special',
  //   image: teaImage7,
  //   description: '富硒老青茶是恩施特有的传统工艺茶，采用恩施高山富硒茶园的茶叶，经过特殊工艺加工而成。茶叶经过轻度发酵，介于绿茶和红茶之间，具有绿茶的清香和红茶的醇厚。滋味独特，回甘持久，汤色橙黄明亮，是恩施茶中的特色品种。',
  //   date: '2025特色茶',
  //   services: '传统工艺, 富硒茶, 特色茶品',
  //   gallery: [teaImage, teaImage4, teaImage5]
  // },
  // {
  //   id: 8,
  //   title: '高山野生茶',
  //   category: '特色茶品',
  //   categoryId: 'special',
  //   image: cityImage,
  //   description: '高山野生茶采自恩施深山中自然生长的野生茶树，这些茶树生长在海拔1800米以上的原始森林中，未经人工培育，完全靠天然生长。茶叶中富含多种天然活性物质和微量元素，特别是硒元素含量极高。滋味独特，香气高锐持久，回甘明显，是难得的天然珍品。',
  //   date: '2025限量版',
  //   services: '野生茶, 富硒茶, 珍稀茶品',
  //   gallery: [teaLeaves, teaPlantation]
  // }
])

const activeCategory = ref('all')
const selectedProject = ref(null)

// 根据分类筛选项目
const filteredProjects = computed(() => {
  if (activeCategory.value === 'all') {
    return projects.value
  } else {
    return projects.value.filter(project => project.categoryId === activeCategory.value)
  }
})

// 设置当前分类
const setCategory = (category) => {
  activeCategory.value = category
}

// 打开项目详情
const openProject = (project) => {
  selectedProject.value = project
  document.body.style.overflow = 'hidden'
}

// 关闭项目详情
const closeProject = () => {
  selectedProject.value = null
  document.body.style.overflow = ''
}

onMounted(() => {
  // 页面标题动画
  gsap.from('.page-header h1', { 
    y: 50, 
    opacity: 0, 
    duration: 1 
  })
  
  // 筛选按钮动画
  gsap.from('.filter-btn', {
    y: 20,
    opacity: 0,
    stagger: 0.1,
    duration: 0.5,
    delay: 0.5
  })
  
  // 项目卡片动画
  gsap.from('.project-card', {
    scrollTrigger: {
      trigger: '.work-showcase__grid',
      start: 'top 80%',
    },
    y: 50,
    opacity: 0,
    stagger: 0.1,
    duration: 0.8
  })
})
</script>

<style lang="scss" scoped>
.work {
  overflow-x: hidden;
}

// 页面标题
.page-header {
  height: 40vh;
  min-height: 300px;
  background-color: var(--color-bg);
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('@/assets/images/tea/tea-plantation.jpg');
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

// 作品筛选
.work-filter {
  padding: 3rem 0;
  
  &__categories {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }
}

.filter-btn {
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.1);
  color: var(--color-text);
  padding: 0.6rem 1.5rem;
  border-radius: 30px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
  
  &:hover {
    border-color: var(--color-accent);
    color: var(--color-accent);
  }
  
  &.active {
    background-color: var(--color-accent);
    border-color: var(--color-accent);
    color: var(--color-bg);
  }
}

// 作品展示
.work-showcase {
  padding: 0 0 6rem;
  
  &__grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
  }
}

.project-card {
  position: relative;
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
  height: 350px;
  
  &__image {
    width: 100%;
    height: 100%;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.6s ease;
    }
  }
  
  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.2));
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 2rem;
    opacity: 0;
    transition: opacity 0.4s ease;
    
    h3 {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
    }
    
    p {
      color: var(--color-accent);
      margin-bottom: 1rem;
    }
    
    .view-project {
      font-size: 0.9rem;
      text-transform: uppercase;
      letter-spacing: 1px;
      position: relative;
      display: inline-block;
      
      &::after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 0;
        height: 2px;
        background-color: var(--color-accent);
        transition: width 0.3s ease;
      }
    }
  }
  
  &:hover {
    .project-card__image img {
      transform: scale(1.1);
    }
    
    .project-card__overlay {
      opacity: 1;
      
      .view-project::after {
        width: 100%;
      }
    }
  }
}

// 项目详情弹窗
.project-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  overflow-y: auto;
  
  &__content {
    background-color: var(--color-bg);
    max-width: 1000px;
    width: 100%;
    border-radius: 5px;
    position: relative;
    max-height: 90vh;
    overflow-y: auto;
  }
  
  &__close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: transparent;
    border: none;
    color: var(--color-text);
    font-size: 2rem;
    cursor: pointer;
    z-index: 10;
    
    &:hover {
      color: var(--color-accent);
    }
  }
  
  &__header {
    padding: 2rem;
    
    h2 {
      font-size: 2.5rem;
      margin-bottom: 0.5rem;
    }
    
    p {
      color: var(--color-accent);
      font-size: 1.1rem;
    }
  }
  
  &__image {
    img {
      width: 100%;
      height: auto;
    }
  }
  
  &__info {
    padding: 2rem;
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 2rem;
    
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
    
    h3 {
      margin-bottom: 1rem;
      color: var(--color-accent);
    }
    
    p {
      line-height: 1.8;
    }
    
    ul {
      list-style: none;
      
      li {
        margin-bottom: 0.8rem;
        
        strong {
          color: var(--color-accent);
          margin-right: 0.5rem;
        }
      }
    }
  }
  
  &__gallery {
    padding: 0 2rem 2rem;
    
    h3 {
      margin-bottom: 1.5rem;
      color: var(--color-accent);
    }
  }
  
  &__gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
    
    .gallery-item {
      img {
        width: 100%;
        height: auto;
        border-radius: 5px;
        transition: transform 0.3s ease;
        
        &:hover {
          transform: scale(1.03);
        }
      }
    }
  }
}

// 移动端优化
@media (max-width: 768px) {
  .work-header {
    &__content {
      padding: 8rem 0 4rem;
    }
    
    &__title {
      font-size: 2.5rem;
    }
  }
  
  .projects {
    &__filters {
      flex-wrap: wrap;
      justify-content: center;
      gap: 0.5rem;
      margin-bottom: 2rem;
    }
    
    &__grid {
      grid-template-columns: 1fr;
    }
  }
}

@media (max-width: 576px) {
  .work-header {
    &__content {
      padding: 6rem 0 3rem;
    }
    
    &__title {
      font-size: 2rem;
    }
  }
  
  .projects {
    padding: 2.5rem 0;
    
    &__title {
      font-size: 1.5rem;
      margin-bottom: 1.5rem;
    }
    
    &__filters {
      margin-bottom: 1.5rem;
      
      button {
        padding: 0.5rem 0.8rem;
        font-size: 0.85rem;
      }
    }
  }
  
  .project-card {
    margin-bottom: 1.5rem;
    
    &__image {
      height: 200px;
    }
    
    &__content {
      padding: 1rem;
    }
    
    &__title {
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
    }
    
    &__category {
      font-size: 0.8rem;
      margin-bottom: 0.8rem;
    }
    
    &__description {
      font-size: 0.9rem;
      margin-bottom: 1rem;
    }
    
    &__meta {
      font-size: 0.8rem;
      
      &-item {
        margin-right: 0.8rem;
      }
    }
  }
}
</style> 