<template>
  <div>
    <div id='hero'>
      <div id='bg'><img :src="hero" alt=""></div>
      <div id='content'>
        <div id='logo'><img :src="reserveLogoS" alt=""></div>
        <div id='text'>
          <p>代表我们更高品质的</p>
          <p>星巴克臻选™咖啡</p>
        </div>
      </div>
    </div>
    <div id='map'>
      <div id='bg'><img :src="map" alt=""></div>
      <div id='content'>
        <div id='text'><p>我们走访世界各地搜罗品质出众的咖啡豆，当中只有少量珍贵而独特风味的 品种，才会被冠以星巴克臻选™的称号。 它们不可多得，且拥有让人着迷的风味。 这些臻选™咖啡豆只在指定星巴克门店限量供应。</p></div>
        <div id='button'>查看星巴克臻选™咖啡门店</div>
      </div>
    </div>
    <div id='coffee'>
      <div id='title'>
        <p>限量供应</p>
        <h2>最新星巴克臻选™咖啡</h2>
      </div>
      <div id='items'>
        <div class='item'>
          <div class='img'><img :src="coffee1" alt=""></div>
          <div class='text'><p>中国云南普洱保山综合咖啡豆</p></div>
        </div>
        <div class='item'>
          <div class='img'><img :src="coffee2" alt=""></div>
          <div class='text'><p>中国云南晴开农场咖啡豆</p></div>
        </div>
        <div class='item'>
          <div class='img'><img :src="coffee3" alt=""></div>
          <div class='text'><p>埃塞俄比亚比塔庄园咖啡豆</p></div>
        </div>
      </div>
    </div>
    <div id='under-coffee'>
      <img :src="bgPattern1" alt="">
    </div>
    <div id='content'>
      <div id='title'><p>什么是星巴克臻选™咖啡</p></div>
      <div id='items'>
        <div class='item'>
          <div class='left'><img :src="article1" alt=""></div>
          <div class='right'><p>每年，我们的伙伴环游世界，只为找到上乘的咖啡。每隔一段时间，我们都会找到一款珍贵而独特的咖啡豆，并且迫不及待地想将他们带回来和大家分享。我们在支持中心的采购部门以及农业学家们一直致力于帮助全世界的咖啡种植者们，通过与他们合作，我们希望获得发现不同寻常并且独特的咖啡种类的机会。而在我们的品鉴部门，我们的专业品鉴师每年会品尝超过25万杯咖啡，然后再从中选取稀有而独特的几个种类来制作星巴克臻选™咖啡。</p></div>
        </div>
        <div class='item'>
          <div class='left'>
            <h2>风土条件</h2>
            <p>咖啡的生长，就如同酿酒的葡萄，受到不同产区的具体生长环境的影响，形成了大部分的风味。咖啡生长地区的土地，气温，海拔，降雨量和阳光等众多可变因素赋予了咖啡一系列特殊的个性，呈现出一杯美味的咖啡。</p>
          </div>
          <div class='right'><img :src="article2" alt=""></div>
        </div>
        <div class='mid-item'>
          <h2>加工方法</h2>
          <p>每一颗咖啡豆的生命都始于一颗咖啡浆果的种子。这颗咖啡果实如何被从咖啡豆中取出 – 也就是我们说的咖啡豆的加工 – 对于咖啡的风味有着直接的，甚至是巨大的影响。咖啡在烘焙前的收获，碾磨，水洗或者自然加工，甚至陈年豆的处理都可以成就一杯口味令人惊叹的咖啡。</p>
        </div>
        <div class='item'>
          <div class='left'><img :src="article3" alt=""></div>
          <div class='right'>
            <h2>咖啡品种</h2>
            <p>咖啡品种有着悠久的历史，可以创造出一杯珍贵稀有的咖啡。最常见的四种阿拉比卡咖啡的变种为波旁，铁毕卡，卡杜拉和卡杜艾。波旁和铁毕卡是原生种咖啡豆，是所有咖啡树的原型。卡杜拉和卡杜艾是波旁混合种的后代，混合了（通过自然混合或人工方法）两种现有咖啡的变种后得到，创造出一杯崭新的咖啡。</p>
            </div>
        </div>
        <div class='item'>
          <div class='left'>
            <h2>人文故事</h2>
            <p>每一款星巴克臻选™咖啡的背后都讲述了一个关于家庭，种植农和社区的故事。这些人文故事带给我们的是星巴克臻选™体验中不可或缺的一部分。</p>
          </div>
          <div class='right'><img :src="article4" alt=""></div>
        </div>
      </div>
    </div>
    <div id='foot'>
      <div id='bg'><img :src="bgPattern2" alt=""></div>
      <div id='logo'><img :src="reserveLogo" alt=""></div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Reserve',
  data(){
    return{
      hero: require('../../assets/StarbucksReserve/hero.jpg'),
      reserveLogoS: require('../../assets/StarbucksReserve/reserve-logo-s.png'),
      map: require('../../assets/StarbucksReserve/map.jpg'),
      coffee1: require('../../assets/StarbucksReserve/china-yunnan-puer-baoshan.png'),
      coffee2: require('../../assets/StarbucksReserve/china-qingkai-farm.png'),
      coffee3: require('../../assets/StarbucksReserve/ethiopia-bitta-farm.png'),
      bgPattern1: require('../../assets/StarbucksReserve/bg-pattern-1.jpg'),
      article1: require('../../assets/StarbucksReserve/article-1.jpg'),
      article2: require('../../assets/StarbucksReserve/article-2.jpg'),
      article3: require('../../assets/StarbucksReserve/article-3.png'),
      article4: require('../../assets/StarbucksReserve/article-4.jpg'),
      bgPattern2: require('../../assets/StarbucksReserve/bg-pattern-2.jpg'),
      reserveLogo: require('../../assets/StarbucksReserve/reserve-logo.png'),
    }
  }
}
</script>
<style lang='less' scoped>
  #hero{
    height: auto;
    width: 100%;
    position: relative;
    text-align: center;
    background-image: linear-gradient(-180deg, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0.7) 81%);
    #bg{
      width: 100%;
      height: 100%;
      overflow: hidden;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    #content{
      position: relative;
      text-align: center;
      #logo{
        display: inline-block;
        height: 79px;
        width: 66px;
        margin-bottom: 20px;
        margin-top: 50px;
        img{
          height: 100%;
          width: 100%;
        }
      }
      #text{
        // display: inline-block;
        color: #C48D69;
        font-weight: 700;
        font-size: 32px;
        padding-bottom: 50px;
        p{
          margin: 0;
        }
      }
    }
  }
  #map{
    height: auto;
    width: 100%;
    position: relative;
    #bg{
      width: 100%;
      height: 100%;
      overflow: hidden;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    #content{
      position: relative;
      text-align: center;
      #text{
        width: 80%;
        display: inline-block;
        p{
          color: rgba(0, 0, 0, 0.87);
          font-size: 18px;
          font-weight: 400;
          letter-spacing: 0.4px;
          line-height: 160%;
        }
      }
      #button{
        cursor: pointer;
        display: inline-block;
        width: 200px;
        font-weight: 700;
        padding: 12px 24px;
        background: #C48D69;
        color: #FFF;
        border-radius: 48px;
        margin-bottom: 30px;
        &:hover{
          background: #e2b698;
        }
      }
      
    }
  }
  #coffee{
    background-color: #231F20;
    position: relative;
    text-align: center;
    #title{
      color: #C48D69;
      p{
        margin: 0;
        padding-top: 30px;
        font-weight: bolder;
      }
      h2{
        margin-top: 0;
      }
    }
    #items{
      display: inline-block;
      .item{
        display: inline-block;
        height: 240px;
        width: 180px;
        vertical-align: top;
        .img{
          height: 144px;
          width: 144px;
          overflow: hidden;
          border-radius: 100px;
          display: inline-block;
          img{
            height: 100%;
            width: 100%;
          }
        }
        .text{
          color: #FFF;
          text-align: center;
          p{
            display: inline-block;
            width: 100px;
          }
        }
      }
    }
  }
  #under-coffee{
    width: 100%;
    height: 100%;
    img{
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
  #content{
    width: 80%;
    margin: auto;
    // text-align: center;
    #title{
      text-align: center;
      font-size: 30px;
    }
    #items{
      .mid-item{
        width: 90%;
        margin: auto;
        margin-bottom: 30px;
        font-size: 19px;
        font-weight: 400;
        letter-spacing: 0.4px;
        line-height: 150%;
      }
      .item{
        margin-bottom: 30px;
        .left, .right{
          vertical-align: top;
          width: 50%;
          display: inline-block;
          img{
            height: 100%;
            width: 100%;
            object-fit: cover;
          }
          h2{
            font-size: 18px;
          }
          p{
            font-size: 19px;
            font-weight: 400;
            letter-spacing: 0.4px;
            line-height: 150%;
          }
        }
        .left{
          img{
            margin-left: -50px;
          }
        }
        .right{
          img{
            margin-right: -50px;
          }
        }
      }
    }
  }
  #foot{
    height: 100%;
    width: 100%;
    overflow: hidden;
    position: relative;
    z-index: -1;
    #bg{
      height: 100%;
      width: 100%;
      img{
        object-fit: cover;
        height: 100%;
        width: 100%;
      }
    }
    #logo{
      position: absolute;
      bottom: 70px;
      left: 30px;
      height: 30%;
      width: 40%;
      img{
        height: 100%;
        width: 100%;
      }
    }
  }
  @media only screen and (max-width:640px) {
    #content{
      #items{
        .item{
          .left, .right{
            display: block;
            width: 100%;
          }
        }
      }
    }
  }
</style>
