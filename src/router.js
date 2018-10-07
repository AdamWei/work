import Vue from 'vue'
import Router from 'vue-router'
import index from './views/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/',
      component: index
    },
    {
      path: '/dice',
      name: 'dice',
      component: () => import(/* webpackChunkName: "dice" */ './views/dice.vue')
    },
    {
      path: '/lotto',
      name: 'lotto',
      component: () => import(/* webpackChunkName: "lotto" */ './views/lotto.vue')
    }
  ]
})
