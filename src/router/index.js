import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/home/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/projects',
    name: 'projects',
    meta: {
      title: 'Projects - Jason Pursey',
    },
    component: () => import(/* webpackChunkName: "projects" */ '../components/projects/index.vue'),
  },
  {
    path: '/contact',
    name: 'contact',
    meta: {
      title: 'Contact - Jason Pursey',
    },
    component: () => import(/* webpackChunkName: "projects" */ '../components/contact/index.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Jason Pursey - Web Developer'
  next()
})

export default router
