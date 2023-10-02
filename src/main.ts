import './assets/styles.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { key} from "@/store/store"
import store  from '@/store/store'

const app = createApp(App)

app.use(router)
app.use(store,key)

app.mount('#app')
