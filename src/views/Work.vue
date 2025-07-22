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
import teaLeaves from '@/assets/images/tea/tea-leaves.jpg'
import teaPlantation from '@/assets/images/tea/tea-plantation.jpg'
gsap.registerPlugin(ScrollTrigger)

// 分类数据
const categories = ref([
  { id: 'green', name: '绿茶系列' },
  { id: 'black', name: '红茶系列' },
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
    image: teaImage,
    description: '恩施玉露是湖北恩施州的特产名茶，属于绿茶类。产于世界硒都恩施，富含硒元素，具有独特的保健功效。其外形挺直略扁，色泽翠绿，香气清高持久，滋味鲜爽回甘，汤色嫩绿明亮。采用传统工艺精制而成，保留了茶叶的天然营养成分。',
    client: '恩施玉露茶业有限公司',
    date: '2025春茶',
    services: '高山云雾茶, 富硒绿茶, 一级茶叶',
    gallery: [teaImage2, teaImage3, teaPlantation]
  },
  {
    id: 2,
    title: '富硒绿茶',
    category: '绿茶系列',
    categoryId: 'green',
    image: teaImage2,
    description: '富硒绿茶采自恩施海拔1200米以上的高山茶园，土壤富含硒元素，茶叶自然吸收硒元素。经过传统杀青、揉捻、烘干等工艺精制而成。茶叶条索紧结，色泽翠绿，香气高爽，滋味鲜醇，具有绿茶的清香和富硒茶的独特口感。',
    client: '恩施高山茶业',
    date: '2025春茶',
    services: '高山绿茶, 富硒茶, 有机茶',
    gallery: [teaImage6, teaLeaves]
  },
  {
    id: 3,
    title: '恩施红茶',
    category: '红茶系列',
    categoryId: 'black',
    image: teaImage3,
    description: '恩施红茶采用富硒土壤培育的茶叶为原料，经过萎凋、揉捻、发酵、烘干等传统工艺精制而成。茶叶条索紧结，色泽乌润，香气高锐持久，滋味醇厚甘爽，汤色红艳明亮。富含茶多酚、氨基酸等营养成分，并富含硒元素，具有很高的保健价值。',
    client: '恩施红茶专业合作社',
    date: '2025春茶',
    services: '红茶, 富硒茶, 高山茶',
    gallery: [teaImage4, teaImage7]
  },
  {
    id: 4,
    title: '金骏眉红茶',
    category: '红茶系列',
    categoryId: 'black',
    image: teaImage4,
    description: '恩施金骏眉红茶选用恩施高山茶园的嫩芽为原料，经过传统工艺精制而成。茶叶外形紧结匀整，色泽乌黑油润，内质香高持久，滋味醇厚甘爽，汤色红亮，叶底红匀明亮。富含多种氨基酸和微量元素，特别是硒元素含量丰富，具有独特的保健功效。',
    client: '恩施茶叶研究所',
    date: '2025特级茶',
    services: '特级红茶, 富硒茶, 礼品茶',
    gallery: [teaImage5, teaImage6]
  },
  {
    id: 5,
    title: '富硒茶礼盒',
    category: '礼盒系列',
    categoryId: 'gift',
    image: teaImage5,
    description: '富硒茶礼盒包含恩施精选绿茶和红茶，采用高档礼盒包装，是送礼的理想选择。礼盒内含恩施玉露、富硒绿茶和恩施红茶，让收礼者能够品尝到不同种类的恩施富硒茶。每款茶叶都采用独立真空包装，保证茶叶的新鲜度和香气。',
    client: '恩施茶业集团',
    date: '2025年礼品系列',
    services: '礼品茶, 组合装, 高档包装',
    gallery: [teaImage7, teaImage]
  },
  {
    id: 6,
    title: '有机富硒茶',
    category: '特色茶品',
    categoryId: 'special',
    image: teaImage6,
    description: '有机富硒茶采用有机种植方式，不使用任何化学肥料和农药，生长在纯净的高山环境中。茶园位于恩施海拔1500米以上的高山地区，远离污染，土壤天然富含硒元素。茶叶经过严格的有机认证，保证了产品的纯净和安全。具有清香持久，滋味鲜爽的特点。',
    client: '恩施有机茶业',
    date: '2025有机认证茶',
    services: '有机茶, 富硒茶, 生态茶',
    gallery: [teaPlantation, teaLeaves]
  },
  {
    id: 7,
    title: '富硒老青茶',
    category: '特色茶品',
    categoryId: 'special',
    image: teaImage7,
    description: '富硒老青茶是恩施特有的传统工艺茶，采用恩施高山富硒茶园的茶叶，经过特殊工艺加工而成。茶叶经过轻度发酵，介于绿茶和红茶之间，具有绿茶的清香和红茶的醇厚。滋味独特，回甘持久，汤色橙黄明亮，是恩施茶中的特色品种。',
    client: '恩施传统茶艺研究所',
    date: '2025特色茶',
    services: '传统工艺, 富硒茶, 特色茶品',
    gallery: [teaImage, teaImage3]
  },
  {
    id: 8,
    title: '高山野生茶',
    category: '特色茶品',
    categoryId: 'special',
    image: cityImage,
    description: '高山野生茶采自恩施深山中自然生长的野生茶树，这些茶树生长在海拔1800米以上的原始森林中，未经人工培育，完全靠天然生长。茶叶中富含多种天然活性物质和微量元素，特别是硒元素含量极高。滋味独特，香气高锐持久，回甘明显，是难得的天然珍品。',
    client: '恩施野生茶研究中心',
    date: '2025限量版',
    services: '野生茶, 富硒茶, 珍稀茶品',
    gallery: [teaLeaves, teaPlantation]
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
</style> 