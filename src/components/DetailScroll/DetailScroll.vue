<template>
    <div class="m-exploreChannels">
      <div class="scroll-wrap">
        <div class="scroll-item" v-for="(item,index) in scroll" :key="index">
          <div class="imgContainer">
            <img v-lazy="item.picUrl" alt="">
          </div>
          <div class="rbGradient">
            <div class="topNum">{{item.articleCount}}</div>
          </div>
          <div class="title">{{item.title}}</div>
        </div>
      </div>
    </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "DetailScroll",
    props:{
      scroll: Array,
      createScroll: Function
    },
    mounted(){
      this.$nextTick(() => {
        new BScroll('.m-exploreChannels', {
          click: true,
          scrollX: true
        })
      })
    },
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import '../../common/stylus/mixins';
  .m-exploreChannels{
    overflow: hidden;
    padding: 1.5rem 2rem 1.5rem;
    background-color: #fff;
    margin-bottom: 1rem;
    display: flex;
    .scroll-wrap{
      margin-left: auto;
      margin-right: auto;
      position: relative;
      z-index: 1;
      transform: translate3d(0px, 0px, 0px);
      transition-duration: 0ms;
      display: flex;
      flex-wrap: nowrap;
      .scroll-item{
        position: relative;
        width: 8.5rem;
        margin-right:1rem;
        .imgContainer{
          img{
            background-size: cover;
            -webkit-background-size: cover;
            -o-background-size: cover;
            -moz-background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            width: 8.5rem;
            height: 8.5rem;
            margin-bottom: .5rem;
            border-radius: 5px;
          }
        }
        .title{
          color: #333;
          font-size: 3vw;
          line-height: 1;
          text-align: center;
          width: 8.5rem;
        }
        .rbGradient{
          position: absolute;
          top: 0;
          right: 0;
          color: #fff;
          width: 8.5rem;
          border-radius: 2px;
          height: 2.5rem;
          line-height: 2.5rem;
          background: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/rbGradient-049c62dfb5.png) no-repeat;
          background-size: 100%;
          display: inline-block;
          vertical-align: middle;
          padding-right: .5rem;
          box-sizing: border-box;
        }
        .topNum{
          font-size: 3vw;
          text-align: right;
        }
      }
    }
  }
</style>
