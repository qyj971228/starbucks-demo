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
  name: 'Espressos',
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
          name: '手工调制浓缩咖啡',
          list:[
                {
                    img: require("../../../../assets/Drink/Espresso/caffe-americano.jpg"),
                    text: '美式咖啡（热/冷）', 
                    path: '/menu/drink/espresso/caffe-americano',
                    describe: ['简单即是美味，萃取经典浓缩咖啡，以水调和，香气浓郁蔓溢。'],
                },
                {
                    img: require("../../../../assets/Drink/Espresso/caffe-latte.jpg"),
                    text: '拿铁（热/冷）', 
                    path: '/menu/drink/espresso/caffe-latte',
                    describe: ['本色的经典咖啡。新鲜萃取的浓缩咖啡中缓缓倒入蒸煮牛奶，覆上轻柔奶泡，简单的香与纯。'],
                },
                {
                    img: require("../../../../assets/Drink/Espresso/caffe-mocha.jpg"),
                    text: '摩卡（热/冷)', 
                    path: '/menu/drink/espresso/caffe-mocha',
                    describe: ['摩卡最初是指一种带有巧克力风味的咖啡豆，现在，这份巧克力咖啡仍然带给你纯正的温暖。','在浓缩咖啡中加入摩卡酱，与蒸煮牛奶一起交织出丝滑与醇厚。'],
                },
                {
                    img: require("../../../../assets/Drink/Espresso/cappuccino.jpg"),
                    text: '卡布奇诺（热/冷）', 
                    path: '/menu/drink/espresso/cappuccino',
                    describe: ['蒸煮牛奶与浓缩咖啡相融合，用丰厚绵密的奶泡覆顶，再撒上肉桂粉或可可粉。','温馨提示：在奶泡消融前，请尽快享用。'],
                },
                {
                    img: require("../../../../assets/Drink/Espresso/caramel-macchiato.jpg"),
                    text: '焦糖玛奇朵（热/冷）', 
                    path: '/menu/drink/espresso/caramel-macchiato',
                    describe: ['玛奇朵在意大利语中的意思是“印记”。','从蒸煮牛奶和添加风味糖浆开始，再倒入醇厚的浓缩咖啡，留下属于玛奇朵的独有印记。'],
                },
                {
                    img: require("../../../../assets/Drink/Espresso/espresso.jpg"),
                    text: '浓缩咖啡', 
                    path: '/menu/drink/espresso/espresso',
                    describe: ['萃取星巴克浓缩烘焙咖啡豆精华，每一口都馥郁满溢，伴随浓郁的焦糖香及多层次的口感，带你开启星巴克咖啡之旅。'],
                },
                {
                    img: require("../../../../assets/Drink/Espresso/flat-white.jpg"),
                    text: '馥芮白™', 
                    path: '/menu/drink/espresso/flat-white',
                    describe: ['选用星巴克精萃浓缩咖啡制成，融合绵密奶泡，风味更浓郁和甘甜。'],
                },
                {
                    img: require("../../../../assets/Drink/Espresso/hazelnut-flavored-latte.jpg"),
                    text: '榛果风味拿铁（热/冷）', 
                    path: '/menu/drink/espresso/hazelnut-flavored-latte',
                    describe: ['榛果风味与醇厚的浓缩咖啡相得益彰，融合在蒸煮牛奶中，带给你特别温暖的醇香。'],
                },
                {
                    img: require("../../../../assets/Drink/Espresso/vanilla-flavored-latte.jpg"),
                    text: '香草风味拿铁（热/冷）', 
                    path: '/menu/drink/espresso/vanilla-flavored-latte',
                    describe: ['清雅香甜的香草风味糖浆让浓缩咖啡变得浪漫起来，开启拿铁的香草浪漫之旅。'],
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