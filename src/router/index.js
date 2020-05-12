import Vue from 'vue'
import VueRouter from 'vue-router'
import Covers from '../views/Covers.vue'
import Infographic from '../views/About.vue'
import App from '../App.vue'

Vue.use(VueRouter)
//TODO change the name-o
const routes = [
  {
    path: '/about/:id',
    name: 'about',
    component: Infographic
  },
  {
    path: '/',
    name: 'Covers',
    component: Covers
  },
  {
    path: '/App',
    name: 'App',
    component: App
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
