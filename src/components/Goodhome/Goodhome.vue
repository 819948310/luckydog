<template>
<div>

  <div class="goodhome" v-for="(item,index) in home.cateList" :key="index">
    <div class="goodhome-header">
      <a href="">
        <span>{{item.name}}精选</span>
      </a>
    </div>
    <ul>
      <li v-for="(items,index) in item.itemList" :key="index">
        <a href="">
          <div class="img-item">
            <img v-lazy="items.listPicUrl" alt="">
            <span>{{items.simpleDesc}}</span>
          </div>
          <h4>{{items.name}}</h4>
          <em>￥{{items.couponPrice}}</em></a></li>
    </ul>
  </div>
  </div>
</template>
<script>
 import {mapState} from 'vuex'
  export default {
  mounted (){
  this.$store.dispatch('getHome')
  },
   computed:{
      ...mapState(['home'])
    }
  }
</script>
<style lang="less" type="text/less">
  @import "../../common/stylus/mixins";

  .goodhome {
    width: 100%;
    background-color: #ffffff;
    overflow: hidden;
    padding: 1.8rem 1.4rem 1.8rem;
    box-sizing: border-box;
    margin-top: 1rem;
    .goodhome-header {
      width: 100%;
      text-align: center;
      span {
        font-size: 4vw;
        color: #333;
      }
    }
    ul {
      margin-top: 1.5rem;
      width: 100%;
      overflow: hidden;
      li {
        width: 48.5%;
        overflow: hidden;
        display: inline-block;
        margin-bottom: 1.5rem;
      &:nth-child(2n+1){
      margin-right: 2%;
      }
      &.more {
          height: 19.5rem;
          background-color: #f4f4f4;
          overflow: hidden;
          text-align: center;
        span {
            color: #333;
            font-size: 4.5vw;
            display: block;
            text-align: center;
            margin-top: 5.5rem;
            margin-bottom: 3.5rem;
          }
        i {
            font-size: 7vw;
          }
        }
        .img-item {
          width: 100%;
          height: 19.5rem;
          background-color: #f4f4f4;
          line-height: 19.5rem;
          position: relative;
          img {
            margin: 0 auto;
            height: 100%;
          }
          span {
            width: 100%;
            background: #F1ECE2;
            display: block;
            height: 3rem;
            line-height: 3rem;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            color: #9F8A60;
            position: absolute;
            bottom: 0;
            font-size: 3vw;
            padding: 2%;
            box-sizing: border-box;
          }
        }
        h4 {
          overflow: hidden;
          color: #333;
          white-space: nowrap;
          font-size: 4vw;
          margin-top: 1rem;
          text-overflow: ellipsis;
        }
        em {
          display: block;
          color: #b4282d;
          font-size: 4vw;
          margin-top: 1rem;
        }
      }
    }
  }
</style>
