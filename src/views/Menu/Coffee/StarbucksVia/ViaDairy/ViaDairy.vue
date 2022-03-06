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

import CommodyList from '../../../../../components/Commody/CommodyList'
import CommodySearchButton from '../../../../../components/Commody/CommodySearchButton.vue'

export default {
  name: 'ViaDairy',
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
          name: 'VIA® DAIRY',
          list:[
            {
              img: require("../../../../../assets/Coffee/StarbucksVia/ViaDairy/via-vanilla-latte.jpg"),
              text: '星巴克VIA®香草拿铁风味免煮咖啡固体饮料', 
              path: '/menu/coffee/starbucks-via/via-dairy/via-vanilla-latte',
              describe: ['我们广受欢迎的星巴克手工调制香草拿铁促使我们为咖啡爱好者创造出这款能够随时随地享受美味的咖啡。星巴克VIA®香草拿铁免煮咖啡带有醇厚的牛奶风味和饱满甜美的香草风味，同时又不失星巴克咖啡的浓郁。让您能随时随地尽情享受美味拿铁。'],
              progress: [],
              list: []
            },
            {
              img: require("../../../../../assets/Coffee/StarbucksVia/ViaDairy/via-caramel-latte.jpg"),
              text: '星巴克VIA®焦糖拿铁风味免煮咖啡固体饮料', 
              path: '/menu/coffee/starbucks-via/via-dairy/via-caramel-latte',
              describe: ['香醇美味，即刻随享。','我们的星巴克VIA® 焦糖拿铁风味咖啡饮料（固体饮料）由香醇的星巴克® 咖啡，奶粉以及香甜的焦糖风味调配而成。我们对经典的焦糖手工调制饮料的热爱激发我们创造了这款美味的咖啡饮料。无论是每一个早晨，当您正要开启崭新的一天，还是每一个午后，当您需要享受美味的下午茶，您都可以享用一杯星巴克® 焦糖拿铁风味咖啡饮料。'],
              progress: [],
              list: []
            },
            {
              img: require("../../../../../assets/Coffee/StarbucksVia/ViaDairy/via-caffe-mocha.jpg"),
              text: '星巴克VIA®摩卡风味免煮咖啡固体饮料', 
              path: '/menu/coffee/starbucks-via/via-dairy/via-caffe-mocha',
              describe: ['我们的星巴克VIA®摩卡免煮咖啡为您带来无法抗拒的美妙享受：它将香醇的可可风味，牛奶风味和浓郁的星巴克®咖啡绝妙地加以搭配。作为对星巴克®手工调制摩卡所获得的成功的礼赞，摩卡免煮咖啡让您能够随时随地享受摩卡的浓郁风味和富有深度。'],
              progress: [],
              list: []
            },
          ]
        },
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
