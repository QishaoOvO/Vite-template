import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },

  {
    path: '/about',
    name: 'about',
    //路由级代码拆分
    //这将为此路由生成一个单独的块（about.[hash].js）
    //当访问该路线时，它被延迟加载。
    component: () => import('../views/AboutView.vue')
  },

]

const router = createRouter({
     history: createWebHistory('/'), // 直接使用静态字符串
     routes
})

export default router
