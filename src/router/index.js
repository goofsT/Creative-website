import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import { currentLanguage } from '../i18n'

// 中文路由
const zhRoutes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '恩施富硒茶 - 天然富硒茶叶 | 绿茶 | 红茶 | 健康茶饮',
      metaTags: [
        {
          name: 'description',
          content: '恩施富硒茶来自世界硒都湖北恩施，天然富含硒元素，具有独特的保健功效。我们提供优质富硒绿茶、红茶，采用传统工艺精制而成。'
        },
        {
          name: 'keywords',
          content: '恩施富硒茶,富硒茶,绿茶,红茶,健康茶饮,茶叶,恩施特产,硒元素,保健茶'
        },
        {
          property: 'og:title',
          content: '恩施富硒茶 - 天然富硒茶叶 | 绿茶 | 红茶 | 健康茶饮'
        },
        {
          property: 'og:description',
          content: '恩施富硒茶来自世界硒都湖北恩施，天然富含硒元素，具有独特的保健功效。'
        },
        {
          property: 'og:url',
          content: 'https://www.selenium-rich-tea.com/'
        },
        {
          property: 'og:type',
          content: 'website'
        }
      ]
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    meta: {
      title: '关于我们 - 恩施富硒茶 | 茶园介绍 | 硒元素研究',
      metaTags: [
        {
          name: 'description',
          content: '了解恩施富硒茶的起源、生产工艺和硒元素的健康价值。我们的茶叶来自世界硒都恩施，采用传统工艺精制而成，保留了茶叶的天然营养成分。'
        },
        {
          name: 'keywords',
          content: '恩施富硒茶,茶园介绍,硒元素,茶叶历史,健康价值,富硒土壤,恩施特产'
        },
        {
          property: 'og:title',
          content: '关于我们 - 恩施富硒茶 | 茶园介绍 | 硒元素研究'
        },
        {
          property: 'og:description',
          content: '了解恩施富硒茶的起源、生产工艺和硒元素的健康价值。'
        },
        {
          property: 'og:url',
          content: 'https://www.selenium-rich-tea.com/about'
        },
        {
          property: 'og:type',
          content: 'article'
        }
      ]
    }
  },
  {
    path: '/work',
    name: 'Work',
    component: () => import('../views/Work.vue'),
    meta: {
      title: '茶品展示 - 恩施富硒茶 | 绿茶 | 红茶 | 特色茶品',
      metaTags: [
        {
          name: 'description',
          content: '探索恩施富硒茶的多种茶品，包括富硒绿茶、红茶、礼盒系列和特色茶品。每款茶叶都采用传统工艺精制而成，富含硒元素，口感独特。'
        },
        {
          name: 'keywords',
          content: '恩施富硒茶,茶叶产品,绿茶,红茶,礼盒,特色茶品,有机茶,富硒产品'
        },
        {
          property: 'og:title',
          content: '茶品展示 - 恩施富硒茶 | 绿茶 | 红茶 | 特色茶品'
        },
        {
          property: 'og:description',
          content: '探索恩施富硒茶的多种茶品，包括富硒绿茶、红茶、礼盒系列和特色茶品。'
        },
        {
          property: 'og:url',
          content: 'https://www.selenium-rich-tea.com/work'
        },
        {
          property: 'og:type',
          content: 'website'
        }
      ]
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue'),
    meta: {
      title: '联系我们 - 恩施富硒茶 | 茶叶咨询 | 购买渠道',
      metaTags: [
        {
          name: 'description',
          content: '联系恩施富硒茶，了解更多关于我们的茶叶产品、购买渠道和茶艺活动。我们期待与您分享恩施富硒茶的独特风味与健康价值。'
        },
        {
          name: 'keywords',
          content: '恩施富硒茶,联系方式,茶叶咨询,购买渠道,茶艺活动,富硒茶购买'
        },
        {
          property: 'og:title',
          content: '联系我们 - 恩施富硒茶 | 茶叶咨询 | 购买渠道'
        },
        {
          property: 'og:description',
          content: '联系恩施富硒茶，了解更多关于我们的茶叶产品、购买渠道和茶艺活动。'
        },
        {
          property: 'og:url',
          content: 'https://www.selenium-rich-tea.com/contact'
        },
        {
          property: 'og:type',
          content: 'website'
        }
      ]
    }
  },
  {
    path: '/timeline',
    name: 'Timeline',
    component: () => import('../views/Timeline.vue'),
    meta: {
      title: '茶叶制作工艺 - 恩施富硒茶 | 绿茶工艺 | 红茶工艺',
      metaTags: [
        {
          name: 'description',
          content: '探索恩施富硒茶的传统制作工艺，了解从采摘到成品的每一个精细步骤。我们坚持传统手工工艺，确保每一片茶叶都保留其天然的营养成分和独特风味。'
        },
        {
          name: 'keywords',
          content: '恩施富硒茶,茶叶制作,绿茶工艺,红茶工艺,传统工艺,手工茶叶,制茶流程'
        },
        {
          property: 'og:title',
          content: '茶叶制作工艺 - 恩施富硒茶 | 绿茶工艺 | 红茶工艺'
        },
        {
          property: 'og:description',
          content: '探索恩施富硒茶的传统制作工艺，了解从采摘到成品的每一个精细步骤。'
        },
        {
          property: 'og:url',
          content: 'https://www.selenium-rich-tea.com/timeline'
        },
        {
          property: 'og:type',
          content: 'article'
        }
      ]
    }
  },
  {
    path: '/research',
    name: 'Research',
    component: () => import('../views/Research.vue'),
    meta: {
      title: '富硒茶研究 - 恩施富硒茶 | 硒元素含量 | 健康价值',
      metaTags: [
        {
          name: 'description',
          content: '了解恩施富硒茶的科学研究数据，包括不同产区茶叶的硒含量分析、影响因素及健康价值。恩施作为世界硒都，其茶叶天然富含硒元素，具有显著的保健功效。'
        },
        {
          name: 'keywords',
          content: '恩施富硒茶,硒含量研究,茶叶硒元素,健康价值,世界硒都,微量元素,抗氧化,免疫力,保健功效'
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
          property: 'og:url',
          content: 'https://www.selenium-rich-tea.com/research'
        },
        {
          property: 'og:type',
          content: 'article'
        },
        {
          property: 'og:image',
          content: 'https://www.selenium-rich-tea.com/research-image.jpg'
        },
        {
          property: 'article:published_time',
          content: '2023-12-15'
        },
        {
          property: 'article:author',
          content: '恩施富硒茶研究中心'
        },
        {
          property: 'article:section',
          content: '茶叶研究'
        },
        {
          property: 'article:tag',
          content: '富硒茶,硒元素,健康价值'
        }
      ]
    }
  }
];

// 英文路由
const enRoutes = [
  {
    path: '/en/',
    name: 'HomeEn',
    component: Home,
    meta: {
      title: 'Selenium-Rich Tea from Enshi - Premium Green & Black Tea',
      metaTags: [
        {
          name: 'description',
          content: 'Discover premium selenium-rich tea from Enshi, China. Natural health benefits with unique flavor. Our teas are carefully crafted using traditional methods to preserve their natural nutritional content.'
        },
        {
          name: 'keywords',
          content: 'selenium-rich tea,enshi tea,green tea,black tea,healthy tea,organic tea,premium tea,health benefits,antioxidants'
        },
        {
          property: 'og:title',
          content: 'Selenium-Rich Tea from Enshi - Premium Green & Black Tea'
        },
        {
          property: 'og:description',
          content: 'Discover premium selenium-rich tea from Enshi, China. Natural health benefits with unique flavor.'
        },
        {
          property: 'og:url',
          content: 'https://www.selenium-rich-tea.com/en/'
        },
        {
          property: 'og:type',
          content: 'website'
        }
      ]
    }
  },
  {
    path: '/en/about',
    name: 'AboutEn',
    component: () => import('../views/About.vue'),
    meta: {
      title: 'About Us - Selenium-Rich Tea | Tea Garden | Selenium Research',
      metaTags: [
        {
          name: 'description',
          content: 'Learn about the origin of Selenium-Rich Tea, our production process, and the health benefits of selenium. Our tea comes from Enshi, the "World\'s Selenium Capital", and is crafted using traditional methods.'
        },
        {
          name: 'keywords',
          content: 'selenium-rich tea,tea garden,selenium element,tea history,health benefits,selenium-rich soil,enshi specialty'
        },
        {
          property: 'og:title',
          content: 'About Us - Selenium-Rich Tea | Tea Garden | Selenium Research'
        },
        {
          property: 'og:description',
          content: 'Learn about the origin of Selenium-Rich Tea, our production process, and the health benefits of selenium.'
        },
        {
          property: 'og:url',
          content: 'https://www.selenium-rich-tea.com/en/about'
        },
        {
          property: 'og:type',
          content: 'article'
        }
      ]
    }
  },
  {
    path: '/en/products',
    name: 'WorkEn',
    component: () => import('../views/Work.vue'),
    meta: {
      title: 'Our Tea Collection - Selenium-Rich Tea | Green Tea | Black Tea',
      metaTags: [
        {
          name: 'description',
          content: 'Explore our range of selenium-rich teas, including green tea, black tea, gift sets, and specialty teas. Each tea is crafted using traditional methods, naturally rich in selenium with unique flavors.'
        },
        {
          name: 'keywords',
          content: 'selenium-rich tea,tea products,green tea,black tea,gift sets,specialty teas,organic tea'
        },
        {
          property: 'og:title',
          content: 'Our Tea Collection - Selenium-Rich Tea | Green Tea | Black Tea'
        },
        {
          property: 'og:description',
          content: 'Explore our range of selenium-rich teas, including green tea, black tea, gift sets, and specialty teas.'
        },
        {
          property: 'og:url',
          content: 'https://www.selenium-rich-tea.com/en/products'
        },
        {
          property: 'og:type',
          content: 'website'
        }
      ]
    }
  },
  {
    path: '/en/contact',
    name: 'ContactEn',
    component: () => import('../views/Contact.vue'),
    meta: {
      title: 'Contact Us - Selenium-Rich Tea | Tea Inquiries | Purchase Channels',
      metaTags: [
        {
          name: 'description',
          content: 'Contact Selenium-Rich Tea to learn more about our products, purchase channels, and tea ceremonies. We look forward to sharing the unique flavor and health benefits of our tea with you.'
        },
        {
          name: 'keywords',
          content: 'selenium-rich tea,contact information,tea inquiries,purchase channels,tea ceremonies'
        },
        {
          property: 'og:title',
          content: 'Contact Us - Selenium-Rich Tea | Tea Inquiries | Purchase Channels'
        },
        {
          property: 'og:description',
          content: 'Contact Selenium-Rich Tea to learn more about our products, purchase channels, and tea ceremonies.'
        },
        {
          property: 'og:url',
          content: 'https://www.selenium-rich-tea.com/en/contact'
        },
        {
          property: 'og:type',
          content: 'website'
        }
      ]
    }
  },
  {
    path: '/en/process',
    name: 'TimelineEn',
    component: () => import('../views/Timeline.vue'),
    meta: {
      title: 'Tea Processing - Selenium-Rich Tea | Green Tea Process | Black Tea Process',
      metaTags: [
        {
          name: 'description',
          content: 'Explore the traditional processing methods of Selenium-Rich Tea, from picking to final product. We adhere to traditional handcrafting techniques to ensure each tea leaf retains its natural nutrients and unique flavor.'
        },
        {
          name: 'keywords',
          content: 'selenium-rich tea,tea processing,green tea process,black tea process,traditional craftsmanship,handmade tea'
        },
        {
          property: 'og:title',
          content: 'Tea Processing - Selenium-Rich Tea | Green Tea Process | Black Tea Process'
        },
        {
          property: 'og:description',
          content: 'Explore the traditional processing methods of Selenium-Rich Tea, from picking to final product.'
        },
        {
          property: 'og:url',
          content: 'https://www.selenium-rich-tea.com/en/process'
        },
        {
          property: 'og:type',
          content: 'article'
        }
      ]
    }
  },
  {
    path: '/en/research',
    name: 'ResearchEn',
    component: () => import('../views/Research.vue'),
    meta: {
      title: 'Selenium-Rich Tea Research - Selenium Content | Health Benefits',
      metaTags: [
        {
          name: 'description',
          content: 'Discover scientific research on Selenium-Rich Tea from Enshi, including selenium content analysis, influencing factors, and health benefits. As the "World\'s Selenium Capital," Enshi\'s tea naturally contains selenium with significant health benefits.'
        },
        {
          name: 'keywords',
          content: 'selenium-rich tea,selenium content research,tea selenium,health benefits,world selenium capital,trace elements,antioxidants,immunity'
        },
        {
          property: 'og:title',
          content: 'Selenium-Rich Tea Research - Selenium Content | Health Benefits'
        },
        {
          property: 'og:description',
          content: 'Discover scientific research on Selenium-Rich Tea from Enshi, including selenium content analysis, influencing factors, and health benefits.'
        },
        {
          property: 'og:url',
          content: 'https://www.selenium-rich-tea.com/en/research'
        },
        {
          property: 'og:type',
          content: 'article'
        },
        {
          property: 'og:image',
          content: 'https://www.selenium-rich-tea.com/research-image.jpg'
        },
        {
          property: 'article:published_time',
          content: '2023-12-15'
        },
        {
          property: 'article:author',
          content: 'Selenium-Rich Tea Research Center'
        },
        {
          property: 'article:section',
          content: 'Tea Research'
        },
        {
          property: 'article:tag',
          content: 'selenium-rich tea,selenium,health benefits'
        }
      ]
    }
  }
];

// 合并路由
const routes = [...zhRoutes, ...enRoutes];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// 全局前置守卫，设置页面标题和元标签
router.beforeEach((to, from, next) => {
  // 设置页面标题
  document.title = to.meta.title || 'Selenium-Rich Tea';
  
  // 移除已有的元标签
  Array.from(document.querySelectorAll('meta[data-vue-router-controlled]')).forEach(el => el.parentNode.removeChild(el));
  
  // 添加新的元标签
  if (to.meta.metaTags) {
    to.meta.metaTags.forEach(metaTag => {
      const tag = document.createElement('meta');
      Object.keys(metaTag).forEach(key => {
        tag.setAttribute(key, metaTag[key]);
      });
      tag.setAttribute('data-vue-router-controlled', '');
      document.head.appendChild(tag);
    });
  }

  // 设置规范链接
  const canonicalLink = document.querySelector('link[rel="canonical"]');
  if (canonicalLink) {
    canonicalLink.href = `https://www.selenium-rich-tea.com${to.path}`;
  } else {
    const link = document.createElement('link');
    link.rel = 'canonical';
    link.href = `https://www.selenium-rich-tea.com${to.path}`;
    document.head.appendChild(link);
  }
  
  // 根据路由路径设置当前语言
  if (to.path.startsWith('/en/') || to.path === '/en') {
    localStorage.setItem('language', 'en');
    document.documentElement.lang = 'en-US';
  } else {
    localStorage.setItem('language', 'zh');
    document.documentElement.lang = 'zh-CN';
  }
  
  next();
});

export default router 