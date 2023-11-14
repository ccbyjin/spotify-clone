import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from 'src/App.vue'
import router from 'src/router'

import 'src/assets/main.css'

import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')
