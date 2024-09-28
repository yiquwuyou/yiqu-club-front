import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/loginView/loginView.vue')
    },
    {
      path: '/',
      name: 'layout',
      component: () => import('../views/layoutView/layoutView.vue'),

      children: [
        {
          path: 'function/exam',
          name: 'exam',
          component: () => import('../views/examView/examView.vue')
        }
      ]
    },
  ]
})

export default router
