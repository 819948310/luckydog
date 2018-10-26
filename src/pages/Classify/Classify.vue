<template>
  <div class="classify">
    <div class="classify-header">
      <div class="search">
        <a href="">
          <i class="iconfont icon-sousuo6"></i>
          <span>搜索商品, 共9714款好物</span>
        </a>
      </div>
    </div>
    <div class="classify-list">
      <div class="list-left">
        <span v-for="(item1,index1) in nav.categoryL1List" :key="index1" @click="getIndex(index1)"
              :class="{active:index === index1 }">{{item1.name}}</span>
      </div>
      <div class="list-right" v-if="nav.categoryL1List">
        <img v-lazy="nav.categoryL1List[index].bannerUrl" alt="" class="logo">
        <div class="item-list">
          <h4>{{nav.categoryL1List[index].name}}分类</h4>
          <ul>
            <li v-for="(itemCate,indexCate) in nav.categoryL1List[index].subCateList" :key="indexCate">
              <img v-lazy="itemCate.wapBannerUrl" alt="">
              <span>{{itemCate.name}}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'

  export default {
    data() {
      return {
        index: 3
      }
    },
    computed: {
      ...mapState(['nav'])
    },
    mounted() {
      this.$store.dispatch('getNav')
    },
    methods: {
      getIndex(index1) {
        this.index = index1
      }
    },

  }
</script>
<style lang="less" type="text/less">
  @import "../../common/stylus/mixins";

  .classify {
    width: 100%;
    height: 100%;
    background-color: #ffffff;
    .classify-header {
      padding: .6rem;
      box-sizing: border-box;
      width: 100%;
      border-bottom: 1px solid #999;
      height: 7%;
      .search {
        width: 100%;
        height: 2.5rem;
        background-color: #ededed;
        border-radius: 5px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .icon-sousuo6 {
          font-size: 4vw;
        }
        span {
          color: #666;
          font-size: 4vw;
        }
      }
    }
    .classify-list {
      height: 93%;
      padding-top: 2%;
      box-sizing: border-box;
    }
    .list-left {
      height: 100%;
      width: 21%;
      border-right: 1px solid #999;
      float: left;
      padding-top: 1%;
      span {
        display: block;
        font-size: 4vw;
        width: 100%;
        height: 5rem;
        line-height: 5rem;
        text-align: center;
        &.active {
          color: #ab2b2b;
          font-size: 5vw;
        }
      }
    }
    .list-right {
      height: 100%;
      width: 69%;
      float: left;
      box-sizing: border-box;
      img.logo {
        width: 100%;
        height: 9rem;
        margin-top: 6%;
        margin-left: 7%;
      }
      .item-list {
        margin-top: 2.5rem;
        overflow: hidden;
        text-align: center;
        width: 84%;
        margin-left: 7%;
        h4 {
          font-size: 3vw;
        }
        ul {
          margin-top: 2.5rem;
          overflow: hidden;
          width: 100%;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          li {
            width: 30%;
            float: left;
            img {
              width: 130%;
              height: 7rem;
            }
              span {
                font-size: 3vw;
                padding-top: .6rem;
                display: block;
                width: 100%;
                text-align: center;
              }
            }
          }
        }
      }
    }


</style>
