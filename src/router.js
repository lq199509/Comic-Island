import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
export default new VueRouter({
  routes: [
    { path: '/', component: () => import('./views/home.vue') },
    { path: '/login', component: () => import('./views/login.vue') },
    { path: '/register', component: () => import('./views/register.vue') }
  ]
})
