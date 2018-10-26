<template>
  <div class="DetailLoolk" v-if="detail.yxLook">
    <h4>严选LOOK</h4>
    <img v-lazy="detail.yxLook.picUrl" alt="" class="bigpic">
    <div class="info"><img v-lazy="detail.yxLook.avatar" alt=""><span>{{detail.yxLook.nickname}}</span></div>
  </div>
</template>

<script>
  export default {
    name: "DetailLoolk",
    props: {
      detail: Object
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import '../../common/stylus/mixins';

  .DetailLoolk {
    padding: 2.5rem 0;
    background-color: #ffffff;
    width: 100%;
    h4 {
      font-size: 4vw;
      width: 100%;
      text-align: center;
    }
    img.bigpic {
      width: 100%;
      margin-top: 2.5rem;
    }
    .info {
      margin-top: 1rem;
      margin-left: 1.5rem;
      width: 100%;
      img {
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;
      }
      span {
        font-size: 3vw;
      }
    }
  }
</style>
