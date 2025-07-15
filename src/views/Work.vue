<template>
  <div class="work">
    <!-- 页面标题 -->
    <section class="page-header">
      <div class="container">
        <h1>我们的<span>作品</span></h1>
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
            <h3>项目描述</h3>
            <p>{{ selectedProject.description }}</p>
          </div>
          
          <div class="project-modal__details">
            <h3>项目详情</h3>
            <ul>
              <li><strong>客户:</strong> {{ selectedProject.client }}</li>
              <li><strong>日期:</strong> {{ selectedProject.date }}</li>
              <li><strong>服务:</strong> {{ selectedProject.services }}</li>
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
import teaImage2 from '@/assets/images/tea/VCG41N1062992806.jpg'
import teaImage3 from '@/assets/images/tea/VCG41N1157033140.jpg'
import teaImage4 from '@/assets/images/tea/VCG41N1192944963.jpg'
import teaImage5 from '@/assets/images/tea/VCG41N1295528631.jpg'
import teaImage6 from '@/assets/images/tea/VCG211186850243.jpg'
import teaImage7 from '@/assets/images/tea/VCG212d5d059b8.jpg'
gsap.registerPlugin(ScrollTrigger)

// 分类数据
const categories = ref([
  { id: 'concept', name: '概念设计' },
  { id: 'futuristic', name: '未来主义' },
  { id: 'industrial', name: '工业设计' },
  { id: 'environment', name: '环境设计' }
])

// 项目数据
const projects = ref([
  {
    id: 1,
    title: '未来城市概念',
    category: '概念设计',
    categoryId: 'concept',
    image: cityImage,
    description: '这个项目展示了我们对未来城市的愿景，融合了可持续发展理念和先进技术。我们设计了垂直花园、空中交通系统和自给自足的社区空间，创造一个和谐的未来都市景观。',
    client: '未来城市规划局',
    date: '2025',
    services: '概念设计, 3D建模, 视觉效果',
    gallery: [teaImage, teaImage2, teaImage3]
  },
  {
    id: 2,
    title: '交通工具设计',
    category: '工业设计',
    categoryId: 'industrial',
    image: teaImage,
    description: '这款概念交通工具采用电动推进系统和自动驾驶技术，为未来城市提供高效、环保的交通解决方案。其流线型设计不仅美观，还能最大限度地提高能源效率。',
    client: '新能源交通公司',
    date: '2024',
    services: '产品设计, 工业设计, 概念开发',
    gallery: ['/images/work-2-1.jpg', '/images/work-2-2.jpg']
  },
  {
    id: 3,
    title: '太空殖民地',
    category: '未来主义',
    categoryId: 'futuristic',
    image: teaImage2,
    description: '这个项目探索了人类在其他星球上建立殖民地的可能性。我们设计了模块化居住单元、资源提取设施和生态系统，创造一个可持续的外星生活环境。',
    client: '太空探索机构',
    date: '2026',
    services: '概念设计, 环境设计, 科学咨询',
    gallery: ['/images/work-3-1.jpg', '/images/work-3-2.jpg', '/images/work-3-3.jpg']
  },
  {
    id: 4,
    title: '水下研究站',
    category: '环境设计',
    categoryId: 'environment',
    image: teaImage3,
    description: '这个水下研究站设计用于深海科学研究和海洋资源勘探。其结构能够承受极端水压，同时为研究人员提供舒适的生活和工作环境。',
    client: '海洋研究所',
    date: '2025',
    services: '建筑设计, 环境设计, 工程咨询',
    gallery: ['/images/work-4-1.jpg', '/images/work-4-2.jpg']
  },
  {
    id: 5,
    title: '智能家居系统',
    category: '工业设计',
    categoryId: 'industrial',
    image: teaImage4,
    description: '这套智能家居系统整合了人工智能、物联网和可再生能源技术，为用户提供高效、便捷、环保的生活体验。系统可以根据用户习惯自动调节环境参数，优化能源使用。',
    client: '智能生活科技公司',
    date: '2024',
    services: '产品设计, 用户界面设计, 系统集成',
    gallery: ['/images/work-5-1.jpg', '/images/work-5-2.jpg']
  },
  {
    id: 6,
    title: '生态城市规划',
    category: '环境设计',
    categoryId: 'environment',
    image: teaImage5,
    description: '这个生态城市规划项目旨在创建一个与自然和谐共存的城市环境。我们设计了绿色走廊、雨水收集系统和可再生能源设施，最大限度地减少城市对环境的影响。',
    client: '可持续发展委员会',
    date: '2025',
    services: '城市规划, 景观设计, 环境工程',
    gallery: ['/images/work-6-1.jpg', '/images/work-6-2.jpg', '/images/work-6-3.jpg']
  },
  {
    id: 7,
    title: '生态城市规划',
    category: '环境设计',
    categoryId: 'environment',
    image: teaImage6,
    description: '这个生态城市规划项目旨在创建一个与自然和谐共存的城市环境。我们设计了绿色走廊、雨水收集系统和可再生能源设施，最大限度地减少城市对环境的影响。',
    client: '可持续发展委员会',
    date: '2025',
    services: '城市规划, 景观设计, 环境工程',
    gallery: ['/images/work-6-1.jpg', '/images/work-6-2.jpg', '/images/work-6-3.jpg']
  },
  {
    id: 8,
    title: '生态城市规划',
    category: '环境设计',
    categoryId: 'environment',
    image: teaImage7,
    description: '这个生态城市规划项目旨在创建一个与自然和谐共存的城市环境。我们设计了绿色走廊、雨水收集系统和可再生能源设施，最大限度地减少城市对环境的影响。',
    client: '可持续发展委员会',
    date: '2025',
    services: '城市规划, 景观设计, 环境工程',
    gallery: ['/images/work-6-1.jpg', '/images/work-6-2.jpg', '/images/work-6-3.jpg']
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
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images/work-header.jpg');
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
</style> 