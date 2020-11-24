import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Game from '@/components/Game'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/game',
      name: 'Game',
      component: Game,
      props: true,
      beforeEnter: (to, from, next) => {
        if(to.params.name){
          next()
        }else {
          next({name: 'Home'})
        }
       }
    }
  ]
})
