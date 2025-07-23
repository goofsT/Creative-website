<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__content">

        
        <div class="footer__links">
          <div class="footer__links-group">
            <h3>导航</h3>
            <ul>
              <li><router-link to="/">首页</router-link></li>
              <li><router-link to="/about">关于</router-link></li>
              <li><router-link to="/work">产品</router-link></li>
              <li><router-link to="/timeline">工艺</router-link></li>
              <li><router-link to="/contact">联系</router-link></li>
            </ul>
          </div>
          
          <div class="footer__links-group">
            <h3>联系我们</h3>
            <ul>
              <li>
                <a href="mailto:EnShiTea@outlook.com" class="email-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#e67e22" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  EnShiTea@outlook.com
                </a>
              </li>
              <li class="flex items-start gap-2">
                <a href="https://t.me/yourchannelname" class="telegram-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21.198 2.433a2.242 2.242 0 0 0-1.022.215l-16.5 7.5a2.25 2.25 0 0 0 .126 4.303l3.898 1.205 2.25 6.75c.226.674.787 1.174 1.5 1.174.48 0 .904-.22 1.184-.535l1.76-2.052 5.45 3.63a2.251 2.251 0 0 0 3.256-1.485l3-16.5a2.25 2.25 0 0 0-2.902-2.705" />
                  </svg>
                  
                </a>
                <img class="w-100px" src="../assets/images/telegram.png" alt="">

              </li>
            </ul>
          </div>

        </div>
      </div>
      
      <div class="footer__newsletter">
        <h3>订阅我们的通讯</h3>
        <p>获取最新的产品资讯</p>
        <form @submit.prevent="subscribeNewsletter">
          <input type="email" placeholder="您的电子邮箱" v-model="email" required />
          <button type="submit" class="btn">订阅</button>
        </form>
      </div>
      
      <div class="footer__bottom">
        <p>&copy; {{ new Date().getFullYear() }} 恩施富硒茶. 保留所有权利.</p>
        <div class="footer__bottom-links">
          <a href="#">隐私政策</a>
          <a href="#">使用条款</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, getCurrentInstance } from 'vue'
const { proxy } = getCurrentInstance()
const email = ref('')

const subscribeNewsletter = () => {
  // 这里可以添加订阅逻辑
  proxy.$message.success('订阅成功！')
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

        .telegram-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--color-text);
          transition: color 0.3s ease;
          
          &:hover {
            color: var(--color-accent);
          }
          
          svg {
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

.email-link, .telegram-link {
  display: flex;
  align-items: center;
  gap: 8px;
  
  svg {
    flex-shrink: 0;
  }
}

.telegram-link img {
  width: 24px;
  height: 24px;
  object-fit: contain;
}

// 移动端优化
@media (max-width: 768px) {
  .footer {
    &__grid {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
    
    &__bottom {
      flex-direction: column;
      gap: 1rem;
      text-align: center;
    }
  }
}

@media (max-width: 576px) {
  .footer {
    padding: 3rem 0 2rem;
    
    &__logo {
      h2 {
        font-size: 1.5rem;
        margin-bottom: 0.8rem;
      }
      
      p {
        font-size: 0.9rem;
        margin-bottom: 1rem;
      }
    }
    
    &__links {
      h3 {
        font-size: 1.1rem;
        margin-bottom: 0.8rem;
      }
      
      ul {
        li {
          margin-bottom: 0.5rem;
          
          a {
            font-size: 0.9rem;
          }
        }
      }
    }
    
    &__contact {
      h3 {
        font-size: 1.1rem;
        margin-bottom: 0.8rem;
      }
      
      p {
        font-size: 0.9rem;
        margin-bottom: 0.5rem;
      }
    }
    
    &__social {
      margin-top: 1rem;
      
      a {
        width: 35px;
        height: 35px;
        
        svg {
          width: 18px;
          height: 18px;
        }
      }
    }
    
    &__bottom {
      margin-top: 2rem;
      padding-top: 1.5rem;
      
      &-copyright {
        font-size: 0.8rem;
      }
      
      &-links {
        a {
          font-size: 0.8rem;
          margin-left: 0.8rem;
        }
      }
    }
  }
}
</style> 