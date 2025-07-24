<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__content">
        <div class="footer__info">
          <div class="footer__logo">
            <h2>恩施<span>富硒茶</span></h2>
            <p>来自世界硒都的优质茶叶</p>
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
            <a href="mailto:EnShiTea@outlook.com" title="邮箱">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </a>
          </div>
        </div>
        
        <div class="footer__links">
          <div class="footer__links-group">
            <h3>快速导航</h3>
            <ul>
              <li><router-link to="/">首页</router-link></li>
              <li><router-link to="/about">关于我们</router-link></li>
              <li><router-link to="/work">产品展示</router-link></li>
              <li><router-link to="/timeline">制茶工艺</router-link></li>
              <li><router-link to="/contact">联系我们</router-link></li>
            </ul>
          </div>
          
          <div class="footer__links-group">
            <h3>产品系列</h3>
            <ul>
              <li><a href="/work#green-tea">富硒绿茶</a></li>
              <li><a href="/work#black-tea">富硒红茶</a></li>
              <li><a href="/work#flower-tea">特色花茶</a></li>
              <li><a href="/work#gift-sets">精品礼盒</a></li>
              <li><a href="/work#seasonal">限定季节款</a></li>
            </ul>
          </div>
          
          <div class="footer__links-group">
            <h3>关于茶叶</h3>
            <ul>
              <li><a href="/about#tea-benefits">硒元素功效</a></li>
              <li><a href="/about#brewing">冲泡指南</a></li>
              <li><a href="/about#storage">保存方法</a></li>
              <li><a href="/contact#faq">常见问题</a></li>
              <li><a href="/timeline">茶叶历史</a></li>
            </ul>
          </div>
          
          <div class="footer__links-group">
            <h3>联系方式</h3>
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
                  <span>湖北省恩施土家族苗族自治州</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div class="footer__bottom">
        <p>&copy; {{ new Date().getFullYear() }} 恩施富硒茶. 保留所有权利.</p>
        <div class="footer__bottom-links">
          <a href="/privacy">隐私政策</a>
          <a href="/terms">使用条款</a>
          <a href="/sitemap">网站地图</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
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