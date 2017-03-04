import Vue from 'vue'
import Router from 'vue-router'

import Open from '@/components/Open'
import Process from '@/components/Process'
import Complete from '@/components/Complete'
import User from '@/components/User'
import New from '@/components/New'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Open',
      component: Open
    }, {
      path: '/process',
      name: 'Process',
      component: Process
    }, {
      path: '/complete',
      name: 'Complete',
      component: Complete
    }, {
      path: '/user',
      name: 'User',
      component: User
    }, {
      path: '/new',
      name: 'New',
      component: New
    }
  ]
})
