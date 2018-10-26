<template>
  <div>
    <transition name="fade">
      <div class="m-newWapUserGiftModal" v-if="isMask">
        <div class="mask"></div>
        <i class="close" @click="isMask = false"></i>
        <div class="wrap">
          <div class="modle">
            <div class="title">
              <i class="titleContent">- 新人专享礼 -</i>
            </div>
            <div class="subTitle">感谢使用网易严选, 已为你准备了一份专享礼</div>
            <div class="m-newUserItem">
              <div class="img">
                <img
                  src="https://gd4.alicdn.com/imgextra/i4/80578594/TB2.BDskXXXXXaCXXXXXXXXXXXX_!!80578594.jpg_400x400.jpg_.webp"
                  alt="">
              </div>
              <div class="content">
                <div class="itemName">妖精的尾巴手办纳兹格雷艾露莎露西大号全套模型动漫公仔生日礼物</div>
                <div class="manu">
                  <i class="manuTag">还原度高，精确度高</i>
                </div>
                <div class="price">
                  <div class="retailPrice">
                    <span>¥</span>
                    <span>55.00</span>
                  </div>
                  <div class="comparePrice">
                    <span>¥</span>
                    <span>110.00</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="actCouponBtn">
            <span>
              <span>领券立减¥</span>
              <span>10.00</span>
            </span>
              <div class="linkBtn">查看更多特惠商品</div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isMask: true
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import '../../common/stylus/mixins';

  .m-newWapUserGiftModal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    &.fade-enter-active, &.fade-leave-active {
      transition: opacity 1s;
    }
    &.fade-enter, &.fade-leave-to {
      opacity: 0;
    }
    .mask {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, .5);
    }
    .close {
      position: fixed;
      right: 5%;
      top: 10%;
      z-index: 2;
      background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/modalClose-9365f12572.png);
      width: 3.5rem;
      height: 3.5rem;
      display: inline-block;
      vertical-align: middle;
      background-repeat: no-repeat;
      background-size: 100% 100%;
    }
    .wrap {
      transform: translate(-50%, -50%);
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: 1;
      .modle {
        width: 32em;
        height: 35rem;
        background-color: #fff;
        border-radius: 5rem;
        padding: 1.5rem 1rem;
        .title {
          font-size: 5vw;
          text-align: center;
          .titleContent {
            display: inline-block;
            position: relative;
            font-weight: 700;
            font-size: 5vw;
            text-align: center;
          }
        }
        .subTitle {
          margin-top: 3.5rem;
          font-size: 3vw;
          text-align: center;
        }
        .m-newUserItem {
          margin-top: 1.5rem;
          background-color: #f4f4f4;
          border-radius: .2rem;
          height: 11rem;
          width: 100%;
          display: flex;
          .img {
            img {
              width: 11rem;
              height: 11rem;
            }
          }
          .content {
            flex: 1;
            padding: 2.5rem 0;
            margin-left: 1.2rem;
            line-height: 1.5;
            color: #333;
            .itemName {
              font-size: 3.5vw;
              width: 12rem;
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
              line-height: 1.5;
              color: #333;
            }
            .manu {
              margin-top: .8rem;
              line-height: 1.5;
              color: #333;
              display: block;
              .manuTag {
                border: 1px solid #7f7f7f;
                border-radius: 5px;
                padding: 0.2rem .2rem;
                line-height: 1.5rem;
                box-sizing: border-box;
                color: #333;
                font-size: 3vw;
              }
            }
            .price {
              line-height: 1.5;
              color: #333;
              display: block;
              margin-top: 1.2rem;
              .retailPrice {
                color: #b4282d;
                line-height: 1.5;
                span {
                  float: left;
                  color: #b4282d;
                  font-size:3.5vw;
                  line-height: 1.5;
                }
              }
              .comparePrice {
                color: #999;
                display: inline-block;
                margin-left: .5rem;
                text-decoration: line-through;
                line-height: 1.5;
                span {
                  color: #999;
                  display: inline-block;
                  text-decoration: line-through;
                  font-size:3.5vw;
                  line-height: 1.5;
                }
              }
            }
          }
        }
        .actCouponBtn {
          background-color: #b4282d;
          color: #fff;
          margin-top: 1.5rem;
          text-align: center;
                        height: 4rem;
                        line-height: 4rem;
              border-radius: .5rem;
          span {
            color: #fff;
                       font-size: 4vw;
            span {
              background-color: #b4282d;
              color: #fff;
              font-size: 4vw;
              text-align: center;
            }
          }
          .linkBtn {
            height: 4rem;
            border: 1px solid #7F7F7F;
            border-radius:.5rem;
            text-align: center;
            line-height: 4rem;
            font-size: 4vw;
            margin-top: 1rem;
            display: block;
            color: #333;
          }
        }
      }
    }
  }

</style>

