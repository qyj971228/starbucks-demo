<template>
  <div>
    <commody-describe-common :describe="productPart"></commody-describe-common>
  </div>
</template>
<script>

import CommodyDescribeCommon from '../../../../components/Commody/CommodyDescribeCommon.vue'

export default {
  name: 'HamAndGoudaSandwich',
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
          name: '三明治、帕尼尼、卷',
          list:[
            {
              img: require("../../../../assets/Food/Sandwich/avocado-and-chicken-bagel.jpg"),
              text: '牛油果鸡肉焙果', 
              path: '/menu/food/sandwich/avocado-and-chicken-bagel',
              describe: ['牛油果鸡肉焙果内含熏煮过的香嫩鸡胸肉，搭配美洲进口牛油果酱和车达芝士，口味清新健康','焙果一定要趁热吃，热腾腾的焙果外部松脆，内部坚韧，嚼劲十足','咖啡搭配推荐：冷萃咖啡'],
            },
            {
              img: require("../../../../assets/Food/Sandwich/bacon-and-egg-croissant-bun.jpg"),
              text: '培根蛋可颂堡', 
              path: '/menu/food/sandwich/bacon-and-egg-croissant-bun',
              describe: ['烟熏培根和荷包蛋作为馅料，加上优质车达芝士放入经典可颂堡中，在全世界的星巴克都是当之无愧的明星早餐产品。','咖啡搭配推荐：星巴克®佛罗娜咖啡豆'],
            },
            {
              img: require("../../../../assets/Food/Sandwich/bacon-and-egg-wrap.jpg"),
              text: '蜜汁培根蛋卷', 
              path: '/menu/food/sandwich/bacon-and-egg-wrap',
              describe: ['蜜汁处理过的培根，搭配嫩滑炒鸡蛋和美味车达芝士，创新的用菠菜风味卷饼包裹一口下去，馥郁香气和丰富口感立刻充满口腔，令人回味无穷。','咖啡搭配推荐：星巴克®佛罗娜咖啡豆 / 星巴克®危地马拉安提瓜咖啡豆'],
            },
            {
              img: require("../../../../assets/Food/Sandwich/beef-baguette.jpg"),
              text: '层层牛肉法棍', 
              path: '/menu/food/sandwich/beef-baguette',
              describe: ['烘烤后面包外脆里嫩，浓郁的芝士口感搭配牛肉以及蔬菜的甘甜味，鲜香满溢','内夹优质牛肉、甜椒和洋葱','外加上选的芝士和黄油，馅料丰富','咖啡搭配推荐：星巴克®意式烘焙咖啡豆'],
            },
            {
              img: require("../../../../assets/Food/Sandwich/beef-cheese-croissant.jpg"),
              text: '牛肉芝士可颂', 
              path: '/menu/food/sandwich/beef-cheese-croissant',
              describe: ['酥香可颂，搭配美味牛肉及芝士，口感上丰富的层次感，满足你挑剔的味蕾。','咖啡搭配推荐：馥芮白','仅江浙沪门店'],
            },
            {
              img: require("../../../../assets/Food/Sandwich/caesar-chicken-wrap.jpg"),
              text: '凯撒鸡肉卷', 
              path: '/menu/food/sandwich/caesar-chicken-wrap',
              describe: ['凯撒鸡肉卷口味经典，风味浓厚。秘制烟熏鸡肉和培根打造双蛋白，同时搭配新鲜蔬菜馅料丰富十足。','咖啡搭配推荐：冷萃冰咖啡','仅江浙沪门店'],
            },
            {
              img: require("../../../../assets/Food/Sandwich/chicken-panini.jpg"),
              text: '鸡肉芝香帕尼尼', 
              path: '/menu/food/sandwich/chicken-panini',
              describe: ['松软可口的帕尼尼，精选优质香浓芝士，融合喷香鸡肉，让你口口满足。','咖啡搭配推荐：星巴克®首选咖啡豆 / 星巴克®派克市场烘焙咖啡豆'],
            },
            {
              img: require("../../../../assets/Food/Sandwich/eggs-mushroom-shrimp-wrap.jpg"),
              text: '炒蛋菌菇虾仁卷', 
              path: '/menu/food/sandwich/eggs-mushroom-shrimp-wrap',
              describe: ['优选嫩滑炒蛋以及秘制培根，搭配混合菌菇并点缀南美虾仁，丰富健康，一只早餐卷满足一天的营养需求。','咖啡搭配推荐：拿铁','仅江浙沪门店'],
            },
            {
              img: require("../../../../assets/Food/Sandwich/ham-and-cheese-croissant.jpg"),
              text: '火腿芝士可颂', 
              path: '/menu/food/sandwich/ham-and-cheese-croissant',
              describe: ['优质进口黄油制作面团， 精心烤制的酥香可颂，内夹高品质芝士和火腿肉片，咸香适口，回味无穷。','咖啡搭配推荐：星巴克®首选咖啡豆 / 星巴克®派克市场烘焙咖啡豆'],
            },
            {
              img: require("../../../../assets/Food/Sandwich/ham-and-double-cheese-croque-monsieur.jpg"),
              text: '双重芝士火腿吐司', 
              path: '/menu/food/sandwich/ham-and-double-cheese-croque-monsieur',
              describe: ['双重芝士：埃德姆芝士+切达芝士','加热后芝士行程拉丝效果，口感丰富，香味无穷','经典法式午餐的上佳选择','咖啡搭配推荐：星巴克®凤舞祥云综合咖啡豆'],
            },
            {
              img: require("../../../../assets/Food/Sandwich/ham-and-gouda-sandwich.jpg"),
              text: '双重芝士火腿吐司', 
              path: '/menu/food/sandwich/ham-and-gouda-sandwich',
              describe: ['长时间的发酵，口感更丰富','口感轻柔咸香','采用美味的高达芝士','咖啡搭配推荐：星巴克®首选咖啡豆 / 星巴克®派克市场烘焙咖啡豆'],
            },
            {
              img: require("../../../../assets/Food/Sandwich/pastrami-sandwich.jpg"),
              text: '帕斯雀牛肉三明治', 
              path: '/menu/food/sandwich/pastrami-sandwich',
              describe: ['升级后的经典，除了美味加量，面包体还铺满了香脆奇亚籽，搭配帕斯雀牛肉，脆爽蔬菜和香浓马苏里拉芝士，口口都是意式风情和大写的满足。','咖啡搭配推荐：美式咖啡','仅江浙沪门店'],
            },
            {
              img: require("../../../../assets/Food/Sandwich/roasted-french-ham-egg-sandwich.jpg"),
              text: '烤法式火腿鸡蛋三明治', 
              path: '/menu/food/sandwich/roasted-french-ham-egg-sandwich',
              describe: ['鲜嫩的火腿与鲜香的芝士，经过烘烤后，蛋香四溢的蛋皮，蛋皮中更配以胡萝卜和高丽菜，营造出更为丰富饱满的口感。','咖啡搭配推荐：焦糖玛奇朵','仅江浙沪门店'],
            },
            {
              img: require("../../../../assets/Food/Sandwich/slow-roasted-ham-cheese-ciabatta.jpg"),
              text: '慢烤火腿芝士恰巴特', 
              path: '/menu/food/sandwich/slow-roasted-ham-cheese-ciabatta',
              describe: ['5小时以上慢烤的意式熏煮火腿肉, 搭配香嫩鸡蛋饼以及轻柔咸香的高达芝士，放入外酥里软的恰巴特面包中，搭配一杯钟爱的咖啡，全新一天，从这款美味早餐开始吧！','咖啡搭配推荐：星巴克®苏门答腊咖啡豆'],
            },
            {
              img: require("../../../../assets/Food/Sandwich/tuna-panini.jpg"),
              text: '金枪鱼帕尼尼', 
              path: '/menu/food/sandwich/tuna-panini',
              describe: ['松软可口的帕尼尼，包裹鲜香金枪鱼，搭配香浓芝士，微微加热，芝士融化，回味无穷。','咖啡搭配推荐：星巴克®意式烘焙咖啡豆'],
            },
            {
              img: require("../../../../assets/Food/Sandwich/turkey-bacon-english-muffin.jpg"),
              text: '火鸡培根英式麦芬', 
              path: '/menu/food/sandwich/turkey-bacon-english-muffin',
              describe: ['优质全麦面粉制作的英式麦芬，健康看得见。内夹香酥诱人的火鸡培根肉和质地细腻，口味柔和的白车达芝士，还有轻盈的纯蛋白饼。提供优质蛋白质的健康早餐选择。','咖啡搭配推荐：星巴克®苏门答腊咖啡豆'],
            },
          ]
        },
    } 
  }
}
</script>

