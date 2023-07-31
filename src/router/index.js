import { createRouter, createWebHistory } from 'vue-router'

const COMPONENT_PATH = '../components/'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/welcome',
      name: 'welcome',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(COMPONENT_PATH+'WelcomeComponent.vue')
    },
    {
      path: '/convincer',
      name: 'convincer',
      component: () => import(COMPONENT_PATH+'ConvincerComponent.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import(COMPONENT_PATH+'ContactComponent.vue')
    },
    {
      path: '/sales',
      name: 'sales',
      component: () => import(COMPONENT_PATH+'SalesComponent.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(COMPONENT_PATH+'AboutComponent.vue')
    }
  ]
})

export default router
