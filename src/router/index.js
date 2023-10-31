import { createRouter, createWebHistory } from 'vue-router'
import HomeF1 from '../views/HomeF1.vue'

const routes = [
  {
    path: '/',
    name: 'index',
    component: HomeF1
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/pilotos',
    name: 'pilotos',
    component: () => import('../views/MyPilotos.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
