<template>
  <div>
    <commody-describe-common :describe="productPart"></commody-describe-common>
  </div>
</template>
<script>

import CommodyDescribeCommon from '../../../../components/Commody/CommodyDescribeCommon.vue'

export default {
  name: 'BlackWoodenStainlessSteelBottleWithStrap16oz',
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
        name: '常规产品',
        list:[
          {
            img: require("../../../../assets/Product/CoreMerchandise2017/12oz-black-gilded-brand-mug.jpg"),
            text: '12oz 烫金品牌黑色马克杯',
            path: '/menu/product/core-merchandise-2017/12oz-black-gilded-brandMug',
            describe: ['黑色杯面运用泼点釉搭配镭射Wordmark，隐约的亮色使得整体黑色不再沉闷。','这款马克杯另有其他杯型（3oz/16oz）和颜色（白色）可供选择。']
          },
          {
            img: require("../../../../assets/Product/CoreMerchandise2017/12oz-silver-white-brand-handle-mug.jpg"), 
            text: '银色/白色亮面品牌桌面杯', 
            path: '/menu/product/core-merchandise-2017/12oz-silver-white-brand-handle-mug',
            describe: ['双层不锈钢材质;别致舒适手柄，一体成型式弯曲舒适感','白色亮面工艺，银色金属拉丝效果']
          },
          {
            img: require("../../../../assets/Product/CoreMerchandise2017/12oz-true-essence-stainless-steel-bottle.jpg"), 
            text: '12oz 彰显本色黑色/深灰不锈钢桌面杯', 
            path: '/menu/product/core-merchandise-2017/12oz-true-essence-stainless-steel-bottle',
            describe: ['双层不锈钢美人鱼压纹杯盖。','黑色款为金属斜拉丝效果，深灰色款为工业风设计，可看见不锈钢材质本身的印记，风格硬朗。']
          },
          {
            img: require("../../../../assets/Product/CoreMerchandise2017/12oz-white-frosted-glass-cup.jpg"), 
            text: '12oz 纯白磨砂玻璃杯', 
            path: '/menu/product/core-merchandise-2017/12oz-white-frosted-glass-cup',
            describe: ['白色干净的玻璃杯身，搭配底部磨砂处理，具有手工感。']
          },
          {
            img: require("../../../../assets/Product/CoreMerchandise2017/12oz-white-gilded-brand-mug.jpg"), 
            text: '12oz 烫金品牌白色马克杯', 
            path: '/menu/product/core-merchandise-2017/12oz-white-gilded-brand-mug',
            describe: ['白色外杯磨砂釉搭配内杯亮面釉，即便饮茶和咖啡也不会溜茶渍。','这款马克杯另有其他杯型（3oz/16oz）和颜色（黑色）可供选择。']
          },
          {
            img: require("../../../../assets/Product/CoreMerchandise2017/16oz-black-gilded-brand-mug.jpg"), 
            text: '16oz 烫金品牌黑色马克杯', 
            path: '/menu/product/core-merchandise-2017/16oz-black-gilded-brand-mug',
            describe: ['黑色杯面运用泼点釉搭配镭射Wordmark，隐约的亮色使得整体黑色不再沉闷。','这款马克杯另有其他杯型（3oz/12oz）和颜色（白色）可供选择。']
          },
          {
            img: require("../../../../assets/Product/CoreMerchandise2017/16oz-black-wooden-stainless-steel-bottle-with-strap.jpg"), 
            text: '16oz 原木黑色拎绳不锈钢保温杯', 
            path: '/menu/product/core-merchandise-2017/16oz-black-wooden-stainless-steel-bottle-with-strap',
            describe: ['仿木纹水转印工艺。','磨砂质感搭配黑色Logo和拎手，中性有格调，给人以回归自然的宁静。']
          },
          {
            img: require("../../../../assets/Product/CoreMerchandise2017/16oz-true-essence-stainless-steel-travel-bottle.jpg"), 
            text: '16oz 彰显本色黑色/深灰不锈钢随行杯', 
            path: '/menu/product/core-merchandise-2017/16oz-true-essence-stainless-steel-travel-bottle',
            describe: ['分段式表面处理，底部为不锈钢抛光效果，上半部分为工业风设计，未经打磨，讲究真实，彰显本色。']
          },
          {
            img: require("../../../../assets/Product/CoreMerchandise2017/16oz-white-gilded-brand-mug.jpg"), 
            text: '16oz 烫金品牌白色马克杯', 
            path: '/menu/product/core-merchandise-2017/16oz-white-gilded-brand-mug',
            describe: ['白色外杯磨砂釉搭配内杯亮面釉，即便饮茶和咖啡也不会溜茶渍。','这款马克杯另有其他杯型（3oz/12oz）和颜色（黑色）可供选择。']
          },
          {
            img: require("../../../../assets/Product/CoreMerchandise2017/3oz-black-gilded-brand-mug.jpg"), 
            text: '3oz 烫金品牌黑色试尝杯', 
            path: '/menu/product/core-merchandise-2017/3oz-black-gilded-brand-mug',
            describe: ['黑色杯面运用泼点釉搭配镭射Wordmark，隐约的亮色使得整体黑色不再沉闷。','这款马克杯另有其他杯型（12oz/16oz）和颜色（白色）可供选择。']
          },
          {
            img: require("../../../../assets/Product/CoreMerchandise2017/3oz-white-gilded-brand-mug.jpg"), 
            text: '3oz 烫金品牌白色试尝杯', 
            path: '/menu/product/core-merchandise-2017/3oz-white-gilded-brand-mug',
            describe: ['白色外杯磨砂釉搭配内杯亮面釉，即便饮茶和咖啡也不会溜茶渍。','这款马克杯另有其他杯型（12oz/16oz）和颜色（黑色）可供选择。']
          },
          {
            img: require("../../../../assets/Product/CoreMerchandise2017/500ml-black-logo-water-bottle.jpg"), 
            text: '500ml 黑色Logo水瓶', 
            path: '/menu/product/core-merchandise-2017/500ml-black-logo-water-bottle',
            describe: ['水平中间可旋开，方便清洗，方便放入冰块。','杯盖增加吊绳功能，方便户外携带。']
          },
          {
            img: require("../../../../assets/Product/CoreMerchandise2017/500ml-white-logo-water-bottle.jpg"), 
            text: '500ml 白色Logo水瓶', 
            path: '/menu/product/core-merchandise-2017/500ml-white-logo-water-bottle',
            describe: ['水平中间可旋开，方便清洗，方便放入冰块。','杯盖增加吊绳功能，方便户外携带。']
          },
          
        ]
      }
    } 
  }
}
</script>

