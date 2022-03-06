<template>
  <div>
    <commody-describe-common :describe="productPart"></commody-describe-common>
  </div>
</template>
<script>

import CommodyDescribeCommon from '../../../../components/Commody/CommodyDescribeCommon.vue'

export default {
  name: 'StarbucksChewingGum',
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
          name: '其他美食',
          list:[
            {
              img: require("../../../../assets/Food/Package/cashews.jpg"),
              text: '腰果', 
              path: '/menu/food/package/cashews',
              describe: ['营养健康的果仁，入口酥脆，特有的坚果香味充斥着你的味蕾，让你随时都能补充能量。','咖啡搭配建议： 拿铁/美式咖啡。']
            },
            {
              img: require("../../../../assets/Food/Package/shortbread.png"),
              text: '英伦风味黄油饼干', 
              path: '/menu/food/package/shortbread',
              describe: ['富含黄油，有着浓郁绵密的奶香味，口感厚实浓郁酥脆。起源于苏格兰中世纪的英格兰甜点，当时稀有昂贵。至今成为苏格兰的经典点心，美味袭卷欧美大陆。用美式咖啡的清爽口感搭配上浓郁的奶香黄油饼干，不仅平衡了黄油饼干在嘴中绵密浓郁的口感，而且令你回味香甜不腻。简洁的包装礼盒，不管是送人还是拿来用作朋友家人分享，都是不错的选择，适用于较甜的食品。','咖啡搭配建议： 美式咖啡/浓缩咖啡。']
            },
            {
              img: require("../../../../assets/Food/Package/fruitnnuts.jpg"),
              text: '混合果仁果脯', 
              path: '/menu/food/package/fruitnnuts',
              describe: ['内含杏仁、夏威夷果、腰果、蔓越莓果干、蓝莓果干，品种繁多，回味香浓。 适用于口感较平衡的食品。','咖啡搭配建议： 拿铁/美式咖啡。']
            },
            {
              img: require("../../../../assets/Food/Package/fruit-salad.jpg"),
              text: '水果沙拉', 
              path: '/menu/food/package/fruit-salad',
              describe: ['多种混合水果色彩缤纷营养均衡，既可以作为午后的能量补充，也可以搭配正餐食用。','咖啡搭配建议： 冷萃冰咖啡','仅江浙沪门店']
            },
            {
              img: require("../../../../assets/Food/Package/lollipops.jpg"),
              text: '棒棒糖', 
              path: '/menu/food/package/lollipops',
              describe: ['原装法国进口的水果风味棒棒糖，櫻桃味、可乐豆味、橙子味、柠檬味、草莓味，种类繁多，颜色鲜艳，同时满足了视觉有味蕾的双重感受。']
            },
            {
              img: require("../../../../assets/Food/Package/waferrolls.jpg"),
              text: '咖啡味蛋卷', 
              path: '/menu/food/package/waferrolls',
              describe: ['秉承了香港优良的传统蛋卷工艺，口感酥脆馥郁，首次融入了星巴克的咖啡，融汇中西风味，有别于传统的口感和心意。简洁大气的包装礼盒，无论是送礼还是家人朋友分享，都是彰显品味高端送礼之选。适用于口感较平衡的食品。','咖啡搭配建议： 拿铁/美式咖啡。']
            },
            {
              img: require("../../../../assets/Food/Package/starbucks-chewing-gum.jpg"),
              text: '薄荷味口香糖（无糖）', 
              path: '/menu/food/package/starbucks-chewing-gum',
              describe: ['原装进口无糖薄荷风味口香糖，冰霜强劲的薄荷风味，再加上便携简约的包装，让你随时随地都能清新你的口腔。']
            },
            {
              img: require("../../../../assets/Food/Package/Starbucks-mints.jpg"),
              text: '薄荷味硬糖（无糖）', 
              path: '/menu/food/package/Starbucks-mints',
              describe: ['原装美国进口无糖薄荷风味硬糖，小巧精致的包装，冰霜强劲的清新风味，让你随时都能提神醒脑。']
            },
          ]
        },
    } 
  }
}
</script>

