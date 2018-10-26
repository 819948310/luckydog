<template>
  <div class="shopfoods">
    <div class="shopcontain" ref="picsUl">
      <div class="item" v-for="(item,index) in home.newItemList" :key="index">
        <div class="shop-img">
          <img v-lazy="item.primaryPicUrl" alt="">
        </div>
        <div class="shopinfo">
          <p>{{item.name}}</p>
          <span>{{item.simpleDesc}}</span>
          <em>￥{{item.retailPrice}}</em>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'

  export default {
    computed: {
      ...mapState(['home'])
    },
    mounted() {
      this.$store.dispatch('getHome')
      if(!this.home.newItemList) {
        return
      }
      this._initScroll()
    },
    methods: {
      _initScroll() {
        const ul = this.$refs.picsUl
        const liWidth = 130
        const space = 6
        const count = this.home.newItemList.length
        ul.style.width = (liWidth + space) * count - space + 'px'
        new BScroll('.shopfoods', {
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

  .shopfoods {
    padding: 2rem 1.5rem 2.5rem;
    box-sizing: border-box;
    width: 100%;
    overflow: hidden;
    background-color: #ffffff;
    white-space: nowrap;
    .item {
      width: 13rem;
      display: inline-block;
      margin-right: 1rem;
     .shop-img {
        width: 100%;
        background-color: #F2F2F2;
        height: 13rem;
        line-height: 13rem;
        img {
          margin: 0 auto;
          height: 100%;
        }
      }
      .shopinfo {
        width: 100%;
        margin-top: .6rem;
        p {
          overflow: hidden;
          color: #333;
          white-space: nowrap;
          font-size: 4vw;
          margin-top: 1rem;
          text-overflow: ellipsis;
        }
        span {
          overflow: hidden;
          color: #7f7f7f;
          white-space: nowrap;
          font-size: 3.5vw;
          margin-top: .6rem;
          display: block;
          text-overflow: ellipsis;
        }
        em {
          display: block;
          color: #b4282d;
          font-size: 3vw;
          margin-top: 1rem;
        }
      }
    }
  }
</style>
