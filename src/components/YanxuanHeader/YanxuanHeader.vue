<template>
    <div class="m-topBar">
          <i class="iconfont icon-shouye" @click="$router.replace('/msite')"></i>
          <i class="logo">网易严选</i>
              <i class="iconfont icon-sousuo6" @click="$router.replace('/msite')"></i>
              <i class="iconfont icon-tubiaozhizuomoban" @click="$router.replace('/shop')"></i>
        </div>
</template>

<script>
  export default {
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import '../../common/stylus/mixins';
  .m-topBar {
    position: fixed;
    top: 0;
    z-index: 99;
    width: 100%;
    height: 4.4rem;
    background-color: #fafafa;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    .icon-shouye {
      font-size: 9vw;
      cursor: pointer;
      position: relative;
      left: 1rem;
      vertical-align: middle;
    }
    .logo {
      font-size: 5vw;
      text-align: center;
      width: 100%;
      font-weight: bold;
      vertical-align: middle;
    }
    .icon-sousuo6 {
      font-size: 6vw;
      cursor: pointer;
      position: relative;
      left: -2rem;
      vertical-align: middle;
    }
    .icon-tubiaozhizuomoban{
    font-size: 7vw;
    cursor: pointer;
    position: relative;
    left: -1rem;
    vertical-align: middle;
    }
  }
</style>
