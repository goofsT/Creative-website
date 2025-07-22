<template>
  <div class="about">
    <!-- 页面标题 -->
    <section class="page-header">
      <div class="container">
        <h1>关于<span>产品</span></h1>
      </div>
    </section>
    
    <!-- 关于内容 -->
    <section class="about-content">
      <div class="container">
        <div class="about-content__grid">
          <div class="about-content__text">
            <h2>恩施<span>富硒茶</span></h2>
            <p class="">恩施富硒茶以恩施玉露最为著名。产于著名的鄂西南武陵山茶区，绿林翠峰、伍家台绿针、恩施玉露、雾洞贡羽、极叶高山野茶是恩施富硒茶的佼佼者。湖北恩施是世界硒都，土壤中富含硒元素，恩施茶为天赐的富硒茶，深受茶人喜爱，日本人尤其钟爱。恩施富硒茶富含茶多酚、儿茶素、茶红素、生物碱以及多种维生素与氨基酸等营养成份，更含有人体必需的硒、锌等微量元素，具有清心明目、滋润暖胃、助消化、安神养颜及消炎等多重保健功效。</p>
            <div class="tea-categories">
              <h4>恩施富硒茶主要品类</h4>
              <ul>
                <li v-for="item in cagegory" :key="item.name">
                  <strong>{{ item.name }}</strong> - {{ item.desc }}
                </li>
              </ul>
            </div>
          </div>
          <div class="about-content__image">
            <div class="image-container">
              <img src="@/assets/images/tea/tea-cup.jpg" alt="创意工作室" />
            </div>
          </div>
        </div>
      </div>
    </section>

<!-- 含硒量对比研究 -->
<section class="selenium-comparison">
  <div class="container">
    <h2>硒元素<span>研究</span></h2>
    <div class="comparison-content">
      <div class="comparison-text">
        <p>根据湖北省农业科学院茶叶研究所与恩施州农业科学院联合进行的研究表明，恩施富硒茶的含硒量远高于普通茶叶。以下是恩施富硒茶与其他主要产茶区茶叶的含硒量对比：</p>
      </div>
      
      <div class="comparison-chart">
        <div class="chart-container">
          <div class="chart-bar-container">
            <div v-for="(item, index) in seleniumData" :key="index" class="chart-item">
              <div class="chart-label">{{ item.region }}</div>
              <div class="chart-bar-wrapper">
                <div class="chart-bar" :style="{ width: (item.value / seleniumData[0].value * 100) + '%' }">
                  <span class="chart-value">{{ item.value }}μg/g</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="chart-note">
          <p>注：数据来源于湖北省农业科学院茶叶研究所2022年研究报告</p>
        </div>
      </div>
      
      <div class="selenium-benefits">
        <h3 class="benefits-title">硒元素的健康价值</h3>
        <div class="benefits-content">
          <p>微量元素硒，被世界卫生组织公认为"抗癌之王"、"长寿之星"。美国克拉克教授的大型人体临床试验结果显示：补充硒可以预防肿瘤，这项试验被人们称为"硒防癌里程碑的试验"。</p>
          <p>试验结果表明：每日补充200微克硒，癌症发生率下降50%、癌症总死亡率下降37%。其中有3种癌症的发病率下降最为明显：前列腺癌下降63%、结直肠癌下降58%、肺癌下降46%。</p>
        </div>
      </div>
      
      <div class="comparison-facts">
        <div class="fact-item">
          <div class="fact-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
          </div>
          <div class="fact-content">
            <h4>为何恩施茶含硒量高？</h4>
            <p>恩施地区位于世界著名的"硒矿带"上，土壤中自然富含硒元素。茶树作为一种富集植物，能够从土壤中吸收并富集硒元素，使得在此生长的茶叶天然富含硒。</p>
          </div>
        </div>
        
        <div class="fact-item">
          <div class="fact-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
          </div>
          <div class="fact-content">
            <h4>科学证明</h4>
            <p>中国疾病预防控制中心营养与食品安全所研究表明，每天饮用富硒茶，可使人体内硒含量增加30%-50%，达到预防疾病的目的。</p>
          </div>
        </div>
        
        <div class="fact-item">
          <div class="fact-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20.2 7.8l-7.7 7.7-4-4-5.7 5.7"></path><path d="M15 7h6v6"></path></svg>
          </div>
          <div class="fact-content">
            <h4>市场价值</h4>
            <p>由于富硒茶的特殊健康价值，其市场价格通常比普通茶叶高出30%-100%，且需求持续增长，特别是在健康意识较强的消费群体中。</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- 我们的方法 -->
<section class="methodology">
  <div class="container">
    <h2>茶<span>功效</span></h2>
    <div class="methodology__grid">
      <div class="methodology-card">
        <div class="methodology-card__icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
        </div>
        <h3>抗氧化</h3>
        <p>富硒茶抗氧化能力强，能清除水中污染毒素，增强免疫力，解毒、排毒，保护肝脏，防止糖尿病、白内障等，隔夜茶能够饮用。</p>
      </div>
      <div class="methodology-card">
        <div class="methodology-card__icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 9c.5 0 1 .4 1 1v10c0 .5-.4 1-1 1H7c-.5 0-1-.4-1-1V10c0-.5.4-1 1-1h10zM17 9v-2c0-2.2-1.8-4-4-4s-4 1.8-4 4v2"></path><circle cx="12" cy="15" r="1"></circle></svg>
        </div>
        <h3>风味</h3>
        <p>富硒茶温、凉、冰均可饮用，此茶浓、苦而不涩，后口甘甜；淡，清香爽口。</p>
      </div>
      <div class="methodology-card">
        <div class="methodology-card__icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>
        </div>
        <h3>安神助眠</h3>
        <p>富硒茶具有安神作用，因此饮用此茶不会导致失眠。</p>
      </div>
    </div>
  </div>
</section>

<!-- 客户与合作伙伴 -->
<section class="clients">
  <div class="container">
    <h2>我们的<span>合作伙伴</span></h2>
    <div class="clients__logos">
      <div class="client-logo" v-for="(partner, index) in partners" :key="index">
        <img :src="`/images/client-${index + 1}.png`" :alt="`${partner.name}`" />
        <span class="client-name">{{ partner.name }}</span>
      </div>
    </div>
  </div>
</section>
    
    <!-- 联系我们 -->
    <section class="cta">
      <div class="container">
        <div class="cta__content">
          <h2>品味<span>好茶</span>，从这里开始</h2>
          <p>我们期待与您分享恩施富硒茶的独特风味与健康价值。</p>
          <router-link to="/contact" class="btn">联系我们</router-link>
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

const cagegory=[
  {name:'绿林翠峰',desc:'由鹤峰县绿林茶场生产'},
  {name:'伍家台绿针',desc:'由恩施市伍家台富硒茶业有限公司生产'},
  {name:'恩施玉露',desc:'由恩施市玉露茶业有限公司生产'},
  {name:'雾洞绿峰',desc:'由利川市雾洞茶厂生产'},
  {name:'极叶高山野茶',desc:'由恩施市极叶高山茶业有限公司生产'},
  {name:'恩施富硒茶',desc:'由恩施市富硒茶业有限公司生产'},
]

// 含硒量对比数据
const seleniumData = ref([
  { region: '恩施富硒茶', value: 8.76 },
  { region: '云南普洱茶', value: 2.34 },
  { region: '杭州西湖龙井', value: 1.87 },
  { region: '安徽黄山毛峰', value: 1.65 },
  { region: '福建铁观音', value: 1.43 },
  { region: '普通茶叶平均值', value: 0.89 }
])

const teamMembers = [
  { name: '张三', position: '茶叶品鉴师 / 茶叶专家' },
  { name: '李四', position: '茶叶种植专家 / 茶叶研究员' },
  { name: '王五', position: '茶叶加工工艺师 / 茶叶工程师' },
  { name: '赵六', position: '茶叶市场营销专家 / 茶叶分析师' },
]

const partners = [
  { name: '恩施市玉露茶业有限公司' },
  { name: '鹤峰县绿林茶场' },
  { name: '恩施市伍家台富硒茶业有限公司' },
  { name: '利川市雾洞茶厂' },
  { name: '恩施市极叶高山茶业有限公司' },
  { name: '恩施市富硒茶业有限公司' },
]

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
  
  // 含硒量对比研究动画
  gsap.from('.selenium-comparison h2', {
    scrollTrigger: {
      trigger: '.selenium-comparison',
      start: 'top 80%',
    },
    y: 30,
    opacity: 0,
    duration: 0.6
  })
  
  // 修改图表动画，避免容器高度变化
  const chartItems = document.querySelectorAll('.chart-bar');
  chartItems.forEach((item) => {
    const targetWidth = item.style.width;
    item.style.width = '0%';
    
    gsap.to(item, {
      scrollTrigger: {
        trigger: '.chart-container',
        start: 'top 80%',
      },
      width: targetWidth,
      opacity: 1,
      duration: 1,
      ease: 'power2.out'
    });
  });
  
  gsap.from('.fact-item', {
    scrollTrigger: {
      trigger: '.comparison-facts',
      start: 'top 90%',
    },
    y: 20,
    opacity: 0,
    stagger: 0.1,
    duration: 0.6
  })
  
  // 方法论卡片动画
  gsap.from('.methodology h2', {
    scrollTrigger: {
      trigger: '.methodology',
      start: 'top 90%',
    },
    y: 30,
    opacity: 0,
    duration: 0.6
  })
  
  gsap.from('.methodology-card', {
    scrollTrigger: {
      trigger: '.methodology__grid',
      start: 'top 90%',
    },
    y: 30,
    opacity: 0,
    stagger: 0.1,
    duration: 0.6
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

// 茶叶品类列表
.tea-categories {
  margin-top: 2rem;
  
  h4 {
    margin-bottom: 1rem;
    color: var(--color-accent);
  }
  
  ul {
    list-style-type: none;
    padding: 0;
    
    li {
      margin-bottom: 0.8rem;
      padding-left: 1.5rem;
      position: relative;
      
      &::before {
        content: '•';
        position: absolute;
        left: 0;
        color: var(--color-accent);
        font-size: 1.2rem;
      }
    }
  }
}

// 含硒量对比研究
.selenium-comparison {
  padding: 5rem 0;
  background-color: var(--color-secondary);
  
  h2 {
    text-align: center;
    margin-bottom: 2rem;
    
    span {
      color: var(--color-accent);
    }
  }
}

.comparison-content {
  max-width: 900px;
  margin: 0 auto;
}

.comparison-text {
  margin-bottom: 2rem;
  text-align: center;
  
  p {
    font-size: 1.1rem;
    line-height: 1.8;
  }
}

.comparison-chart {
  margin-bottom: 3rem;
}

.chart-container {
  background-color: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 5px;
  overflow: hidden; /* 确保内容不会溢出 */
}

.chart-bar-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.chart-item {
  display: flex;
  align-items: center;
  height: 30px; /* 固定每个项目的高度 */
}

.chart-label {
  width: 150px;
  text-align: right;
  padding-right: 1rem;
  font-weight: 500;
  
  @media (max-width: 576px) {
    width: 100px;
    font-size: 0.9rem;
  }
}

.chart-bar-wrapper {
  flex: 1;
  height: 30px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  overflow: hidden;
}

.chart-bar {
  height: 100%;
  background-color: var(--color-accent);
  border-radius: 15px;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  position: relative;
  min-width: 60px;
  opacity: 0.9; /* 初始设置一个不透明度，避免完全隐藏 */
  transition: width 0.5s ease; /* 添加过渡效果，使动画更平滑 */
}

.chart-value {
  font-weight: 600;
  font-size: 0.9rem;
  color: rgba(0, 0, 0, 0.8);
  
  @media (max-width: 576px) {
    font-size: 0.8rem;
  }
}

.chart-note {
  text-align: right;
  margin-top: 1rem;
  font-size: 0.8rem;
  color: #999;
}

.selenium-benefits {
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 5px;
  padding: 2rem;
  margin-bottom: 3rem;
  
  .benefits-title {
    color: var(--color-accent);
    margin-bottom: 1.5rem;
    text-align: center;
  }
  
  .benefits-content {
    p {
      margin-bottom: 1rem;
      line-height: 1.7;
      
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}

.comparison-facts {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.fact-item {
  display: flex;
  gap: 1.5rem;
  background-color: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 5px;
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }
}

.fact-icon {
  color: var(--color-accent);
  flex-shrink: 0;
}

.fact-content {
  h4 {
    margin-bottom: 1rem;
  }
  
  p {
    color: #ccc;
    font-size: 0.95rem;
    line-height: 1.6;
  }
}

// 方法论
.methodology {
  padding: 5rem 0;
  background-color: var(--color-bg);
  
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

// 客户logo
.client-logo {
  width: 150px;
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0.6;
  transition: var(--transition);
  margin-bottom: 1.5rem;
  
  &:hover {
    opacity: 1;
  }
  
  img {
    max-width: 100%;
    max-height: 100%;
    filter: brightness(0) invert(1);
    margin-bottom: 0.5rem;
  }
  
  .client-name {
    font-size: 0.8rem;
    text-align: center;
    max-width: 120px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
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

// 硒元素部分特殊样式
.selenium-section {
  background-color: rgba(0, 0, 0, 0.03);
  
  .methodology-card {
    max-width: 900px;
    margin: 0 auto;
    text-align: left;
    
    p {
      margin-bottom: 1.5rem;
      line-height: 1.8;
      text-indent: 2em;
      
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style> 