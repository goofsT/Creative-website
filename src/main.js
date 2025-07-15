import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/main.scss'
import 'virtual:uno.css'

createApp(App)
  .use(router)
  .mount('#app') 