import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Authorization from '../views/Authorization.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/auth', component: Authorization }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
