<template>
  <div>
    <YanxuanHeader/>
    <div class="loginTypesWrap">
      <div class="cont">
        <div class="logoWrap">
          <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
        </div>
        <div class="btnWrap">
          <div class="button-account" @click="goLogoin(true)">
            <i class="iconfont icon-shouji"></i>
            <span>手机号码登录</span>
          </div>
          <div class="button-ghostRed" @click="goLogoin(false)">
            <i class="iconfont icon-youxiang"></i>
            <span>邮箱账号登录</span>
          </div>
          <div class="btn">
            <span>手机号快捷注册</span>
            <i class="iconfont icon-youjiantou"></i>
          </div>
        </div>
      </div>
    </div>
    <YuanxuanFooter/>
  </div>
</template>
<script>
  import Vue from 'vue'
  import YanxuanHeader from '../../components/YanxuanHeader/YanxuanHeader'
  import YuanxuanFooter from '../../components/YuanxuanFooter/YuanxuanFooter'
  export default {
  data(){
      return{
        loginWay: null
      }
    },
     methods:{
      goLogoin(loginWay1){
        this.loginWay = loginWay1
        this.$router.replace('/login')
        this.$store.dispatch('setLoginWay',this.loginWay)
      }
    },
    components: {
      YanxuanHeader,
      YuanxuanFooter
    }
  }
</script>
<style scoped lang="less" rel="stylesheet/less">
  @import '../../common/stylus/mixins';
  html,body{
    height: 100%;
    overflow: hidden;
  }
  .loginTypesWrap {
    padding-top: 90px;
    .cont {
      position: relative;
      height: 100%;
      background: #F2F5F4;
      .logoWrap {
        text-align: center;
        padding-top: 5rem;
        padding-bottom: 8rem;
        img {
          width: 15rem;
          height: 4rem;
        }
      }
      .btnWrap{
       width: 90%;
       margin: 0 auto;
       .button-account{
        width: 100%;
        height: 3.7rem;
        color: #fff;
        border: 1px solid #b4282d;
        background-color: #b4282d;
        font-size: 4vw;
        text-align: center;
        line-height: 3.7rem;
        .icon-shouji{
         font-size: 6vw;
         vertical-align: middle;
        }
       }
       .button-ghostRed{
        width: 100%;
        height: 3.7rem;
        border: 1px solid #b4282d;
        color: #b4282d;
        background-color: transparent;
        font-size: 4vw;
        text-align: center;
        line-height: 3.7rem;
        margin-top: 1.6rem;
        .icon-youxiang{
         font-size: 6vw;
         vertical-align: middle;
        }
       }
      .btn{
        width: 100%;
        font-size: 4vw;
        text-align: center;
        margin-top: 1.6rem;
        color: #333333;
      }
      }
    }
  }
</style>
