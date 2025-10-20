import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style/reset.scss'
import App from './App.vue'
import router from './router'
import globalComponents from '@/components'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(globalComponents)
app.mount('#app')
