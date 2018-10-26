<template>
  <div>
    <div class="m-exploreRcmds" v-if="detail.recommendOne">
      <div class="container">
        <div class="module-title">{{detail.recommendOne.nickname}}</div>
        <div class="m-mainPosItem">
          <div class="imgContainer">
            <div class="topicTag">
              <div class="m-exploreTag">{{detail.recommendOne.typeName}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="topicInfo">
        <div class="line1">
          <div class="title">{{detail.recommendOne.typeName}}</div>
          <div class="price">
{{detail.recommendOne.priceInfo}}元起
          </div>
        </div>
        <div class="line2">
          <div class="subTitle" v-if="detail.recommendOne">{{detail.recommendOne.subTitle}}</div>
        </div>
      </div>
      <div class="m-minorPosItem">
        <div class="topicInfo" v-if="detail.recommendTwo">
          <div class="author-container">
            <div class="author">
              <div class="avatar">
                <img v-lazy="detail.recommendTwo.avatar">
              </div>
              <div class="nickname">{{detail.recommendTwo.nickname}}</div>
            </div>
            <div class="line1">
              <div class="title">{{detail.recommendTwo.title}}</div>
            </div>
            <div class="line2">
              <div class="subTitle">{{detail.recommendTwo.subTitle}}</div>
            </div>
          </div>
          <div class="minorPic">
            <div class="imgContainer">
              <img v-lazy="detail.recommendTwo.picUrl" alt="">
              <div class="topicTag">
                <div class="m-exploreTag">{{detail.recommendTwo.typeName}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="m-minorPosItem">
        <div class="topicInfo" v-if="detail.recommendThree">
          <div class="author-container">
            <div class="author">
              <div class="avatar">
                <img v-lazy="detail.recommendThree.avatar">
              </div>
              <div class="nickname">{{detail.recommendThree.nickname}}</div>
            </div>
            <div class="line1">
              <div class="title">{{detail.recommendThree.title}}</div>
            </div>
            <div class="line2">
              <div class="subTitle">{{detail.recommendThree.subTitle}}</div>
            </div>
          </div>
          <div class="minorPic">
            <div class="imgContainer">
              <img v-lazy="detail.recommendThree.picUrl" alt="">
              <div class="topicTag">
                <div class="m-exploreTag">{{detail.recommendThree.typeName}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props:{
      detail: Object
    },
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import '../../common/stylus/mixins';
  .m-exploreRcmds{
    padding: 2rem 1rem 3rem;
    margin-bottom: 1rem;
    background-color: #fff;
    .container{
     .module-title{
      font-size: 4vw;
      text-align: center;
     }
      .m-mainPosItem{
        margin-bottom: 2.5rem;
        display: block;
        position: relative;
        color: #333;
        border: 1px solid #d9d9d9;
        border-radius: 5px;
        overflow: hidden;
        margin-top: 2rem;
        .imgContainer{
          background-image: url(//yanxuan.nosdn.127.net/09d83c97c9963495e6518cfbec776b4c.jpg?imageView&quality=75);
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          position: relative;
          height: 18.5rem;
          border-radius: 5px;
          overflow: hidden;
          width: 100%;
          .topicTag{
            position: absolute;
            left: 3%;
            top: 5%;
            .m-exploreTag{
              display: inline-block;
              padding: .5rem .5rem;
              background-color: rgba(255,255,255,.9);
              border: 1px solid #d9d9d9;
              color: #333;
              font-size: 4.2vw;
              box-sizing: border-box;
              border-radius: 15px;
            }
          }
        }
      }
    }
    .topicInfo{
      overflow: hidden;
      position: relative;
      background-color: #fff;
      .line1{
        margin-bottom: 1rem;
        display: flex;
        align-items: center;
        line-height: 1.2;
        justify-content: space-between;
        .title{
          font-size: 5vw;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }
        .price{
          margin-right: 1.5rem;
          font-size: 5vw;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }
      }
      .line2{
        .subTitle{
          position: relative;
          color: #7f7f7f;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          font-size: 4vw;
        }
      }
    }
    .m-minorPosItem{
      display: flex;
      background-color: #fff;
      color: #333;
      border: 1px solid #d9d9d9;
      border-radius: 5px;
      margin-bottom: 1rem;
      padding: 1.5rem 0;
      .topicInfo{
        flex: 1;
        display: flex;
        justify-content: center;
        overflow: hidden;
        position: relative;
        padding-left: 1.5rem;
        padding-right: 2rem;
        .author-container{
          margin-bottom: 1.5rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          overflow: hidden;
          position: relative;
          .author{
            font-size: 2vw;
            display: flex;
            align-items: center;
            .avatar{
              width: 2.5rem;
              height: 2.5rem;
              margin-right: 1.2rem;
              border-radius: 50%;
              img{
                display: block;
                width: 100%;
                height: 100%;
                border-radius: 50%;
              }
            }
          }
          .nickname{
            color: #333;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
          }
        }
        .line1{
          margin-bottom: .8rem;
          .title{
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            font-size: 4vw;
          }
        }
        .line2{
          .subTitle{
            overflow: hidden;
            text-overflow: ellipsis;
            position: relative;
            color: #7f7f7f;
            white-space: nowrap;
          }
        }
        .minorPic{
          position: relative;
          width: 13rem;
          height: 13rem;
          .imgContainer{
            width: 100%;
            img{
              width: 100%;
              background-position: center;
              background-repeat: no-repeat;
            }
           .topicTag{
              position: absolute;
              top: .5rem;
              left:.5rem;
              .m-exploreTag{
                font-size: 3vw;
                display: inline-block;
                padding:.5rem;
                background-color: rgba(255,255,255,.9);
                border: 1px solid #d9d9d9;
                border-radius: 15px;
                color: #333;
              }
            }
          }
        }
      }
    }
  }
</style>
