<template>
<div id="app">
  <router-view/>
  <Footer v-show="$route.meta.showFooter"/>
</div>
</template>

<script>

import Vue from 'vue'
import VueLazyload from 'vue-lazyload'
import loadimg from './common/images/loading.gif'
import Footer from './components/Footer/Footer.vue'
Vue.use(VueLazyload,{
loadimg
})
  export default {
    components:{
      Footer
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
 #app{
   width: 100%;
   height: 100%;
   background-color: #f4f4f4;
 }
</style>
