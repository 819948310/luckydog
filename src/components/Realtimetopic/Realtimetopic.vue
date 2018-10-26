<template>
  <div id="pad">
    <div class="m-exploreTenFifteen">
      <div class="module-title">十点一刻</div>
      <div class="innerWrap">
        <div class="scrollWrap">
          <div class="scroll-item" v-for="(item,index) in detail.tenfifteen" :key="index">
            <div class="line-title">
              <span class="inner1">- 今日话题 -</span>
            </div>
            <div class="title">{{item.title}}</div>
            <div class="desc">{{item.desc}}</div>
            <div class="joinInfo">
              <div class="inner">
                <div class="avatars">
                  <div class="avatar" v-for="(avatarItem,index) in item.participantAvatar" :key="index">
                    <img v-lazy="avatarItem" alt="">
                  </div>
                  <div class="avatar1">
                    <div class="doc"></div>
                    <div class="doc"></div>
                    <div class="doc"></div>
                  </div>
                </div>
                <div class="join">
                  <span>{{item.participantNum}}</span>
                  <span>人参与话题</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    props: {
      detail: Object
    },
    mounted() {
      this.$nextTick(() => {
        new BScroll('.innerWrap', {
          click: true,
          scrollX: true
        })
      })
    },
    components: {}
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import '../../common/stylus/mixins';

  .m-exploreTenFifteen {
    overflow: hidden;
    padding: 3rem 1.5rem 1rem;
    height: 25.5rem;
    background-color: #fff;
    margin-bottom: 1rem;
    .module-title{
    font-size: 4vw;
    }
    .innerWrap {
      display: flex;
      margin-top: 2rem;
      .scrollWrap {
        display: flex;
        justify-content: space-between;
        align-items: center;
        transform: translate3d(0px, 0px, 0px);
        transition-duration: 0ms;
        .scroll-item {
          display: inline-block;
          vertical-align: middle;
          background-repeat: no-repeat;
          background-size: 100% 90%;
          background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/tenFifteen-2a1d0ea11b.png);
          position: relative;
          width: 31rem;
          height: 21rem;
          padding: 1rem 5rem 7rem;
          margin-right: 1.5rem;
          text-align: center;
          color: #333;
          box-sizing: border-box;
          .line-title {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 1.5rem;
            .inner1 {
              margin: 2% auto;
              font-size: 3vw;
              color: #7f7f7f;
            }
          }
          .title {
            font-size: 5vw;
            font-weight: 700;
            margin-bottom: 1rem;
          }
          .desc {
            font-size: 3.5vw;
            display: block;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .joinInfo {
            position: absolute;
            bottom: 7rem;
            text-align: center;
            .inner {
              display: inline-block;
              overflow: hidden;
              .avatars {
                float: left;
                margin-right: .8rem;
                .avatar {
                  float: left;
                  img {
                    position: relative;
                    float: left;
                    border: 1px solid #fff;
                    border-radius: 50%;
                    z-index: 4;
                    height: 2rem;
                    width: 2.5rem;
                  }
                }
                .avatar1 {
                  background-color: #d9d9d9;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  border-radius: 50%;
                  position: relative;
                  float: left;
                  height: 2rem;
                  width: 2.5rem;
                  overflow: hidden;
                  border: 1px solid #fff;
                  .doc {
                    width: .4rem;
                    height: .4rem;
                    border-radius: 50%;
                    margin-right: .2rem;
                    background-color: #fff;
                  }
                }
              }
              .join {
                float: left;
                text-align: left;
                font-size: 3vw;
                color: #7f7f7f;
                span {
                  text-align: left;
                  font-size: 3vw;
                  color: #7f7f7f;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
