<template>
  <div>
    <commody-describe-common :describe="productPart"></commody-describe-common>
  </div>
</template>
<script>

import CommodyDescribeCommon from '../../../../components/Commody/CommodyDescribeCommon.vue'

export default {
  name: 'GreekFlavoredYoghurtYellowPeach',
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
    } 
  }
}
</script>

