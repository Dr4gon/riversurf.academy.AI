// These imports deliver the files to the browser
import './assets/main.css';
import './assets/normalize.css';
import './assets/SURFNSMILE.jpg';
import './assets/message-in-a-bottle.png';

import { setupCalendar } from 'v-calendar';

// Use calendar defaults (optional)

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(setupCalendar, {});

app.mount('#app');
