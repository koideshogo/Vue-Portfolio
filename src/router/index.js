import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/rails',
    name: 'Rsils',
    component: () => import(/* webpackChunkName: "about" */ '../views/Rails.vue')
  },
  {
    path: '/vue',
    name: 'Vue',
    component: () => import(/* webpackChunkName: "about" */ '../views/Vue.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
