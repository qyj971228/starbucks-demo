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
  name: 'ModernMixology',
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
          name: '星巴克玩味冰调™',
          list:[
          {
            img: require("../../../../assets/Drink/ModernMixology/sparkling-espresso-tonic.jpg"),
            text: '气炫冰山美式',
            path: '/menu/drink/modern-mixology/sparkling-espresso-tonic',
            describe: ['灵感源自金汤力','沁爽柠香揉合意式浓缩','低糖&低卡','含少量酒精成分','孕妇与儿童不建议饮用']
          },
          {
            img: require("../../../../assets/Drink/ModernMixology/triple-citrus.jpg"),
            text: '橙柚派对',
            path: '/menu/drink/modern-mixology/triple-citrus',
            describe: ['西柚+橙+柠檬三重果肉','富含维生素C','茶瓦纳™橘香茉意花草茶']
          },
          {
            img: require("../../../../assets/Drink/ModernMixology/peach-shrub-fizz.jpg"),
            text: '醋意桃桃',
            path: '/menu/drink/modern-mixology/peach-shrub-fizz',
            describe: ['大块黄桃+爽弹果冻','桃汁混搭桃醋风味','茶瓦纳™禅韵乌龙茶']
          },
          {
            img: require("../../../../assets/Drink/ModernMixology/cold-brew-lemon-sour.jpg"),
            text: '酸柠浮冷萃',
            path: '/menu/drink/modern-mixology/cold-brew-lemon-sour',
            describe: ['灵感源自鸡尾酒威士忌酸','枫糖威士忌风味冷萃咖啡','意大利进口路萨朵樱桃']
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