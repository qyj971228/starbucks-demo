<template>
  <div>
    <div id='contain'>
      <div id='upd' v-show='clientWidthApp <= 640'><a href=""><img :src="udp"></a></div>
      <div id='main-item-box'>
        <div id='main-item'>
          <h2>美妙咖啡随时相伴</h2>
          <p>现在您可以在您的Apple Watch上打开星巴克移动应用，使用<a>星享俱乐部会员</a>功能，以及查找附近门店</p>
          <div id='upd' v-show='clientWidthApp > 640'><a href=""><img :src="udp"></a></div>
          <div id='gif'><img :src="gif"></div>
        </div>
      </div>
      <div>
      </div>
      <div class='items' v-for="item,index in items" :key='index'>
        <div class='item-text'>
          <h2>{{item.head}}</h2>
          <p>{{item.describe}}</p>
        </div>
        <div class='item-img'>
          <img :src="item.img">
        </div>
      </div>
      <hr width="80%" style="opacity: 0.5;">
      <div id='foot'>
        <p>为了能正常使用，请确认您IPhone中的<a>星巴克移动应用版本为4.1.8或以上。</a>苹果公司标志及iPhone是苹果公司在美国及其他国家的注册商标。Apple Watch是苹果公司的注册商标，苹果应用商店是苹果公司的服务商标。</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Watch',
  data(){
    return{
      clientWidthApp: 0,
      gif: require('../../../assets/Apps/Watch/apple-watch.gif'),
      udp: require('../../../assets/Apps/Watch/udp-ios-cn.svg'),
      items:[
        {head: '积星享好礼', describe: '随时关注您的星享俱乐部好礼，扫一扫我的二维码累积星星兑换好礼。', img: require('../../../assets/Apps/Watch/apple-watch-rewards@2x.png')},
        {head: '移动支付', describe: '扫一扫星礼卡完成支付，查看卡内余额，Apple Watch轻松搞定。', img: require('../../../assets/Apps/Watch/apple-watch-pay@2x.png')},
        {head: '查找门店', describe: '快速发现离您最近的星巴克门店，为您指引路线并显示所需时间。', img: require('../../../assets/Apps/Watch/apple-watch-stores@2x.png')},
      ]
    }
  },
  created(){
    this.setClientWidthApp()
  },
  mounted(){
    setInterval(()=>{
      this.clientWidthApp = localStorage.getItem('clientWidth')
    },100)
  },
  methods:{
    setClientWidthApp(){
      this.clientWidthApp = localStorage.getItem('clientWidth')
    },
  }
}
</script>
<style lang='less' scoped>
  #contain{
    h2{
      margin: 0;
      font-weight: normal;
    }
    a{
      color: #00a862;
    }
    margin: 0px;
    #main-item-box{
      background-color: rgb(238, 238, 238);
      #main-item{
        padding-top: 50px;
        width: 80%;
        text-align: center;
        margin: auto;
      }
    }
    .items{
      width: 80%;
      margin: auto;
      margin-top: 50px;
      p{
        opacity: 0.5;
        line-height: 150%;
      }
      .item-text{
        vertical-align: top;
        display: inline-block;
        width: 50%;
        padding-bottom: 50px;
      }
      .item-img{
        vertical-align: top;
        display: inline-block;
        width: 30%;
        margin-left: 50px;
        img{
          margin: auto;
          height: 100%;
          width: 100%;
        }
      }
    }
    #foot{
      width: 80%;
      margin: auto;
      margin-top: 50px;
      margin-bottom: 70px;
    }    
  }
  @media only screen and (max-width:640px) {
    #gif{
      margin: auto;
      height: 80%;
      width: 80%;
      img{
        height: 100%;
        width: 100%;
      }
    }
    #upd{
      position: fixed;
      right: 20px;
      bottom: 70px;
      margin-top: 3px;
      margin-bottom: 3px;
      &:active{
        margin-top: 6px;
        margin-bottom: 0px;
      }
    }
  }
</style>
