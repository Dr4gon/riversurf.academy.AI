// These imports deliver the files to the browser
import './assets/main.css'
import './assets/SURFNSMILE.jpg'
import './assets/IntroVideo.webm'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// import Swiper bundle with all modules installed
import { register } from 'swiper/element/bundle';

// import styles bundle
import 'swiper/css/bundle';

// init Swiper:
register();

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
