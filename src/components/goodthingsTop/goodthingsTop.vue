<template>
  <div class="goodthingsTop">
    <div class="home" @click="$router.replace('/msite')">
      <i class="iconfont icon-shouye"></i>
    </div>
    <div class="title">
      <span>网易严选</span>
    </div>
    <div class="search" @click="$router.replace('/msite')">
      <i class="iconfont icon-sousuo6"></i>
    </div>
    <div class="cart" @click="$router.replace('/shop')">
      <i class="iconfont icon-tubiaozhizuomoban"></i>
    </div>
  </div>
</template>
<script>
  export default {}
</script>
<style lang="less" type="text/less">
  @import "../../common/stylus/mixins";

  .goodthingsTop {
    width: 100%;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 4.5rem;
    z-index: 100;
    background-color: #fafafa;
    .title span {
      font-size: 5vw;
      display: block;
      position: relative;
      left: 36%;
    }
    .home .icon-shouye {
      font-size: 10vw;
      position: relative;
      left: -50%;
      vertical-align: middle;
    }
    .search .icon-sousuo6 {
      position: relative;
      font-size: 6vw;
      right: -210%;
      vertical-align: middle;
    }
    .cart .icon-tubiaozhizuomoban {
      position: relative;
      font-size: 8vw;
      right: -25%;
      vertical-align: middle;
    }
  }
</style>
