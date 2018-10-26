<template>
  <div class="selection">
    <div class="selection-header">
      <a href=""><span>专题精选</span>
        <i class="iconfont icon-yuanxingjiantouyou"></i>
      </a>
    </div>
    <div class="selection-foods">
      <div class="foods-list" ref="picsUl">
        <div class="foods-item" v-for="(item,index) in home.topicList" :key="index">
          <a href="">
            <img
              v-lazy="item.itemPicUrl"
              alt="">
            <h4>{{item.title}}</h4>
            <span>{{item.subtitle}}</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
 import {mapState} from 'vuex'
 import BScroll from 'better-scroll'
  export default {
  computed:{
      ...mapState(['home']),
    },
  mounted (){
  this.$store.dispatch('getHome')
   if(!this.home.topicList) {
        return
      }
      this._initScroll()
  },
    methods:{
     _initScroll() {
     const ul = this.$refs.picsUl
        const liWidth = 305
        const space = 10
        const count = this.home.topicList.length
        ul.style.width = (liWidth + space) * count - space + 'px'
      new BScroll('.selection-foods', {
          click: true,
          scrollX: true
        })
     }
    },
     watch: {
      home () {
        this.$nextTick(() => {
          this._initScroll()
        })
      }
    }
  }
</script>
<style lang="less" type="text/less">
  @import "../../common/stylus/mixins";

  .selection {
    width: 100%;
    background-color: #ffffff;
    padding: 1.8rem 1.4rem 1.8rem;
    box-sizing: border-box;
    overflow: hidden;
    .selection-header {
      width: 100%;
      text-align: center;
      span {
        font-size: 4vw;
        color: #333;
      }
      i {
        font-size: 3vw;
      }
    }
    .foods-list {
      margin-top: 1.5rem;
      width: 100%;
      white-space: nowrap;
      display: flex;
      .foods-item {
        display: inline-block;
        margin-right: .8rem;
        width: 70%;
        img {
          width: 100%;
          height: 15.4rem;
        }
        h4 {
          color: #333;
          font-size: 4vw;
          margin-top: 1rem;
        }
        span {
          color: #7f7f7f;
          white-space: nowrap;
          font-size: 3.5vw;
          margin-top: .6rem;
          display: block;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      }
    }
  }
</style>
