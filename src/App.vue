<template>
  <div class="app">
    <Header />
    <main>
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <Footer />
    <ImagePreloader />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import ImagePreloader from './components/ImagePreloader.vue'
import { gsap } from 'gsap'

onMounted(() => {
  // 初始化GSAP动画
  gsap.from('.app', { 
    opacity: 0, 
    duration: 1.5, 
    ease: 'power2.out' 
  })
  
  // 添加结构化数据
  addStructuredData()
})

// 添加结构化数据
const addStructuredData = () => {
  // 产品结构化数据
  const productSchema = {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: '恩施富硒茶',
    image: [
      'https://www.selenium-rich-tea.com/images/tea-1.jpg',
      'https://www.selenium-rich-tea.com/images/tea-2.jpg'
    ],
    description: '恩施富硒茶来自世界硒都湖北恩施，天然富含硒元素，具有独特的保健功效。',
    brand: {
      '@type': 'Brand',
      name: '恩施富硒茶'
    },
    offers: {
      '@type': 'Offer',
      url: 'https://www.selenium-rich-tea.com/work',
      priceCurrency: 'CNY',
      price: '198',
      availability: 'https://schema.org/InStock'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '89'
    },
    nutrition: {
      '@type': 'NutritionInformation',
      nutrients: [
        {
          '@type': 'Nutrition',
          name: '硒',
          value: '0.8-3.5 mg/kg'
        }
      ]
    }
  }

  // 本地商业结构化数据
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'TeaStore',
    name: '恩施富硒茶',
    image: 'https://www.selenium-rich-tea.com/images/store.jpg',
    '@id': 'https://www.selenium-rich-tea.com',
    url: 'https://www.selenium-rich-tea.com',
    telephone: '+86-123-4567-8910',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '恩施市茶叶大道123号',
      addressLocality: '恩施',
      addressRegion: '湖北省',
      postalCode: '445000',
      addressCountry: 'CN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '30.2721',
      longitude: '109.4793'
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
      ],
      opens: '09:00',
      closes: '18:00'
    },
    priceRange: '¥¥',
    servesCuisine: '茶叶'
  }

  // 研究文章结构化数据
  const researchArticleSchema = {
    '@context': 'https://schema.org',
    '@type': 'ScholarlyArticle',
    headline: '恩施富硒茶研究：硒含量分析与健康价值',
    author: {
      '@type': 'Organization',
      name: '恩施富硒茶研究中心'
    },
    publisher: {
      '@type': 'Organization',
      name: '恩施富硒茶',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.selenium-rich-tea.com/logo.png'
      }
    },
    datePublished: '2023-12-15',
    dateModified: '2023-12-15',
    description: '探索恩施富硒茶的科学研究数据，包括不同产区茶叶的硒含量分析、影响因素及健康价值。',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://www.selenium-rich-tea.com/research'
    },
    about: [
      {
        '@type': 'Thing',
        name: '富硒茶'
      },
      {
        '@type': 'Thing',
        name: '硒元素'
      },
      {
        '@type': 'Thing',
        name: '健康价值'
      }
    ]
  }

  // 将结构化数据添加到页面
  const addJsonLd = (data) => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(data)
    document.head.appendChild(script)
  }

  addJsonLd(productSchema)
  addJsonLd(localBusinessSchema)
  addJsonLd(researchArticleSchema)
}
</script>

<style lang="scss">
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style> 