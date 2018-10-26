<template>
  <div class="profileFooter">
    <div class="Footer-juzhon">
      <div class="wx">
        <i class="iconfont icon-weixin"></i>
        <span>微信</span>
      </div>
      <div class="QQ">
        <i class="iconfont icon-web-icon-"></i>
        <span>QQ</span>
      </div>
      <div class="wb">
        <i class="iconfont icon-weibo"></i>
        <span>微博</span>
      </div>
    </div>
  </div>
</template>
<script>
  export default {}
</script>
<style lang="less" type="text/less">
  @import "../../common/stylus/mixins";

  .profileFooter {
    width: 100%;
    position: absolute;
    bottom: 2rem;
    .Footer-juzhon{
     width: 60%;
     display: flex;
     margin: 0 auto;
     justify-content: space-between;
     div{
      height: 2rem;
      border-right: 1px solid #979797;
      padding-left: 1rem;
      padding-right: 1rem;
      line-height: 2rem;
      color: #333333;
      width: 5rem;
      text-align: center;
      i{
       font-size: 4vw;
       vertical-align: middle;
       position: relative;
       left: -0.4rem;
       top: -0.4rem;
      }
      span{
      font-size: 4vw;
      }
     }
    }
  }
</style>
