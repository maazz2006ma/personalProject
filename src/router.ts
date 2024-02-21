import { createRouter, createWebHistory } from 'vue-router'
import LoginCardVue from './components/LoginCard.vue'
import SignUpCardVue from './components/SignUpCard.vue'

const routes = [
  { path:'', redirect:'/login' },
  { path: '/login', component: LoginCardVue },
  { path: '/signup', component : SignUpCardVue }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router