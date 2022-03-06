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
  name: 'Food',
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
          name: '烘焙',
          list:[
            {
              img: require("../../../assets/Food/Bakery/american-style-pancakes.jpg"),
              text: '美式松饼',
              path: '/menu/food/bakery/american-style-pancakes',
              describe: ['两片轻盈酥松的美式松饼搭配加拿大进口槭树糖浆（枫糖浆），层层甜蜜令人陶醉，带给你超值经典的美式早餐新体验。','咖啡搭配推荐：冷萃咖啡 / 美式咖啡']
            },
            {
              img: require("../../../assets/Food/Bakery/blueberry-muffin.jpg"),
              text: '蓝莓麦芬',
              path: '/menu/food/bakery/blueberry-muffin',
              describe: ['享受进口大蓝莓果粒带来的曼妙滋味;星巴克独有美式配方制作','顶层口感酥脆，内部松软','咖啡搭配建议：星巴克®早餐综合咖啡豆 / 星巴克®首选咖啡豆']
            },
            {
              img: require("../../../assets/Food/Bakery/chocolate-muffin.jpg"),
              text: '香浓巧克力麦芬',
              path: '/menu/food/bakery/chocolate-muffin',
              describe: ['享受高品质欧洲巧克力的细腻质感','星巴克独有美式配方制作','巧克力风味浓郁醇正','咖啡搭配建议：星巴克®危地马拉安提瓜咖啡豆']
            },
            {
              img: require("../../../assets/Food/Bakery/cinnamon-swirl.jpg"),
              text: '旋风玉桂酥',
              path: '/menu/food/bakery/cinnamon-swirl',
              describe: ['提子、核桃和玉桂风味平衡搭配','口感酥香美味','黄油香气、独特的玉桂粉;咖啡搭配推荐：星巴克®哥伦比亚咖啡豆']
            },
            {
              img: require("../../../assets/Food/Bakery/french-butter-croissant.jpg"),
              text: '法式香酥可颂',
              path: '/menu/food/bakery/french-butter-croissant',
              describe: ['16层制作工艺，松软十足','金黄色的外表，酥脆可口','蜂巢状的内部层次，法国进口高品质黄油，香味浓郁，口感酥脆','咖啡搭配建议：星巴克®早餐综合咖啡豆']
            },
            {
              img: require("../../../assets/Food/Bakery/french-caramel-bread.jpg"),
              text: '法式焦糖酥',
              path: '/menu/food/bakery/french-caramel-bread',
              describe: ['浓郁奶香的可颂面团，表层淋上香甜的焦糖沙司，一口咬下，外酥内柔，焦糖夹杂浓浓的奶香味在唇齿间蔓延，带给你美妙口感。','咖啡搭配推荐：馥芮白','仅江浙沪门店']
            },
            {
              img: require("../../../assets/Food/Bakery/hazelnut-croissant.jpg"),
              text: '层层榛子果仁酥',
              path: '/menu/food/bakery/hazelnut-croissant',
              describe: ['传统27层法式可颂工艺','层次分明，口感酥脆松软','甄选法国进口黄油和进口榛子原料','口感浓郁、酥脆','咖啡搭配推荐：星巴克®早餐综合咖啡豆 / 星巴克®哥伦比亚咖啡豆']
            },
            {
              img: require("../../../assets/Food/Bakery/honey-raisin-scone.jpg"),
              text: '蜂蜜提子司康',
              path: '/menu/food/bakery/honey-raisin-scone',
              describe: ['提子干经朗姆酒精心炮制，具有独特口感','进口高品质黄油制作','松软酥脆、香甜适口','咖啡搭配建议：星巴克®哥伦比亚咖啡豆']
            },
            {
              img: require("../../../assets/Food/Bakery/oat-caramel-pudding-bread.jpg"),
              text: '燕麦焦糖布丁面包',
              path: '/menu/food/bakery/oat-caramel-pudding-bread',
              describe: ['当酥脆的面包干搭配绵密的布丁、甜美的焦糖、还有一点点韧性的燕麦，蔓越莓干，提子干让人爱不释口。','咖啡搭配推荐：焦糖玛奇朵','仅江浙沪门店']
            },
            {
              img: require("../../../assets/Food/Bakery/premium-chocolate-croissant.jpg"),
              text: '香浓巧克力可颂',
              path: '/menu/food/bakery/premium-chocolate-croissant',
              describe: ['借鉴传统27层制作工艺','采用高品质进口巧克力条作为内馅','香味浓郁，酥脆有韧性','咖啡搭配推荐：星巴克®危地马拉安提瓜咖啡豆']
            },
            {
              img: require("../../../assets/Food/Bakery/raisin-scone.jpg"),
              text: '提子干松饼',
              path: '/menu/food/bakery/raisin-scone',
              describe: ['口感松软，醇厚的奶香味，再加入香甜的提子干，使产品甜而不腻。','咖啡搭配推荐：冷萃冰咖啡','仅江浙沪门店']
            },
            {
              img: require("../../../assets/Food/Bakery/raisins-walnut-bread.jpg"),
              text: '核桃提子软法面包',
              path: '/menu/food/bakery/raisins-walnut-bread',
              describe: ['软法面包体，内含核桃、提子，添加不融芝士，奶香风味浓郁。','咖啡搭配推荐：美式咖啡','仅江浙沪门店']
            },
            {
              img: require("../../../assets/Food/Bakery/red-bean-oats-scone.jpg"),
              text: '红豆燕麦松饼',
              path: '/menu/food/bakery/red-bean-oats-scone',
              describe: ['口感松软，醇厚的奶香味，再加入红豆沙和红豆，更增加了香甜的味道，同时加入燕麦片，更增加产品的价值。','咖啡搭配推荐：馥芮白','仅江浙沪门店']
            },
            {
              img: require("../../../assets/Food/Bakery/whole-wheat-walnut-muffin.jpg"),
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
              img: require("../../../assets/Food/CakeDessert/blueberry-and-cookie-style-cheesecake.jpg"),
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
              img: require("../../../assets/Food/CakeDessert/classic-swiss-roll-cake.jpg"),
              text: '经典瑞士卷', 
              path: '/menu/food/cake-dessert/classic-swiss-roll-cake',
              describe: ['瑞士卷是经典必备的长青产品，采用进口高品质奶油制作，蛋糕胚外表金黄、细腻松软湿润、奶香味浓郁。','咖啡搭配推荐：摩卡','仅江浙沪门店',]
            },
            {
              img: require("../../../assets/Food/CakeDessert/triple-dark-chocolate-cake.jpg"),
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
              img: require("../../../assets/Food/CakeDessert/eclair.jpg"),
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
              img: require("../../../assets/Food/CakeDessert/starbucks-coffee-tiramisu.jpg"),
              text: '星巴克咖啡提拉米苏蛋糕', 
              path: '/menu/food/cake-dessert/starbucks-coffee-tiramisu',
              describe: [
                '精选意大利进口马斯卡波尼芝士和玛莎拉白葡萄酒，与星巴克咖啡相融合，将芝士、酒和咖啡的独特风味融合于一身，相得益彰。',
                '更有意大利进口手指饼干浸泡其中，带给你视觉和味觉的双重享受。甜与苦就像天使与魔鬼，和谐而又冲突地结合起来。',
                '咖啡搭配推荐：星巴克®危地马拉安提瓜咖啡豆 / 星巴克®佛罗娜咖啡豆'
              ]
            },
            {
              img: require("../../../assets/Food/CakeDessert/macaron.jpg"),
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
              img: require("../../../assets/Food/CakeDessert/new-york-style-creamy-cheesecake.jpg"),
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
              img: require("../../../assets/Food/Sandwich/avocado-and-chicken-bagel.jpg"),
              text: '牛油果鸡肉焙果', 
              path: '/menu/food/sandwich/avocado-and-chicken-bagel',
              describe: ['牛油果鸡肉焙果内含熏煮过的香嫩鸡胸肉，搭配美洲进口牛油果酱和车达芝士，口味清新健康','焙果一定要趁热吃，热腾腾的焙果外部松脆，内部坚韧，嚼劲十足','咖啡搭配推荐：冷萃咖啡'],
            },
            {
              img: require("../../../assets/Food/Sandwich/bacon-and-egg-croissant-bun.jpg"),
              text: '培根蛋可颂堡', 
              path: '/menu/food/sandwich/bacon-and-egg-croissant-bun',
              describe: ['烟熏培根和荷包蛋作为馅料，加上优质车达芝士放入经典可颂堡中，在全世界的星巴克都是当之无愧的明星早餐产品。','咖啡搭配推荐：星巴克®佛罗娜咖啡豆'],
            },
            {
              img: require("../../../assets/Food/Sandwich/bacon-and-egg-wrap.jpg"),
              text: '蜜汁培根蛋卷', 
              path: '/menu/food/sandwich/bacon-and-egg-wrap',
              describe: ['蜜汁处理过的培根，搭配嫩滑炒鸡蛋和美味车达芝士，创新的用菠菜风味卷饼包裹一口下去，馥郁香气和丰富口感立刻充满口腔，令人回味无穷。','咖啡搭配推荐：星巴克®佛罗娜咖啡豆 / 星巴克®危地马拉安提瓜咖啡豆'],
            },
            {
              img: require("../../../assets/Food/Sandwich/beef-baguette.jpg"),
              text: '层层牛肉法棍', 
              path: '/menu/food/sandwich/beef-baguette',
              describe: ['烘烤后面包外脆里嫩，浓郁的芝士口感搭配牛肉以及蔬菜的甘甜味，鲜香满溢','内夹优质牛肉、甜椒和洋葱','外加上选的芝士和黄油，馅料丰富','咖啡搭配推荐：星巴克®意式烘焙咖啡豆'],
            },
            {
              img: require("../../../assets/Food/Sandwich/beef-cheese-croissant.jpg"),
              text: '牛肉芝士可颂', 
              path: '/menu/food/sandwich/beef-cheese-croissant',
              describe: ['酥香可颂，搭配美味牛肉及芝士，口感上丰富的层次感，满足你挑剔的味蕾。','咖啡搭配推荐：馥芮白','仅江浙沪门店'],
            },
            {
              img: require("../../../assets/Food/Sandwich/caesar-chicken-wrap.jpg"),
              text: '凯撒鸡肉卷', 
              path: '/menu/food/sandwich/caesar-chicken-wrap',
              describe: ['凯撒鸡肉卷口味经典，风味浓厚。秘制烟熏鸡肉和培根打造双蛋白，同时搭配新鲜蔬菜馅料丰富十足。','咖啡搭配推荐：冷萃冰咖啡','仅江浙沪门店'],
            },
            {
              img: require("../../../assets/Food/Sandwich/chicken-panini.jpg"),
              text: '鸡肉芝香帕尼尼', 
              path: '/menu/food/sandwich/chicken-panini',
              describe: ['松软可口的帕尼尼，精选优质香浓芝士，融合喷香鸡肉，让你口口满足。','咖啡搭配推荐：星巴克®首选咖啡豆 / 星巴克®派克市场烘焙咖啡豆'],
            },
            {
              img: require("../../../assets/Food/Sandwich/eggs-mushroom-shrimp-wrap.jpg"),
              text: '炒蛋菌菇虾仁卷', 
              path: '/menu/food/sandwich/eggs-mushroom-shrimp-wrap',
              describe: ['优选嫩滑炒蛋以及秘制培根，搭配混合菌菇并点缀南美虾仁，丰富健康，一只早餐卷满足一天的营养需求。','咖啡搭配推荐：拿铁','仅江浙沪门店'],
            },
            {
              img: require("../../../assets/Food/Sandwich/ham-and-cheese-croissant.jpg"),
              text: '火腿芝士可颂', 
              path: '/menu/food/sandwich/ham-and-cheese-croissant',
              describe: ['优质进口黄油制作面团， 精心烤制的酥香可颂，内夹高品质芝士和火腿肉片，咸香适口，回味无穷。','咖啡搭配推荐：星巴克®首选咖啡豆 / 星巴克®派克市场烘焙咖啡豆'],
            },
            {
              img: require("../../../assets/Food/Sandwich/ham-and-double-cheese-croque-monsieur.jpg"),
              text: '双重芝士火腿吐司', 
              path: '/menu/food/sandwich/ham-and-double-cheese-croque-monsieur',
              describe: ['双重芝士：埃德姆芝士+切达芝士','加热后芝士行程拉丝效果，口感丰富，香味无穷','经典法式午餐的上佳选择','咖啡搭配推荐：星巴克®凤舞祥云综合咖啡豆'],
            },
            {
              img: require("../../../assets/Food/Sandwich/ham-and-gouda-sandwich.jpg"),
              text: '双重芝士火腿吐司', 
              path: '/menu/food/sandwich/ham-and-gouda-sandwich',
              describe: ['长时间的发酵，口感更丰富','口感轻柔咸香','采用美味的高达芝士','咖啡搭配推荐：星巴克®首选咖啡豆 / 星巴克®派克市场烘焙咖啡豆'],
            },
            {
              img: require("../../../assets/Food/Sandwich/pastrami-sandwich.jpg"),
              text: '帕斯雀牛肉三明治', 
              path: '/menu/food/sandwich/pastrami-sandwich',
              describe: ['升级后的经典，除了美味加量，面包体还铺满了香脆奇亚籽，搭配帕斯雀牛肉，脆爽蔬菜和香浓马苏里拉芝士，口口都是意式风情和大写的满足。','咖啡搭配推荐：美式咖啡','仅江浙沪门店'],
            },
            {
              img: require("../../../assets/Food/Sandwich/roasted-french-ham-egg-sandwich.jpg"),
              text: '烤法式火腿鸡蛋三明治', 
              path: '/menu/food/sandwich/roasted-french-ham-egg-sandwich',
              describe: ['鲜嫩的火腿与鲜香的芝士，经过烘烤后，蛋香四溢的蛋皮，蛋皮中更配以胡萝卜和高丽菜，营造出更为丰富饱满的口感。','咖啡搭配推荐：焦糖玛奇朵','仅江浙沪门店'],
            },
            {
              img: require("../../../assets/Food/Sandwich/slow-roasted-ham-cheese-ciabatta.jpg"),
              text: '慢烤火腿芝士恰巴特', 
              path: '/menu/food/sandwich/slow-roasted-ham-cheese-ciabatta',
              describe: ['5小时以上慢烤的意式熏煮火腿肉, 搭配香嫩鸡蛋饼以及轻柔咸香的高达芝士，放入外酥里软的恰巴特面包中，搭配一杯钟爱的咖啡，全新一天，从这款美味早餐开始吧！','咖啡搭配推荐：星巴克®苏门答腊咖啡豆'],
            },
            {
              img: require("../../../assets/Food/Sandwich/tuna-panini.jpg"),
              text: '金枪鱼帕尼尼', 
              path: '/menu/food/sandwich/tuna-panini',
              describe: ['松软可口的帕尼尼，包裹鲜香金枪鱼，搭配香浓芝士，微微加热，芝士融化，回味无穷。','咖啡搭配推荐：星巴克®意式烘焙咖啡豆'],
            },
            {
              img: require("../../../assets/Food/Sandwich/turkey-bacon-english-muffin.jpg"),
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
              img: require("../../../assets/Food/Yoghurt/greek-flavored-yoghurt-mixed-berry.jpg"),
              text: '谷物组合希腊式风味酸奶（混合莓果）', 
              path: '/menu/food/yoghurt/greek-flavored-yoghurt-mixed-berry',
              describe: ['上佳原料：甄选优质奶源生牛乳+欧洲进口菌种发酵','独特工艺：采用希腊式物理脱乳清工艺，质地醇厚，奶香浓郁','健康美味两不误：','· 低脂的风味酸奶更健康','· 含有真实果肉的蓝莓果酱，点亮口感','· 丰富谷物组合（燕麦、巴旦木、蔓越莓和南瓜籽）更营养']
            },
            {
              img: require("../../../assets/Food/Yoghurt/greek-flavored-yoghurt-yellow-peach.jpg"),
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
              img: require("../../../assets/Food/Package/cashews.jpg"),
              text: '腰果', 
              path: '/menu/food/pakage/cashews',
              describe: ['营养健康的果仁，入口酥脆，特有的坚果香味充斥着你的味蕾，让你随时都能补充能量。','咖啡搭配建议： 拿铁/美式咖啡。']
            },
            {
              img: require("../../../assets/Food/Package/shortbread.png"),
              text: '英伦风味黄油饼干', 
              path: '/menu/food/pakage/shortbread',
              describe: ['富含黄油，有着浓郁绵密的奶香味，口感厚实浓郁酥脆。起源于苏格兰中世纪的英格兰甜点，当时稀有昂贵。至今成为苏格兰的经典点心，美味袭卷欧美大陆。用美式咖啡的清爽口感搭配上浓郁的奶香黄油饼干，不仅平衡了黄油饼干在嘴中绵密浓郁的口感，而且令你回味香甜不腻。简洁的包装礼盒，不管是送人还是拿来用作朋友家人分享，都是不错的选择，适用于较甜的食品。','咖啡搭配建议： 美式咖啡/浓缩咖啡。']
            },
            {
              img: require("../../../assets/Food/Package/fruitnnuts.jpg"),
              text: '混合果仁果脯', 
              path: '/menu/food/pakage/fruitnnuts',
              describe: ['内含杏仁、夏威夷果、腰果、蔓越莓果干、蓝莓果干，品种繁多，回味香浓。 适用于口感较平衡的食品。','咖啡搭配建议： 拿铁/美式咖啡。']
            },
            {
              img: require("../../../assets/Food/Package/fruit-salad.jpg"),
              text: '水果沙拉', 
              path: '/menu/food/pakage/fruit-salad',
              describe: ['多种混合水果色彩缤纷营养均衡，既可以作为午后的能量补充，也可以搭配正餐食用。','咖啡搭配建议： 冷萃冰咖啡','仅江浙沪门店']
            },
            {
              img: require("../../../assets/Food/Package/lollipops.jpg"),
              text: '棒棒糖', 
              path: '/menu/food/pakage/lollipops',
              describe: ['原装法国进口的水果风味棒棒糖，櫻桃味、可乐豆味、橙子味、柠檬味、草莓味，种类繁多，颜色鲜艳，同时满足了视觉有味蕾的双重感受。']
            },
            {
              img: require("../../../assets/Food/Package/waferrolls.jpg"),
              text: '咖啡味蛋卷', 
              path: '/menu/food/pakage/waferrolls',
              describe: ['秉承了香港优良的传统蛋卷工艺，口感酥脆馥郁，首次融入了星巴克的咖啡，融汇中西风味，有别于传统的口感和心意。简洁大气的包装礼盒，无论是送礼还是家人朋友分享，都是彰显品味高端送礼之选。适用于口感较平衡的食品。','咖啡搭配建议： 拿铁/美式咖啡。']
            },
            {
              img: require("../../../assets/Food/Package/starbucks-chewing-gum.jpg"),
              text: '薄荷味口香糖（无糖）', 
              path: '/menu/food/pakage/starbucks-chewing-gum',
              describe: ['原装进口无糖薄荷风味口香糖，冰霜强劲的薄荷风味，再加上便携简约的包装，让你随时随地都能清新你的口腔。']
            },
            {
              img: require("../../../assets/Food/Package/Starbucks-mints.jpg"),
              text: '薄荷味硬糖（无糖）', 
              path: '/menu/food/pakage/Starbucks-mints',
              describe: ['原装美国进口无糖薄荷风味硬糖，小巧精致的包装，冰霜强劲的清新风味，让你随时都能提神醒脑。']
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
