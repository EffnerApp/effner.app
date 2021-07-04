import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home')
  },
  {
    path: '/imprint',
    name: 'Impressum',
    component: () => import('../views/Imprint')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
