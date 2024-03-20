import { createRouter, createWebHistory } from 'vue-router';

const COMPONENT_PATH = '../views/';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'welcome',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* @vite-ignore */ `${COMPONENT_PATH}WelcomeView.vue`),
    },
    {
      path: '/convincer',
      name: 'convincer',
      component: () => import(/* @vite-ignore */ `${COMPONENT_PATH}ConvincerView.vue`),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import(/* @vite-ignore */ `${COMPONENT_PATH}ContactView.vue`),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* @vite-ignore */ `${COMPONENT_PATH}AboutView.vue`),
    },
  ],
});

export default router;
