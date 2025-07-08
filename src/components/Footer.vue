<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__content">
        <div class="footer__logo">
          <h2>创意<span>设计</span></h2>
          <p>视觉未来主义者</p>
        </div>
        
        <div class="footer__links">
          <div class="footer__links-group">
            <h3>导航</h3>
            <ul>
              <li><router-link to="/">首页</router-link></li>
              <li><router-link to="/about">关于</router-link></li>
              <li><router-link to="/work">作品</router-link></li>
              <li><router-link to="/timeline">时间线</router-link></li>
              <li><router-link to="/contact">联系</router-link></li>
            </ul>
          </div>
          
          <div class="footer__links-group">
            <h3>联系我们</h3>
            <ul>
              <li><a href="mailto:info@example.com">info@example.com</a></li>
              <li><a href="tel:+1234567890">+123 456 7890</a></li>
            </ul>
          </div>
          
          <div class="footer__links-group">
            <h3>关注我们</h3>
            <div class="footer__social">
              <a href="#" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" aria-label="YouTube">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div class="footer__newsletter">
        <h3>订阅我们的通讯</h3>
        <p>获取最新的创意设计资讯和项目更新</p>
        <form @submit.prevent="subscribeNewsletter">
          <input type="email" placeholder="您的电子邮箱" v-model="email" required />
          <button type="submit" class="btn">订阅</button>
        </form>
      </div>
      
      <div class="footer__bottom">
        <p>&copy; {{ new Date().getFullYear() }} 创意设计. 保留所有权利.</p>
        <div class="footer__bottom-links">
          <a href="#">隐私政策</a>
          <a href="#">使用条款</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')

const subscribeNewsletter = () => {
  // 这里可以添加订阅逻辑
  alert('感谢订阅！')
  email.value = ''
}
</script>

<style lang="scss" scoped>
.footer {
  background-color: var(--color-secondary);
  padding: 5rem 0 2rem;
  
  &__content {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 3rem;
    margin-bottom: 3rem;
    
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
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
    }
  }
  
  &__links {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    
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
    }
    
    ul {
      list-style: none;
      
      li {
        margin-bottom: 0.8rem;
        
        a {
          color: #ccc;
          transition: var(--transition);
          
          &:hover {
            color: var(--color-accent);
          }
        }
      }
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
  
  &__newsletter {
    margin-bottom: 3rem;
    
    h3 {
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
      color: var(--color-accent);
    }
    
    p {
      color: #ccc;
      margin-bottom: 1.5rem;
    }
    
    form {
      display: flex;
      gap: 1rem;
      max-width: 500px;
      
      @media (max-width: 576px) {
        flex-direction: column;
      }
      
      input {
        flex: 1;
        padding: 0.8rem 1rem;
        background-color: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.2);
        color: var(--color-text);
        font-size: 1rem;
        
        &::placeholder {
          color: #999;
        }
        
        &:focus {
          outline: none;
          border-color: var(--color-accent);
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
    
    @media (max-width: 576px) {
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
      
      a {
        color: #999;
        font-size: 0.9rem;
        
        &:hover {
          color: var(--color-accent);
        }
      }
    }
  }
}
</style> 