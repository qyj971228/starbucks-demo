<template>
  <div>
    <commody-describe-common :describe="productPart"></commody-describe-common>
  </div>
</template>
<script>

import CommodyDescribeCommon from '../../../../components/Commody/CommodyDescribeCommon.vue'

export default {
  name: 'CaramelEspressoFrappuccino',
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
        name: '星冰乐®',
        list:[
          {
            img: require("../../../../assets/Drink/FrappuccinoBlendedBeverage/caramel-espresso-frappuccino.jpg"),
            text: '焦糖浓缩咖啡星冰乐', 
            path: '/menu/drink/frappuccino-blended-beverage/caramel-espresso-frappuccino',
            describe: ['香醇浓缩咖啡融于浓郁的焦糖咖啡星冰乐，最后在顶部的搅打稀奶油上淋上焦糖风味酱。','让你停不了口的美味。'],
          },
          {
            img: require("../../../../assets/Drink/FrappuccinoBlendedBeverage/green-tea-frappuccino.jpg"),
            text: '抹茶星冰乐', 
            path: '/menu/drink/frappuccino-blended-beverage/green-tea-frappuccino',
            describe: ['抹茶的清新，加一份牛奶的丝滑，与冰块和稀奶油搅拌出特有的清爽。'],
          },
          {
            img: require("../../../../assets/Drink/FrappuccinoBlendedBeverage/mango-passion-tea.jpg"),
            text: '芒果西番莲果茶星冰乐', 
            path: '/menu/drink/frappuccino-blended-beverage/mango-passion-tea',
            describe: ['将花草茶的清爽，芒果西番莲果汁的酸甜与冰块融合。','无需分清这一口是花香或果香，都是祛暑清凉的好饮品。'],
          },
          {
            img: require("../../../../assets/Drink/FrappuccinoBlendedBeverage/mocha-frappuccino.jpg"),
            text: '摩卡星冰乐', 
            path: '/menu/drink/frappuccino-blended-beverage/mocha-frappuccino',
            describe: ['摩卡酱与星冰乐烘焙咖啡、在牛奶加冰块中绽放快乐，伴着雪白的稀奶油，让你每个瞬间都充满活力。'],
          },
          {
            img: require("../../../../assets/Drink/FrappuccinoBlendedBeverage/mocha-java-chip-frappuccino.jpg"),
            text: '摩卡可可碎片星冰乐', 
            path: '/menu/drink/frappuccino-blended-beverage/mocha-java-chip-frappuccino',
            describe: ['摩卡酱和咖啡在冰块的碰撞下魅力四射，可可碎片带来不同的口感，顶部覆以稀奶油与摩卡酱，让浓郁变得更加有趣。','(可可碎片为代可可脂巧克力)'],
          },
          {
            img: require("../../../../assets/Drink/FrappuccinoBlendedBeverage/vanilla-flavored-cream-frappuccino-blended-beverage.jpg"),
            text: '香草风味星冰乐', 
            path: '/menu/drink/frappuccino-blended-beverage/vanilla-flavored-cream-frappuccino-blended-beverage',
            describe: ['香草风味糖浆与牛奶和冰块搅打出的奶香清甜，口感清爽怡人。'],
          },
        ]
      },
    } 
  }
}
</script>

