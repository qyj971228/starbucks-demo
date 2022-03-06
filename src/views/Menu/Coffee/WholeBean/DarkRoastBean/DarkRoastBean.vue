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
  name: 'DarkRoastBean',
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
          name: '深度烘焙',
          list:[
            {
              img: require("../../../../../assets/Coffee/WholeBean/DarkRoastBean/sumatra-coffee-beans.png"),
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
              img: require("../../../../../assets/Coffee/WholeBean/DarkRoastBean/komodo-dragon-blend-coffee-beans.png"),
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
              img: require("../../../../../assets/Coffee/WholeBean/DarkRoastBean/italian-roast-coffee-beans.png"),
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
              img: require("../../../../../assets/Coffee/WholeBean/DarkRoastBean/espresso-roast-coffee-beans.png"),
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
              img: require("../../../../../assets/Coffee/WholeBean/DarkRoastBean/caffe-verona-coffee-beans.png"),
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
