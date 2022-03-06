<template>
  <div>
    <div class='img'><img :src="p1" alt=""></div>
    <div class='img'><img :src="p2" alt=""></div>
    <div class='img'><img :src="p3" alt=""></div>
    <div class='img'><img :src="p4" alt=""></div>
    <div class='img'><img :src="p5" alt=""></div>
  </div>
</template>

<script>

export default {
  name: 'StarbucksNow',
  data(){
    return{
      p1: require('../../assets/StarbucksNow/head.jpeg'),
      p2: require('../../assets/StarbucksNow/QRcode2020-03.jpg'),
      p3: require('../../assets/StarbucksNow/3.jpeg'),
      p4: require('../../assets/StarbucksNow/4_v2.jpeg'),
      p5: require('../../assets/StarbucksNow/5.jpeg'),
    }
  }
}
</script>
<style lang="less" scoped>
  .img{
    width: 100%;
    img{
      width: 100%;
    }
  }
</style>