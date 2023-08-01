// These imports deliver the files to the browser
import './assets/main.css'
import './assets/SURFNSMILE.jpg'
import './assets/IntroVideo.webm'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
