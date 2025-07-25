<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__content">
        <div class="footer__info">
          <div class="footer__logo">
            <h2 v-if="currentLanguage === 'zh'">恩施<span>富硒茶</span></h2>
            <h2 v-else>Se-<span>Tea</span></h2>
            <p>{{ currentLanguage === 'zh' ? '来自世界硒都的优质茶叶' : 'Premium Tea from the World\'s Selenium Capital' }}</p>
          </div>
          <div class="footer__social">
            <a href="https://t.me/EnShiTea" target="_blank" title="Telegram">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21.198 2.433a2.242 2.242 0 0 0-1.022.215l-16.5 7.5a2.25 2.25 0 0 0 .126 4.303l3.898 1.205 2.25 6.75c.226.674.787 1.174 1.5 1.174.48 0 .904-.22 1.184-.535l1.76-2.052 5.45 3.63a2.251 2.251 0 0 0 3.256-1.485l3-16.5a2.25 2.25 0 0 0-2.902-2.705"/>
              </svg>
            </a>
            <a href="https://www.facebook.com/profile.php?id=61578685470698&mibextid=wwXIfr&mibextid=wwXIfr" target="_blank" title="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a href="mailto:EnShiTea@outlook.com" :title="currentLanguage === 'zh' ? '邮箱' : 'Email'">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </a>
          </div>
        </div>
        
        <div class="footer__links">
          <div class="footer__links-group">
            <h3>{{ currentLanguage === 'zh' ? '快速导航' : 'Navigation' }}</h3>
            <ul>
              <li><router-link :to="currentLanguage === 'en' ? '/en/' : '/'">{{ t('nav.home') }}</router-link></li>
              <li><router-link :to="currentLanguage === 'en' ? '/en/about' : '/about'">{{ t('nav.about') }}</router-link></li>
              <li><router-link :to="currentLanguage === 'en' ? '/en/products' : '/work'">{{ t('nav.products') }}</router-link></li>
              <li><router-link :to="currentLanguage === 'en' ? '/en/process' : '/timeline'">{{ t('nav.process') }}</router-link></li>
              <li><router-link :to="currentLanguage === 'en' ? '/en/research' : '/research'">{{ t('nav.research') }}</router-link></li>
              <li><router-link :to="currentLanguage === 'en' ? '/en/contact' : '/contact'">{{ t('nav.contact') }}</router-link></li>
            </ul>
          </div>
          
          <div class="footer__links-group">
            <h3>{{ currentLanguage === 'zh' ? '产品系列' : 'Products' }}</h3>
            <ul>
              <li><a :href="currentLanguage === 'en' ? '/en/products#green-tea' : '/work#green-tea'">{{ currentLanguage === 'zh' ? '富硒绿茶' : 'Selenium-Rich Green Tea' }}</a></li>
              <li><a :href="currentLanguage === 'en' ? '/en/products#black-tea' : '/work#black-tea'">{{ currentLanguage === 'zh' ? '富硒红茶' : 'Selenium-Rich Black Tea' }}</a></li>
              <li><a :href="currentLanguage === 'en' ? '/en/products#flower-tea' : '/work#flower-tea'">{{ currentLanguage === 'zh' ? '特色花茶' : 'Specialty Flower Tea' }}</a></li>
              <li><a :href="currentLanguage === 'en' ? '/en/products#gift-sets' : '/work#gift-sets'">{{ currentLanguage === 'zh' ? '精品礼盒' : 'Premium Gift Sets' }}</a></li>
              <li><a :href="currentLanguage === 'en' ? '/en/products#seasonal' : '/work#seasonal'">{{ currentLanguage === 'zh' ? '限定季节款' : 'Seasonal Specials' }}</a></li>
            </ul>
          </div>
          
          <div class="footer__links-group">
            <h3>{{ currentLanguage === 'zh' ? '关于茶叶' : 'About Tea' }}</h3>
            <ul>
              <li><a :href="currentLanguage === 'en' ? '/en/about#tea-benefits' : '/about#tea-benefits'">{{ currentLanguage === 'zh' ? '硒元素功效' : 'Selenium Benefits' }}</a></li>
              <li><a :href="currentLanguage === 'en' ? '/en/about#brewing' : '/about#brewing'">{{ currentLanguage === 'zh' ? '冲泡指南' : 'Brewing Guide' }}</a></li>
              <li><a :href="currentLanguage === 'en' ? '/en/about#storage' : '/about#storage'">{{ currentLanguage === 'zh' ? '保存方法' : 'Storage Tips' }}</a></li>
              <li><a :href="currentLanguage === 'en' ? '/en/contact#faq' : '/contact#faq'">{{ currentLanguage === 'zh' ? '常见问题' : 'FAQ' }}</a></li>
              <li><a :href="currentLanguage === 'en' ? '/en/process' : '/timeline'">{{ currentLanguage === 'zh' ? '茶叶历史' : 'Tea History' }}</a></li>
            </ul>
          </div>
          
          <div class="footer__links-group">
            <h3>{{ currentLanguage === 'zh' ? '联系方式' : 'Contact Us' }}</h3>
            <ul>
              <li>
                <a href="mailto:EnShiTea@outlook.com" class="icon-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <span>EnShiTea@outlook.com</span>
                </a>
              </li>
              <li>
                <a href="https://t.me/EnShiTea" class="icon-link" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21.198 2.433a2.242 2.242 0 0 0-1.022.215l-16.5 7.5a2.25 2.25 0 0 0 .126 4.303l3.898 1.205 2.25 6.75c.226.674.787 1.174 1.5 1.174.48 0 .904-.22 1.184-.535l1.76-2.052 5.45 3.63a2.251 2.251 0 0 0 3.256-1.485l3-16.5a2.25 2.25 0 0 0-2.902-2.705"/>
                  </svg>
                  <span>@EnShiTea</span>
                </a>
              </li>
              <li>
                <div class="icon-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span>{{ currentLanguage === 'zh' ? '湖北省恩施土家族苗族自治州' : 'Enshi Tujia and Miao Autonomous Prefecture, Hubei, China' }}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div class="footer__bottom">
        <p>{{ t('footer.copyright') }}</p>
        <div class="footer__bottom-links">
          <a :href="currentLanguage === 'en' ? '/en/privacy' : '/privacy'">{{ t('footer.privacyPolicy') }}</a>
          <a :href="currentLanguage === 'en' ? '/en/terms' : '/terms'">{{ t('footer.termsOfService') }}</a>
          <a :href="currentLanguage === 'en' ? '/en/sitemap' : '/sitemap'">{{ currentLanguage === 'zh' ? '网站地图' : 'Sitemap' }}</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { currentLanguage, t } from '../i18n'
</script>

<style lang="scss" scoped>
.footer {
  background-color: var(--color-secondary);
  padding: 5rem 0 2rem;
  
  &__content {
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 3rem;
    margin-bottom: 3rem;
    
    @media (max-width: 992px) {
      grid-template-columns: 1fr;
    }
  }
  
  &__info {
    @media (max-width: 992px) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      
      .footer__logo {
        margin-bottom: 1rem;
      }
    }
    
    @media (max-width: 576px) {
      flex-direction: column;
      align-items: flex-start;
      
      .footer__social {
        margin-top: 1.5rem;
      }
    }
  }
  
  &__logo {
    h2 {
      font-size: 2rem;
      margin-bottom: 0.5rem;
      
      span {
        color: var(--color-accent);
      }
    }
    
    p {
      color: #999;
      font-size: 1rem;
      margin-bottom: 1.5rem;
    }
  }
  
  &__social {
    display: flex;
    gap: 1.2rem;
    
    a {
      width: 40px;
      height: 40px;
      background-color: rgba(255, 255, 255, 0.05);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #ccc;
      transition: all 0.3s ease;
      
      &:hover {
        background-color: var(--color-accent);
        color: var(--color-bg);
        transform: translateY(-5px);
      }
      
      svg {
        width: 18px;
        height: 18px;
      }
    }
  }
  
  &__links {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    
    @media (max-width: 992px) {
      grid-template-columns: repeat(2, 1fr);
    }
    
    @media (max-width: 576px) {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
  }
  
  &__links-group {
    h3 {
      font-size: 1.2rem;
      margin-bottom: 1.5rem;
      color: var(--color-accent);
      position: relative;
      padding-bottom: 0.8rem;
      
      &:after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 40px;
        height: 2px;
        background-color: var(--color-accent);
      }
    }
    
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      
      li {
        margin-bottom: 0.8rem;
        
        a {
          color: #ccc;
          transition: var(--transition);
          position: relative;
          padding-left: 0;
          display: inline-block;
          
          &:before {
            content: '';
            position: absolute;
            left: 0;
            bottom: -2px;
            width: 0;
            height: 1px;
            background-color: var(--color-accent);
            transition: width 0.3s ease;
          }
          
          &:hover {
            color: var(--color-accent);
            
            &:before {
              width: 100%;
            }
          }
        }
        
        .icon-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #ccc;
          
          svg {
            color: var(--color-accent);
            flex-shrink: 0;
          }
          
          span {
            font-size: 0.9rem;
          }
          
          &:hover {
            color: var(--color-accent);
          }
        }
      }
    }
  }
  
  &__bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    
    @media (max-width: 768px) {
      flex-direction: column;
      gap: 1rem;
      text-align: center;
    }
    
    p {
      color: #999;
      font-size: 0.9rem;
      margin-bottom: 0;
    }
    
    &-links {
      display: flex;
      gap: 1.5rem;
      
      @media (max-width: 576px) {
        flex-wrap: wrap;
        justify-content: center;
        gap: 1rem;
      }
      
      a {
        color: #999;
        font-size: 0.9rem;
        position: relative;
        
        &:after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -2px;
          width: 0;
          height: 1px;
          background-color: var(--color-accent);
          transition: width 0.3s ease;
        }
        
        &:hover {
          color: var(--color-accent);
          
          &:after {
            width: 100%;
          }
        }
      }
    }
  }
}

// 移动端优化
@media (max-width: 768px) {
  .footer {
    padding: 4rem 0 2rem;
  }
}

@media (max-width: 576px) {
  .footer {
    padding: 3rem 0 2rem;
    
    &__logo {
      h2 {
        font-size: 1.8rem;
      }
      
      p {
        font-size: 0.9rem;
      }
    }
    
    &__links-group {
      h3 {
        font-size: 1.1rem;
        margin-bottom: 1.2rem;
      }
    }
  }
}
</style> 