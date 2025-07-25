<template>
  <header class="header" :class="{ 'header--scrolled': scrolled }">
    <div class="container">
      <div class="header__content">
        <div class="header__logo">
          <router-link to="/">
            <h1 v-if="currentLanguage === 'zh'">富硒<span>茶</span></h1>
            <h1 v-else>Se-<span>Tea</span></h1>
          </router-link>
        </div>
        
        <nav class="header__nav" :class="{ 'active': menuOpen }">
          <ul>
            <li><router-link to="/" @click="closeMenu">{{ t('nav.home') }}</router-link></li>
            <li><router-link to="/about" @click="closeMenu">{{ t('nav.about') }}</router-link></li>
            <li><router-link to="/work" @click="closeMenu">{{ t('nav.products') }}</router-link></li>
            <li><router-link to="/timeline" @click="closeMenu">{{ t('nav.process') }}</router-link></li>
            <li><router-link to="/research" @click="closeMenu">{{ t('nav.research') }}</router-link></li>
            <li><router-link to="/contact" @click="closeMenu">{{ t('nav.contact') }}</router-link></li>
          </ul>
          <LanguageSwitcher class="header__lang-switcher" />
        </nav>
        
        <div class="header__actions">
          <LanguageSwitcher class="header__lang-switcher-desktop" />
          <button class="header__menu-toggle" @click="toggleMenu" aria-label="菜单">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import LanguageSwitcher from './LanguageSwitcher.vue'
import { currentLanguage, t } from '../i18n'

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
  
  &__actions {
    display: flex;
    align-items: center;
  }
  
  &__lang-switcher {
    display: none;
    margin-top: 2rem;
  }
  
  &__lang-switcher-desktop {
    display: block;
    margin-right: 1rem;
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
      flex-direction: column;
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
    
    &__lang-switcher {
      display: flex;
    }
    
    &__lang-switcher-desktop {
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
      width: 80%;
      
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