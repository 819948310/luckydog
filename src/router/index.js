import Vue from 'vue'
import Router from 'vue-router'

const Msite = () =>import('../pages/Msite/Msite')
const Knowledge=() =>import('../pages/Knowledge/Knowledge')
const Classify=() =>import('../pages/Classify/Classify')
const Shop=()=> import('../pages/Shop/Shop')
const Profile=()=> import('../pages/Profile/Profile')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/msite',
      component: Msite,
      meta:{
      showFooter:true
      }
    },
    {
      path: '/knowledge',
      component: Knowledge,
      meta:{
      showFooter:true
      }
    },
    {
      path: '/classify',
      component: Classify,
      meta:{
      showFooter:true
      }
    },
     {
      path: '/shop',
      component: Shop,
      meta:{
      showFooter:true
      }
    },
    {
      path: '/profile',
      component: Profile,
    },
    {
      path: '/',
      redirect: '/msite'
    },

  ]
})
