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
            <div  v-for="item in cagegory" :key="item.name">
              <blockquote>
                <p>{{item.name}}</p>
              </blockquote> 
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


     <!-- 我们的方法 -->
    <section class="methodology">
      <div class="container">
        <h2>茶<span>功效</span></h2>
        <div class="methodology__grid">
          <div class="methodology-card">
            <div class="methodology-card__icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path><line x1="2" y1="12" x2="22" y2="12"></line></svg>
            </div>
            <h3>抗氧化</h3>
            <p>富硒茶抗氧化能力强，能清除水中污染毒素，增强免疫力，解毒、排毒，保护肝脏，防止糖尿病、白内障等，隔夜茶能够饮用。</p>
          </div>
          <div class="methodology-card">
            <div class="methodology-card__icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>
            </div>
            <h3>风味</h3>
            <p>富硒茶温、凉、冰均可饮用，此茶浓、苦而不涩，后口甘甜；淡，清香爽口。</p>
          </div>
          <div class="methodology-card">
            <div class="methodology-card__icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
            </div>
            <h3>安神助眠</h3>
            <p>富硒茶具有安神作用，因此饮用此茶不会导致失眠。</p>
          </div>
        </div>
      </div>
    </section>


<!-- 硒元素介绍 -->
<section class="methodology selenium-section">
  <div class="container">
    <h2>硒<span>元素</span></h2>
    <div class="methodology-card">
      <div class="methodology-card__icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
      </div>
      <h3>抗癌症之王</h3>
      <p>微量元素硒，被世界卫生组织公认为"抗癌之王"、"长寿之星"，在美国，由克拉克教授进行的大型人体临床试验结果显示：补充硒可以预防肿瘤，这项试验被人们称为"硒防癌里程碑的试验"。
        试验结果表明：每日补充 200微克硒，癌症发病率和死亡率都有显著降低，其中肺癌、前列腺癌、结直肠癌发病率的降低最为明显，达 50% 以上。
      </p>
      <p>美国亚利桑那大学癌症中心的Clark教授等在美国进行了为期13年的科研攻关和试验证实，该项实验符合严格的科学标准，试验在7家临床中心进行，结果发现：

每日补充200微克硒，癌症发生率下降50%、癌症总死亡率下降37%。

其中有3种癌症的发病率下降最为明显：前列腺癌下降63%、结直肠癌下降58%、肺癌下降46%。</p>
      <p>
        2003年9月美国食品药品管理局（FDA）批准了一项重大决定，即认为硒为抑癌剂，并允许硒营养食品标明的抑癌性质。FDA可以做出以下含含义声明：

硒可能降低某些癌症的发生风险；

一些科学证据表明摄取硒较少的人体内产生抗癌作用；

一些试验结果表明摄取硒较高的人体内产生抗癌症作用。
      </p>

      <p>
        在中国，硒有防癌抗癌作用已被写入化学教材（《人教版九年级化学第九单元》）以及高等院校生物教材（《微量元素与人体健康》第262页）："硒能抑制细胞生长以及DNA、RNA和蛋白质合成，抑制癌细胞转移，干扰癌症物质代谢"。
      </p>
    </div>
  </div>
</section>
    
    
    <!-- 团队成员 -->
    <section class="team">
      <div class="container">
        <h2>我们的<span>团队</span></h2>
        <div class="team__grid">
          <div class="team-member" v-for="(member, index) in teamMembers" :key="index">
            <div class="team-member__image">
              <img :src="`/images/team-${index + 1}.jpg`" :alt="`${member.name}`" />
            </div>
            <div class="team-member__info">
              <h3>{{ member.name }}</h3>
              <p>{{ member.position }}</p>
              <div class="team-member__social">
                <a href="#" aria-label="Instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
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
import { onMounted } from 'vue'
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
  
  // 方法论卡片动画
  gsap.from('.methodology h2', {
    scrollTrigger: {
      trigger: '.methodology',
      start: 'top 80%',
    },
    y: 50,
    opacity: 0,
    duration: 0.8
  })
  
  gsap.from('.methodology-card', {
    scrollTrigger: {
      trigger: '.methodology__grid',
      start: 'top 80%',
    },
    y: 50,
    opacity: 0,
    stagger: 0.2,
    duration: 0.8
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

// 方法论
.methodology {
  padding: 6rem 0;
  background-color: var(--color-secondary);
  
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