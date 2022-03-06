<template>
  <div>
    <div id='apps'>
      <a id='download-img' v-show='clientWidthApp <= 640' href=""><img src="../../assets/Apps/App/udp-starbucks-cn.png"></a>
      <div id='bg-img-top'>
        <img :src="bgTop" alt="">
      </div>
      <div id='contain'>
        <div id='head'>
          <div id='title'>下载星巴克App</div>
          <div id='describe'>
            <div>加入星享俱乐部，积星星享好礼。轻松管理星礼卡，支付时即可加速积星，每消费40元获得一颗星星，比其他支付方式积星快25%。还能随时点咖啡，体验专星送™。</div>
            <br>
            <div>在App内随心挑选和购买电子星礼卡, 随时查看余额，充值和管理卡片。</div>
          </div>
          <div id='video'>
            <video :src="video" controls="controls"></video>
          </div>
          <div id='video-bg'>
            <img :src="videoBg">
          </div>
          <div id='imgs'>
            <a v-show='clientWidthApp<=1200 && clientWidthApp >640' href=""><img src="../../assets/Apps/App/udp-starbucks-cn.png"></a>
            <a v-show='clientWidthApp>1200' href=""><img src="../../assets/Apps/App/udp-ios-cn.png"></a>
            <a v-show='clientWidthApp>1200' href=""><img src="../../assets/Apps/App/udp-android-cn.png"></a>
          </div>
        </div>
        <div id='bg-little'>
          <img :src="bgLittle" alt="">
        </div>
        <div id='show'>
          <div id='icons' style="z-index:2;">
            <div class='icon' v-for="item,index in icons" :key='index' @click="setCurrentIcon(index);moveTo(index)">
              <div class='icons-img' :class='{"icons-img-hide":currentIcon==index}'><img :src="item.img"></div>
              <div class='icons-img-active' :class='{"icons-img-active-show":currentIcon==index}'><img :src="item.imgActive"></div>
              <p :class='{"p-active" : currentIcon==index, "p-cold" : currentIcon!=index}'>{{item.name}}</p>
              <hr :class='{"hr-active" : currentIcon==index, "hr-cold" : currentIcon!=index}'>
            </div>
          </div>
          <div id='describes' style="z-index:2;">
            <div id='buttons'>
              <div id='left' @click="moveLeft()"><img :src="buttonLeft"></div>
              <div id='right' @click='moveRight()'><img :src="buttonLeft"></div>
            </div>
            <div id='describe' :style="whereToMove()" >
              <div class='describe-page' v-for="item,index in describes" :key='index'>
                <div class='page-text'>
                  <img :src="star">
                  <div class='page-text-title'>{{item.name}}</div>
                  <br>
                  <div class='page-text-describe'>{{item.describe}}</div>
                </div>
                <img class='describe-page-img' :src="item.img">
              </div>
            </div>
          </div>
        </div>
        <div id='foot'>
            <div id='foot-head'>星巴克手机应用目前在&nbsp;<a href="">App Store</a>&nbsp;和以下安卓平台均有下载</div>
            <br>
            <div id='foot-body'>
              <a href="">应用宝</a>&nbsp;&nbsp;|&nbsp;&nbsp;
              <a href="">小米商店</a>&nbsp;&nbsp;|&nbsp;&nbsp;
              <a href="">360手机助手</a>&nbsp;&nbsp;|&nbsp;&nbsp;
              <a href="">百度手机助手</a>&nbsp;&nbsp;|&nbsp;&nbsp;
              <a href="">魅族</a>&nbsp;&nbsp;|&nbsp;&nbsp;
              <a href="">豌豆荚安装</a>&nbsp;&nbsp;|&nbsp;&nbsp;
              <a href="">华为应用市场</a>
            </div>
            <br>
            <div id='QRcode'><img :src="QRcode" alt=""></div>
            <div id='systems'>
              <img :src="ios">
              <img :src="android">
            </div>
            <div id='help'>如果您有任何问题，请查看常见问题，也可以直接与我们联系</div>
            <div id='buttons'>
              <button>常见问题</button>
              <button>联系我们</button>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Apps',
  data(){
    return{
      bgTop: require('../../assets/Apps/App/starbuck-mobile-background-top.jpg'),
      bgLittle: require('../../assets/Apps/App/download-bg.png'),
      // bgShow: require('../../assets/Apps/App/apps-mobile-circle.svg'),
      video: require('../../assets/Apps/App/apps-mobile-screens-cn.mp4'),
      videoBg: require('../../assets/Apps/App/apps-mobile-mockup-zh.png'),

      buttonLeft: require('../../assets/Apps/App/icon-chevron-left.svg'),
      star: require('../../assets/Apps/App/star.svg'),

      QRcode: require('../../assets/Apps/App/app_qr_20181112.jpg'),
      ios: require('../../assets/Apps/App/ios.svg'),
      android: require('../../assets/Apps/App/android.svg'),

      currentIcon: -1,

      move: 0,

      clientWidthApp: 1600,

      icons: [
        {img: require('../../assets/Apps/App/icon-star.svg'), imgActive: require('../../assets/Apps/App/icon-star-active.svg'),name: '星享俱乐部'},
        {img: require('../../assets/Apps/App/icon-card.svg'), imgActive: require('../../assets/Apps/App/icon-card-active.svg'),name: '星礼卡'},
        {img: require('../../assets/Apps/App/icon-stores.svg'), imgActive: require('../../assets/Apps/App/icon-stores-active.svg'),name: '查找新门店'},
        {img: require('../../assets/Apps/App/icon-message.svg'), imgActive: require('../../assets/Apps/App/icon-message-active.svg'),name: '了解星消息'},
      ],

      describes: [
        {img: require('../../assets/Apps/App/apps-mobile-screens-1.png'), name: '星享俱乐部', describe: '在门店展示我的二维码可积星星享好礼'},
        {img: require('../../assets/Apps/App/apps-mobile-screens-2.png'), name: '星礼卡', describe: '在App中可绑定实体星礼卡，或随心挑选和购买电子星礼卡。用App内星礼卡支付可以加速积星，每消费40元获得一颗星星，比其他支付方式积星快25%。开能随时查看余额，充值和管理卡片。'},
        {img: require('../../assets/Apps/App/apps-mobile-screens-3.png'), name: '查找新门店', describe: '快速找到离您最近的星巴克门店，了解门店营业时间，并接收门店精确位置'},
        {img: require('../../assets/Apps/App/apps-mobile-screens-4.png'), name: '了解星消息', describe: '实时接收星巴克最新的产品及促销信息'},
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
      console.log(localStorage.getItem('clientWidth'))
    },
    setCurrentIcon(index){
      this.currentIcon = index
    },
    moveTo(index){
      if(this.clientWidthApp > 1200){
        this.move = index * -820
      }else{
        this.move = index * -this.clientWidthApp
      }
      
    },
    moveRight(){
      if(this.clientWidthApp > 1200){
        if(this.move > -820 * 3){
          this.move -= 820
        }
      }else{
        if(this.move > -this.clientWidthApp * 3){
          this.move -= this.clientWidthApp
        }
      }
      
    },
    moveLeft(){
      if(this.clientWidthApp > 1200){
        if(this.move < 0){
          this.move += 820
        }
      }
      else{
        if(this.move < 0){
          this.move += this.clientWidthApp
        }
      }
      
    },
    whereToMove(){
      if(this.clientWidthApp > 1200){
        if(this.move == 0){
          this.currentIcon = 0
        }else if(this.move == -820){
          this.currentIcon = 1
        }else if(this.move == -1640){
          this.currentIcon = 2
        }else if(this.move == -2460){
          this.currentIcon = 3
        }
      }
      else{
        if(this.move == 0){
          this.currentIcon = 0
        }else if(this.move == -this.clientWidthApp){
          this.currentIcon = 1
        }else if(this.move == -this.clientWidthApp * 2){
          this.currentIcon = 2
        }else if(this.move == -this.clientWidthApp * 3){
          this.currentIcon = 3
        }
      }
      return{
        'margin-left': this.move + 'px',
        'transition': 'all 0.2s',
      }
    }
  }
}
</script>
<style lang='less'  scoped>
  #apps{
    background-color: #FFF8fd;
    #bg-img-top{
      width: 100%;
      height: 384px;
      overflow: hidden;
      position: absolute;
      img{
        height: 100%;
        width: 100%;
        object-fit: none;
      }
    }
    #contain{
      width: 820px;
      // height: 1000px;
      margin: auto;
      // background-color: red;
      position: relative;
      #head{
        padding-top: 80px;
        color: white;
        height: 600px;
        #video-bg{
          z-index: 1;
          width: 325px;
          height: 600px;
          position: absolute;
          right: 30px;
          img{
            height: 100%;
            width: 100%;
          }
        }
        #video{
          z-index: 2;
          width: 282px;
          height: 559px;
          position: absolute;
          top: 193px;
          right: 48px;
          overflow: hidden;
          video{
            object-fit: cover;
            height: 100%;
            width: 100%;
          }
        }
        #title{
          text-align: center;
          font-size: 200%;
          margin-bottom: 50px;
        }
        #describe{
          width: 40%;
          position: absolute;
          left: 50px;
          line-height: 150%;
        }
        #imgs{
          position: absolute;
          top: 338px;
          left: 50px;
          img{
            display: block;
            height: 52px;
            margin-top: 20px;
            border-radius: 30px;
            box-shadow: 0 2px 4px 0 rgba(0,0,0,20%);
          }
        }
      }
      #bg-little img{
        position: absolute;
        width: 321px;
        height: 289px;
        top: 515px;
        left: -100px;
        z-index: 10;
      }
      #show{
        padding-top: 160px;
        background-color: white;
        position: relative;
        background-image: url('../../assets/Apps/App/apps-mobile-circle.svg');
        background-position: bottom;
        background-repeat: no-repeat;
        #icons{
          width: 95%;
          margin: auto;
          .icon{
            cursor: pointer;
            display: inline-block;
            text-align: center;
            width: 25%;
            // background-color: yellow;
            &:hover > p{
              color: black;
            }
            &:hover > hr{
              border:0px;
              border-bottom:2px solid #00A862;
            }
            &:hover > .icons-img-active{
              display: inline-block;
            }
            &:hover > .icons-img{
              display: none;
            }
            .icons-img{
              height: 30px;
              width: 30px;
              display: inline-block;
              img{
                height: 100%;
                width: 100%;
              }
            }
            .icons-img-hide{
              height: 30px;
              width: 30px;
              display: none;
              img{
                height: 100%;
                width: 100%;
              }
            }
            .icons-img-active{
              height: 30px;
              width: 30px;
              display: none;
              img{
                height: 100%;
                width: 100%;
              }
            }
            .icons-img-active-show{
              height: 30px;
              width: 30px;
              display: inline-block;
              img{
                height: 100%;
                width: 100%;
              }
            }
            p{
              color: #ccc;
              margin-top: 2px;
              font-size: 90%;
              font-weight: bolder;
              margin-bottom: 20px;
            }
            .p-active{
              color: black;
              margin-top: 2px;
              font-size: 90%;
              font-weight: bolder;
              margin-bottom: 20px;
            }
            .p-cold{
              color: #ccc;
              margin-top: 2px;
              font-size: 90%;
              font-weight: bolder;
              margin-bottom: 20px;
            }
            .hr-active{
              border: 0px;
              border-bottom:2px solid #00A862;
            }
          }
        }
        #describes{
          overflow: hidden;
          transition: all 0.2s;
          #buttons{
            #left{
              height: 24px;
              display: inline-block;
              position: absolute;
              top: 650px;
              left: 30px;
              transition: all 0.2s;
              cursor: pointer;
              &:hover{
                left: 26px;
                transition: all 0.2s;
              }
            }
            #right{
              height: 24px;
              display: inline-block;
              transform: rotate(180deg);
              position: absolute;
              top: 650px;
              right: 30px;
              transition: all 0.2s;
              cursor: pointer;
              &:hover{
                right: 26px;
                transition: all 0.2s;
              }
            }
          }
          #describe{
            width: 3280px;
            .describe-page{
              width: 820px;
              text-align: center;
              display: inline-block;
              // .describe-page-img{
              //   width: 750px;
              // }
              .page-text{
                margin-top: 20px;
                margin-bottom: 80px;
                .page-text-title{
                  font-size: 150%;
                  display: inline-block;
                  margin-bottom: 20px;
                }
                .page-text-describe{
                  width: 85%;
                  font-weight: bolder;
                  opacity: 0.7;
                  display: inline-block;
                }
              }
            }
          }
        }
      }
      #foot{
        text-align: center;
        padding-bottom: 80px;
        a{
          text-decoration: none;
          color: #00A862;
        }
        #foot-head{
          margin-top: 100px;
        }
        #foot-body{
          display: inline-block;
          width: 90%;
        }
        #QRcode{
          height: 160px;
          width: 160px;
          display: inline-block;
          margin: auto;
          img{
            height: 100%;
            width: 100%;
          }
        }
        #systems{
          img{
            margin-right: 10px;
          }
        }
        #help{
          margin-top: 50px;
        }
        #buttons{
          margin-top: 20px;
          button{
            height: 40px;
            // width: 65px;
            margin-right: 10px;
            padding-left: 15px;
            padding-right: 15px;
            border: 1px solid #00A862;
            background-color: white;
            font-size: 15px;
            color: #00A862;
            border-radius: 20px;
            cursor:pointer;
          }
        }
      }
    }
  }
  @media only screen and (min-width: 640px) and (max-width: 1200px){
    #apps{
      #contain{
        width: 100%;
        margin: auto;
        position: relative;
        #head{
          #video-bg{
            right: 30px;
          }
          #video{
            right: 48px;
          }
        }
        #bg-little img{
          left: 50px;
        }
        #show{
          #describes{
            #describe{
              width: 400%;
              .describe-page{
                width: 25%;
                .describe-page-img{
                  width: 580px;
                }
              }
            }
          }
        }
      }
    }
  }
  @media only screen and (max-width: 640px) {
    #apps{
      #download-img{
        position: fixed;
        display: block;
        right: 20px;
        bottom: 70px;
        z-index: 10;
        margin: 3px 0;
        img{
          box-shadow: 0 2px 4px 0 rgba(0,0,0,20%);
          height: 52px;
          border-radius: 30px;
        }
        &:active{
          margin-top: 6px;
          margin-bottom: 0px;
        }
      }
      #contain{
        width: 100%;
        margin: auto;
        position: relative;
        #head{
          height: 800px;
         #describe{
            width: 90%;
            position: absolute;
            left: 50px;
            line-height: 150%;
          }
          #video-bg{
            display: none;
          }
          #video{
            position: inherit;
            padding-top: 150px;
            margin: auto;
          }
        }
        #bg-little img{
          display: none;
        }
        #show{
          #describes{
            #describe{
              width: 400%;
              .describe-page{
                width: 25%;
                .describe-page-img{
                  width: 400px;
                }
              }
            }
          }
        }
        #foot{
          padding-bottom: 160px;
        }
      }
    }
  }
</style>
