import Vue from 'vue'
import Router from 'vue-router'

import HomePageHeader from "./components/subComponents/HomePageHeader"
import HomePageIndex1 from "./components/subComponents/HomePageIndex1"
import HomePageIndex2 from "./components/subComponents/HomePageIndex2"
import HomePageIndex3 from "./components/subComponents/HomePageIndex3"
import HomePage from "./components/HomePage"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HomePage',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/HomePageHeader',
      name: 'HomePageHeader',
      component: HomePageHeader
    },
    
    {
      path: '/HomePageIndex1',
      name: 'HomePageIndex1',
      component: HomePageIndex1
    },
    {
      path: '/HomePageIndex2',
      name: 'HomePageIndex2',
      component: HomePageIndex2
    },
    {
      path: '/HomePageIndex3',
      name: 'HomePageIndex3',
      component: HomePageIndex3
    },
   
  ]
})
