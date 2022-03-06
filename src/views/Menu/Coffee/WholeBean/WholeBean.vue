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
  name: 'WholeBean',
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
              img: require("../../../../assets/Coffee/WholeBean/MediumRoastBean/south-of-the-clouds.jpg"),
              text: '星巴克®凤舞祥云综合咖啡豆', 
              path: '/menu/coffee/whole-bean/medium-roast/south-of-the-clouds',
              describe: ['这款亚洲/太平洋综合咖啡是自2009年来星巴克首款融入产自中国地区咖啡豆的综合咖啡。'],
              progress: [
                {title: '烘焙程度：中度烘焙', fill: 'medium'},
                {title: '酸度：低', fill: 'short'},
                {title: '醇度：中等', fill: 'medium'}
              ],
              list: [
                {title: '产地', content: '亚洲/太平洋'},
                {title: '加工方法', content: '水洗法/半水洗法'},
                {title: '风味', content: '温和清爽的酸度，中等醇度，均衡的风味带有草本和香料般风味'},
                {title: '食品搭配建议', content: '奶油芝士类食品，太妃、枫糖和坚果类食品'},
                {title: '类似咖啡', content: '低因祥龙综合咖啡®，星巴克®苏门答腊咖啡'},
              ]
            },
            {
              img: require("../../../../assets/Coffee/WholeBean/MediumRoastBean/pike-place-roast-coffee-beans.png"),
              text: '星巴克®派克市场烘焙咖啡豆', 
              path: '/menu/coffee/whole-bean/medium-roast/pike-place-roast-coffee-beans',
              describe: ['中等醇度并伴随着可可和烤果仁般的微妙风味，呈现出一杯令人愉悦而口感平衡的咖啡。'],
              progress: [
                {title: '烘焙程度：中度烘焙', fill: 'medium'},
                {title: '酸度：中等', fill: 'medium'},
                {title: '醇度：中等', fill: 'medium'}
              ],
              list: [
                {title: '产地', content: '拉丁美洲'},
                {title: '加工方法', content: '水洗法'},
                {title: '风味', content: '可可味，烘烤果仁味，顺滑、平和'},
                {title: '食品搭配建议', content: '巧克力，肉桂，果仁'},
                {title: '类似咖啡', content: '星巴克®首选综合咖啡、星巴克®佛罗娜咖啡、星巴克®危地马拉安提瓜咖啡'},
              ]
            },
            {
              img: require("../../../../assets/Coffee/WholeBean/MediumRoastBean/kenya-coffee-beans.png"),
              text: '星巴克®肯亚咖啡豆', 
              path: '/menu/coffee/whole-bean/medium-roast/kenya-coffee-beans',
              describe: ['肯亚咖啡拥有多层次复杂的风味，包含果汁般的酸度、明显丰富的葡萄柚味和葡萄酒的醇香般风味，醇度中等。'],
              progress: [
                {title: '烘焙程度：中度烘焙', fill: 'medium'},
                {title: '酸度：高', fill: 'long'},
                {title: '醇度：厚重', fill: 'long'}
              ],
              list: [
                {title: '产地', content: '非洲/阿拉伯'},
                {title: '加工方法', content: '水洗法'},
                {title: '风味', content: '葡萄柚味，浆果味，如果汁般，口感丰富'},
                {title: '食品搭配建议', content: '葡萄柚，浆果，无核葡萄干，葡萄干，橙子'},
                {title: '类似咖啡', content: '星巴克®埃塞俄比亚'},
              ]
            },
            {
              img: require("../../../../assets/Coffee/WholeBean/MediumRoastBean/house-blend-coffee-beans.png"),
              text: '星巴克®首选咖啡豆', 
              path: '/menu/coffee/whole-bean/medium-roast/house-blend-coffee-beans',
              describe: ['一款非常平衡的咖啡，带有坚果和可可般的香味，由优质的拉丁美洲咖啡豆混合而成，我们一开始就为咖啡爱好者提供这款具有代表性的综合咖啡。'],
              progress: [
                {title: '烘焙程度：中度烘焙', fill: 'medium'},
                {title: '酸度：中等', fill: 'medium'},
                {title: '醇度：中等', fill: 'medium'}
              ],
              list: [
                {title: '产地', content: '拉丁美洲'},
                {title: '加工方法', content: '水洗法'},
                {title: '风味', content: '活泼、平和'},
                {title: '食品搭配建议', content: '果仁，苹果，蓝莓'},
                {title: '类似咖啡', content: '星巴克®危地马拉安提瓜咖啡'},
              ]
            },
            {
              img: require("../../../../assets/Coffee/WholeBean/MediumRoastBean/guatemala-antigua-coffee-beans.png"),
              text: '星巴克®危地马拉安提瓜咖啡豆', 
              path: '/menu/coffee/whole-bean/medium-roast/guatemala-antigua-coffee-beans',
              describe: ['这是一款典雅、丰富并具有深度的咖啡，其精致的酸度与微妙的可可粉质感以及柔和的香料风味完美地平衡在了一起。'],
              progress: [
                {title: '烘焙程度：中度烘焙', fill: 'medium'},
                {title: '酸度：中等', fill: 'medium'},
                {title: '醇度：中等', fill: 'medium'}
              ],
              list: [
                {title: '产地', content: '拉丁美洲'},
                {title: '加工方法', content: '水洗法'},
                {title: '风味', content: '可可和淡淡的香料般风味'},
                {title: '食品搭配建议', content: '可可，苹果，焦糖，果仁'},
                {title: '类似咖啡', content: '星巴克®首选综合咖啡'},
              ]
            },
            {
              img: require("../../../../assets/Coffee/WholeBean/MediumRoastBean/ethiopia-coffee-beans.png"),
              text: '星巴克®埃塞俄比亚咖啡豆', 
              path: '/menu/coffee/whole-bean/medium-roast/ethiopia-coffee-beans',
              describe: ['这款精心呈现的综合咖啡口感温和顺滑，带有花香和香料般风味，表达了我们对咖啡诞生地由衷的赞美。'],
              progress: [
                {title: '烘焙程度：中度烘焙', fill: 'medium'},
                {title: '酸度：高', fill: 'long'},
                {title: '醇度：中等', fill: 'medium'}
              ],
              list: [
                {title: '产地', content: '非洲'},
                {title: '加工方法', content: '水洗法'},
                {title: '风味', content: '柑橘、黑巧克力般风味'},
                {title: '食品搭配建议', content: '黑巧克力、柑橘'},
                {title: '类似咖啡', content: '星巴克®肯亚咖啡'},
              ]
            },
            {
              img: require("../../../../assets/Coffee/WholeBean/MediumRoastBean/colombia.jpg"),
              text: '星巴克®哥伦比亚咖啡豆', 
              path: '/menu/coffee/whole-bean/medium-roast/colombia',
              describe: ['以平和著称，醇度中等、口感顺滑平衡，喝下满口丰润，带有清爽和坚果般风味。'],
              progress: [
                {title: '烘焙程度：中度烘焙', fill: 'medium'},
                {title: '酸度：中等', fill: 'medium'},
                {title: '醇度：中等', fill: 'medium'}
              ],
              list: [
                {title: '产地', content: '拉丁美洲'},
                {title: '加工方法', content: '水洗法'},
                {title: '风味', content: '果仁和可可般的风味'},
                {title: '食品搭配建议', content: '胡桃、牛奶巧克力'},
                {title: '类似咖啡', content: '星巴克®首选咖啡'},
              ]
            },
            {
              img: require("../../../../assets/Coffee/WholeBean/MediumRoastBean/breakfast-blend-coffee-beans.png"),
              text: '星巴克®早餐综合咖啡豆', 
              path: '/menu/coffee/whole-bean/medium-roast/breakfast-blend-coffee-beans',
              describe: ['这款醇度清淡的综合咖啡活泼而清爽，唤醒你的味蕾，带给你明快的第一印象，让你焕然一新，开始新的一天。'],
              progress: [
                {title: '烘焙程度：中度烘焙', fill: 'medium'},
                {title: '酸度：高', fill: 'long'},
                {title: '醇度：低', fill: 'short'}
              ],
              list: [
                {title: '产地', content: '拉丁美洲'},
                {title: '加工方法', content: '水洗法'},
                {title: '风味', content: '清爽、香气扑鼻'},
                {title: '食品搭配建议', content: '果仁，苹果，蓝莓，柠檬'},
                {title: '类似咖啡', content: '星巴克®轻柳咖啡'},
              ]
            },
          ]
        },
        {
          name: '深度烘焙',
          list:[
            {
              img: require("../../../../assets/Coffee/WholeBean/DarkRoastBean/sumatra-coffee-beans.png"),
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
              img: require("../../../../assets/Coffee/WholeBean/DarkRoastBean/komodo-dragon-blend-coffee-beans.png"),
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
              img: require("../../../../assets/Coffee/WholeBean/DarkRoastBean/italian-roast-coffee-beans.png"),
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
              img: require("../../../../assets/Coffee/WholeBean/DarkRoastBean/espresso-roast-coffee-beans.png"),
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
              img: require("../../../../assets/Coffee/WholeBean/DarkRoastBean/caffe-verona-coffee-beans.png"),
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
