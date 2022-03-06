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
  name: 'StarbucksReserve',
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
          name: '星巴克臻选™咖啡',
          list:[
            {
              img: require("../../../../assets/Coffee/StarbucksReserve/sumatra-wahana-estate.png"),
              text: '星巴克臻选™ 苏门答腊瓦哈纳庄园咖啡豆', 
              path: '/menu/coffee/starbucks-reserve/sumatra-wahana-estate',
              describe: [],
              progress: [],
              list: []
            },
            {
              img: require("../../../../assets/Coffee/StarbucksReserve/ethiopia-bitta-farm.png"),
              text: '星巴克臻选™ 埃塞俄比亚比塔庄园咖啡豆', 
              path: '/menu/coffee/starbucks-reserve/ethiopia-bitta-farm',
              describe: [],
              progress: [],
              list: []
            },
            {
              img: require("../../../../assets/Coffee/StarbucksReserve/china-yunnan-puer-baoshan.png"),
              text: '星巴克臻选™ 中国云南普洱保山综合咖啡豆', 
              path: '/menu/coffee/starbucks-reserve/china-yunnan-puer-baoshan',
              describe: [],
              progress: [],
              list: []
            },
            {
              img: require("../../../../assets/Coffee/StarbucksReserve/china-qingkai-farm.png"),
              text: '星巴克臻选™ 中国云南晴开农场咖啡豆', 
              path: '/menu/coffee/starbucks-reserve/china-qingkai-farm',
              describe: [],
              progress: [],
              list: []
            },
            {
              img: require("../../../../assets/Coffee/StarbucksReserve/colombia-monks-of-san-roque.png"),
              text: '星巴克臻选™ 哥伦比亚圣洛克蒙克斯咖啡豆', 
              path: '/menu/coffee/starbucks-reserve/colombia-monks-of-san-roque',
              describe: [],
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
