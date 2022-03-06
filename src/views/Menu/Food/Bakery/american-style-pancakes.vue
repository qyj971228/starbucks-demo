<template>
  <div>
    <commody-describe-common :describe="productPart"></commody-describe-common>
  </div>
</template>
<script>

import CommodyDescribeCommon from '../../../../components/Commody/CommodyDescribeCommon.vue'

export default {
  name: 'AmericanStylePancakes',
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
        name: '烘焙',
        list:[
          {
            img: require("../../../../assets/Food/Bakery/american-style-pancakes.jpg"),
            text: '美式松饼',
            path: '/menu/food/bakery/american-style-pancakes',
            describe: ['两片轻盈酥松的美式松饼搭配加拿大进口槭树糖浆（枫糖浆），层层甜蜜令人陶醉，带给你超值经典的美式早餐新体验。','咖啡搭配推荐：冷萃咖啡 / 美式咖啡']
          },
          {
            img: require("../../../../assets/Food/Bakery/blueberry-muffin.jpg"),
            text: '蓝莓麦芬',
            path: '/menu/food/bakery/blueberry-muffin',
            describe: ['享受进口大蓝莓果粒带来的曼妙滋味;星巴克独有美式配方制作','顶层口感酥脆，内部松软','咖啡搭配建议：星巴克®早餐综合咖啡豆 / 星巴克®首选咖啡豆']
          },
          {
            img: require("../../../../assets/Food/Bakery/chocolate-muffin.jpg"),
            text: '香浓巧克力麦芬',
            path: '/menu/food/bakery/chocolate-muffin',
            describe: ['享受高品质欧洲巧克力的细腻质感','星巴克独有美式配方制作','巧克力风味浓郁醇正','咖啡搭配建议：星巴克®危地马拉安提瓜咖啡豆']
          },
          {
            img: require("../../../../assets/Food/Bakery/cinnamon-swirl.jpg"),
            text: '旋风玉桂酥',
            path: '/menu/food/bakery/cinnamon-swirl',
            describe: ['提子、核桃和玉桂风味平衡搭配','口感酥香美味','黄油香气、独特的玉桂粉;咖啡搭配推荐：星巴克®哥伦比亚咖啡豆']
          },
          {
            img: require("../../../../assets/Food/Bakery/french-butter-croissant.jpg"),
            text: '法式香酥可颂',
            path: '/menu/food/bakery/french-butter-croissant',
            describe: ['16层制作工艺，松软十足','金黄色的外表，酥脆可口','蜂巢状的内部层次，法国进口高品质黄油，香味浓郁，口感酥脆','咖啡搭配建议：星巴克®早餐综合咖啡豆']
          },
          {
            img: require("../../../../assets/Food/Bakery/french-caramel-bread.jpg"),
            text: '法式焦糖酥',
            path: '/menu/food/bakery/french-caramel-bread',
            describe: ['浓郁奶香的可颂面团，表层淋上香甜的焦糖沙司，一口咬下，外酥内柔，焦糖夹杂浓浓的奶香味在唇齿间蔓延，带给你美妙口感。','咖啡搭配推荐：馥芮白','仅江浙沪门店']
          },
          {
            img: require("../../../../assets/Food/Bakery/hazelnut-croissant.jpg"),
            text: '层层榛子果仁酥',
            path: '/menu/food/bakery/hazelnut-croissant',
            describe: ['传统27层法式可颂工艺','层次分明，口感酥脆松软','甄选法国进口黄油和进口榛子原料','口感浓郁、酥脆','咖啡搭配推荐：星巴克®早餐综合咖啡豆 / 星巴克®哥伦比亚咖啡豆']
          },
          {
            img: require("../../../../assets/Food/Bakery/honey-raisin-scone.jpg"),
            text: '蜂蜜提子司康',
            path: '/menu/food/bakery/honey-raisin-scone',
            describe: ['提子干经朗姆酒精心炮制，具有独特口感','进口高品质黄油制作','松软酥脆、香甜适口','咖啡搭配建议：星巴克®哥伦比亚咖啡豆']
          },
          {
            img: require("../../../../assets/Food/Bakery/oat-caramel-pudding-bread.jpg"),
            text: '燕麦焦糖布丁面包',
            path: '/menu/food/bakery/oat-caramel-pudding-bread',
            describe: ['当酥脆的面包干搭配绵密的布丁、甜美的焦糖、还有一点点韧性的燕麦，蔓越莓干，提子干让人爱不释口。','咖啡搭配推荐：焦糖玛奇朵','仅江浙沪门店']
          },
          {
            img: require("../../../../assets/Food/Bakery/premium-chocolate-croissant.jpg"),
            text: '香浓巧克力可颂',
            path: '/menu/food/bakery/premium-chocolate-croissant',
            describe: ['借鉴传统27层制作工艺','采用高品质进口巧克力条作为内馅','香味浓郁，酥脆有韧性','咖啡搭配推荐：星巴克®危地马拉安提瓜咖啡豆']
          },
          {
            img: require("../../../../assets/Food/Bakery/raisin-scone.jpg"),
            text: '提子干松饼',
            path: '/menu/food/bakery/raisin-scone',
            describe: ['口感松软，醇厚的奶香味，再加入香甜的提子干，使产品甜而不腻。','咖啡搭配推荐：冷萃冰咖啡','仅江浙沪门店']
          },
          {
            img: require("../../../../assets/Food/Bakery/raisins-walnut-bread.jpg"),
            text: '核桃提子软法面包',
            path: '/menu/food/bakery/raisins-walnut-bread',
            describe: ['软法面包体，内含核桃、提子，添加不融芝士，奶香风味浓郁。','咖啡搭配推荐：美式咖啡','仅江浙沪门店']
          },
          {
            img: require("../../../../assets/Food/Bakery/red-bean-oats-scone.jpg"),
            text: '红豆燕麦松饼',
            path: '/menu/food/bakery/red-bean-oats-scone',
            describe: ['口感松软，醇厚的奶香味，再加入红豆沙和红豆，更增加了香甜的味道，同时加入燕麦片，更增加产品的价值。','咖啡搭配推荐：馥芮白','仅江浙沪门店']
          },
          {
            img: require("../../../../assets/Food/Bakery/whole-wheat-walnut-muffin.jpg"),
            text: '全麦核桃麦芬',
            path: '/menu/food/bakery/whole-wheat-walnut-muffin',
            describe: ['口感松软、有弹性','多种坚果富有嚼劲','星巴克独有配方制作','咖啡搭配建议：星巴克®早餐综合咖啡豆 / 星巴克®首选咖啡豆']
          },
        ]
      },
    } 
  }
}
</script>

