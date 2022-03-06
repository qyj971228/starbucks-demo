<template>
  <div>
    <commody-list :commody='product' v-show='searchResult.length==0'></commody-list>
    <commody-list :commody='searchResult' v-show='searchResult.length!=0'></commody-list>
    <p style="margin-left:50px;margin-top:100px;margin-bottom:100px;font-weight:lighter;">实际产品以门店供应为准.</p>
    <div id='search-button'>
      <commody-search-button :search="product" @result='getSearchResult'></commody-search-button>
    </div>
  </div>
  
</template>

<script>

import CommodyList from '../../../../components/Commody/CommodyList'
import CommodySearchButton from '../../../../components/Commody/CommodySearchButton.vue'

export default {
  name: 'ReserveStoreMerchandise',
  components: {
    CommodyList,
    CommodySearchButton,
  },
  methods:{
    getSearchResult(data){
      this.searchResult = data
    },
  },
  data(){
    return{
      searchResult: [],
      product:[
        {
          name: '臻选产品',
          list:[
            {
              img: require("../../../../assets/Product/ReserveStoreMerchandise/12oz-black-bronze-brand-handle-mug.jpg"),
              text: '12oz 纯黑/古铜亮面品牌桌面杯', 
              path: '/menu/product/reserve-store-merchandise/12oz-black-bronze-brand-handle-mug',
              describe: ['双层不锈钢材质','别致舒适手柄，一体成型式弯曲舒适感','白色亮面工艺，银色金属拉丝效果'],
            },
            {
              img: require("../../../../assets/Product/ReserveStoreMerchandise/16oz-champagne-gold-brand-stainless-steel-cup.jpg"),
              text: '16oz 香槟金品牌不锈钢桌面杯', 
              path: '/menu/product/reserve-store-merchandise/16oz-champagne-gold-brand-stainless-steel-cup',
              describe: ['古铜色典雅不失品质，双层不锈钢防烫。'],
            },
            {
              img: require("../../../../assets/Product/ReserveStoreMerchandise/500ml-gold-logo-water-bottle.jpg"),
              text: '500ml 金色Logo水瓶', 
              path: '/menu/product/reserve-store-merchandise/500ml-gold-logo-water-bottle',
              describe: ['古铜色金色瓶身，时尚大方。','新增拎手，方便外出携带。'],
            },
            {
              img: require("../../../../assets/Product/ReserveStoreMerchandise/9oz-reserve-glass-cup.jpg"),
              text: '9oz 臻选玻璃杯', 
              path: '/menu/product/reserve-store-merchandise/9oz-reserve-glass-cup',
              describe: ['简约杯身搭配Reserve Wordmark','带把手，易拿取;可放冷水或热水'],
            },
          ]
        }
      ]
    }
  }
}
</script>
<style lang='less' scoped>
  #search-button{
    position: fixed;
    bottom: 20px;
    right: 20px;
  }
  @media only screen and (max-width:640px) {
    #search-button{
      bottom: 70px;
    }
  }
</style>
