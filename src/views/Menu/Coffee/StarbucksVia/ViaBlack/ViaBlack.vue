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

import CommodyList from '../../../../../components/Commody/CommodyList'
import CommodySearchButton from '../../../../../components/Commody/CommodySearchButton.vue'

export default {
  name: 'ViaBlack',
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
          name: 'VIA® BLACK',
          list:[
            {
              img: require("../../../../../assets/Coffee/StarbucksVia/ViaBlack/via-italian-roast.jpg"),
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
              img: require("../../../../../assets/Coffee/StarbucksVia/ViaBlack/via-colombia.jpg"),
              text: '星巴克VIA®哥伦比亚免煮咖啡', 
              path: '/menu/coffee/starbucks-via/via-black/via-colombia',
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
