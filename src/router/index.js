import { createRouter, createWebHistory } from 'vue-router'
import SeaTurtleIntro from '../views/SeaTurtleIntro.vue'
import MainPageIntro from '../views/MainPageIntro.vue'
import STDetailIntro from '../views/STDetailIntro.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: '메인페이지', component: MainPageIntro },
    {
      path: '/SeaTurtleIntro',
      name: '바다 거북 페이지',
      component: SeaTurtleIntro
    },
    { path: '/STDetailIntro', name: '거북이 상세페이지', component: STDetailIntro, props: true }
    //props => 다른 라우터에서 데이터를 받아오기 위해서 사용 props를 적용해야 하는 routes는 데이터를 받아 사용할 routes 이다.
  ]
})
export default router
