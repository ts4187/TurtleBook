import { createRouter, createWebHistory } from 'vue-router'
import SeaTurtleIntro from '../views/SeaTurtleIntro.vue'
import MainPageIntro from '../views/MainPageIntro.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/MainPageIntro', name: '거 book 의 의미', component: MainPageIntro },
    {
      path: '/SeaTurtleIntro',
      name: '바다 거북 페이지',
      component: SeaTurtleIntro
    }
  ]
})
export default router
