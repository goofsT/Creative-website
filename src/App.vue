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
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
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
      'https://www.enshitea.com/images/tea-1.jpg',
      'https://www.enshitea.com/images/tea-2.jpg'
    ],
    description: '恩施富硒茶来自世界硒都湖北恩施，天然富含硒元素，具有独特的保健功效。',
    brand: {
      '@type': 'Brand',
      name: '恩施富硒茶'
    },
    offers: {
      '@type': 'Offer',
      url: 'https://www.enshitea.com/work',
      priceCurrency: 'CNY',
      price: '198',
      availability: 'https://schema.org/InStock'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '89'
    }
  }

  // 本地商业结构化数据
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'TeaStore',
    name: '恩施富硒茶',
    image: 'https://www.enshitea.com/images/store.jpg',
    '@id': 'https://www.enshitea.com',
    url: 'https://www.enshitea.com',
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
    }
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