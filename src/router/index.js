import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'Index',
      component: () => import('@/pages/Index')
    },
    {
      path: '/admin',
      name: 'Admin',
      component: () => import('@/pages/Admin'),
      children: [
        {
          path: 'schedule',
          name: 'Schedule',
          component: () => import('@/pages/Schedule')
        },
        {
          path: 'credit',
          name: 'Credit',
          component: () => import('@/pages/Credit')
        }
      ]
    },
    {
      path: '*',
      redirect: '/index'
    }
  ]
})
