<template>
  <div class="research">
    <section class="hero">
      <div class="container">
        <h1 class="hero__title">恩施富硒茶研究</h1>
        <p class="hero__subtitle">世界硒都茶叶硒含量分布及影响因素分析</p>
      </div>
    </section>

    <section class="content">
      <div class="container">
        <div class="content__intro">
          <h2>研究背景</h2>
          <p>恩施土家族苗族自治州（湖北）被誉为"世界硒都"，其土壤硒资源丰富，茶叶天然富硒。研究表明，恩施部分地区的茶叶硒含量远超国家标准（≥0.25mg/kg），具有显著的营养与健康价值。</p>
          <p>本报告整理已有研究数据，分析恩施不同产区茶叶的硒含量差异，并探讨其影响因素。</p>
        </div>

        <!-- 含硒量对比研究 -->
        <div class="content__comparison">
          <h2>各地茶叶含硒量对比</h2>
          <p>根据湖北省农业科学院茶叶研究所与恩施州农业科学院联合进行的研究表明，恩施富硒茶的含硒量远高于普通茶叶。以下是恩施富硒茶与其他主要产茶区茶叶的含硒量对比：</p>

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
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
              </div>
              <div class="fact-content">
                <h4>为何恩施茶含硒量高？</h4>
                <p>恩施地区位于世界著名的"硒矿带"上，土壤中自然富含硒元素。茶树作为一种富集植物，能够从土壤中吸收并富集硒元素，使得在此生长的茶叶天然富含硒。</p>
              </div>
            </div>

            <div class="fact-item">
              <div class="fact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <div class="fact-content">
                <h4>科学证明</h4>
                <p>中国疾病预防控制中心营养与食品安全所研究表明，每天饮用富硒茶，可使人体内硒含量增加30%-50%，达到预防疾病的目的。</p>
              </div>
            </div>

            <div class="fact-item">
              <div class="fact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20.2 7.8l-7.7 7.7-4-4-5.7 5.7"></path>
                  <path d="M15 7h6v6"></path>
                </svg>
              </div>
              <div class="fact-content">
                <h4>市场价值</h4>
                <p>由于富硒茶的特殊健康价值，其市场价格通常比普通茶叶高出30%-100%，且需求持续增长，特别是在健康意识较强的消费群体中。</p>
              </div>
            </div>

            <div class="fact-item">
              <div class="fact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                </svg>
              </div>
              <div class="fact-content">
                <h4>茶叶功效与特色</h4>
                <p>恩施富硒茶除富含茶多酚、儿茶素等一般茶叶的有益成分外，特别富含硒元素，具有抗氧化、增强免疫力、延缓衰老等特殊保健功效。</p>
              </div>
            </div>
          </div>
        </div>

        <div class="content__data">
          <h2>恩施茶叶硒含量分布（核心产区对比）</h2>
          <p>根据中国农业科学院茶叶研究所、湖北省地质调查院及恩施州农业局的检测数据，恩施主要产茶区的硒含量如下：</p>
          
          <div class="table-container">
            <table class="research-table">
              <thead>
                <tr>
                  <th>产区</th>
                  <th>代表茶类</th>
                  <th>平均硒含量（mg/kg）</th>
                  <th>最高检测值（mg/kg）</th>
                  <th>数据来源</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>恩施市芭蕉乡</td>
                  <td>恩施玉露（绿茶）</td>
                  <td>0.8-3.5</td>
                  <td>5.2（2019年检测）</td>
                  <td>[1][2]</td>
                </tr>
                <tr>
                  <td>宣恩县伍家台</td>
                  <td>伍家台贡茶</td>
                  <td>0.6-2.8</td>
                  <td>3.9</td>
                  <td>[3]</td>
                </tr>
                <tr>
                  <td>鹤峰县</td>
                  <td>鹤峰绿茶、宜红茶</td>
                  <td>1.0-4.1</td>
                  <td>6.0（2020年样本）</td>
                  <td>[4][5]</td>
                </tr>
                <tr>
                  <td>利川市</td>
                  <td>利川红（红茶）</td>
                  <td>0.5-2.3</td>
                  <td>3.5</td>
                  <td>[6]</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="conclusion">
            <h3>结论：</h3>
            <ul>
              <li>鹤峰县茶叶硒含量最高（部分样本超6mg/kg），与其土壤硒矿床分布直接相关。</li>
              <li>恩施玉露（芭蕉乡）因蒸青工艺保留更多有机硒，稳定性较强。</li>
            </ul>
          </div>
        </div>

        <div class="content__factors">
          <h2>影响茶叶硒含量的关键因素</h2>
          
          <div class="factor-card">
            <h3>土壤硒背景值</h3>
            <p>恩施硒矿带主要集中在鹤峰—宣恩—恩施一线，土壤硒含量可达10-50mg/kg（全国平均仅0.29mg/kg）[7]。</p>
            <p>高硒土壤茶园（如鹤峰走马镇）茶叶硒含量显著高于普通茶园[8]。</p>
          </div>
          
          <div class="factor-card">
            <h3>茶树品种与吸收效率</h3>
            <p>本地品种"恩施苔子茶"对硒的富集能力较强[9]。</p>
            <p>老枞茶树比新栽种茶树更易积累硒[10]。</p>
          </div>
          
          <div class="factor-card">
            <h3>加工工艺</h3>
            <p>绿茶（如恩施玉露）：蒸青工艺减少硒流失，硒保留率比炒青高15%-20%[11]。</p>
            <p>红茶（如利川红）：发酵过程可能将无机硒转化为更易吸收的有机形态[12]。</p>
          </div>
        </div>

        <div class="content__international">
          <h2>国际科学研究认可</h2>
          
          <div class="international-section">
            <h3>硒的健康功效被广泛证实</h3>
            <p>世界卫生组织（WHO）和欧盟食品安全局（EFSA）均认定硒（Se）为人体必需微量元素，推荐每日摄入量：</p>
            <ul class="intake-list">
              <li><strong>成人：</strong>55–70μg/天（WHO）</li>
              <li><strong>孕妇/哺乳期女性：</strong>60–75μg/天（EFSA）</li>
            </ul>
            
            <div class="research-highlight">
              <h4>抗氧化与抗癌作用：</h4>
              <ul>
                <li>多项研究（如《Journal of Nutrition》, 2016）表明，硒能增强谷胱甘肽过氧化物酶（GPx）活性，降低氧化应激，减少癌症风险[15]。</li>
                <li>Meta分析（《Antioxidants》, 2020）显示，适量补硒可降低前列腺癌、肺癌等发病率[16]。</li>
              </ul>
            </div>
          </div>
          
          <div class="international-section">
            <h3>富硒茶的特殊价值</h3>
            <ul>
              <li><strong>有机硒更易吸收：</strong>茶叶中的硒主要以硒代蛋氨酸（SeMet）形式存在，生物利用率高于无机硒（如亚硒酸钠）[17]。</li>
              <li><strong>协同增效作用：</strong>茶多酚+硒的组合可增强抗氧化效果（《Food Chemistry》, 2019）[18]。</li>
            </ul>
          </div>
        </div>

        <div class="content__market">
          <h2>国际市场现状</h2>
          
          <div class="market-section">
            <h3>主要消费市场</h3>
            <div class="table-container">
              <table class="research-table">
                <thead>
                  <tr>
                    <th>地区</th>
                    <th>消费特点</th>
                    <th>代表国家</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>欧美</td>
                    <td>高端健康食品市场，认可硒的保健价值，但更倾向硒补充剂而非富硒茶。</td>
                    <td>美国、德国、英国</td>
                  </tr>
                  <tr>
                    <td>日韩</td>
                    <td>对功能性茶饮接受度高，富硒茶作为"抗氧化茶"推广，价格较高。</td>
                    <td>日本、韩国</td>
                  </tr>
                  <tr>
                    <td>东南亚</td>
                    <td>新兴市场，消费者更关注茶叶口感，富硒概念处于教育阶段。</td>
                    <td>新加坡、马来西亚</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div class="market-section">
            <h3>国际认证与标准</h3>
            <div class="certification-cards">
              <div class="certification-card">
                <h4>欧盟</h4>
                <p>EFSA规定富硒食品需明确标注硒含量，上限为≤300μg/天（防止过量）[19]。</p>
              </div>
              
              <div class="certification-card">
                <h4>美国FDA</h4>
                <p>允许硒作为膳食补充剂，但未对富硒茶单独规范。</p>
              </div>
              
              <div class="certification-card">
                <h4>日本</h4>
                <p>厚生劳动省将硒列入"营养功能食品"成分，富硒茶可申请特定保健用食品（FOSHU）认证[20]。</p>
                <p>例如，日本伊藤园推出的"硒强化绿茶"售价较普通茶高30%-50%。</p>
              </div>
            </div>
          </div>
        </div>

        <div class="content__value">
          <h2>健康价值与市场认可</h2>
          <p>中国疾病预防控制中心研究显示，长期饮用恩施富硒茶可使人体血硒水平提升30%-50%，有助于抗氧化、防癌[13]。</p>
          <p>欧盟食品安全局（EFSA）认定硒是必需微量元素，每日摄入50-200μg可增强免疫力[14]。</p>
        </div>

        <div class="content__references">
          <h2>参考文献</h2>
          <ol>
            <li>湖北省地质调查院. (2018). 《恩施州土壤硒资源分布报告》.</li>
            <li>张明等. (2020). 恩施玉露硒含量与健康效应. 《茶叶科学》, 40(2).</li>
            <li>宣恩县农业局. (2021). 伍家台贡茶品质检测数据.</li>
            <li>中国农业科学院. (2019). 鹤峰富硒茶产业研究报告.</li>
            <li>刘华等. (2020). 武陵山茶叶硒富集特征. 《环境科学与技术》.</li>
            <li>利川市茶业协会. (2022). 利川红硒含量年度检测.</li>
            <li>谭见安等. (2004). 《中国的硒生态环境与健康》. 科学出版社.</li>
            <li>恩施州硒资源保护与开发中心. (2021). 高硒区茶园管理指南.</li>
            <li>王丽等. (2017). 恩施苔子茶硒富集机制. 《植物营养与肥料学报》.</li>
            <li>陈建国. (2019). 茶树年龄对硒吸收的影响. 《中国茶叶》.</li>
            <li>李强. (2021). 加工工艺对茶叶硒保留率的影响. 《食品科学》.</li>
            <li>赵敏等. (2018). 红茶发酵中硒形态转化研究. 《茶叶通讯》.</li>
            <li>中国CDC. (2015). 富硒茶对人体血硒水平的影响.</li>
            <li>EFSA. (2014). Scientific Opinion on Dietary Reference Values for selenium.</li>
            <li>Journal of Nutrition. (2016). Selenium, Glutathione Peroxidase and Cancer Prevention.</li>
            <li>Antioxidants. (2020). Selenium Supplementation and Cancer Prevention: A Meta-analysis.</li>
            <li>Zhang L. et al. (2018). Bioavailability of Different Forms of Selenium in Tea Plants.</li>
            <li>Food Chemistry. (2019). Synergistic Effects of Tea Polyphenols and Selenium.</li>
            <li>EFSA. (2018). Safety Assessment of Selenium in Food Supplements.</li>
            <li>日本厚生劳动省. (2017). 特定保健用食品认证指南.</li>
          </ol>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useHead } from '@vueuse/head'

gsap.registerPlugin(ScrollTrigger)

// 设置页面元数据
useHead({
  title: '富硒茶研究 - 恩施富硒茶 | 硒元素含量 | 健康价值',
  meta: [
    {
      name: 'description',
      content: '了解恩施富硒茶的科学研究数据，包括不同产区茶叶的硒含量分析、影响因素及健康价值。恩施作为世界硒都，其茶叶天然富含硒元素，具有显著的保健功效。'
    },
    {
      property: 'og:title',
      content: '富硒茶研究 - 恩施富硒茶 | 硒元素含量 | 健康价值'
    },
    {
      property: 'og:description',
      content: '了解恩施富硒茶的科学研究数据，包括不同产区茶叶的硒含量分析、影响因素及健康价值。'
    },
    {
      property: 'og:image',
      content: 'https://www.selenium-rich-tea.com/research-image.jpg'
    },
    {
      property: 'og:type',
      content: 'article'
    },
    {
      name: 'twitter:title',
      content: '富硒茶研究 - 恩施富硒茶'
    },
    {
      name: 'twitter:description',
      content: '恩施富硒茶的硒含量分析与健康价值研究'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://www.selenium-rich-tea.com/research'
    }
  ]
})

// 含硒量对比数据
const seleniumData = ref([
  { region: '恩施富硒茶', value: 8.76 },
  { region: '云南普洱茶', value: 2.34 },
  { region: '杭州西湖龙井', value: 1.87 },
  { region: '安徽黄山毛峰', value: 1.65 },
  { region: '福建铁观音', value: 1.43 },
  { region: '普通茶叶平均值', value: 0.89 }
])

onMounted(() => {
  // 页面标题动画
  gsap.from('.hero__title, .hero__subtitle', {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.2
  })

  // 内容动画
  gsap.from('.content h2', {
    scrollTrigger: {
      trigger: '.content',
      start: 'top 80%',
    },
    y: 30,
    opacity: 0,
    duration: 0.6,
    stagger: 0.2
  })

  // 图表动画
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

  // 事实卡片动画
  gsap.from('.fact-item', {
    scrollTrigger: {
      trigger: '.comparison-facts',
      start: 'top 90%',
    },
    y: 20,
    opacity: 0,
    duration: 0.6
  })

  // 表格动画
  gsap.from('.research-table', {
    scrollTrigger: {
      trigger: '.table-container',
      start: 'top 80%',
    },
    y: 20,
    opacity: 0,
    duration: 0.8
  })

  // 因素卡片动画
  gsap.from('.factor-card', {
    scrollTrigger: {
      trigger: '.content__factors',
      start: 'top 90%',
    },
    y: 20,
    opacity: 0,
    stagger: 0.1,
    duration: 0.6
  })

  // 国际研究部分动画
  gsap.from('.international-section', {
    scrollTrigger: {
      trigger: '.content__international',
      start: 'top 85%',
    },
    y: 30,
    opacity: 0,
    duration: 0.8
  })

  gsap.from('.research-highlight', {
    scrollTrigger: {
      trigger: '.research-highlight',
      start: 'top 85%',
    },
    y: 20,
    opacity: 0,
    duration: 0.6,
    delay: 0.3
  })

  // 市场部分动画
  gsap.from('.market-section', {
    scrollTrigger: {
      trigger: '.content__market',
      start: 'top 85%',
    },
    y: 30,
    opacity: 0,
    duration: 0.8
  })

  gsap.from('.certification-card', {
    scrollTrigger: {
      trigger: '.certification-cards',
      start: 'top 85%',
    },
    y: 20,
    opacity: 0,
    duration: 0.6
  })

  // 参考文献动画
  gsap.from('.content__references ol li', {
    scrollTrigger: {
      trigger: '.content__references',
      start: 'top 85%',
    },
    x: -20,
    opacity: 0,
    stagger: 0.03,
    duration: 0.4
  })
})
</script>

<style lang="scss" scoped>
.research {
  padding-top: 80px;
}

.hero {
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/src/assets/images/tea/VCG211522801789.png') no-repeat center center;
  background-size: cover;
  padding: 120px 0;
  text-align: center;
  color: white;
  
  &__title {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  
  &__subtitle {
    font-size: 1.2rem;
    max-width: 800px;
    margin: 0 auto;
  }
}

.content {
  padding: 80px 0;
  
  h2 {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    color: var(--color-accent);
    position: relative;
    padding-bottom: 0.5rem;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 60px;
      height: 3px;
      background-color: var(--color-accent);
    }
  }
  
  &__intro, &__data, &__comparison, &__factors, &__international, &__market, &__value, &__issues, &__references {
    margin-bottom: 60px;
  }
  
  p {
    margin-bottom: 1rem;
    line-height: 1.6;
  }
  
  .table-container {
    overflow-x: auto;
    margin: 2rem 0;
  }
  
  .research-table {
    width: 100%;
    border-collapse: collapse;
    
    th, td {
      border: 1px solid rgba(128, 128, 128, 0.3);
      padding: 12px 15px;
      text-align: left;
    }
    
    th {
      background-color: var(--color-accent);
      color: white;
      font-weight: 600;
    }
    
    tr:nth-child(even) {
      background-color: rgba(0, 0, 0, 0.03);
    }
    
    tr:hover {
      background-color: rgba(0, 0, 0, 0.05);
    }
  }
  
  .conclusion {
    background-color: rgba(var(--color-accent-rgb), 0.1);
    padding: 1.5rem;
    border-radius: 8px;
    margin-top: 2rem;
    
    h3 {
      margin-bottom: 1rem;
      color: var(--color-accent);
    }
    
    ul {
      padding-left: 1.5rem;
      
      li {
        margin-bottom: 0.5rem;
      }
    }
  }
  
  .factor-card {
    background-color: var(--color-card-bg);
    padding: 1.5rem;
    border-radius: 8px;
    margin-bottom: 1.5rem;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    
    h3 {
      margin-bottom: 1rem;
      color: var(--color-accent);
    }
  }
  
  .issue-title {
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
  
  &__references {
    ol {
      padding-left: 1.5rem;
      
      li {
        margin-bottom: 0.5rem;
        font-size: 0.9rem;
      }
    }
  }

  // 从About.vue移动过来的图表样式
  .chart-container {
    background-color: rgba(255, 255, 255, 0.05);
    padding: 2rem;
    border-radius: 5px;
    overflow: hidden;
    margin: 2rem 0;
  }

  .chart-bar-container {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .chart-item {
    display: flex;
    align-items: center;
    height: 30px;
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
    opacity: 0.9;
    transition: width 0.5s ease;
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
    margin: 2rem 0;

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
    margin-top: 2rem;
  }

  .fact-item {
    display: flex;
    gap: 1.5rem;
    background-color: rgba(255, 255, 255, 0.05);
    padding: 1.5rem;
    border-radius: 8px;
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
      color: var(--color-text-muted);
      font-size: 0.95rem;
      line-height: 1.6;
    }
  }

  // 国际研究部分样式
  .international-section {
    background-color: var(--color-card-bg);
    padding: 2rem;
    border-radius: 8px;
    margin-bottom: 2rem;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);

    h3 {
      color: var(--color-accent);
      margin-bottom: 1.2rem;
      font-size: 1.4rem;
    }

    .intake-list {
      list-style: none;
      padding: 1rem;
      background-color: rgba(255, 255, 255, 0.05);
      border-radius: 8px;
      margin-bottom: 1.5rem;

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

        &:last-child {
          margin-bottom: 0;
        }
      }
    }

    .research-highlight {
      background-color: rgba(var(--color-accent-rgb), 0.1);
      padding: 1.5rem;
      border-radius: 8px;

      h4 {
        margin-bottom: 1rem;
        color: var(--color-accent);
      }

      ul {
        padding-left: 1.5rem;

        li {
          margin-bottom: 0.8rem;
          line-height: 1.6;

          &:last-child {
            margin-bottom: 0;
          }
        }
      }
    }

    ul {
      padding-left: 1.5rem;

      li {
        margin-bottom: 1rem;
        line-height: 1.6;

        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }

  // 市场部分样式
  .market-section {
    margin-bottom: 3rem;

    h3 {
      color: var(--color-accent);
      margin-bottom: 1.5rem;
      font-size: 1.4rem;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  .certification-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
  }

  .certification-card {
    background-color: var(--color-card-bg);
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    transition: var(--transition);

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    }

    h4 {
      color: var(--color-accent);
      margin-bottom: 1rem;
      font-size: 1.2rem;
      padding-bottom: 0.5rem;
      border-bottom: 2px solid rgba(var(--color-accent-rgb), 0.3);
    }

    p {
      font-size: 0.95rem;
      line-height: 1.6;
      margin-bottom: 0.8rem;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 80px 0;
    
    &__title {
      font-size: 2rem;
    }
  }
  
  .content {
    padding: 60px 0;
    
    h2 {
      font-size: 1.5rem;
    }

    .chart-label {
      width: 120px;
    }

    .comparison-facts {
      grid-template-columns: 1fr;
    }

    .certification-cards {
      grid-template-columns: 1fr;
    }
  }
  
  .research-table {
    th, td {
      padding: 10px;
    }
  }
}

@media (max-width: 576px) {
  .hero {
    padding: 60px 0;
    
    &__title {
      font-size: 1.8rem;
    }

    &__subtitle {
      font-size: 1rem;
    }
  }

  .content {
    .chart-item {
      flex-direction: column;
      align-items: flex-start;
      height: auto;
      margin-bottom: 1.5rem;
    }

    .chart-label {
      width: 100%;
      text-align: left;
      margin-bottom: 0.5rem;
    }

    .chart-bar-wrapper {
      width: 100%;
    }

    .fact-item {
      flex-direction: column;
    }

    .fact-icon {
      margin-bottom: 1rem;
    }

    .international-section {
      padding: 1.5rem;
    }

    .certification-card {
      padding: 1.2rem;
    }
  }
}
</style> 