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
  name: 'Teavana',
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
          name: '茶瓦纳™',
          list:[
            {
              img: require("../../../../assets/Drink/Teavana/black-tea-latte.jpg"),
              text: '红茶拿铁（热/冷）', 
              path: '/menu/drink/teavana/black-tea-latte',
              describe: ['优质红茶在蒸奶中慢慢的呈现出温和的口感，以柔和的奶泡锁住茶香，加以经典风味酱。','这是红茶与牛奶的对话，优雅品享红茶文化。本饮品不含咖啡。'],
            },
            {
              img: require("../../../../assets/Drink/Teavana/green-tea-latte.jpg"),
              text: '抹茶拿铁（热/冷）', 
              path: '/menu/drink/teavana/green-tea-latte',
              describe: ['优质抹茶、蒸奶以及细腻奶泡加以经典风味酱融合于一杯饮品，柔顺香甜，清雅脱俗。','本饮品不含咖啡。'],
            },
            {
              img: require("../../../../assets/Drink/Teavana/iced-shaken-honey-ruby-grapefruit-black-tea.jpg"),
              text: '茶瓦纳™ 冰摇柚柚蜂蜜红茶', 
              path: '/menu/drink/teavana/iced-shaken-honey-ruby-grapefruit-black-tea',
              describe: ['混合了韩国柚子的清香、以色列柚汁的甘甜、西班牙粉柚汁的果香融于醇香红茶，颗颗饱满果粒和清甜柚子皮，点缀上蜂蜜层层深入的口感，让TA对这杯沁人心脾念念不忘 。'],
            },
            {
              img: require("../../../../assets/Drink/Teavana/blackcurrant-raspberry.jpg"),
              text: '冰摇红莓黑加仑茶', 
              path: '/menu/drink/teavana/blackcurrant-raspberry',
              describe: ['红莓黑加仑果汁融合醇香冰红茶，两款风格各异的莓子与冰红茶摇出各自的果香，却又浑然一体，迷恋在莓与茶的酸甜中。'],
            },
            {
              img: require("../../../../assets/Drink/Teavana/iced-shaken-mango-herbal-juiced-tea.jpg"),
              text: '冰摇芒果花草茶', 
              path: '/menu/drink/teavana/iced-shaken-mango-herbal-juiced-tea',
              describe: [],
            },
            {
              img: require("../../../../assets/Drink/Teavana/iced-shaken-peach-green-tea.jpg"),
              text: '茶瓦纳™冰摇桃桃乌龙茶', 
              path: '/menu/drink/teavana/iced-shaken-peach-green-tea',
              describe: ['内含原榨桃汁加上吃得到的大颗白桃果肉， 吃上一口，尝上一块，留住唇间的鲜醇甘厚。','更有茶香留恋回味，给TA淘气的味蕾茶选。'],
            },
            {
              img: require("../../../../assets/Drink/Teavana/pear-rooibos-tea.png"),
              text: '梨光清润路芭茶', 
              path: '/menu/drink/teavana/pear-rooibos-tea',
              describe: [],
            },
            {
              img: require("../../../../assets/Drink/Teavana/citrus-grapefruit-herbal-tea.png"),
              text: '橘香柚柚花草茶', 
              path: '/menu/drink/teavana/citrus-grapefruit-herbal-tea',
              describe: [],
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