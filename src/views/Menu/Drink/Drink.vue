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

import CommodyList from '../../../components/Commody/CommodyList'
import CommodySearchButton from '../../../components/Commody/CommodySearchButton.vue'

export default {
  name: 'Drink',
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
              img: require("../../../assets/Drink/ModernMixology/sparkling-espresso-tonic.jpg"),
              text: '气炫冰山美式',
              path: '/menu/drink/modern-mixology/sparkling-espresso-tonic',
              describe: '灵感源自金汤力<br/>沁爽柠香揉合意式浓缩;低糖&低卡;含少量酒精成分;孕妇与儿童不建议饮用'
            },
            {
              img: require("../../../assets/Drink/ModernMixology/triple-citrus.jpg"),
              text: '橙柚派对',
              path: '/menu/drink/modern-mixology/triple-citrus',
              describe: '西柚+橙+柠檬三重果肉;富含维生素C;茶瓦纳™橘香茉意花草茶'
            },
            {
              img: require("../../../assets/Drink/ModernMixology/peach-shrub-fizz.jpg"),
              text: '醋意桃桃',
              path: '/menu/drink/modern-mixology/peach-shrub-fizz',
              describe: '大块黄桃+爽弹果冻;桃汁混搭桃醋风味;茶瓦纳™禅韵乌龙茶'
            },
            {
              img: require("../../../assets/Drink/ModernMixology/cold-brew-lemon-sour.jpg"),
              text: '酸柠浮冷萃',
              path: '/menu/drink/modern-mixology/cold-brew-lemon-sour',
              describe: '灵感源自鸡尾酒威士忌酸;枫糖威士忌风味冷萃咖啡;意大利进口路萨朵樱桃'
            },
          ]
        },
        {
          name: '手工调制浓缩咖啡',
          list:[
            {
              img: require("../../../assets/Drink/Espresso/caffe-americano.jpg"),
              text: '美式咖啡（热/冷）', 
              path: '/menu/drink/espresso/caffe-americano',
              describe: '简单即是美味，萃取经典浓缩咖啡，以水调和，香气浓郁蔓溢。',
            },
            {
              img: require("../../../assets/Drink/Espresso/caffe-latte.jpg"),
              text: '拿铁（热/冷）', 
              path: '/menu/drink/espresso/caffe-latte',
              describe: '本色的经典咖啡。新鲜萃取的浓缩咖啡中缓缓倒入蒸煮牛奶，覆上轻柔奶泡，简单的香与纯。',
            },
            {
              img: require("../../../assets/Drink/Espresso/caffe-mocha.jpg"),
              text: '摩卡（热/冷)', 
              path: '/menu/drink/espresso/caffe-mocha',
              describe: '摩卡最初是指一种带有巧克力风味的咖啡豆，现在，这份巧克力咖啡仍然带给你纯正的温暖。在浓缩咖啡中加入摩卡酱，与蒸煮牛奶一起交织出丝滑与醇厚。',
            },
            {
              img: require("../../../assets/Drink/Espresso/cappuccino.jpg"),
              text: '卡布奇诺（热/冷）', 
              path: '/menu/drink/espresso/cappuccino',
              describe: '蒸煮牛奶与浓缩咖啡相融合，用丰厚绵密的奶泡覆顶，再撒上肉桂粉或可可粉。温馨提示：在奶泡消融前，请尽快享用。',
            },
            {
              img: require("../../../assets/Drink/Espresso/caramel-macchiato.jpg"),
              text: '焦糖玛奇朵（热/冷）', 
              path: '/menu/drink/espresso/caramel-macchiato',
              describe: '玛奇朵在意大利语中的意思是“印记”。从蒸煮牛奶和添加风味糖浆开始，再倒入醇厚的浓缩咖啡，留下属于玛奇朵的独有印记。',
            },
            {
              img: require("../../../assets/Drink/Espresso/espresso.jpg"),
              text: '浓缩咖啡', 
              path: '/menu/drink/espresso/espresso',
              describe: '萃取星巴克浓缩烘焙咖啡豆精华，每一口都馥郁满溢，伴随浓郁的焦糖香及多层次的口感，带你开启星巴克咖啡之旅。',
            },
            {
              img: require("../../../assets/Drink/Espresso/flat-white.jpg"),
              text: '馥芮白™', 
              path: '/menu/drink/espresso/flat-white',
              describe: '选用星巴克精萃浓缩咖啡制成，融合绵密奶泡，风味更浓郁和甘甜。',
            },
            {
              img: require("../../../assets/Drink/Espresso/hazelnut-flavored-latte.jpg"),
              text: '榛果风味拿铁（热/冷）', 
              path: '/menu/drink/espresso/hazelnut-flavored-latte',
              describe: '榛果风味与醇厚的浓缩咖啡相得益彰，融合在蒸煮牛奶中，带给你特别温暖的醇香。',
            },
            {
              img: require("../../../assets/Drink/Espresso/vanilla-flavored-latte.jpg"),
              text: '香草风味拿铁（热/冷）', 
              path: '/menu/drink/espresso/vanilla-flavored-latte',
              describe: '清雅香甜的香草风味糖浆让浓缩咖啡变得浪漫起来，开启拿铁的香草浪漫之旅。',
            },
          ]
        },
        {
          name: '星冰乐®',
          list:[
            {
              img: require("../../../assets/Drink/FrappuccinoBlendedBeverage/caramel-espresso-frappuccino.jpg"),
              text: '焦糖浓缩咖啡星冰乐', 
              path: '/menu/drink/frappuccino-blended-beverage/caramel-espresso-frappuccino',
              describe: '香醇浓缩咖啡融于浓郁的焦糖咖啡星冰乐，最后在顶部的搅打稀奶油上淋上焦糖风味酱。让你停不了口的美味。',
            },
            {
              img: require("../../../assets/Drink/FrappuccinoBlendedBeverage/green-tea-frappuccino.jpg"),
              text: '抹茶星冰乐', 
              path: '/menu/drink/frappuccino-blended-beverage/green-tea-frappuccino',
              describe: '抹茶的清新，加一份牛奶的丝滑，与冰块和稀奶油搅拌出特有的清爽。',
            },
            {
              img: require("../../../assets/Drink/FrappuccinoBlendedBeverage/mango-passion-tea.jpg"),
              text: '芒果西番莲果茶星冰乐', 
              path: '/menu/drink/frappuccino-blended-beverage/mango-passion-tea',
              describe: '将花草茶的清爽，芒果西番莲果汁的酸甜与冰块融合。无需分清这一口是花香或果香，都是祛暑清凉的好饮品。',
            },
            {
              img: require("../../../assets/Drink/FrappuccinoBlendedBeverage/mocha-frappuccino.jpg"),
              text: '摩卡星冰乐', 
              path: '/menu/drink/frappuccino-blended-beverage/mocha-frappuccino',
              describe: '摩卡酱与星冰乐烘焙咖啡、在牛奶加冰块中绽放快乐，伴着雪白的稀奶油，让你每个瞬间都充满活力。',
            },
            {
              img: require("../../../assets/Drink/FrappuccinoBlendedBeverage/mocha-java-chip-frappuccino.jpg"),
              text: '摩卡可可碎片星冰乐', 
              path: '/menu/drink/frappuccino-blended-beverage/mocha-java-chip-frappuccino',
              describe: '摩卡酱和咖啡在冰块的碰撞下魅力四射，可可碎片带来不同的口感，顶部覆以稀奶油与摩卡酱，让浓郁变得更加有趣。(可可碎片为代可可脂巧克力)',
            },
            {
              img: require("../../../assets/Drink/FrappuccinoBlendedBeverage/vanilla-flavored-cream-frappuccino-blended-beverage.jpg"),
              text: '香草风味星冰乐', 
              path: '/menu/drink/frappuccino-blended-beverage/vanilla-flavored-cream-frappuccino-blended-beverage',
              describe: '香草风味糖浆与牛奶和冰块搅打出的奶香清甜，口感清爽怡人。',
            },
          ]
        },
        {
          name: '茶瓦纳™',
          list:[
            {
              img: require("../../../assets/Drink/Teavana/black-tea-latte.jpg"),
              text: '红茶拿铁（热/冷）', 
              path: '/menu/drink/teavana/black-tea-latte',
              describe: '优质红茶在蒸奶中慢慢的呈现出温和的口感，以柔和的奶泡锁住茶香，加以经典风味酱。这是红茶与牛奶的对话，优雅品享红茶文化。本饮品不含咖啡。',
            },
            {
              img: require("../../../assets/Drink/Teavana/green-tea-latte.jpg"),
              text: '抹茶拿铁（热/冷）', 
              path: '/menu/drink/teavana/green-tea-latte',
              describe: '优质抹茶、蒸奶以及细腻奶泡加以经典风味酱融合于一杯饮品，柔顺香甜，清雅脱俗。本饮品不含咖啡。',
            },
            {
              img: require("../../../assets/Drink/Teavana/iced-shaken-honey-ruby-grapefruit-black-tea.jpg"),
              text: '茶瓦纳™ 冰摇柚柚蜂蜜红茶', 
              path: '/menu/drink/teavana/iced-shaken-honey-ruby-grapefruit-black-tea',
              describe: '混合了韩国柚子的清香、以色列柚汁的甘甜、西班牙粉柚汁的果香融于醇香红茶，颗颗饱满果粒和清甜柚子皮，点缀上蜂蜜层层深入的口感，让TA对这杯沁人心脾念念不忘 。',
            },
            {
              img: require("../../../assets/Drink/Teavana/blackcurrant-raspberry.jpg"),
              text: '冰摇红莓黑加仑茶', 
              path: '/menu/drink/teavana/blackcurrant-raspberry',
              describe: '红莓黑加仑果汁融合醇香冰红茶，两款风格各异的莓子与冰红茶摇出各自的果香，却又浑然一体，迷恋在莓与茶的酸甜中。',
            },
            {
              img: require("../../../assets/Drink/Teavana/iced-shaken-mango-herbal-juiced-tea.jpg"),
              text: '冰摇芒果花草茶', 
              path: '/menu/drink/teavana/iced-shaken-mango-herbal-juiced-tea',
              describe: '',
            },
            {
              img: require("../../../assets/Drink/Teavana/iced-shaken-peach-green-tea.jpg"),
              text: '茶瓦纳™冰摇桃桃乌龙茶', 
              path: '/menu/drink/teavana/iced-shaken-peach-green-tea',
              describe: '内含原榨桃汁加上吃得到的大颗白桃果肉， 吃上一口，尝上一块，留住唇间的鲜醇甘厚。更有茶香留恋回味，给TA淘气的味蕾茶选。',
            },
            {
              img: require("../../../assets/Drink/Teavana/pear-rooibos-tea.png"),
              text: '梨光清润路芭茶', 
              path: '/menu/drink/teavana/pear-rooibos-tea',
              describe: '',
            },
            {
              img: require("../../../assets/Drink/Teavana/citrus-grapefruit-herbal-tea.png"),
              text: '橘香柚柚花草茶', 
              path: '/menu/drink/teavana/citrus-grapefruit-herbal-tea',
              describe: '',
            },
          ]
        },
        {
          name: '经典巧克力饮品',
          list:[
            {
              img: require("../../../assets/Drink/SignatureChocolateBeverage/signature-chocolate-beverage.jpg"),
              text: '经典巧克力饮品（热/冷）', 
              path: '/menu/drink/signature-chocolate-beverage/signature-chocolate-beverage',
              describe: '抵挡不住巧克力风味酱在蒸奶中飘散的浓郁可可香。只需在稀奶油上轻洒些许可可粉，就这样俘获你的心。',
            },
          ]
        },
        {
          name: '咖啡融合冰淇淋',
          list:[
            {
              img: require("../../../assets/Drink/CoffeePlusIceCream/affogato.jpg"),
              text: '阿馥奇朵™',
              path: '/menu/drink/coffee-plus-ice-cream',
              describe: '',
            },
            {
              img: require("../../../assets/Drink/CoffeePlusIceCream/cold-brew-malt.jpg"),
              text: '麦芽雪冷萃™',
              path: '/menu/drink/coffee-plus-ice-cream',
              describe: '',
            },
            {
              img: require("../../../assets/Drink/CoffeePlusIceCream/cold-brew-float.jpg"),
              text: '冷萃浮乐朵™',
              path: '/menu/drink/coffee-plus-ice-cream',
              describe: '',
            },
            {
              img: require("../../../assets/Drink/CoffeePlusIceCream/instore-nitro-cold-brew-float.jpg"),
              text: '气致™冷萃浮乐朵™',
              path: '/menu/drink/coffee-plus-ice-cream',
              describe: '',
            },
          ]
        },
        {
          name: '星巴克冷萃咖啡系列',
          list:[
            {
              img: require("../../../assets/Drink/ColdBrew/cold-brew.jpg"),
              text: '冷萃冰咖啡', 
              path: '/menu/drink/cold-brew',
              describe: '',
            },
            {
              img: require("../../../assets/Drink/ColdBrew/vanilla-flavor-sweet-cream-cold-brew.jpg"),
              text: '轻甜奶油冷萃', 
              path: '/menu/drink/cold-brew',
              describe: '',
            },
            {
              img: require("../../../assets/Drink/ColdBrew/cold-foam-cold-brew.jpg"),
              text: '绵云冷萃', 
              path: '/menu/drink/cold-brew',
              describe: '',
            },
          ]
        },
        {
          name: '气致™冷萃咖啡',
          list:[
            {
              img: require("../../../assets/Drink/NitroColdBrew/nitro-cold-brew.jpg"),
              text: '气致™冷萃咖啡', 
              path: '/menu/drink/nitro-cold-brew',
              describe: '',
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
