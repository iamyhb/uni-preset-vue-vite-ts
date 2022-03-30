import { createSSRApp } from 'vue'
import App from './App.vue'
import '@/style/base/normalize/normalize.css'
import '@/style/index.scss'

import { createPinia } from 'pinia'

const pinia = createPinia()

export function createApp() {
  const app = createSSRApp(App).use(pinia)
  return {
    app
  }
}
