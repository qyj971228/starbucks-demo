<template>
  <div id='commody-list'>
    <div v-for='item,index in commody' :key='index' class='product-page'>
      <div class='product-page-name'>
        <p>{{item.name}}</p>
      </div>
      <div class='product-page-imgs'>
        <div class='product-page-img' v-for='item,index in item.list' :key='index'>
          <!-- 传参的形式导致直接访问丢失数据,生产环境下直接在页面 -->
          <!-- <router-link :to="{path: item.path, query:{product: encodeURIComponent(JSON.stringify(commody))}}"> -->
          <router-link :to="item.path">
            <commody class='commody' :size='"standard"' :commody='item'></commody>
          </router-link>
        </div>
      </div>
      <hr v-show='index!=(commody.length-1)' style="opacity:0.7;" width='90%'>
    </div>
  </div>
</template>

<script>

import Commody from './Commody'

export default {
  name: 'Product',
  components: {
    Commody
  },
  props:[
    'commody'
  ],
  computed: {
   
  }
}
</script>
<style lang="less" type='text/less' scoped>
#commody-list{
  background-color: rgba(0, 0, 0, 0%);
}
.product-page{
  .product-page-name{
    margin-left: 5%;
    font-weight: bolder;
    opacity: 0.7;
    p{
      margin-top: 30px;
      margin-bottom: 0px
    }
  }
  .product-page-img{
    margin: 10px 0;
    height: 205px;
    width: 25%;
    display: inline-block;
    text-align: center;
  }
}
@media only screen and (min-width: 1200px){
    
}
@media only screen and (min-width: 640px) and (max-width: 1200px){
  .product-page{
    .product-page-img{
      height: 205px;
      width: 33%;
      display: inline-block;
      text-align: center;
    }
  }
}
@media only screen and (max-width: 640px){
  .product-page{
    .product-page-img{
      height: 205px;
      width: 50%;
      display: inline-block;
      text-align: center;
    }
  }
}
</style>
