<template>
  <div>
    <commody-describe-common :describe="productPart"></commody-describe-common>
  </div>
</template>
<script>

import CommodyDescribeCommon from '../../../../../components/Commody/CommodyDescribeCommon.vue'

export default {
  name: 'ViaCaramelLatte',
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
          name: 'VIA® DAIRY',
          list:[
            {
              img: require("../../../../../assets/Coffee/StarbucksVia/ViaDairy/via-vanilla-latte.jpg"),
              text: '星巴克VIA®香草拿铁风味免煮咖啡固体饮料', 
              path: '/menu/coffee/starbucks-via/via-dairy/via-vanilla-latte',
              describe: ['我们广受欢迎的星巴克手工调制香草拿铁促使我们为咖啡爱好者创造出这款能够随时随地享受美味的咖啡。星巴克VIA®香草拿铁免煮咖啡带有醇厚的牛奶风味和饱满甜美的香草风味，同时又不失星巴克咖啡的浓郁。让您能随时随地尽情享受美味拿铁。'],
              progress: [],
              list: []
            },
            {
              img: require("../../../../../assets/Coffee/StarbucksVia/ViaDairy/via-caramel-latte.jpg"),
              text: '星巴克VIA®焦糖拿铁风味免煮咖啡固体饮料', 
              path: '/menu/coffee/starbucks-via/via-dairy/via-caramel-latte',
              describe: ['香醇美味，即刻随享。','我们的星巴克VIA® 焦糖拿铁风味咖啡饮料（固体饮料）由香醇的星巴克® 咖啡，奶粉以及香甜的焦糖风味调配而成。我们对经典的焦糖手工调制饮料的热爱激发我们创造了这款美味的咖啡饮料。无论是每一个早晨，当您正要开启崭新的一天，还是每一个午后，当您需要享受美味的下午茶，您都可以享用一杯星巴克® 焦糖拿铁风味咖啡饮料。'],
              progress: [],
              list: []
            },
            {
              img: require("../../../../../assets/Coffee/StarbucksVia/ViaDairy/via-caffe-mocha.jpg"),
              text: '星巴克VIA®摩卡风味免煮咖啡固体饮料', 
              path: '/menu/coffee/starbucks-via/via-dairy/via-caffe-mocha',
              describe: ['我们的星巴克VIA®摩卡免煮咖啡为您带来无法抗拒的美妙享受：它将香醇的可可风味，牛奶风味和浓郁的星巴克®咖啡绝妙地加以搭配。作为对星巴克®手工调制摩卡所获得的成功的礼赞，摩卡免煮咖啡让您能够随时随地享受摩卡的浓郁风味和富有深度。'],
              progress: [],
              list: []
            },
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
    } 
  }
}
</script>

