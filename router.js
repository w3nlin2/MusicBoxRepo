import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import HomePageHeader from "./components/subComponents/HomePageHeader"
import HomePage from "./components/HomePage"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/HomePageHeader',
      name: 'HomePageHeader',
      component: HomePageHeader
    },
    {
      path: '/HomePage',
      name: 'HomePage',
      component: HomePage
    },
    
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})

