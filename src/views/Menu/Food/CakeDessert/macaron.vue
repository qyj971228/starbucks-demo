<template>
  <div>
    <commody-describe-common :describe="productPart"></commody-describe-common>
  </div>
</template>
<script>

import CommodyDescribeCommon from '../../../../components/Commody/CommodyDescribeCommon.vue'

export default {
  name: 'Macaron',
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
          name: '蛋糕&甜品',
          list:[
            {
              img: require("../../../../assets/Food/CakeDessert/blueberry-and-cookie-style-cheesecake.jpg"),
              text: '蓝莓曲奇风轻乳酪蛋糕', 
              path: '/menu/food/cake-dessert/blueberry-and-cookie-style-cheesecake',
              describe: [
                '星巴克研发团队创新研发出的蓝莓曲奇风轻乳酪蛋糕，拼配三种不同品牌产地的奶油干酪使用独特的搅拌、烘烤工艺，打造出轻盈的芝士风味，和细腻丝滑口感，区别于纽约芝士蛋糕的醇厚。',
                '底部饼干底选择奥利奥风味曲奇制成，与众不同却不失经典的搭配，成为整只蛋糕的点睛之笔。',
                '配上大果粒蓝莓和树莓的清爽，这款轻盈爽滑的轻乳酪蛋糕更适合搭配有水果风味的饮品。',
                '咖啡搭配推荐：星巴克®苏门答腊咖啡豆 / 星巴克®浓缩烘焙咖啡豆'
                ]
            },
            {
              img: require("../../../../assets/Food/CakeDessert/classic-swiss-roll-cake.jpg"),
              text: '经典瑞士卷', 
              path: '/menu/food/cake-dessert/classic-swiss-roll-cake',
              describe: ['瑞士卷是经典必备的长青产品，采用进口高品质奶油制作，蛋糕胚外表金黄、细腻松软湿润、奶香味浓郁。','咖啡搭配推荐：摩卡','仅江浙沪门店',]
            },
            {
              img: require("../../../../assets/Food/CakeDessert/triple-dark-chocolate-cake.jpg"),
              text: '浓醇三重黑巧克力蛋糕', 
              path: '/menu/food/cake-dessert/triple-dark-chocolate-cake',
              describe: [
                '三种源自法国和比利时的纯正黑巧融合而成，不同产地的巧克力带来更加纯正浓郁的可可风味。',
                '蛋糕层与慕斯完美融合不仅提升了蛋糕整体的巧克力风味，还帮助降低了蛋糕的整体甜度',
                '嵌入蛋糕胚中的顺滑生巧，惊喜味蕾',
                '体验入口即化的浓郁可可风味',
                '咖啡搭配推荐：星巴克®危地马拉安提瓜咖啡豆 / 星巴克®埃塞俄比亚咖啡豆'
              ]
            },
            {
              img: require("../../../../assets/Food/CakeDessert/eclair.jpg"),
              text: '法式闪电泡芙', 
              path: '/menu/food/cake-dessert/eclair',
              describe: [
                '六种口味，丰富诱人：开心果、香草、柠檬、焦糖、覆盆子、巧克力',
                '产品小巧精致',
                '表面装饰手工裱撒，独具匠心',
                '咖啡搭配推荐：冷萃咖啡 / 冰咖啡'
              ]
            },
            {
              img: require("../../../../assets/Food/CakeDessert/starbucks-coffee-tiramisu.jpg"),
              text: '星巴克咖啡提拉米苏蛋糕', 
              path: '/menu/food/cake-dessert/starbucks-coffee-tiramisu',
              describe: [
                '精选意大利进口马斯卡波尼芝士和玛莎拉白葡萄酒，与星巴克咖啡相融合，将芝士、酒和咖啡的独特风味融合于一身，相得益彰。',
                '更有意大利进口手指饼干浸泡其中，带给你视觉和味觉的双重享受。甜与苦就像天使与魔鬼，和谐而又冲突地结合起来。',
                '咖啡搭配推荐：星巴克®危地马拉安提瓜咖啡豆 / 星巴克®佛罗娜咖啡豆'
              ]
            },
            {
              img: require("../../../../assets/Food/CakeDessert/macaron.jpg"),
              text: '法式马卡龙', 
              path: '/menu/food/cake-dessert/macaron',
              describe: [
                '五种独特口味：焦糖玛奇朵、栗香拿铁、覆盆子、抹茶拿铁、香草',
                '正宗法式传统工艺制作',
                '外酥内软、口味清甜',
                '咖啡搭配推荐：星巴克®肯亚咖啡豆 / 星巴克®埃塞俄比亚咖啡豆'
              ]
            },
            {
              img: require("../../../../assets/Food/CakeDessert/new-york-style-creamy-cheesecake.jpg"),
              text: '纽约风浓郁重芝士蛋糕', 
              path: '/menu/food/cake-dessert/new-york-style-creamy-cheesecake',
              describe: [
                '地道的纽约芝士蛋糕配方与烘焙技术，带来最纯正的浓郁风味',
                '清新独特的酸味奶油裱花，每一片都是独一无二的精致',
                '香醇浓郁的重磅芝士，甄选新西兰进口芝士',
                '重点感受：绵密口感与融入口中的醇厚芝士芳香',
                '酥脆饼干底，带来丰富口感层次',
                '咖啡搭配推荐：星巴克®苏门答腊咖啡豆 / 星巴克®凤舞祥云综合咖啡豆'
              ]
            },
          ]
        },
    } 
  }
}
</script>

