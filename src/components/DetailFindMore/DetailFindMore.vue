<template>
<div class="findmore" v-if="detail.findMore">
<h4>更多精彩</h4>
  <ul>
    <li  v-for="(item,index) in detail.findMore" :key="index">
    <img v-lazy="item.itemPicUrl" alt="">
    <span>{{item.subTitle}}</span>
    </li>item
  </ul>
</div>
</template>
<script>
    export default {
    props:{
         detail:Object
    }
    }
</script>
<style lang="less" type="text/less">
.findmore{
margin-top: 2.5rem;
width: 100%;
text-align: center;
h4{
font-size: 4vw;
}
ul{
width: 92%;
margin: 2.5rem auto;
li{
width: 100%;
padding: 1rem 4% 1.5rem;
background-color: #ffffff;
box-sizing: border-box;
overflow: hidden;
margin-bottom: 2rem;
img{
width: 100%;
margin-bottom: 3rem;
height: 17rem;
}
span{
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
font-size: 4vw;
display: block;
width: 100%;
}
}
}
}
</style>
