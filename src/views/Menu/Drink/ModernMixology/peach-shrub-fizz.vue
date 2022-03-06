<template>
  <div>
    <commody-describe-common :describe="productPart"></commody-describe-common>
  </div>
</template>
<script>

import CommodyDescribeCommon from '../../../../components/Commody/CommodyDescribeCommon.vue'

export default {
  name: 'PeachShrubFizz',
  components: {
    CommodyDescribeCommon
  },
  computed: {
  },
  created(){
    for(let i = 0; i < this.productPart.list.length; i++){
      if(this.productPart.list[i].path == this.$route.path){
        this.thisList = this.productPart.list[i]
      }else{
        this.otherList.push(this.productPart.list[i])
      }
    }
  },
  data(){
    return{
      thisList: '',
      otherList: [],
      productPart:{
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
    } 
  }
}
</script>

