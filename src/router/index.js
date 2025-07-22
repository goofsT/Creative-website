import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
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
          content: '恩施富硒茶,富硒茶,绿茶,红茶,健康茶饮,茶叶,恩施特产'
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
          content: '恩施富硒茶,茶园介绍,硒元素,茶叶历史,健康价值,富硒土壤'
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
          content: '恩施富硒茶,茶叶产品,绿茶,红茶,礼盒,特色茶品,有机茶'
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
          content: '恩施富硒茶,联系方式,茶叶咨询,购买渠道,茶艺活动'
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
          content: '恩施富硒茶,茶叶制作,绿茶工艺,红茶工艺,传统工艺,手工茶叶'
        }
      ]
    }
  }
]

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
  document.title = to.meta.title || '恩施富硒茶';
  
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
  
  next();
});

export default router 