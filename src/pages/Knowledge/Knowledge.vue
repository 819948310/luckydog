<template>
  <div class="wrap">
    <GoodthingsTop/>
    <div class="swiper">
      <div class="swiper-container" v-if="detail.banner">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item, index) in detail.banner" :key="index">
            <img v-lazy="item.picUrl">
            <div class="content">
              <div class="subTitle">{{item.subTitle}}</div>
              <div class="title">{{item.title}}</div>
              <div class="desc">{{item.desc}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <DetailScroll :scroll="detail.column"/>
    <DetailItem :detail="detail"/>
    <Realtimetopic :detail="detail"/>
    <DetailLoolk :detail="detail"/>
    <DetailFindMore :detail="detail"/>
  </div>
</template>
<script>
  import GoodthingsTop from '../../components/goodthingsTop/goodthingsTop'
  import DetailScroll from '../../components/DetailScroll/DetailScroll.vue'
  import DetailItem from '../../components/DetailItem/DetailItem'
  import Realtimetopic from '../../components/Realtimetopic/Realtimetopic'
  import DetailLoolk from '../../components/DetailLoolk/DetailLoolk.vue'
  import DetailFindMore from '../../components/DetailFindMore/DetailFindMore.vue'
  import {mapState} from 'vuex'
  import Swiper from 'swiper'

  export default {
    components: {
      GoodthingsTop,
      DetailScroll,
      DetailItem,
      Realtimetopic,
      DetailLoolk,
      DetailFindMore
    },
    computed: {
      ...mapState(['detail'])
    },
    mounted() {
      this.$store.dispatch('getDetail')
      new Swiper('.swiper-container', {
        loop: true,
        spaceBetween: 30,
        slidesPerView: 1.25,
        centeredSlides: true,
        onInit: function (swiper) {
          swiper.slides[1].className = 'swiper-slide swiper-slide-active'
        },
        autoplay: {
          autoplay: true,
          delay: 3000
        },
      })
    },
    watch: {
      detail(val) {
        this.$nextTick(() => {
          new Swiper('.swiper-container', {
            loop: true,
            spaceBetween: 30,
            slidesPerView: 1.25,
            centeredSlides: true,
            onInit: function (swiper) {
              swiper.slides[1].className = 'swiper-slide swiper-slide-active'
            },
            autoplay: {
              autoplay: true,
              delay: 3000
            },
          })
        })
      }
    },
  }
</script>
<style lang="less" type="text/less">
  @import "../../common/stylus/mixins";

  .wrap {
    background: #F4F4F4;
    overflow: hidden;
  }

  .swiper-container {
    .swiper-wrapper {
      margin-top: 5rem;
      .swiper-slide {
        img {
          width: 100%;
          position: relative;
        }
        .content {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          margin: auto;
          display: -ms-flexbox;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          width: 22rem;
          height: 9.5rem;
          background-color: rgba(255, 255, 255, .9);
          .subTitle {
            position: relative;
            font-size: 2vw;
            color: #7f7f7f;
            line-height: 2.5rem;
            text-align: center;
          }
          .title {
            font-size: 4vw;
            color: #333;
            font-weight: 700;
          }
        }
        .desc {
          font-size: 3vw;
          color: #333;
          margin-top: .7rem;
        }
      }
    }
  }
</style>
