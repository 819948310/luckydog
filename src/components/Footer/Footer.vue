<template>
  <div class="footer_guide">
    <span class="guide_item" :class="{on: '/msite'===$route.path}" @click="goTo('/msite')">
      <span class="item_icon">
        <i class="iconfont icon-shouye"></i>
      </span>
      <span>首页</span>
    </span>
    <a href="javascript:;" class="guide_item" :class="{on: '/knowledge'===$route.path}" @click="goTo('/knowledge')">
      <span class="item_icon">
        <i class="iconfont icon-wpml"></i>
      </span>
      <span>识物</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on: '/classify'===$route.path}" @click="goTo('/classify')">
      <span class="item_icon">
        <i class="iconfont icon-39"></i>
      </span>
      <span>分类</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on: '/shop'===$route.path}" @click="goTo('/shop')">
      <span class="item_icon">
        <i class="iconfont icon-tubiaozhizuomoban"></i>
      </span>
      <span>购物车</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on: '/profile'===$route.path}" @click="goTo('/profile')">
      <span class="item_icon">
        <i class="iconfont icon-personal"></i>
      </span>
      <span>我的</span>
    </a>
  </div>
</template>

<script>
  export default {
    methods: {
      goTo (path) {
        this.$router.replace(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .footer_guide  //footer
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 50px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999
      &.on
        color #bc383f
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 22px
</style>
