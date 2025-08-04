import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView/HomeView.vue'
import AboutView from '@/views/AboutView/AboutView.vue'
import PrivacyView from '@/views/PrivacyView/PrivacyView.vue'
import DetailView from '@/views/DetailView/DetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/about',
      component: AboutView
    },
    {
      path: '/privacy',
      component: PrivacyView
    },
    {
      path: '/:name',
      component: DetailView
    }
  ]
})

export default router
