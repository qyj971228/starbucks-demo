<template>
  <div>
    <commody-describe-common :describe="productPart"></commody-describe-common>
  </div>
</template>
<script>

import CommodyDescribeCommon from '../../../../../components/Commody/CommodyDescribeCommon.vue'

export default {
  name: 'OrigamiVerona',
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
        name: '深度烘焙',
        list:[
          {
            img: require("../../../../../assets/Coffee/StarbucksOrigami/DarkRoastOrigami/origami-verona.jpg"),
            text: '星巴克ORIGAMI™便携式滴滤咖啡（研磨咖啡粉）星巴克®派克市场烘焙咖啡系列', 
            path: '/menu/coffee/starbucks-origami/dark-roast-origami/origami-verona',
            describe: ['从1971年星巴克在西雅图的派克市场开了第一家门店开始到现在门店遍布全世界，我们的顾客希望能在星巴克喝到新鲜煮制的咖啡，可以在一天中的任何时刻享用。所以2008年我们的咖啡大师用心混合并烘焙出这款综合咖啡，风味均匀和谐，口感平和，保留了其中所有咖啡的特色，同时也没有任何一种风味过于突兀，这款咖啡混合了拉丁美洲咖啡，带有轻微的可可风味和烤坚果风味，适合您每天享受。'],
            progress: [],
            list: []
          },
          {
            img: require("../../../../../assets/Coffee/StarbucksOrigami/MediumRoastOrigami/origami-pike-place.jpg"),
            text: '星巴克ORIGAMI™便携式滴滤咖啡（研磨咖啡粉）星巴克®佛罗娜烘焙咖啡系列', 
            path: '/menu/coffee/starbucks-origami/medium-roast-origami/origami-pike-place',
            describe: ['这款咖啡有过3个名称。最初在1975年，我们为一家西雅图的餐厅创造了这款咖啡豆，当时命名为杰克综合咖啡豆。由于广受欢迎，我们开始在门店中为顾客手工混合这款咖啡豆，并且根据混合的比例，以80/20综合咖啡来命名它。我们的顾客对这款咖啡的热爱和推崇经久不衰，最终，我们将它纳入星巴克正式的产品系列中，取名佛罗娜，以纪念这座城市激发我们的诸多灵感。无论哪个名字，都传递了这款咖啡的浪漫故事。'],
            progress: [],
            list: []
          },
        ]
      },
    } 
  }
}
</script>

