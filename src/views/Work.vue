<template>
  <div class="work">
    <!-- 页面标题 -->
    <section class="page-header">
      <div class="container">
        <h1 v-html="t('products.title')"></h1>
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
            {{ t('products.filter.all') }}
          </button>
          <button 
            v-for="category in categories" 
            :key="category.id" 
            class="filter-btn" 
            :class="{ active: activeCategory === category.id }" 
            @click="setCategory(category.id)"
          >
            {{ t(category.name) }}
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
              <img :src="project.image" :alt="t(project.title)" />
            </div>
            <div class="project-card__overlay">
              <h3>{{ t(project.title) }}</h3>
              <p>{{ t(project.category) }}</p>
              <span class="view-project">{{ t('products.viewProject') }}</span>
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
          <h2>{{ t(selectedProject.title) }}</h2>
          <p>{{ t(selectedProject.category) }}</p>
        </div>
        
        <div class="project-modal__image">
          <img :src="selectedProject.image" :alt="t(selectedProject.title)" />
        </div>
        
        <div class="project-modal__info">
          <div class="project-modal__description">
            <h3>{{ t('products.modal.description') }}</h3>
            <p>{{ t(selectedProject.description) }}</p>
          </div>
          
          <div class="project-modal__details">
            <h3>{{ t('products.modal.details') }}</h3>
            <ul>
              <li><strong>{{ t('products.modal.date') }}:</strong> {{ t(selectedProject.date) }}</li>
              <li><strong>{{ t('products.modal.tags') }}:</strong> {{ t(selectedProject.services) }}</li>
            </ul>
          </div>
        </div>
        
        <div class="project-modal__gallery" v-if="selectedProject.gallery && selectedProject.gallery.length">
          <h3>{{ t('products.modal.gallery') }}</h3>
          <div class="project-modal__gallery-grid">
            <div 
              v-for="(image, index) in selectedProject.gallery" 
              :key="index" 
              class="gallery-item"
            >
              <img :src="image" :alt="`${t(selectedProject.title)} ${t('products.modal.image')} ${index + 1}`" />
            </div>
          </div>
        </div>
        <div class="project-modal__gallery" v-if="selectedProject.title === 'products.items.yulu.title'">
          <h3>{{ t('products.modal.culture') }}</h3>
          <div class="project-modal__gallery-grid">
            <div class="gallery-item">
              <div>
                {{ t('products.items.yulu.culture') }}
              </div>
              <div>
                <img class="w-50px" src="@/assets/images/product/xjp.jpg" alt="">
                {{ t('products.items.yulu.xiStory') }}
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
import { t } from '@/i18n/index.js'
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
  { id: 'green', name: 'products.categories.green' },
  { id: 'black', name: 'products.categories.black' },
  { id: 'flower', name: 'products.categories.flower' },
  { id: 'gift', name: 'products.categories.gift' },
  { id: 'special', name: 'products.categories.special' }
])

// 项目数据
const projects = ref([
  {
    id: 1,
    title: 'products.items.yulu.title',
    category: 'products.categories.green',
    categoryId: 'green',
    image: yulu1,
    description: 'products.items.yulu.description',
    date: 'products.items.yulu.date',
    services: 'products.items.yulu.services',
    gallery: [yulu, yulu1, yulu2]
  },
  {
    id: 2,
    title: 'products.items.lvlin.title',
    category: 'products.categories.green',
    categoryId: 'green',
    image: lvlin,
    description: 'products.items.lvlin.description',
    date: 'products.items.lvlin.date',
    services: 'products.items.lvlin.services',
    gallery: [lvlin,lvlin1,lvlin2]
  },
  {
    id: 3,
    title: 'products.items.lichuan.title',
    category: 'products.categories.black',
    categoryId: 'black',
    image: lichuan,
    description: 'products.items.lichuan.description',
    date: 'products.items.lichuan.date',
    services: 'products.items.lichuan.services',
    gallery: [lichuan, lichuan1, lichuan2]
  },
  {
    id: 4,
    title: 'products.items.tengcha.title',
    category: 'products.categories.special',
    categoryId: 'special',
    image: tencai,
    description: 'products.items.tengcha.description',
    date: 'products.items.tengcha.date',
    services: 'products.items.tengcha.services',
    gallery: [tencai, tencai1, tencai2]
  }
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