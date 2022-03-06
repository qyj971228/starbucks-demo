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
  name: 'Yoghurt',
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
          name: '酸奶',
          list:[
            {
              img: require("../../../../assets/Food/Yoghurt/greek-flavored-yoghurt-mixed-berry.jpg"),
              text: '谷物组合希腊式风味酸奶（混合莓果）', 
              path: '/menu/food/yoghurt/greek-flavored-yoghurt-mixed-berry',
              describe: ['上佳原料：甄选优质奶源生牛乳+欧洲进口菌种发酵','独特工艺：采用希腊式物理脱乳清工艺，质地醇厚，奶香浓郁','健康美味两不误：','· 低脂的风味酸奶更健康','· 含有真实果肉的蓝莓果酱，点亮口感','· 丰富谷物组合（燕麦、巴旦木、蔓越莓和南瓜籽）更营养']
            },
            {
              img: require("../../../../assets/Food/Yoghurt/greek-flavored-yoghurt-yellow-peach.jpg"),
              text: '谷物组合希腊式风味酸奶（黄桃）', 
              path: '/menu/food/yoghurt/greek-flavored-yoghurt-yellow-peach',
              describe: ['上佳原料：甄选优质奶源生牛乳+欧洲进口菌种发酵','独特工艺：采用希腊式物理脱乳清工艺，质地醇厚，奶香浓郁','健康美味两不误：','· 低脂的风味酸奶更健康','· 含有真实果肉的黄桃果酱，甜蜜清爽','· 丰富谷物组合（燕麦、巴旦木、蔓越莓和南瓜籽）更营养']
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
