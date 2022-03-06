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
  name: 'MediumRoastOrigami',
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
          name: '中度烘焙',
          list:[
            {
              img: require("../../../../assets/Coffee/StarbucksOrigami/MediumRoastOrigami/origami-pike-place.jpg"),
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
              img: require("../../../../assets/Coffee/StarbucksOrigami/DarkRoastOrigami/origami-verona.jpg"),
              text: '星巴克ORIGAMI™派克市场烘焙咖啡系列', 
              path: '/menu/coffee/starbucks-origami/dark-roast-origami/origami-verona',
              describe: ['从1971年星巴克在西雅图的派克市场开了第一家门店开始到现在门店遍布全世界，我们的顾客希望能在星巴克喝到新鲜煮制的咖啡，可以在一天中的任何时刻享用。所以2008年我们的咖啡大师用心混合并烘焙出这款综合咖啡，风味均匀和谐，口感平和，保留了其中所有咖啡的特色，同时也没有任何一种风味过于突兀，这款咖啡混合了拉丁美洲咖啡，带有轻微的可可风味和烤坚果风味，适合您每天享受。'],
              progress: [],
              list: []
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
