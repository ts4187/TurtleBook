import { createRouter, createWebHistory } from 'vue-router'
import SeaTurtleIntro from '../views/SeaTurtleIntro.vue'
import MainPageIntro from '../views/MainPageIntro.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: '거북이란', component: MainPageIntro },
    {
      path: '/about',
      name: 'about',
      component: SeaTurtleIntro
    }
  ]
})
export default router
