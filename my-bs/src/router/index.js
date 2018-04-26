import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Prem from '@/views/Infomsg/index'
Vue.use(Router)
export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      name: 'Layout',
      component: () => import('@/views/layout/Layout'), hidden: true ,
      redirect: '/AppMain',
      children: [{
        path: '/AppMain',
        name: 'AppMain',
        component: Prem
      }]
    },

    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/index'), hidden: true 
    }
  ]
})
