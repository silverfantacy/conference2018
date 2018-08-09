import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/admin',
      name: 'Admin',
      component: () => import('@/pages/Admin')
    },
    {
      path: '*',
      redirect: '/admin'
    }
  ]
})
