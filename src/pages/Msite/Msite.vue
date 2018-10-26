<template>
  <div id="home">
  <Masklayer/>
    <div class="header">
      <div class="header-top">
        <a href="/" class="logo">网易严选</a>
        <div class="search">
          <a href="/">
            <i class="iconfont icon-sousuo6"></i>
            <span class="placeholder">搜索商品, 共16706款好物</span>
          </a>
        </div>
      </div>
      <ul class="nav">
        <li class="active">推荐</li>
        <li>居家</li>
        <li>服装</li>
        <li>电器</li>
        <li>洗护</li>
        <li>饮食</li>
        <li>餐厨</li>
        <li>婴童</li>
        <li>文体</li>
        <li>特色区</li>
      </ul>
    </div>
    <Banner/>
    <div class="goods-supply">
      <div class="good-header">
        <a href=""><span>品牌制造商直供</span>
          <i class="iconfont icon-yuanxingjiantouyou"></i>
        </a>
      </div>
      <ul>
        <li>
          <a href="">
            <h4>海外制造商</h4>
            <span>9.9元起</span>
            <i class="iconfont icon-shangxin"></i>
          </a>
        </li>
        <li>
          <a href="">
            <h4>CK制造商</h4>
            <span>25元起</span>
            <i class="iconfont icon-shangxin"></i>
          </a>
        </li>
        <li>
          <a href="">
            <h4>新秀丽制造商</h4>
            <span>34.9元起</span>
          </a>
        </li>
        <li>
          <a href="">
            <h4>MUJI制造商</h4>
            <span>39.9元起</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="new-product">
      <a href="/">
        <h4>新品首发</h4>
        <div class="entire">
          <span>查看全部</span>
          <i class="iconfont icon-youjiantou"></i>
        </div>
      </a>
    </div>
    <shopFoods/>
    <div class="new-product popular">
      <a href="/">
        <h4>人气推荐 好物精选</h4>
        <div class="entire">
          <span>查看全部</span>
          <i class="iconfont icon-youjiantou"></i>
        </div>
      </a>
    </div>
    <div class="new-product welfare">
      <a href="/">
      </a>
    </div>
    <Selection/>
    <Goodhome/>
  </div>
</template>
<script>
  import Banner from '../../components/Banner/Banner'
  import shopFoods from '../../components/shopFoods/shopFoods'
  import Selection from '../../components/Selection/Selection'
  import Goodhome from '../../components/Goodhome/Goodhome'
  import Masklayer from '../../components/Masklayer/Masklayer'
  export default {
    components: {
      Banner,
      shopFoods,
      Selection,
      Goodhome,
      Masklayer
    }
  }
</script>
<style lang="less" rel="stylesheet/less">
  @import '../../common/stylus/mixins';

  #home {
    width: 100%;
    height: 100%;
    background: #F4F4F4;
    .header {
      width: 100%;
      overflow: hidden;
      background-color: white;
      position: fixed;
      z-index: 2;
      top: 0;
      .header-top {
        padding-top: 1rem;
        padding-bottom: 2rem;
        width: 94%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        overflow: hidden;
        .logo {
          font-size: 4vw;
          color: #6b6b6b;
          font-weight: bold;
        }
        .search {
          width: 80%;
          background-color: #ededed;
          display: flex;
          justify-content: space-around;
          height: 3rem;
          align-items: center;
          line-height: 3rem;
          border-radius: 0.6rem;
          i {
            font-size: 4vw;
            position: relative;
            left: -2%;
            vertical-align: middle;
          }
          span {
            font-size: 3.5vw;
          }
        }
      }
      .nav {
        width: 90%;
        padding-left: 5%;
        padding-right: 5%;
        box-sizing: border-box;
        overflow: hidden;
        display: flex;
        li {
          width: 18%;
          padding-bottom: 1rem;
          font-size: 4vw;
          color: #333333;
          white-space: nowrap;
          float: left;
          margin-right: 14%;
          &.active {
            border-bottom: 1px solid #b4282d;
            color: #b4282d;
          }
        }
      }
    }
    .goods-supply {
      padding-top: 1.8rem;
      background-color: white;
      overflow: hidden;
      padding-bottom: 0.5rem;
      margin-top: 1rem;
      .good-header {
        width: 100%;
        text-align: center;
        span {
          font-size: 4vw;
          color: #333;
        }
        i {
          font-size: 3vw;
        }
      }
      ul {
        width: 98%;
        display: flex;
        justify-content: space-between;
        align-content: space-between;
        margin: 0 auto;
        height: 22rem;
        flex-wrap: wrap;
        margin-top: 2rem;
        li {
          width: 49%;
          background: url("../../common/images/kole.png") no-repeat #f4f4f4;
          background-size: 100% 100%;
          height: 10.5rem;
          &:nth-child(2) {
            background: url("http://yanxuan.nosdn.127.net/5aecffba9202b1fa956758dfbcd65b85.png?imageView&thumbnail=355x0&quality=65") no-repeat #f4f4f4;
            background-size: 100% 100%;
          }
          &:nth-child(3) {
            background: url("http://yanxuan.nosdn.127.net/f57d460dde6e737f2bacd9f67cb73a41.png?imageView&thumbnail=355x0&quality=65") no-repeat #f4f4f4;
            background-size: 100% 100%;
          }
          &:nth-child(4) {
            background: url("http://yanxuan.nosdn.127.net/b0b0ea6b866039d9ded1dfa39bf1a105.png?imageView&thumbnail=355x0&quality=65") no-repeat #f4f4f4;
            background-size: 100% 100%;
          }
          a {
            display: block;
            padding-left: 5%;
            padding-top: 1rem;
          }
          h4 {
            color: #333;
            font-size: 4vw;
            display: block;
            padding-bottom: .5rem;
          }
          span {
            color: #333;
            font-size: 3.5vw;
            display: block;
          }
          i {
            font-size: 8vw;
            color: #c4b597;
          }
        }
      }
    }
    .new-product {
      width: 100%;
      height: 12.5rem;
      background: url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/bitmap-d4f7b37e32.png") no-repeat;
      margin-top: .8rem;
      text-align: center;
      overflow: hidden;
      h4 {
        font-size: 5vw;
        color: #8BA0B6;
        margin-top: 3.8rem;
      }
      .entire {
        width: 11.5rem;
        height: 2.8rem;
        background-color: #D8E5F1;
        text-align: center;
        line-height: 2.8rem;
        margin: 1rem auto;
        span {
          color: #8BA0B6;
          font-size: 3vw;
        }
        i {
          font-size: 3vw;
        }
      }
    }
    .popular {
      background: url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/bitmap2-d626e0b52a.png") no-repeat;
      h4 {
        color: #B4A078;
      }
      .entire {
        background-color: #F4E9CB;
        span {
          color: #B4A078;
        }
        i {
          color: #B4A078;
        }
      }
    }
    .welfare {
      background: url("http://yanxuan.nosdn.127.net/a3ea2d1108c94c7dece05eddf95f6df5.jpg") no-repeat;
      background-size: 100% 100%;
      height: 15rem;
    }
  }
</style>
