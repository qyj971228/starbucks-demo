<template>
  <div>
    <commody-describe-common :describe="productPart"></commody-describe-common>
  </div>
</template>
<script>

import CommodyDescribeCommon from '../../../../components/Commody/CommodyDescribeCommon.vue'

export default {
  name: 'SignatureChocolateBeverage',
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
        name: '经典巧克力饮品',
        list:[
          {
            img: require("../../../../assets/Drink/SignatureChocolateBeverage/signature-chocolate-beverage.jpg"),
            text: '经典巧克力饮品（热/冷）', 
            path: '/menu/drink/signature-chocolate-beverage/signature-chocolate-beverage',
            describe: ['抵挡不住巧克力风味酱在蒸奶中飘散的浓郁可可香。只需在稀奶油上轻洒些许可可粉，就这样俘获你的心。'],
          },
        ]
      },
    } 
  }
}
</script>

