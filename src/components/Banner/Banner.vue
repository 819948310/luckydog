<template>
  <div class="banner">
    <div class="swiper-container" v-if="banner.length>0">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in banner" :key="index">
        <a href="/"><img v-lazy="item.picUrl"></a></div>
      </div>
      <!-- Add Scrollbar -->
      <div class="swiper-scrollbar"></div>
    </div>
    <div class="serve">
      <a href=""><i class="iconfont icon-yuanxingjiantouyou"></i><span>网易自营品牌</span></a>
      <a href=""><i class="iconfont icon-yuanxingjiantouyou"></i><span>30天无忧退货</span></a>
      <a href=""><i class="iconfont icon-yuanxingjiantouyou"></i><span>48小时快速退款</span></a>
    </div>
  </div>
</template>
<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import {mapState} from 'vuex'
  export default {
  mounted (){
  this.$store.dispatch('getBanner')
  new Swiper('.swiper-container', {
        loop: true,
        autoplay: {
          autoplay:true,
          delay: 3000
        },
      })
  },
  computed:{
  ...mapState(['banner'])
  },
  watch :{
  banner (val){
  this.$nextTick(()=>{
  new Swiper('.swiper-container', {
        loop: true,
        autoplay: {
          autoplay:true,
          delay: 3000
        },
      })
  })
  }
  }
  }
</script>
<style lang="less" rel="stylesheet/less">
  @import "../../common/stylus/mixins";

  .banner {
    width: 100%;
    overflow: hidden;
    background-color: #ffffff;
    margin-top: 8rem;
    .swiper-container {
      img {
        width: 100%;
        height: 17.5rem
      }
    }
    .serve{
     width: 94%;
     padding-top: 1rem;
     padding-bottom: 1rem;
     margin: 0 auto;
     display: flex;
     justify-content: space-around;
     a{
      display: inline-block;
      width: 30%;
      color: #333;
      text-align: center;
      i{
       color: #E1A8AB;
       font-size: 2vw;
       position: relative;
       right: 5%;
       vertical-align: center;
      }
      span{
      font-size: 3vw;
      }
     }
    }
  }
</style>
