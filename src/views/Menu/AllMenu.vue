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

import CommodyList from '../../components/Commody/CommodyList'
import CommodySearchButton from '../../components/Commody/CommodySearchButton.vue'

export default {
  name: 'AllMenu',
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
              img: require("../../assets/Drink/ModernMixology/sparkling-espresso-tonic.jpg"),
              text: '气炫冰山美式',
              path: '/menu/drink/modern-mixology/sparkling-espresso-tonic',
              describe: '灵感源自金汤力<br/>沁爽柠香揉合意式浓缩;低糖&低卡;含少量酒精成分;孕妇与儿童不建议饮用'
            },
            {
              img: require("../../assets/Drink/ModernMixology/triple-citrus.jpg"),
              text: '橙柚派对',
              path: '/menu/drink/modern-mixology/triple-citrus',
              describe: '西柚+橙+柠檬三重果肉;富含维生素C;茶瓦纳™橘香茉意花草茶'
            },
            {
              img: require("../../assets/Drink/ModernMixology/peach-shrub-fizz.jpg"),
              text: '醋意桃桃',
              path: '/menu/drink/modern-mixology/peach-shrub-fizz',
              describe: '大块黄桃+爽弹果冻;桃汁混搭桃醋风味;茶瓦纳™禅韵乌龙茶'
            },
            {
              img: require("../../assets/Drink/ModernMixology/cold-brew-lemon-sour.jpg"),
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
              img: require("../../assets/Drink/Espresso/caffe-americano.jpg"),
              text: '美式咖啡（热/冷）', 
              path: '/menu/drink/espresso/caffe-americano',
              describe: '简单即是美味，萃取经典浓缩咖啡，以水调和，香气浓郁蔓溢。',
            },
            {
              img: require("../../assets/Drink/Espresso/caffe-latte.jpg"),
              text: '拿铁（热/冷）', 
              path: '/menu/drink/espresso/caffe-latte',
              describe: '本色的经典咖啡。新鲜萃取的浓缩咖啡中缓缓倒入蒸煮牛奶，覆上轻柔奶泡，简单的香与纯。',
            },
            {
              img: require("../../assets/Drink/Espresso/caffe-mocha.jpg"),
              text: '摩卡（热/冷)', 
              path: '/menu/drink/espresso/caffe-mocha',
              describe: '摩卡最初是指一种带有巧克力风味的咖啡豆，现在，这份巧克力咖啡仍然带给你纯正的温暖。在浓缩咖啡中加入摩卡酱，与蒸煮牛奶一起交织出丝滑与醇厚。',
            },
            {
              img: require("../../assets/Drink/Espresso/cappuccino.jpg"),
              text: '卡布奇诺（热/冷）', 
              path: '/menu/drink/espresso/cappuccino',
              describe: '蒸煮牛奶与浓缩咖啡相融合，用丰厚绵密的奶泡覆顶，再撒上肉桂粉或可可粉。温馨提示：在奶泡消融前，请尽快享用。',
            },
            {
              img: require("../../assets/Drink/Espresso/caramel-macchiato.jpg"),
              text: '焦糖玛奇朵（热/冷）', 
              path: '/menu/drink/espresso/caramel-macchiato',
              describe: '玛奇朵在意大利语中的意思是“印记”。从蒸煮牛奶和添加风味糖浆开始，再倒入醇厚的浓缩咖啡，留下属于玛奇朵的独有印记。',
            },
            {
              img: require("../../assets/Drink/Espresso/espresso.jpg"),
              text: '浓缩咖啡', 
              path: '/menu/drink/espresso/espresso',
              describe: '萃取星巴克浓缩烘焙咖啡豆精华，每一口都馥郁满溢，伴随浓郁的焦糖香及多层次的口感，带你开启星巴克咖啡之旅。',
            },
            {
              img: require("../../assets/Drink/Espresso/flat-white.jpg"),
              text: '馥芮白™', 
              path: '/menu/drink/espresso/flat-white',
              describe: '选用星巴克精萃浓缩咖啡制成，融合绵密奶泡，风味更浓郁和甘甜。',
            },
            {
              img: require("../../assets/Drink/Espresso/hazelnut-flavored-latte.jpg"),
              text: '榛果风味拿铁（热/冷）', 
              path: '/menu/drink/espresso/hazelnut-flavored-latte',
              describe: '榛果风味与醇厚的浓缩咖啡相得益彰，融合在蒸煮牛奶中，带给你特别温暖的醇香。',
            },
            {
              img: require("../../assets/Drink/Espresso/vanilla-flavored-latte.jpg"),
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
              img: require("../../assets/Drink/FrappuccinoBlendedBeverage/caramel-espresso-frappuccino.jpg"),
              text: '焦糖浓缩咖啡星冰乐', 
              path: '/menu/drink/frappuccino-blended-beverage/caramel-espresso-frappuccino',
              describe: '香醇浓缩咖啡融于浓郁的焦糖咖啡星冰乐，最后在顶部的搅打稀奶油上淋上焦糖风味酱。让你停不了口的美味。',
            },
            {
              img: require("../../assets/Drink/FrappuccinoBlendedBeverage/green-tea-frappuccino.jpg"),
              text: '抹茶星冰乐', 
              path: '/menu/drink/frappuccino-blended-beverage/green-tea-frappuccino',
              describe: '抹茶的清新，加一份牛奶的丝滑，与冰块和稀奶油搅拌出特有的清爽。',
            },
            {
              img: require("../../assets/Drink/FrappuccinoBlendedBeverage/mango-passion-tea.jpg"),
              text: '芒果西番莲果茶星冰乐', 
              path: '/menu/drink/frappuccino-blended-beverage/mango-passion-tea',
              describe: '将花草茶的清爽，芒果西番莲果汁的酸甜与冰块融合。无需分清这一口是花香或果香，都是祛暑清凉的好饮品。',
            },
            {
              img: require("../../assets/Drink/FrappuccinoBlendedBeverage/mocha-frappuccino.jpg"),
              text: '摩卡星冰乐', 
              path: '/menu/drink/frappuccino-blended-beverage/mocha-frappuccino',
              describe: '摩卡酱与星冰乐烘焙咖啡、在牛奶加冰块中绽放快乐，伴着雪白的稀奶油，让你每个瞬间都充满活力。',
            },
            {
              img: require("../../assets/Drink/FrappuccinoBlendedBeverage/mocha-java-chip-frappuccino.jpg"),
              text: '摩卡可可碎片星冰乐', 
              path: '/menu/drink/frappuccino-blended-beverage/mocha-java-chip-frappuccino',
              describe: '摩卡酱和咖啡在冰块的碰撞下魅力四射，可可碎片带来不同的口感，顶部覆以稀奶油与摩卡酱，让浓郁变得更加有趣。(可可碎片为代可可脂巧克力)',
            },
            {
              img: require("../../assets/Drink/FrappuccinoBlendedBeverage/vanilla-flavored-cream-frappuccino-blended-beverage.jpg"),
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
              img: require("../../assets/Drink/Teavana/black-tea-latte.jpg"),
              text: '红茶拿铁（热/冷）', 
              path: '/menu/drink/teavana/black-tea-latte',
              describe: '优质红茶在蒸奶中慢慢的呈现出温和的口感，以柔和的奶泡锁住茶香，加以经典风味酱。这是红茶与牛奶的对话，优雅品享红茶文化。本饮品不含咖啡。',
            },
            {
              img: require("../../assets/Drink/Teavana/green-tea-latte.jpg"),
              text: '抹茶拿铁（热/冷）', 
              path: '/menu/drink/teavana/green-tea-latte',
              describe: '优质抹茶、蒸奶以及细腻奶泡加以经典风味酱融合于一杯饮品，柔顺香甜，清雅脱俗。本饮品不含咖啡。',
            },
            {
              img: require("../../assets/Drink/Teavana/iced-shaken-honey-ruby-grapefruit-black-tea.jpg"),
              text: '茶瓦纳™ 冰摇柚柚蜂蜜红茶', 
              path: '/menu/drink/teavana/iced-shaken-honey-ruby-grapefruit-black-tea',
              describe: '混合了韩国柚子的清香、以色列柚汁的甘甜、西班牙粉柚汁的果香融于醇香红茶，颗颗饱满果粒和清甜柚子皮，点缀上蜂蜜层层深入的口感，让TA对这杯沁人心脾念念不忘 。',
            },
            {
              img: require("../../assets/Drink/Teavana/blackcurrant-raspberry.jpg"),
              text: '冰摇红莓黑加仑茶', 
              path: '/menu/drink/teavana/blackcurrant-raspberry',
              describe: '红莓黑加仑果汁融合醇香冰红茶，两款风格各异的莓子与冰红茶摇出各自的果香，却又浑然一体，迷恋在莓与茶的酸甜中。',
            },
            {
              img: require("../../assets/Drink/Teavana/iced-shaken-mango-herbal-juiced-tea.jpg"),
              text: '冰摇芒果花草茶', 
              path: '/menu/drink/teavana/iced-shaken-mango-herbal-juiced-tea',
              describe: '',
            },
            {
              img: require("../../assets/Drink/Teavana/iced-shaken-peach-green-tea.jpg"),
              text: '茶瓦纳™冰摇桃桃乌龙茶', 
              path: '/menu/drink/teavana/iced-shaken-peach-green-tea',
              describe: '内含原榨桃汁加上吃得到的大颗白桃果肉， 吃上一口，尝上一块，留住唇间的鲜醇甘厚。更有茶香留恋回味，给TA淘气的味蕾茶选。',
            },
            {
              img: require("../../assets/Drink/Teavana/pear-rooibos-tea.png"),
              text: '梨光清润路芭茶', 
              path: '/menu/drink/teavana/pear-rooibos-tea',
              describe: '',
            },
            {
              img: require("../../assets/Drink/Teavana/citrus-grapefruit-herbal-tea.png"),
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
              img: require("../../assets/Drink/SignatureChocolateBeverage/signature-chocolate-beverage.jpg"),
              text: '经典巧克力饮品（热/冷）', 
              path: '/menu/drink/signature-chocolate-beverage',
              describe: '抵挡不住巧克力风味酱在蒸奶中飘散的浓郁可可香。只需在稀奶油上轻洒些许可可粉，就这样俘获你的心。',
            },
          ]
        },
        {
          name: '咖啡融合冰淇淋',
          list:[
            {
              img: require("../../assets/Drink/CoffeePlusIceCream/affogato.jpg"),
              text: '阿馥奇朵™',
              path: '/menu/drink/coffee-plus-ice-cream',
              describe: '',
            },
            {
              img: require("../../assets/Drink/CoffeePlusIceCream/cold-brew-malt.jpg"),
              text: '麦芽雪冷萃™',
              path: '/menu/drink/coffee-plus-ice-cream',
              describe: '',
            },
            {
              img: require("../../assets/Drink/CoffeePlusIceCream/cold-brew-float.jpg"),
              text: '冷萃浮乐朵™',
              path: '/menu/drink/coffee-plus-ice-cream',
              describe: '',
            },
            {
              img: require("../../assets/Drink/CoffeePlusIceCream/instore-nitro-cold-brew-float.jpg"),
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
              img: require("../../assets/Drink/ColdBrew/cold-brew.jpg"),
              text: '冷萃冰咖啡', 
              path: '/menu/drink/cold-brew',
              describe: '',
            },
            {
              img: require("../../assets/Drink/ColdBrew/vanilla-flavor-sweet-cream-cold-brew.jpg"),
              text: '轻甜奶油冷萃', 
              path: '/menu/drink/cold-brew',
              describe: '',
            },
            {
              img: require("../../assets/Drink/ColdBrew/cold-foam-cold-brew.jpg"),
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
              img: require("../../assets/Drink/NitroColdBrew/nitro-cold-brew.jpg"),
              text: '气致™冷萃咖啡', 
              path: '/menu/drink/nitro-cold-brew',
              describe: '',
            },
          ]
        },
        {
          name: '烘焙',
          list:[
            {
              img: require("../../assets/Food/Bakery/american-style-pancakes.jpg"),
              text: '美式松饼',
              path: '/menu/food/bakery/american-style-pancakes',
              describe: ['两片轻盈酥松的美式松饼搭配加拿大进口槭树糖浆（枫糖浆），层层甜蜜令人陶醉，带给你超值经典的美式早餐新体验。','咖啡搭配推荐：冷萃咖啡 / 美式咖啡']
            },
            {
              img: require("../../assets/Food/Bakery/blueberry-muffin.jpg"),
              text: '蓝莓麦芬',
              path: '/menu/food/bakery/blueberry-muffin',
              describe: ['享受进口大蓝莓果粒带来的曼妙滋味;星巴克独有美式配方制作','顶层口感酥脆，内部松软','咖啡搭配建议：星巴克®早餐综合咖啡豆 / 星巴克®首选咖啡豆']
            },
            {
              img: require("../../assets/Food/Bakery/chocolate-muffin.jpg"),
              text: '香浓巧克力麦芬',
              path: '/menu/food/bakery/chocolate-muffin',
              describe: ['享受高品质欧洲巧克力的细腻质感','星巴克独有美式配方制作','巧克力风味浓郁醇正','咖啡搭配建议：星巴克®危地马拉安提瓜咖啡豆']
            },
            {
              img: require("../../assets/Food/Bakery/cinnamon-swirl.jpg"),
              text: '旋风玉桂酥',
              path: '/menu/food/bakery/cinnamon-swirl',
              describe: ['提子、核桃和玉桂风味平衡搭配','口感酥香美味','黄油香气、独特的玉桂粉;咖啡搭配推荐：星巴克®哥伦比亚咖啡豆']
            },
            {
              img: require("../../assets/Food/Bakery/french-butter-croissant.jpg"),
              text: '法式香酥可颂',
              path: '/menu/food/bakery/french-butter-croissant',
              describe: ['16层制作工艺，松软十足','金黄色的外表，酥脆可口','蜂巢状的内部层次，法国进口高品质黄油，香味浓郁，口感酥脆','咖啡搭配建议：星巴克®早餐综合咖啡豆']
            },
            {
              img: require("../../assets/Food/Bakery/french-caramel-bread.jpg"),
              text: '法式焦糖酥',
              path: '/menu/food/bakery/french-caramel-bread',
              describe: ['浓郁奶香的可颂面团，表层淋上香甜的焦糖沙司，一口咬下，外酥内柔，焦糖夹杂浓浓的奶香味在唇齿间蔓延，带给你美妙口感。','咖啡搭配推荐：馥芮白','仅江浙沪门店']
            },
            {
              img: require("../../assets/Food/Bakery/hazelnut-croissant.jpg"),
              text: '层层榛子果仁酥',
              path: '/menu/food/bakery/hazelnut-croissant',
              describe: ['传统27层法式可颂工艺','层次分明，口感酥脆松软','甄选法国进口黄油和进口榛子原料','口感浓郁、酥脆','咖啡搭配推荐：星巴克®早餐综合咖啡豆 / 星巴克®哥伦比亚咖啡豆']
            },
            {
              img: require("../../assets/Food/Bakery/honey-raisin-scone.jpg"),
              text: '蜂蜜提子司康',
              path: '/menu/food/bakery/honey-raisin-scone',
              describe: ['提子干经朗姆酒精心炮制，具有独特口感','进口高品质黄油制作','松软酥脆、香甜适口','咖啡搭配建议：星巴克®哥伦比亚咖啡豆']
            },
            {
              img: require("../../assets/Food/Bakery/oat-caramel-pudding-bread.jpg"),
              text: '燕麦焦糖布丁面包',
              path: '/menu/food/bakery/oat-caramel-pudding-bread',
              describe: ['当酥脆的面包干搭配绵密的布丁、甜美的焦糖、还有一点点韧性的燕麦，蔓越莓干，提子干让人爱不释口。','咖啡搭配推荐：焦糖玛奇朵','仅江浙沪门店']
            },
            {
              img: require("../../assets/Food/Bakery/premium-chocolate-croissant.jpg"),
              text: '香浓巧克力可颂',
              path: '/menu/food/bakery/premium-chocolate-croissant',
              describe: ['借鉴传统27层制作工艺','采用高品质进口巧克力条作为内馅','香味浓郁，酥脆有韧性','咖啡搭配推荐：星巴克®危地马拉安提瓜咖啡豆']
            },
            {
              img: require("../../assets/Food/Bakery/raisin-scone.jpg"),
              text: '提子干松饼',
              path: '/menu/food/bakery/raisin-scone',
              describe: ['口感松软，醇厚的奶香味，再加入香甜的提子干，使产品甜而不腻。','咖啡搭配推荐：冷萃冰咖啡','仅江浙沪门店']
            },
            {
              img: require("../../assets/Food/Bakery/raisins-walnut-bread.jpg"),
              text: '核桃提子软法面包',
              path: '/menu/food/bakery/raisins-walnut-bread',
              describe: ['软法面包体，内含核桃、提子，添加不融芝士，奶香风味浓郁。','咖啡搭配推荐：美式咖啡','仅江浙沪门店']
            },
            {
              img: require("../../assets/Food/Bakery/red-bean-oats-scone.jpg"),
              text: '红豆燕麦松饼',
              path: '/menu/food/bakery/red-bean-oats-scone',
              describe: ['口感松软，醇厚的奶香味，再加入红豆沙和红豆，更增加了香甜的味道，同时加入燕麦片，更增加产品的价值。','咖啡搭配推荐：馥芮白','仅江浙沪门店']
            },
            {
              img: require("../../assets/Food/Bakery/whole-wheat-walnut-muffin.jpg"),
              text: '全麦核桃麦芬',
              path: '/menu/food/bakery/whole-wheat-walnut-muffin',
              describe: ['口感松软、有弹性','多种坚果富有嚼劲','星巴克独有配方制作','咖啡搭配建议：星巴克®早餐综合咖啡豆 / 星巴克®首选咖啡豆']
            },
          ]
        },
        {
          name: '蛋糕&甜品',
          list:[
            {
              img: require("../../assets/Food/CakeDessert/blueberry-and-cookie-style-cheesecake.jpg"),
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
              img: require("../../assets/Food/CakeDessert/classic-swiss-roll-cake.jpg"),
              text: '经典瑞士卷', 
              path: '/menu/food/cake-dessert/classic-swiss-roll-cake',
              describe: ['瑞士卷是经典必备的长青产品，采用进口高品质奶油制作，蛋糕胚外表金黄、细腻松软湿润、奶香味浓郁。','咖啡搭配推荐：摩卡','仅江浙沪门店',]
            },
            {
              img: require("../../assets/Food/CakeDessert/triple-dark-chocolate-cake.jpg"),
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
              img: require("../../assets/Food/CakeDessert/eclair.jpg"),
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
              img: require("../../assets/Food/CakeDessert/starbucks-coffee-tiramisu.jpg"),
              text: '星巴克咖啡提拉米苏蛋糕', 
              path: '/menu/food/cake-dessert/starbucks-coffee-tiramisu',
              describe: [
                '精选意大利进口马斯卡波尼芝士和玛莎拉白葡萄酒，与星巴克咖啡相融合，将芝士、酒和咖啡的独特风味融合于一身，相得益彰。',
                '更有意大利进口手指饼干浸泡其中，带给你视觉和味觉的双重享受。甜与苦就像天使与魔鬼，和谐而又冲突地结合起来。',
                '咖啡搭配推荐：星巴克®危地马拉安提瓜咖啡豆 / 星巴克®佛罗娜咖啡豆'
              ]
            },
            {
              img: require("../../assets/Food/CakeDessert/macaron.jpg"),
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
              img: require("../../assets/Food/CakeDessert/new-york-style-creamy-cheesecake.jpg"),
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
        {
          name: '三明治、帕尼尼、卷',
          list:[
            {
              img: require("../../assets/Food/Sandwich/avocado-and-chicken-bagel.jpg"),
              text: '牛油果鸡肉焙果', 
              path: '/menu/food/sandwich/avocado-and-chicken-bagel',
              describe: ['牛油果鸡肉焙果内含熏煮过的香嫩鸡胸肉，搭配美洲进口牛油果酱和车达芝士，口味清新健康','焙果一定要趁热吃，热腾腾的焙果外部松脆，内部坚韧，嚼劲十足','咖啡搭配推荐：冷萃咖啡'],
            },
            {
              img: require("../../assets/Food/Sandwich/bacon-and-egg-croissant-bun.jpg"),
              text: '培根蛋可颂堡', 
              path: '/menu/food/sandwich/bacon-and-egg-croissant-bun',
              describe: ['烟熏培根和荷包蛋作为馅料，加上优质车达芝士放入经典可颂堡中，在全世界的星巴克都是当之无愧的明星早餐产品。','咖啡搭配推荐：星巴克®佛罗娜咖啡豆'],
            },
            {
              img: require("../../assets/Food/Sandwich/bacon-and-egg-wrap.jpg"),
              text: '蜜汁培根蛋卷', 
              path: '/menu/food/sandwich/bacon-and-egg-wrap',
              describe: ['蜜汁处理过的培根，搭配嫩滑炒鸡蛋和美味车达芝士，创新的用菠菜风味卷饼包裹一口下去，馥郁香气和丰富口感立刻充满口腔，令人回味无穷。','咖啡搭配推荐：星巴克®佛罗娜咖啡豆 / 星巴克®危地马拉安提瓜咖啡豆'],
            },
            {
              img: require("../../assets/Food/Sandwich/beef-baguette.jpg"),
              text: '层层牛肉法棍', 
              path: '/menu/food/sandwich/beef-baguette',
              describe: ['烘烤后面包外脆里嫩，浓郁的芝士口感搭配牛肉以及蔬菜的甘甜味，鲜香满溢','内夹优质牛肉、甜椒和洋葱','外加上选的芝士和黄油，馅料丰富','咖啡搭配推荐：星巴克®意式烘焙咖啡豆'],
            },
            {
              img: require("../../assets/Food/Sandwich/beef-cheese-croissant.jpg"),
              text: '牛肉芝士可颂', 
              path: '/menu/food/sandwich/beef-cheese-croissant',
              describe: ['酥香可颂，搭配美味牛肉及芝士，口感上丰富的层次感，满足你挑剔的味蕾。','咖啡搭配推荐：馥芮白','仅江浙沪门店'],
            },
            {
              img: require("../../assets/Food/Sandwich/caesar-chicken-wrap.jpg"),
              text: '凯撒鸡肉卷', 
              path: '/menu/food/sandwich/caesar-chicken-wrap',
              describe: ['凯撒鸡肉卷口味经典，风味浓厚。秘制烟熏鸡肉和培根打造双蛋白，同时搭配新鲜蔬菜馅料丰富十足。','咖啡搭配推荐：冷萃冰咖啡','仅江浙沪门店'],
            },
            {
              img: require("../../assets/Food/Sandwich/chicken-panini.jpg"),
              text: '鸡肉芝香帕尼尼', 
              path: '/menu/food/sandwich/chicken-panini',
              describe: ['松软可口的帕尼尼，精选优质香浓芝士，融合喷香鸡肉，让你口口满足。','咖啡搭配推荐：星巴克®首选咖啡豆 / 星巴克®派克市场烘焙咖啡豆'],
            },
            {
              img: require("../../assets/Food/Sandwich/eggs-mushroom-shrimp-wrap.jpg"),
              text: '炒蛋菌菇虾仁卷', 
              path: '/menu/food/sandwich/eggs-mushroom-shrimp-wrap',
              describe: ['优选嫩滑炒蛋以及秘制培根，搭配混合菌菇并点缀南美虾仁，丰富健康，一只早餐卷满足一天的营养需求。','咖啡搭配推荐：拿铁','仅江浙沪门店'],
            },
            {
              img: require("../../assets/Food/Sandwich/ham-and-cheese-croissant.jpg"),
              text: '火腿芝士可颂', 
              path: '/menu/food/sandwich/ham-and-cheese-croissant',
              describe: ['优质进口黄油制作面团， 精心烤制的酥香可颂，内夹高品质芝士和火腿肉片，咸香适口，回味无穷。','咖啡搭配推荐：星巴克®首选咖啡豆 / 星巴克®派克市场烘焙咖啡豆'],
            },
            {
              img: require("../../assets/Food/Sandwich/ham-and-double-cheese-croque-monsieur.jpg"),
              text: '双重芝士火腿吐司', 
              path: '/menu/food/sandwich/ham-and-double-cheese-croque-monsieur',
              describe: ['双重芝士：埃德姆芝士+切达芝士','加热后芝士行程拉丝效果，口感丰富，香味无穷','经典法式午餐的上佳选择','咖啡搭配推荐：星巴克®凤舞祥云综合咖啡豆'],
            },
            {
              img: require("../../assets/Food/Sandwich/ham-and-gouda-sandwich.jpg"),
              text: '双重芝士火腿吐司', 
              path: '/menu/food/sandwich/ham-and-gouda-sandwich',
              describe: ['长时间的发酵，口感更丰富','口感轻柔咸香','采用美味的高达芝士','咖啡搭配推荐：星巴克®首选咖啡豆 / 星巴克®派克市场烘焙咖啡豆'],
            },
            {
              img: require("../../assets/Food/Sandwich/pastrami-sandwich.jpg"),
              text: '帕斯雀牛肉三明治', 
              path: '/menu/food/sandwich/pastrami-sandwich',
              describe: ['升级后的经典，除了美味加量，面包体还铺满了香脆奇亚籽，搭配帕斯雀牛肉，脆爽蔬菜和香浓马苏里拉芝士，口口都是意式风情和大写的满足。','咖啡搭配推荐：美式咖啡','仅江浙沪门店'],
            },
            {
              img: require("../../assets/Food/Sandwich/roasted-french-ham-egg-sandwich.jpg"),
              text: '烤法式火腿鸡蛋三明治', 
              path: '/menu/food/sandwich/roasted-french-ham-egg-sandwich',
              describe: ['鲜嫩的火腿与鲜香的芝士，经过烘烤后，蛋香四溢的蛋皮，蛋皮中更配以胡萝卜和高丽菜，营造出更为丰富饱满的口感。','咖啡搭配推荐：焦糖玛奇朵','仅江浙沪门店'],
            },
            {
              img: require("../../assets/Food/Sandwich/slow-roasted-ham-cheese-ciabatta.jpg"),
              text: '慢烤火腿芝士恰巴特', 
              path: '/menu/food/sandwich/slow-roasted-ham-cheese-ciabatta',
              describe: ['5小时以上慢烤的意式熏煮火腿肉, 搭配香嫩鸡蛋饼以及轻柔咸香的高达芝士，放入外酥里软的恰巴特面包中，搭配一杯钟爱的咖啡，全新一天，从这款美味早餐开始吧！','咖啡搭配推荐：星巴克®苏门答腊咖啡豆'],
            },
            {
              img: require("../../assets/Food/Sandwich/tuna-panini.jpg"),
              text: '金枪鱼帕尼尼', 
              path: '/menu/food/sandwich/tuna-panini',
              describe: ['松软可口的帕尼尼，包裹鲜香金枪鱼，搭配香浓芝士，微微加热，芝士融化，回味无穷。','咖啡搭配推荐：星巴克®意式烘焙咖啡豆'],
            },
            {
              img: require("../../assets/Food/Sandwich/turkey-bacon-english-muffin.jpg"),
              text: '火鸡培根英式麦芬', 
              path: '/menu/food/sandwich/turkey-bacon-english-muffin',
              describe: ['优质全麦面粉制作的英式麦芬，健康看得见。内夹香酥诱人的火鸡培根肉和质地细腻，口味柔和的白车达芝士，还有轻盈的纯蛋白饼。提供优质蛋白质的健康早餐选择。','咖啡搭配推荐：星巴克®苏门答腊咖啡豆'],
            },
          ]
        },
        {
          name: '酸奶',
          list:[
            {
              img: require("../../assets/Food/Yoghurt/greek-flavored-yoghurt-mixed-berry.jpg"),
              text: '谷物组合希腊式风味酸奶（混合莓果）', 
              path: '/menu/food/yoghurt/greek-flavored-yoghurt-mixed-berry',
              describe: ['上佳原料：甄选优质奶源生牛乳+欧洲进口菌种发酵','独特工艺：采用希腊式物理脱乳清工艺，质地醇厚，奶香浓郁','健康美味两不误：','· 低脂的风味酸奶更健康','· 含有真实果肉的蓝莓果酱，点亮口感','· 丰富谷物组合（燕麦、巴旦木、蔓越莓和南瓜籽）更营养']
            },
            {
              img: require("../../assets/Food/Yoghurt/greek-flavored-yoghurt-yellow-peach.jpg"),
              text: '谷物组合希腊式风味酸奶（黄桃）', 
              path: '/menu/food/yoghurt/greek-flavored-yoghurt-yellow-peach',
              describe: ['上佳原料：甄选优质奶源生牛乳+欧洲进口菌种发酵','独特工艺：采用希腊式物理脱乳清工艺，质地醇厚，奶香浓郁','健康美味两不误：','· 低脂的风味酸奶更健康','· 含有真实果肉的黄桃果酱，甜蜜清爽','· 丰富谷物组合（燕麦、巴旦木、蔓越莓和南瓜籽）更营养']
            },
          ]
        },
        {
          name: '其他美食',
          list:[
            {
              img: require("../../assets/Food/Package/cashews.jpg"),
              text: '腰果', 
              path: '/menu/food/pakage/cashews',
              describe: ['营养健康的果仁，入口酥脆，特有的坚果香味充斥着你的味蕾，让你随时都能补充能量。','咖啡搭配建议： 拿铁/美式咖啡。']
            },
            {
              img: require("../../assets/Food/Package/shortbread.png"),
              text: '英伦风味黄油饼干', 
              path: '/menu/food/pakage/shortbread',
              describe: ['富含黄油，有着浓郁绵密的奶香味，口感厚实浓郁酥脆。起源于苏格兰中世纪的英格兰甜点，当时稀有昂贵。至今成为苏格兰的经典点心，美味袭卷欧美大陆。用美式咖啡的清爽口感搭配上浓郁的奶香黄油饼干，不仅平衡了黄油饼干在嘴中绵密浓郁的口感，而且令你回味香甜不腻。简洁的包装礼盒，不管是送人还是拿来用作朋友家人分享，都是不错的选择，适用于较甜的食品。','咖啡搭配建议： 美式咖啡/浓缩咖啡。']
            },
            {
              img: require("../../assets/Food/Package/fruitnnuts.jpg"),
              text: '混合果仁果脯', 
              path: '/menu/food/pakage/fruitnnuts',
              describe: ['内含杏仁、夏威夷果、腰果、蔓越莓果干、蓝莓果干，品种繁多，回味香浓。 适用于口感较平衡的食品。','咖啡搭配建议： 拿铁/美式咖啡。']
            },
            {
              img: require("../../assets/Food/Package/fruit-salad.jpg"),
              text: '水果沙拉', 
              path: '/menu/food/pakage/fruit-salad',
              describe: ['多种混合水果色彩缤纷营养均衡，既可以作为午后的能量补充，也可以搭配正餐食用。','咖啡搭配建议： 冷萃冰咖啡','仅江浙沪门店']
            },
            {
              img: require("../../assets/Food/Package/lollipops.jpg"),
              text: '棒棒糖', 
              path: '/menu/food/pakage/lollipops',
              describe: ['原装法国进口的水果风味棒棒糖，櫻桃味、可乐豆味、橙子味、柠檬味、草莓味，种类繁多，颜色鲜艳，同时满足了视觉有味蕾的双重感受。']
            },
            {
              img: require("../../assets/Food/Package/waferrolls.jpg"),
              text: '咖啡味蛋卷', 
              path: '/menu/food/pakage/waferrolls',
              describe: ['秉承了香港优良的传统蛋卷工艺，口感酥脆馥郁，首次融入了星巴克的咖啡，融汇中西风味，有别于传统的口感和心意。简洁大气的包装礼盒，无论是送礼还是家人朋友分享，都是彰显品味高端送礼之选。适用于口感较平衡的食品。','咖啡搭配建议： 拿铁/美式咖啡。']
            },
            {
              img: require("../../assets/Food/Package/starbucks-chewing-gum.jpg"),
              text: '薄荷味口香糖（无糖）', 
              path: '/menu/food/pakage/starbucks-chewing-gum',
              describe: ['原装进口无糖薄荷风味口香糖，冰霜强劲的薄荷风味，再加上便携简约的包装，让你随时随地都能清新你的口腔。']
            },
            {
              img: require("../../assets/Food/Package/Starbucks-mints.jpg"),
              text: '薄荷味硬糖（无糖）', 
              path: '/menu/food/pakage/Starbucks-mints',
              describe: ['原装美国进口无糖薄荷风味硬糖，小巧精致的包装，冰霜强劲的清新风味，让你随时都能提神醒脑。']
            },
          ]
        },
        {
          name: '中度烘焙',
          list:[
            {
              img: require("../../assets/Coffee/WholeBean/MediumRoastBean/south-of-the-clouds.jpg"),
              text: '星巴克®凤舞祥云综合咖啡豆', 
              path: '/menu/coffee/whole-bean/medium-roast/south-of-the-clouds',
              describe: ['这款亚洲/太平洋综合咖啡是自2009年来星巴克首款融入产自中国地区咖啡豆的综合咖啡。'],
              progress: [
                {title: '烘焙程度：中度烘焙', fill: 'medium'},
                {title: '酸度：低', fill: 'short'},
                {title: '醇度：中等', fill: 'medium'}
              ],
              list: [
                {title: '产地', content: '亚洲/太平洋'},
                {title: '加工方法', content: '水洗法/半水洗法'},
                {title: '风味', content: '温和清爽的酸度，中等醇度，均衡的风味带有草本和香料般风味'},
                {title: '食品搭配建议', content: '奶油芝士类食品，太妃、枫糖和坚果类食品'},
                {title: '类似咖啡', content: '低因祥龙综合咖啡®，星巴克®苏门答腊咖啡'},
              ]
            },
            {
              img: require("../../assets/Coffee/WholeBean/MediumRoastBean/pike-place-roast-coffee-beans.png"),
              text: '星巴克®派克市场烘焙咖啡豆', 
              path: '/menu/coffee/whole-bean/medium-roast/pike-place-roast-coffee-beans',
              describe: ['中等醇度并伴随着可可和烤果仁般的微妙风味，呈现出一杯令人愉悦而口感平衡的咖啡。'],
              progress: [
                {title: '烘焙程度：中度烘焙', fill: 'medium'},
                {title: '酸度：中等', fill: 'medium'},
                {title: '醇度：中等', fill: 'medium'}
              ],
              list: [
                {title: '产地', content: '拉丁美洲'},
                {title: '加工方法', content: '水洗法'},
                {title: '风味', content: '可可味，烘烤果仁味，顺滑、平和'},
                {title: '食品搭配建议', content: '巧克力，肉桂，果仁'},
                {title: '类似咖啡', content: '星巴克®首选综合咖啡、星巴克®佛罗娜咖啡、星巴克®危地马拉安提瓜咖啡'},
              ]
            },
            {
              img: require("../../assets/Coffee/WholeBean/MediumRoastBean/kenya-coffee-beans.png"),
              text: '星巴克®肯亚咖啡豆', 
              path: '/menu/coffee/whole-bean/medium-roast/kenya-coffee-beans',
              describe: ['肯亚咖啡拥有多层次复杂的风味，包含果汁般的酸度、明显丰富的葡萄柚味和葡萄酒的醇香般风味，醇度中等。'],
              progress: [
                {title: '烘焙程度：中度烘焙', fill: 'medium'},
                {title: '酸度：高', fill: 'long'},
                {title: '醇度：厚重', fill: 'long'}
              ],
              list: [
                {title: '产地', content: '非洲/阿拉伯'},
                {title: '加工方法', content: '水洗法'},
                {title: '风味', content: '葡萄柚味，浆果味，如果汁般，口感丰富'},
                {title: '食品搭配建议', content: '葡萄柚，浆果，无核葡萄干，葡萄干，橙子'},
                {title: '类似咖啡', content: '星巴克®埃塞俄比亚'},
              ]
            },
            {
              img: require("../../assets/Coffee/WholeBean/MediumRoastBean/house-blend-coffee-beans.png"),
              text: '星巴克®首选咖啡豆', 
              path: '/menu/coffee/whole-bean/medium-roast/house-blend-coffee-beans',
              describe: ['一款非常平衡的咖啡，带有坚果和可可般的香味，由优质的拉丁美洲咖啡豆混合而成，我们一开始就为咖啡爱好者提供这款具有代表性的综合咖啡。'],
              progress: [
                {title: '烘焙程度：中度烘焙', fill: 'medium'},
                {title: '酸度：中等', fill: 'medium'},
                {title: '醇度：中等', fill: 'medium'}
              ],
              list: [
                {title: '产地', content: '拉丁美洲'},
                {title: '加工方法', content: '水洗法'},
                {title: '风味', content: '活泼、平和'},
                {title: '食品搭配建议', content: '果仁，苹果，蓝莓'},
                {title: '类似咖啡', content: '星巴克®危地马拉安提瓜咖啡'},
              ]
            },
            {
              img: require("../../assets/Coffee/WholeBean/MediumRoastBean/guatemala-antigua-coffee-beans.png"),
              text: '星巴克®危地马拉安提瓜咖啡豆', 
              path: '/menu/coffee/whole-bean/medium-roast/guatemala-antigua-coffee-beans',
              describe: ['这是一款典雅、丰富并具有深度的咖啡，其精致的酸度与微妙的可可粉质感以及柔和的香料风味完美地平衡在了一起。'],
              progress: [
                {title: '烘焙程度：中度烘焙', fill: 'medium'},
                {title: '酸度：中等', fill: 'medium'},
                {title: '醇度：中等', fill: 'medium'}
              ],
              list: [
                {title: '产地', content: '拉丁美洲'},
                {title: '加工方法', content: '水洗法'},
                {title: '风味', content: '可可和淡淡的香料般风味'},
                {title: '食品搭配建议', content: '可可，苹果，焦糖，果仁'},
                {title: '类似咖啡', content: '星巴克®首选综合咖啡'},
              ]
            },
            {
              img: require("../../assets/Coffee/WholeBean/MediumRoastBean/ethiopia-coffee-beans.png"),
              text: '星巴克®埃塞俄比亚咖啡豆', 
              path: '/menu/coffee/whole-bean/medium-roast/ethiopia-coffee-beans',
              describe: ['这款精心呈现的综合咖啡口感温和顺滑，带有花香和香料般风味，表达了我们对咖啡诞生地由衷的赞美。'],
              progress: [
                {title: '烘焙程度：中度烘焙', fill: 'medium'},
                {title: '酸度：高', fill: 'long'},
                {title: '醇度：中等', fill: 'medium'}
              ],
              list: [
                {title: '产地', content: '非洲'},
                {title: '加工方法', content: '水洗法'},
                {title: '风味', content: '柑橘、黑巧克力般风味'},
                {title: '食品搭配建议', content: '黑巧克力、柑橘'},
                {title: '类似咖啡', content: '星巴克®肯亚咖啡'},
              ]
            },
            {
              img: require("../../assets/Coffee/WholeBean/MediumRoastBean/colombia.jpg"),
              text: '星巴克®哥伦比亚咖啡豆', 
              path: '/menu/coffee/whole-bean/medium-roast/colombia',
              describe: ['以平和著称，醇度中等、口感顺滑平衡，喝下满口丰润，带有清爽和坚果般风味。'],
              progress: [
                {title: '烘焙程度：中度烘焙', fill: 'medium'},
                {title: '酸度：中等', fill: 'medium'},
                {title: '醇度：中等', fill: 'medium'}
              ],
              list: [
                {title: '产地', content: '拉丁美洲'},
                {title: '加工方法', content: '水洗法'},
                {title: '风味', content: '果仁和可可般的风味'},
                {title: '食品搭配建议', content: '胡桃、牛奶巧克力'},
                {title: '类似咖啡', content: '星巴克®首选咖啡'},
              ]
            },
            {
              img: require("../../assets/Coffee/WholeBean/MediumRoastBean/breakfast-blend-coffee-beans.png"),
              text: '星巴克®早餐综合咖啡豆', 
              path: '/menu/coffee/whole-bean/medium-roast/breakfast-blend-coffee-beans',
              describe: ['这款醇度清淡的综合咖啡活泼而清爽，唤醒你的味蕾，带给你明快的第一印象，让你焕然一新，开始新的一天。'],
              progress: [
                {title: '烘焙程度：中度烘焙', fill: 'medium'},
                {title: '酸度：高', fill: 'long'},
                {title: '醇度：低', fill: 'short'}
              ],
              list: [
                {title: '产地', content: '拉丁美洲'},
                {title: '加工方法', content: '水洗法'},
                {title: '风味', content: '清爽、香气扑鼻'},
                {title: '食品搭配建议', content: '果仁，苹果，蓝莓，柠檬'},
                {title: '类似咖啡', content: '星巴克®轻柳咖啡'},
              ]
            },
          ]
        },
        {
          name: '深度烘焙',
          list:[
            {
              img: require("../../assets/Coffee/WholeBean/DarkRoastBean/sumatra-coffee-beans.png"),
              text: '星巴克®苏门答腊咖啡豆', 
              path: '/menu/coffee/whole-bean/dark-roast/sumatra-coffee-beans',
              describe: ['带有强烈的泥土芳香，风味异常集中；醇度厚重而浓郁，苏门答腊咖啡是我们非常畅销的其中一款单品咖啡。'],
              progress: [
                {title: '烘焙程度：深度烘焙', fill: 'long'},
                {title: '酸度：低', fill: 'short'},
                {title: '醇度：厚重', fill: 'long'}
              ],
              list: [
                {title: '产地', content: '亚洲/太平洋'},
                {title: '加工方法', content: '水洗法/半水洗法'},
                {title: '风味', content: '泥土芳香、草本般风味'},
                {title: '食品搭配建议', content: '肉桂，燕麦片，枫糖，黄油，太妃糖。'},
                {title: '类似咖啡', content: '星巴克®低因祥龙综合咖啡'},
              ]
            },
            {
              img: require("../../assets/Coffee/WholeBean/DarkRoastBean/komodo-dragon-blend-coffee-beans.png"),
              text: '星巴克®低因祥龙综合咖啡豆', 
              path: '/menu/coffee/whole-bean/dark-roast/komodo-dragon-blend-coffee-beans',
              describe: ['具有浓郁的草药味、香料味和泥土芳香；这款浓郁而平和的亚洲/太平洋地区综合咖啡展现出厚重的醇度以及令人惊奇的酸度之间的良好平衡。'],
              progress: [
                {title: '烘焙程度：深度烘焙', fill: 'long'},
                {title: '酸度：低', fill: 'short'},
                {title: '醇度：厚重', fill: 'long'}
              ],
              list: [
                {title: '产地', content: '亚洲/太平洋'},
                {title: '加工方法', content: '水洗法/半水洗法'},
                {title: '风味', content: '丰富的草本般的风味'},
                {title: '食品搭配建议', content: '肉桂，燕麦片，枫糖，黄油面包'},
                {title: '类似咖啡', content: '星巴克®苏门答腊咖啡'},
              ]
            },
            {
              img: require("../../assets/Coffee/WholeBean/DarkRoastBean/italian-roast-coffee-beans.png"),
              text: '星巴克®意式烘焙咖啡豆', 
              path: '/menu/coffee/whole-bean/dark-roast/italian-roast-coffee-beans',
              describe: ['这是一款醇度浓郁的多区域综合咖啡，经过比浓缩烘焙咖啡更深度的烘焙，醇度适中，带有烘焙后的甜感。'],
              progress: [
                {title: '烘焙程度：深度烘焙', fill: 'long'},
                {title: '酸度：低', fill: 'short'},
                {title: '醇度：中等', fill: 'medium'}
              ],
              list: [
                {title: '产地', content: '多区域'},
                {title: '加工方法', content: '水洗法'},
                {title: '风味', content: '烘焙般的风味，香甜'},
                {title: '食品搭配建议', content: '巧克力，焦糖，香料'},
                {title: '类似咖啡', content: '星巴克®浓缩烘焙咖啡'},
              ]
            },
            {
              img: require("../../assets/Coffee/WholeBean/DarkRoastBean/espresso-roast-coffee-beans.png"),
              text: '星巴克®浓缩烘焙咖啡豆', 
              path: '/menu/coffee/whole-bean/dark-roast/espresso-roast-coffee-beans',
              describe: ['这款综合咖啡是我们所有浓缩咖啡饮料的核心，其特点是浓郁的香味以及柔和的酸度，且与浓厚的焦糖香甜味平衡搭配。'],
              progress: [
                {title: '烘焙程度：深度烘焙', fill: 'long'},
                {title: '酸度：中等', fill: 'medium'},
                {title: '醇度：厚重', fill: 'long'}
              ],
              list: [
                {title: '产地', content: '多区域'},
                {title: '加工方法', content: '水洗法'},
                {title: '风味', content: '饱满、焦糖般甜感'},
                {title: '食品搭配建议', content: '焦糖，香料，巧克力，果仁'},
                {title: '类似咖啡', content: '星巴克®意式烘焙咖啡'},
              ]
            },
            {
              img: require("../../assets/Coffee/WholeBean/DarkRoastBean/caffe-verona-coffee-beans.png"),
              text: '星巴克®佛罗娜咖啡豆', 
              path: '/menu/coffee/whole-bean/dark-roast/caffe-verona-coffee-beans',
              describe: ['这是一款来自拉丁美洲咖啡和亚洲／太平洋地区咖啡的综合咖啡，醇度厚重，并带有意式烘焙咖啡的香甜味。'],
              progress: [
                {title: '烘焙程度：深度烘焙', fill: 'long'},
                {title: '酸度：中等', fill: 'medium'},
                {title: '醇度：厚重', fill: 'long'}
              ],
              list: [
                {title: '产地', content: '多区域'},
                {title: '加工方法', content: '水洗法，半水洗法'},
                {title: '风味', content: '烘烤甜味、黑可可般风味'},
                {title: '食品搭配建议', content: '牛奶和黑巧克力、焦糖'},
                {title: '类似咖啡', content: '星巴克®浓缩烘焙咖啡'},
              ]
            },
          ]
        },
        {
          name: 'VIA® DAIRY',
          list:[
            {
              img: require("../../assets/Coffee/StarbucksVia/ViaDairy/via-vanilla-latte.jpg"),
              text: '星巴克VIA®香草拿铁风味免煮咖啡固体饮料', 
              path: '/menu/coffee/starbucks-via/via-dairy/via-vanilla-latte',
              describe: ['我们广受欢迎的星巴克手工调制香草拿铁促使我们为咖啡爱好者创造出这款能够随时随地享受美味的咖啡。星巴克VIA®香草拿铁免煮咖啡带有醇厚的牛奶风味和饱满甜美的香草风味，同时又不失星巴克咖啡的浓郁。让您能随时随地尽情享受美味拿铁。'],
              progress: [],
              list: []
            },
            {
              img: require("../../assets/Coffee/StarbucksVia/ViaDairy/via-caramel-latte.jpg"),
              text: '星巴克VIA®焦糖拿铁风味免煮咖啡固体饮料', 
              path: '/menu/coffee/starbucks-via/via-dairy/via-caramel-latte',
              describe: ['香醇美味，即刻随享。','我们的星巴克VIA® 焦糖拿铁风味咖啡饮料（固体饮料）由香醇的星巴克® 咖啡，奶粉以及香甜的焦糖风味调配而成。我们对经典的焦糖手工调制饮料的热爱激发我们创造了这款美味的咖啡饮料。无论是每一个早晨，当您正要开启崭新的一天，还是每一个午后，当您需要享受美味的下午茶，您都可以享用一杯星巴克® 焦糖拿铁风味咖啡饮料。'],
              progress: [],
              list: []
            },
            {
              img: require("../../assets/Coffee/StarbucksVia/ViaDairy/via-caffe-mocha.jpg"),
              text: '星巴克VIA®摩卡风味免煮咖啡固体饮料', 
              path: '/menu/coffee/starbucks-via/via-dairy/via-caffe-mocha',
              describe: ['我们的星巴克VIA®摩卡免煮咖啡为您带来无法抗拒的美妙享受：它将香醇的可可风味，牛奶风味和浓郁的星巴克®咖啡绝妙地加以搭配。作为对星巴克®手工调制摩卡所获得的成功的礼赞，摩卡免煮咖啡让您能够随时随地享受摩卡的浓郁风味和富有深度。'],
              progress: [],
              list: []
            },
          ]
        },
        {
          name: 'VIA® BLACK',
          list:[
            {
              img: require("../../assets/Coffee/StarbucksVia/ViaBlack/via-italian-roast.jpg"),
              text: '星巴克VIA®意式烘焙免煮咖啡', 
              path: '/menu/coffee/starbucks-via/via-black/via-italian-roast',
              describe: ['带有强烈的泥土芳香，风味异常集中；醇度厚重而浓郁，苏门答腊咖啡是我们非常畅销的其中一款单品咖啡。'],
              progress: [
                {title: '烘焙程度：深度烘焙', fill: 'long'},
                {title: '酸度：低', fill: 'short'},
                {title: '醇度：中等', fill: 'medium'}
              ],
              list: [
                {title: '产地', content: '多区域'},
                {title: '加工方法', content: '水洗法'},
                {title: '风味', content: '烘焙般的风味，香甜'},
                {title: '食品搭配建议', content: '巧克力，焦糖，香料'},
                {title: '类似咖啡', content: '星巴克®浓缩烘焙咖啡'},
              ]
            },
            {
              img: require("../../assets/Coffee/StarbucksVia/ViaBlack/via-italian-roast.jpg"),
              text: '星巴克VIA®哥伦比亚免煮咖啡', 
              path: '/menu/coffee/starbucks-via/via-black/via-italian-roast',
              describe: ['以平和著称，醇度中等、口感顺滑平衡，喝下满口丰润，带有清爽和坚果般风味。'],
              progress: [
                {title: '烘焙程度：中度', fill: 'medium'},
                {title: '酸度：中等', fill: 'medium'},
                {title: '醇度：中等', fill: 'medium'}
              ],
              list: [
                {title: '产地', content: '拉丁美洲'},
                {title: '加工方法', content: '水洗法'},
                {title: '风味', content: '果仁味，可可味'},
                {title: '食品搭配建议', content: '胡桃，牛奶巧克力，山核桃，焦糖'},
                {title: '类似咖啡', content: '星巴克®首选咖啡'},
              ]
            },
          ]
        },
        {
          name: '星巴克臻选™咖啡',
          list:[
            {
              img: require("../../assets/Coffee/StarbucksReserve/sumatra-wahana-estate.png"),
              text: '星巴克臻选™ 苏门答腊瓦哈纳庄园咖啡豆', 
              path: '/menu/coffee/starbucks-reserve/sumatra-wahana-estate',
              describe: [],
              progress: [],
              list: []
            },
            {
              img: require("../../assets/Coffee/StarbucksReserve/ethiopia-bitta-farm.png"),
              text: '星巴克臻选™ 埃塞俄比亚比塔庄园咖啡豆', 
              path: '/menu/coffee/starbucks-reserve/ethiopia-bitta-farm',
              describe: [],
              progress: [],
              list: []
            },
            {
              img: require("../../assets/Coffee/StarbucksReserve/china-yunnan-puer-baoshan.png"),
              text: '星巴克臻选™ 中国云南普洱保山综合咖啡豆', 
              path: '/menu/coffee/starbucks-reserve/china-yunnan-puer-baoshan',
              describe: [],
              progress: [],
              list: []
            },
            {
              img: require("../../assets/Coffee/StarbucksReserve/china-qingkai-farm.png"),
              text: '星巴克臻选™ 中国云南晴开农场咖啡豆', 
              path: '/menu/coffee/starbucks-reserve/china-qingkai-farm',
              describe: [],
              progress: [],
              list: []
            },
            {
              img: require("../../assets/Coffee/StarbucksReserve/colombia-monks-of-san-roque.png"),
              text: '星巴克臻选™ 哥伦比亚圣洛克蒙克斯咖啡豆', 
              path: '/menu/coffee/starbucks-reserve/colombia-monks-of-san-roque',
              describe: [],
              progress: [],
              list: []
            },
          ]
        },
        {
          name: '中度烘焙',
          list:[
            {
              img: require("../../assets/Coffee/StarbucksOrigami/MediumRoastOrigami/origami-pike-place.jpg"),
              text: '星巴克ORIGAMI™佛罗娜烘焙咖啡系列', 
              path: '/menu/coffee/starbucks-origami/medium-roast-origami/origami-pike-place',
              describe: ['这款咖啡有过3个名称。最初在1975年，我们为一家西雅图的餐厅创造了这款咖啡豆，当时命名为杰克综合咖啡豆。由于广受欢迎，我们开始在门店中为顾客手工混合这款咖啡豆，并且根据混合的比例，以80/20综合咖啡来命名它。我们的顾客对这款咖啡的热爱和推崇经久不衰，最终，我们将它纳入星巴克正式的产品系列中，取名佛罗娜，以纪念这座城市激发我们的诸多灵感。无论哪个名字，都传递了这款咖啡的浪漫故事。'],
              progress: [],
              list: []
            },
          ]
        },
        {
          name: '深度烘焙',
          list:[
            {
              img: require("../../assets/Coffee/StarbucksOrigami/DarkRoastOrigami/origami-verona.jpg"),
              text: '星巴克ORIGAMI™派克市场烘焙咖啡系列', 
              path: '/menu/coffee/starbucks-origami/dark-roast-origami/origami-verona',
              describe: ['从1971年星巴克在西雅图的派克市场开了第一家门店开始到现在门店遍布全世界，我们的顾客希望能在星巴克喝到新鲜煮制的咖啡，可以在一天中的任何时刻享用。所以2008年我们的咖啡大师用心混合并烘焙出这款综合咖啡，风味均匀和谐，口感平和，保留了其中所有咖啡的特色，同时也没有任何一种风味过于突兀，这款咖啡混合了拉丁美洲咖啡，带有轻微的可可风味和烤坚果风味，适合您每天享受。'],
              progress: [],
              list: []
            },
          ]
        },
        {
          name: '常规产品',
          list:[
            {
              img: require("../../assets/Product/CoreMerchandise2017/12oz-black-gilded-brand-mug.jpg"),
              text: '12oz 烫金品牌黑色马克杯',
              path: '/menu/product/core-merchandise-2017/12oz-black-gilded-brandMug',
              describe: ['黑色杯面运用泼点釉搭配镭射Wordmark，隐约的亮色使得整体黑色不再沉闷。','这款马克杯另有其他杯型（3oz/16oz）和颜色（白色）可供选择。']
            },
            {
              img: require("../../assets/Product/CoreMerchandise2017/12oz-silver-white-brand-handle-mug.jpg"), 
              text: '银色/白色亮面品牌桌面杯', 
              path: '/menu/product/core-merchandise-2017/12oz-silver-white-brand-handle-mug',
              describe: ['双层不锈钢材质;别致舒适手柄，一体成型式弯曲舒适感','白色亮面工艺，银色金属拉丝效果']
            },
            {
              img: require("../../assets/Product/CoreMerchandise2017/12oz-true-essence-stainless-steel-bottle.jpg"), 
              text: '12oz 彰显本色黑色/深灰不锈钢桌面杯', 
              path: '/menu/product/core-merchandise-2017/12oz-true-essence-stainless-steel-bottle',
              describe: ['双层不锈钢美人鱼压纹杯盖。','黑色款为金属斜拉丝效果，深灰色款为工业风设计，可看见不锈钢材质本身的印记，风格硬朗。']
            },
            {
              img: require("../../assets/Product/CoreMerchandise2017/12oz-white-frosted-glass-cup.jpg"), 
              text: '12oz 纯白磨砂玻璃杯', 
              path: '/menu/product/core-merchandise-2017/12oz-white-frosted-glass-cup',
              describe: ['白色干净的玻璃杯身，搭配底部磨砂处理，具有手工感。']
            },
            {
              img: require("../../assets/Product/CoreMerchandise2017/12oz-white-gilded-brand-mug.jpg"), 
              text: '12oz 烫金品牌白色马克杯', 
              path: '/menu/product/core-merchandise-2017/12oz-white-gilded-brand-mug',
              describe: ['白色外杯磨砂釉搭配内杯亮面釉，即便饮茶和咖啡也不会溜茶渍。','这款马克杯另有其他杯型（3oz/16oz）和颜色（黑色）可供选择。']
            },
            {
              img: require("../../assets/Product/CoreMerchandise2017/16oz-black-gilded-brand-mug.jpg"), 
              text: '16oz 烫金品牌黑色马克杯', 
              path: '/menu/product/core-merchandise-2017/16oz-black-gilded-brand-mug',
              describe: ['黑色杯面运用泼点釉搭配镭射Wordmark，隐约的亮色使得整体黑色不再沉闷。','这款马克杯另有其他杯型（3oz/12oz）和颜色（白色）可供选择。']
            },
            {
              img: require("../../assets/Product/CoreMerchandise2017/16oz-black-wooden-stainless-steel-bottle-with-strap.jpg"), 
              text: '16oz 原木黑色拎绳不锈钢保温杯', 
              path: '/menu/product/core-merchandise-2017/16oz-black-wooden-stainless-steel-bottle-with-strap',
              describe: ['仿木纹水转印工艺。','磨砂质感搭配黑色Logo和拎手，中性有格调，给人以回归自然的宁静。']
            },
            {
              img: require("../../assets/Product/CoreMerchandise2017/16oz-true-essence-stainless-steel-travel-bottle.jpg"), 
              text: '16oz 彰显本色黑色/深灰不锈钢随行杯', 
              path: '/menu/product/core-merchandise-2017/16oz-true-essence-stainless-steel-travel-bottle',
              describe: ['分段式表面处理，底部为不锈钢抛光效果，上半部分为工业风设计，未经打磨，讲究真实，彰显本色。']
            },
            {
              img: require("../../assets/Product/CoreMerchandise2017/16oz-white-gilded-brand-mug.jpg"), 
              text: '16oz 烫金品牌白色马克杯', 
              path: '/menu/product/core-merchandise-2017/16oz-white-gilded-brand-mug',
              describe: ['白色外杯磨砂釉搭配内杯亮面釉，即便饮茶和咖啡也不会溜茶渍。','这款马克杯另有其他杯型（3oz/12oz）和颜色（黑色）可供选择。']
            },
            {
              img: require("../../assets/Product/CoreMerchandise2017/3oz-black-gilded-brand-mug.jpg"), 
              text: '3oz 烫金品牌黑色试尝杯', 
              path: '/menu/product/core-merchandise-2017/3oz-black-gilded-brand-mug',
              describe: ['黑色杯面运用泼点釉搭配镭射Wordmark，隐约的亮色使得整体黑色不再沉闷。','这款马克杯另有其他杯型（12oz/16oz）和颜色（白色）可供选择。']
            },
            {
              img: require("../../assets/Product/CoreMerchandise2017/3oz-white-gilded-brand-mug.jpg"), 
              text: '3oz 烫金品牌白色试尝杯', 
              path: '/menu/product/core-merchandise-2017/3oz-white-gilded-brand-mug',
              describe: ['白色外杯磨砂釉搭配内杯亮面釉，即便饮茶和咖啡也不会溜茶渍。','这款马克杯另有其他杯型（12oz/16oz）和颜色（黑色）可供选择。']
            },
            {
              img: require("../../assets/Product/CoreMerchandise2017/500ml-black-logo-water-bottle.jpg"), 
              text: '500ml 黑色Logo水瓶', 
              path: '/menu/product/core-merchandise-2017/500ml-black-logo-water-bottle',
              describe: ['水平中间可旋开，方便清洗，方便放入冰块。','杯盖增加吊绳功能，方便户外携带。']
            },
            {
              img: require("../../assets/Product/CoreMerchandise2017/500ml-white-logo-water-bottle.jpg"), 
              text: '500ml 白色Logo水瓶', 
              path: '/menu/product/core-merchandise-2017/500ml-white-logo-water-bottle',
              describe: ['水平中间可旋开，方便清洗，方便放入冰块。','杯盖增加吊绳功能，方便户外携带。']
            },
          ]
        },
        {
          name: '臻选产品',
          list:[
            {
              img: require("../../assets/Product/ReserveStoreMerchandise/12oz-black-bronze-brand-handle-mug.jpg"),
              text: '12oz 纯黑/古铜亮面品牌桌面杯', 
              path: '/menu/product/reserve-store-merchandise/12oz-black-bronze-brand-handle-mug',
              describe: ['双层不锈钢材质','别致舒适手柄，一体成型式弯曲舒适感','白色亮面工艺，银色金属拉丝效果'],
            },
            {
              img: require("../../assets/Product/ReserveStoreMerchandise/16oz-champagne-gold-brand-stainless-steel-cup.jpg"),
              text: '16oz 香槟金品牌不锈钢桌面杯', 
              path: '/menu/product/reserve-store-merchandise/16oz-champagne-gold-brand-stainless-steel-cup',
              describe: ['古铜色典雅不失品质，双层不锈钢防烫。'],
            },
            {
              img: require("../../assets/Product/ReserveStoreMerchandise/500ml-gold-logo-water-bottle.jpg"),
              text: '500ml 金色Logo水瓶', 
              path: '/menu/product/reserve-store-merchandise/500ml-gold-logo-water-bottle',
              describe: ['古铜色金色瓶身，时尚大方。','新增拎手，方便外出携带。'],
            },
            {
              img: require("../../assets/Product/ReserveStoreMerchandise/9oz-reserve-glass-cup.jpg"),
              text: '9oz 臻选玻璃杯', 
              path: '/menu/product/reserve-store-merchandise/9oz-reserve-glass-cup',
              describe: ['简约杯身搭配Reserve Wordmark','带把手，易拿取;可放冷水或热水'],
            },
          ]
        }
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
