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
  name: 'SignatureChocolateBeverage',
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
          name: '经典巧克力饮品',
          list:[
            {
              img: require("../../../../assets/Drink/SignatureChocolateBeverage/signature-chocolate-beverage.jpg"),
              text: '经典巧克力饮品（热/冷）', 
              path: '/menu/drink/signature-chocolate-beverage/signature-chocolate-beverage',
              describe: ['抵挡不住巧克力风味酱在蒸奶中飘散的浓郁可可香。只需在稀奶油上轻洒些许可可粉，就这样俘获你的心。'],
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