<template>
  <header class="header" :class="{ 'header--scrolled': scrolled }">
    <div class="container">
      <div class="header__content">
        <div class="header__logo">
          <router-link to="/">
            <h1>富硒<span>茶</span></h1>
          </router-link>
        </div>
        
        <nav class="header__nav" :class="{ 'active': menuOpen }">
          <ul>
            <li><router-link to="/" @click="closeMenu">首页</router-link></li>
            <li><router-link to="/about" @click="closeMenu">关于</router-link></li>
            <li><router-link to="/work" @click="closeMenu">产品</router-link></li>
            <li><router-link to="/timeline" @click="closeMenu">工艺</router-link></li>
            <li><router-link to="/contact" @click="closeMenu">联系</router-link></li>
          </ul>
        </nav>
        
        <div class="header__social">
          <a href="#" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>
          <a href="#" aria-label="Facebook">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
          </a>
        </div>
        
        <button class="header__menu-toggle" @click="toggleMenu" aria-label="菜单">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const menuOpen = ref(false)

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
  document.body.style.overflow = menuOpen.value ? 'hidden' : ''
}

const closeMenu = () => {
  menuOpen.value = false
  document.body.style.overflow = ''
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  padding: 1.5rem 0;
  transition: var(--transition);
  
  &--scrolled {
    background-color: rgba(0, 0, 0, 0.9);
    padding: 1rem 0;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
  
  &__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  &__logo {
    z-index: 101;
    
    h1 {
      font-size: 1.8rem;
      margin: 0;
      
      span {
        color: var(--color-accent);
      }
    }
  }
  
  &__nav {
    ul {
      display: flex;
      list-style: none;
      
      li {
        margin: 0 1.5rem;
        
        a {
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-size: 0.9rem;
          position: relative;
          
          &::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 0;
            height: 2px;
            background-color: var(--color-accent);
            transition: var(--transition);
          }
          
          &:hover::after,
          &.router-link-active::after {
            width: 100%;
          }
        }
      }
    }
  }
  
  &__social {
    display: flex;
    align-items: center;
    
    a {
      margin-left: 1rem;
      
      svg {
        transition: var(--transition);
      }
      
      &:hover svg {
        color: var(--color-accent);
      }
    }
  }
  
  &__menu-toggle {
    display: none;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 21px;
    background: transparent;
    border: none;
    cursor: pointer;
    z-index: 101;
    
    span {
      display: block;
      width: 100%;
      height: 3px;
      background-color: var(--color-text);
      transition: var(--transition);
    }
  }
}

@media (max-width: 992px) {
  .header {
    &__nav {
      position: fixed;
      top: 0;
      right: -100%;
      width: 70%;
      max-width: 300px;
      height: 100vh;
      background-color: var(--color-bg);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: var(--transition);
      box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
      z-index: 100;
      
      &.active {
        right: 0;
      }
      
      ul {
        flex-direction: column;
        align-items: center;
        
        li {
          margin: 1.2rem 0;
          
          a {
            font-size: 1.1rem;
          }
        }
      }
    }
    
    &__social {
      display: none;
    }
    
    &__menu-toggle {
      display: flex;
    }
  }
}

@media (max-width: 576px) {
  .header {
    padding: 1rem 0;
    
    &--scrolled {
      padding: 0.8rem 0;
    }
    
    &__logo {
      h1 {
        font-size: 1.5rem;
      }
    }
    
    &__nav {
      width: 80px;
      
      ul {
        li {
          margin: 1rem 0;
          
          a {
            font-size: 1rem;
          }
        }
      }
    }
    
    &__menu-toggle {
      width: 25px;
      height: 18px;
      
      span {
        height: 2px;
      }
    }
  }
}
</style> 