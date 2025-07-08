<template>
  <div class="contact">
    <!-- 页面标题 -->
    <section class="page-header">
      <div class="container">
        <h1>联系<span>我们</span></h1>
      </div>
    </section>
    
    <!-- 联系内容 -->
    <section class="contact-content">
      <div class="container">
        <div class="contact-content__grid">
          <div class="contact-form">
            <h2>发送<span>消息</span></h2>
            <p>无论您有任何问题、建议或合作意向，都欢迎与我们联系。我们将尽快回复您。</p>
            
            <form @submit.prevent="submitForm">
              <div class="form-group">
                <label for="name">姓名</label>
                <input 
                  type="text" 
                  id="name" 
                  v-model="form.name" 
                  required 
                  placeholder="请输入您的姓名"
                >
              </div>
              
              <div class="form-group">
                <label for="email">电子邮箱</label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="form.email" 
                  required 
                  placeholder="请输入您的电子邮箱"
                >
              </div>
              
              <div class="form-group">
                <label for="subject">主题</label>
                <input 
                  type="text" 
                  id="subject" 
                  v-model="form.subject" 
                  required 
                  placeholder="请输入消息主题"
                >
              </div>
              
              <div class="form-group">
                <label for="message">消息</label>
                <textarea 
                  id="message" 
                  v-model="form.message" 
                  required 
                  placeholder="请输入您的消息内容"
                  rows="6"
                ></textarea>
              </div>
              
              <button type="submit" class="btn" :disabled="isSubmitting">
                {{ isSubmitting ? '发送中...' : '发送消息' }}
              </button>
              
              <div class="form-message" v-if="formMessage">
                {{ formMessage }}
              </div>
            </form>
          </div>
          
          <div class="contact-info">
            <div class="contact-info__item">
              <div class="contact-info__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </div>
              <div class="contact-info__content">
                <h3>电子邮箱</h3>
                <p><a href="mailto:info@example.com">info@example.com</a></p>
              </div>
            </div>
            
            <div class="contact-info__item">
              <div class="contact-info__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <div class="contact-info__content">
                <h3>电话</h3>
                <p><a href="tel:+1234567890">+123 456 7890</a></p>
              </div>
            </div>
            
            <div class="contact-info__item">
              <div class="contact-info__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
              <div class="contact-info__content">
                <h3>地址</h3>
                <p>北京市朝阳区<br>创意设计中心501室</p>
              </div>
            </div>
            
            <div class="contact-info__item">
              <div class="contact-info__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              </div>
              <div class="contact-info__content">
                <h3>工作时间</h3>
                <p>周一至周五: 9:00 - 18:00<br>周六、周日: 休息</p>
              </div>
            </div>
            
            <div class="contact-info__social">
              <h3>关注我们</h3>
              <div class="social-links">
                <a href="#" aria-label="Instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="#" aria-label="Facebook">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <a href="#" aria-label="Twitter">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
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
    
    <!-- 地图区域 -->
    <section class="map-section">
      <div class="map-placeholder">
        <div class="map-overlay">
          <h3>我们的位置</h3>
          <p>北京市朝阳区创意设计中心</p>
          <a href="#" class="btn btn--small">查看地图</a>
        </div>
      </div>
    </section>
    
    <!-- 常见问题 -->
    <section class="faq-section">
      <div class="container">
        <h2>常见<span>问题</span></h2>
        <div class="faq-grid">
          <div class="faq-item" v-for="(faq, index) in faqs" :key="index">
            <div 
              class="faq-question" 
              :class="{ 'active': activeFaq === index }"
              @click="toggleFaq(index)"
            >
              <h3>{{ faq.question }}</h3>
              <span class="faq-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </span>
            </div>
            <div class="faq-answer" :class="{ 'active': activeFaq === index }">
              <p>{{ faq.answer }}</p>
            </div>
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

// 表单数据
const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const formMessage = ref('')

// 提交表单
const submitForm = () => {
  isSubmitting.value = true
  
  // 模拟表单提交
  setTimeout(() => {
    formMessage.value = '感谢您的留言！我们将尽快回复您。'
    isSubmitting.value = false
    
    // 重置表单
    form.value = {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
    
    // 清除成功消息
    setTimeout(() => {
      formMessage.value = ''
    }, 5000)
  }, 1500)
}

// FAQ数据
const faqs = ref([
  {
    question: '你们提供哪些服务？',
    answer: '我们提供概念设计、3D建模、视觉效果、工业设计、环境设计等服务，涵盖电影、游戏、建筑和产品设计等多个领域。'
  },
  {
    question: '如何开始一个项目合作？',
    answer: '您可以通过本页面的联系表单、电子邮件或电话与我们联系，描述您的项目需求。我们会安排初步咨询，了解详情后提供定制化的解决方案和报价。'
  },
  {
    question: '项目周期通常是多久？',
    answer: '项目周期取决于项目的规模和复杂度。小型项目可能需要2-4周，中型项目通常需要1-3个月，大型项目可能需要3-6个月或更长时间。我们会在项目开始前提供详细的时间表。'
  },
  {
    question: '你们是否提供远程合作？',
    answer: '是的，我们提供全球远程合作服务。通过视频会议、协作工具和定期更新，我们可以与世界各地的客户高效合作。'
  },
  {
    question: '如何保护我的创意和知识产权？',
    answer: '我们高度重视客户的知识产权。在开始合作前，我们会签署保密协议(NDA)，确保您的创意和商业信息得到保护。项目完成后，除非获得您的明确许可，否则我们不会公开展示相关作品。'
  }
])

const activeFaq = ref(null)

// 切换FAQ展开/收起状态
const toggleFaq = (index) => {
  if (activeFaq.value === index) {
    activeFaq.value = null
  } else {
    activeFaq.value = index
  }
}

onMounted(() => {
  // 页面标题动画
  gsap.from('.page-header h1', { 
    y: 50, 
    opacity: 0, 
    duration: 1 
  })
  
  // 联系表单动画
  gsap.from('.contact-form', {
    scrollTrigger: {
      trigger: '.contact-content',
      start: 'top 80%',
    },
    x: -50,
    opacity: 0,
    duration: 0.8
  })
  
  // 联系信息动画
  gsap.from('.contact-info__item', {
    scrollTrigger: {
      trigger: '.contact-info',
      start: 'top 80%',
    },
    y: 30,
    opacity: 0,
    stagger: 0.2,
    duration: 0.6
  })
  
  // 地图动画
  gsap.from('.map-overlay', {
    scrollTrigger: {
      trigger: '.map-section',
      start: 'top 80%',
    },
    y: 30,
    opacity: 0,
    duration: 0.8
  })
  
  // FAQ动画
  gsap.from('.faq-section h2', {
    scrollTrigger: {
      trigger: '.faq-section',
      start: 'top 80%',
    },
    y: 30,
    opacity: 0,
    duration: 0.8
  })
  
  gsap.from('.faq-item', {
    scrollTrigger: {
      trigger: '.faq-grid',
      start: 'top 80%',
    },
    y: 30,
    opacity: 0,
    stagger: 0.15,
    duration: 0.6
  })
})
</script>

<style lang="scss" scoped>
.contact {
  overflow-x: hidden;
}

// 页面标题
.page-header {
  height: 40vh;
  min-height: 300px;
  background-color: var(--color-bg);
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images/contact-header.jpg');
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

// 联系内容
.contact-content {
  padding: 6rem 0;
  
  &__grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    
    @media (max-width: 992px) {
      grid-template-columns: 1fr;
      gap: 4rem;
    }
  }
}

// 联系表单
.contact-form {
  h2 {
    margin-bottom: 1.5rem;
    
    span {
      color: var(--color-accent);
    }
  }
  
  p {
    margin-bottom: 2rem;
    color: #ccc;
    line-height: 1.6;
  }
  
  .form-group {
    margin-bottom: 1.5rem;
    
    label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: 600;
    }
    
    input, textarea {
      width: 100%;
      padding: 0.8rem 1rem;
      background-color: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: var(--color-text);
      border-radius: 5px;
      font-size: 1rem;
      transition: var(--transition);
      
      &:focus {
        outline: none;
        border-color: var(--color-accent);
      }
      
      &::placeholder {
        color: #666;
      }
    }
    
    textarea {
      resize: vertical;
    }
  }
  
  .btn {
    width: 100%;
    margin-top: 1rem;
    
    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
  }
  
  .form-message {
    margin-top: 1.5rem;
    padding: 1rem;
    background-color: rgba(156, 123, 46, 0.2);
    border: 1px solid var(--color-accent);
    border-radius: 5px;
    color: var(--color-accent);
    text-align: center;
  }
}

// 联系信息
.contact-info {
  &__item {
    display: flex;
    margin-bottom: 2.5rem;
  }
  
  &__icon {
    margin-right: 1.5rem;
    width: 50px;
    height: 50px;
    background-color: rgba(156, 123, 46, 0.2);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    
    svg {
      color: var(--color-accent);
    }
  }
  
  &__content {
    h3 {
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
    }
    
    p {
      color: #ccc;
      line-height: 1.6;
      
      a {
        color: #ccc;
        transition: var(--transition);
        
        &:hover {
          color: var(--color-accent);
        }
      }
    }
  }
  
  &__social {
    h3 {
      font-size: 1.2rem;
      margin-bottom: 1rem;
    }
    
    .social-links {
      display: flex;
      gap: 1rem;
      
      a {
        width: 40px;
        height: 40px;
        background-color: rgba(255, 255, 255, 0.05);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: var(--transition);
        
        &:hover {
          background-color: var(--color-accent);
          
          svg {
            color: var(--color-bg);
          }
        }
        
        svg {
          color: var(--color-text);
          transition: var(--transition);
        }
      }
    }
  }
}

// 地图区域
.map-section {
  height: 400px;
  position: relative;
}

.map-placeholder {
  width: 100%;
  height: 100%;
  background-color: var(--color-secondary);
  background-image: url('/images/map-bg.jpg');
  background-size: cover;
  background-position: center;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
  }
}

.map-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.8);
  padding: 2rem;
  border-radius: 5px;
  text-align: center;
  width: 90%;
  max-width: 400px;
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: var(--color-accent);
  }
  
  p {
    margin-bottom: 1.5rem;
    color: #ccc;
  }
  
  .btn--small {
    padding: 0.6rem 1.5rem;
    font-size: 0.9rem;
  }
}

// FAQ区域
.faq-section {
  padding: 6rem 0;
  
  h2 {
    text-align: center;
    margin-bottom: 3rem;
    
    span {
      color: var(--color-accent);
    }
  }
}

.faq-grid {
  max-width: 800px;
  margin: 0 auto;
}

.faq-item {
  margin-bottom: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  overflow: hidden;
}

.faq-question {
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: var(--transition);
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
  }
  
  &.active {
    background-color: rgba(156, 123, 46, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    
    h3 {
      color: var(--color-accent);
    }
    
    .faq-icon {
      transform: rotate(180deg);
      
      svg {
        color: var(--color-accent);
      }
    }
  }
  
  h3 {
    font-size: 1.1rem;
    margin: 0;
    transition: var(--transition);
  }
  
  .faq-icon {
    transition: transform 0.3s ease;
    
    svg {
      transition: var(--transition);
    }
  }
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
  
  &.active {
    max-height: 500px;
  }
  
  p {
    padding: 1.5rem;
    color: #ccc;
    line-height: 1.6;
    margin: 0;
  }
}
</style> 