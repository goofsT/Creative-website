import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/main.scss'
import 'virtual:uno.css'
import Message from './utils/message.js'

// 初始化主题函数
const initTheme = () => {
  const savedTheme = localStorage.getItem('theme')
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme)
  } else if (systemPrefersDark) {
    document.documentElement.setAttribute('data-theme', 'dark')
  }
}

// 在Vue挂载前初始化主题，防止闪烁
initTheme()

const app = createApp(App)

// 全局挂载消息组件
app.config.globalProperties.$message = Message

app.use(router).mount('#app') 