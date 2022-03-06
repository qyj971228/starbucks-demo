<template>
  <div>
    <commody-describe-common :describe="productPart"></commody-describe-common>
  </div>
</template>
<script>

import CommodyDescribeCommon from '../../../../components/Commody/CommodyDescribeCommon.vue'

export default {
  name: 'EthiopiaBittaFarm',
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
        name: '星巴克臻选™咖啡',
        list:[
          {
            img: require("../../../../assets/Coffee/StarbucksReserve/sumatra-wahana-estate.png"),
            text: '星巴克臻选™ 苏门答腊瓦哈纳庄园咖啡豆', 
            path: '/menu/coffee/starbucks-reserve/sumatra-wahana-estate',
            describe: [],
            progress: [],
            list: []
          },
          {
            img: require("../../../../assets/Coffee/StarbucksReserve/ethiopia-bitta-farm.png"),
            text: '星巴克臻选™ 埃塞俄比亚比塔庄园咖啡豆', 
            path: '/menu/coffee/starbucks-reserve/ethiopia-bitta-farm',
            describe: [],
            progress: [],
            list: []
          },
          {
            img: require("../../../../assets/Coffee/StarbucksReserve/china-yunnan-puer-baoshan.png"),
            text: '星巴克臻选™ 中国云南普洱保山综合咖啡豆', 
            path: '/menu/coffee/starbucks-reserve/china-yunnan-puer-baoshan',
            describe: [],
            progress: [],
            list: []
          },
          {
            img: require("../../../../assets/Coffee/StarbucksReserve/china-qingkai-farm.png"),
            text: '星巴克臻选™ 中国云南晴开农场咖啡豆', 
            path: '/menu/coffee/starbucks-reserve/china-qingkai-farm',
            describe: [],
            progress: [],
            list: []
          },
          {
            img: require("../../../../assets/Coffee/StarbucksReserve/colombia-monks-of-san-roque.png"),
            text: '星巴克臻选™ 哥伦比亚圣洛克蒙克斯咖啡豆', 
            path: '/menu/coffee/starbucks-reserve/colombia-monks-of-san-roque',
            describe: [],
            progress: [],
            list: []
          },
        ]
      },
    } 
  }
}
</script>

