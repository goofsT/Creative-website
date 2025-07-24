<template>
  <div class="contact">
    <!-- 页面标题 -->
    <section class="page-header">
      <div class="container">
        <h1>联系<span>我们</span></h1>
      </div>
    </section>
    
    <!-- 联系内容区域 -->
    <section class="contact-section">
      <div class="container">
        <div class="section-title">
          <h2>联系<span>方式</span></h2>
          <p>您可以通过以下方式与我们联系，我们将尽快回复您的咨询</p>
        </div>
        
        <div class="contact-info">
          <div class="contact-info__item">
            <a href="mailto:EnShiTea@outlook.com" class="contact-info__link">
              <div class="contact-info__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </div>
              <div class="contact-info__content">
                <h3>电子邮箱</h3>
                <p>EnShiTea@outlook.com</p>
              </div>
            </a>
          </div>
          
          <div class="contact-info__item">
            <a href="https://maps.app.goo.gl/T8UtnWKraWhwtdC2A" target="_blank" class="contact-info__link">
              <div class="contact-info__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
              <div class="contact-info__content">
                <h3>地址</h3>
                <p>湖北省恩施土家族苗族自治州</p>
              </div>
            </a>
          </div>

          <div class="contact-info__item">
            <a href="https://t.me/EnShiTea" target="_blank" class="contact-info__link">
              <div class="contact-info__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21.198 2.433a2.242 2.242 0 0 0-1.022.215l-16.5 7.5a2.25 2.25 0 0 0 .126 4.303l3.898 1.205 2.25 6.75c.226.674.787 1.174 1.5 1.174.48 0 .904-.22 1.184-.535l1.76-2.052 5.45 3.63a2.251 2.251 0 0 0 3.256-1.485l3-16.5a2.25 2.25 0 0 0-2.902-2.705" />
                  <path d="m10.002 14.003-2.25 2.25" />
                </svg>
              </div>
              <div class="contact-info__content">
                <h3>Telegram</h3>
                <p>@EnShiTea</p>
              </div>
            </a>
          </div>

          <div class="contact-info__item">
            <a href="https://www.facebook.com/profile.php?id=61578685470698&mibextid=wwXIfr&mibextid=wwXIfr" target="_blank" class="contact-info__link">
              <div class="contact-info__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </div>
              <div class="contact-info__content">
                <h3>Facebook</h3>
                <p>恩施富硒茶</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
    
    <!-- 地图区域 -->
    <section class="map-section">
      <div class="map-placeholder">
        <div class="map-overlay">
          <h3>我们的位置</h3>
          <p>湖北省恩施土家族苗族自治州</p>
          <div class="map w-500px h-300px" id="map">

          </div>
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


// FAQ数据
const faqs = ref([
  {
    question: '恩施富硒茶有哪些特点？',
    answer: '恩施富硒茶产自世界硒都恩施，土壤中富含硒元素，茶叶自然富集硒。富硒茶具有独特的香气和口感，同时富含茶多酚、氨基酸等营养成分，兼具茶叶的保健功效和硒元素的健康价值，对增强免疫力、抗氧化等方面有显著功效。'
  },
  {
    question: '如何正确冲泡恩施富硒茶？',
    answer: '恩施富硒绿茶建议用80-85℃的水温，投茶量约为5克/150ml，第一泡30秒，之后每泡递增10-15秒。富硒红茶则可用95-100℃的沸水，投茶量约为5克/150ml，第一泡20-30秒，后续可适当延长。冲泡时注意水温和时间控制，以保留茶叶的香气和营养成分。'
  },
  {
    question: '富硒茶的保存方法是什么？',
    answer: '富硒茶应存放在阴凉、干燥、无异味的环境中，避免阳光直射和高温潮湿。建议使用密封性好的茶叶罐或锡罐储存，并远离厨房等有油烟的地方。绿茶保质期一般为12-18个月，红茶可保存18-24个月，但建议在半年内饮用完，以保证最佳品质。'
  },
  {
    question: '你们提供茶叶样品试喝吗？',
    answer: '是的，我们提供小包装的茶叶样品供客户试喝。您可以通过官网联系我们。对于批发客户，我们提供更多样品选择和专业的茶艺师指导。'
  },
  {
    question: '你们的茶叶是否通过有机认证？',
    answer: '我们部分茶园已通过有机认证，特别是高山茶园系列产品。这些茶园严格按照有机种植标准管理，不使用化学肥料和农药，采用传统手工采摘和加工工艺。我们的有机认证信息可在产品包装上查看，也可以通过官方渠道验证认证真实性。'
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
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('@/assets/images/tea/VCG211522801755.png');
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

// 联系内容区域
.contact-section {
  padding: 6rem 0;
  background-color: var(--color-bg);
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }
  
  @media (max-width: 768px) {
    padding: 4rem 0;
  }
  
  @media (max-width: 576px) {
    padding: 3rem 0;
    
    .container {
      padding: 0 1.5rem;
    }
  }
}

.section-title {
  text-align: center;
  margin-bottom: 4rem;
  
  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    
    span {
      color: var(--color-accent);
    }
  }
  
  p {
    color: #aaa;
    max-width: 700px;
    margin: 0 auto;
    font-size: 1.1rem;
  }
  
  @media (max-width: 576px) {
    margin-bottom: 2.5rem;
    
    h2 {
      font-size: 2rem;
    }
    
    p {
      font-size: 1rem;
    }
  }
}

.contact-info {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  width: 100%;
  margin: 0 auto;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  &__item {
    background-color: #121212;
    border-radius: 8px;
    padding: 20px;
    height: auto;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    transition: all 0.3s ease;
    border: 1px solid transparent;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
      border-color: var(--color-accent);
    }
  }
  
  &__link {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: var(--color-text);
    width: 100%;
  }
  
  &__icon {
    margin-right: 20px;
    width: 50px;
    height: 50px;
    background-color: #282828;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    
    svg {
      color: var(--color-accent);
      width: 24px;
      height: 24px;
    }
  }
  
  &__content {
    flex: 1;
    
    h3 {
      font-size: 1.1rem;
      margin-bottom: 5px;
      color: #fff;
      font-weight: 500;
    }
    
    p {
      color: #999;
      margin: 0;
      font-size: 0.95rem;
    }
  }
}

// 地图区域
.map-section {
  height: 500px;
  position: relative;
  margin: 2rem 0;
}

.map-placeholder {
  width: 100%;
  height: 100%;
  background-color: var(--color-secondary);
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url('@/assets/images/tea/VCG211522801755.png');
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
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
}

.map-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.8);
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  width: 90%;
  max-width: 700px;
  z-index: 2;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: var(--color-accent);
  }
  
  p {
    margin-bottom: 1.5rem;
    color: #ccc;
  }
}

#map {
  width: 100%;
  height: 350px;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  z-index: 5;
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

// 移动端优化
@media (max-width: 768px) {
  .contact-header {
    &__content {
      padding: 8rem 0 4rem;
    }
    
    &__title {
      font-size: 2.5rem;
    }
  }
  
  .contact-info {
    &__grid {
      grid-template-columns: 1fr;
    }
  }
  
  .contact-form {
    &__grid {
      grid-template-columns: 1fr;
    }
  }
  
  .map {
    &__overlay {
      padding: 1.5rem;
    }
  }
  
  .faq {
    &__grid {
      grid-template-columns: 1fr;
    }
  }
}

@media (max-width: 576px) {
  .contact-header {
    &__content {
      padding: 6rem 0 3rem;
    }
    
    &__title {
      font-size: 2rem;
    }
  }
  
  .contact-info {
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
  
  .info-card {
    padding: 1.2rem;
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
      
      a {
        font-size: 0.9rem;
      }
    }
  }
  
  .contact-form {
    padding: 2.5rem 0;
    
    &__title {
      font-size: 1.5rem;
      margin-bottom: 1.5rem;
    }
    
    &__subtitle {
      font-size: 1rem;
      margin-bottom: 2rem;
    }
    
    &__field {
      margin-bottom: 1rem;
      
      label {
        font-size: 0.9rem;
        margin-bottom: 0.3rem;
      }
      
      input, textarea {
        padding: 0.8rem;
        font-size: 0.9rem;
      }
    }
    
    &__submit {
      margin-top: 1.5rem;
      
      button {
        padding: 0.8rem 1.5rem;
        font-size: 0.9rem;
      }
    }
  }
  
  .map {
    height: 300px;
    
    &__overlay {
      padding: 1rem;
      max-width: 90%;
      
      &-title {
        font-size: 1.1rem;
        margin-bottom: 0.5rem;
      }
      
      &-address {
        font-size: 0.9rem;
        margin-bottom: 1rem;
      }
      
      &-button {
        padding: 0.6rem 1rem;
        font-size: 0.8rem;
      }
    }
  }
  
  .faq {
    padding: 2.5rem 0;
    
    &__title {
      font-size: 1.5rem;
      margin-bottom: 1.5rem;
    }
    
    &__subtitle {
      font-size: 1rem;
      margin-bottom: 2rem;
    }
    
    &__item {
      margin-bottom: 1rem;
      
      &-question {
        font-size: 1.1rem;
        padding: 0.8rem 1rem;
      }
      
      &-answer {
        padding: 1rem;
        font-size: 0.9rem;
      }
    }
  }
}
</style> 