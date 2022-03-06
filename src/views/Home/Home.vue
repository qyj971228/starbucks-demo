<template>
  <div>
    <div id='home'>
      <div id='home-contain'>
        <div id='home-ad'>
          <img v-show='clientWidthApp> 640' :src='homeAd'>
          <img v-show='clientWidthApp<= 640' :src='homeAdMini'>
        </div>
        <div id='home-pages'>
          <div v-for="item,index in pages" :key='index' class='home-pages-page'>
            <a :href='item.pageUrl' target="_blank"><img :src='item.imgUrl'></a>
          </div>
        </div>
        <div id='home-club'>
          <div id='box'>
            <div id='contain'>
              <div id='home-club-text'>
                <h2>星享俱乐部</h2>
                <p>开启您的星享之旅，星星越多、会员等级越高、好礼越丰富。
                  <router-link to='/profile/aboutclub'><a href="">了解更多 ›</a></router-link>
                </p>
              </div>
              <div id='home-club-buttons'>
                <router-link to='/profile/register'>
                  <button>注册</button>
                </router-link>
                <router-link to='/profile/login'>
                  <button>登录</button>
                </router-link>
              </div>
            </div>
            <div id='home-club-img'>
              <img :src='homeClub'>
            </div>
          </div>
        </div>
        <div id='home-tmalls'>
          <div id='home-tmalls-title'>
            <h2>星巴克精选</h2><p>在星巴克天猫旗舰店发现更多咖啡心意</p>
          </div>
          <div id='home-tmalls-items'>
            <div v-for="item,index in tmallCards" :key='index' class='home-tmalls-item'>
              <div class='box'>
                <a :href="item.pageUrl" target="_blank">
                  <div class='home-tmalls-item-img'>
                    <img :src='item.imgUrl'>
                  </div>
                  <h2>{{item.head}}</h2>
                  <p>{{item.p1}}</p>
                  <p>{{item.p2}}</p>
                  <p>{{item.p3}}</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div id='home-cultures'>
          <div id='home-cultures-text'>
            <h2>1912 派克街 | 咖啡星讲堂</h2>
            <p>了解更多星巴克咖啡文化</p>
          </div>
          <div id='home-cultures-imgs'>
              <button id='home-cultures-imgs-buttonleft' :style="isShowLeft()" @click='setLeft()'><img :src="scrollLeft"></button>
              <button id='home-cultures-imgs-buttonright' :style="isShowRight()" @click='setRight()'><img :src="scrollRight"></button>
            <div id='home-cultures-imgs-longimg' :style='whereToMove()'>
              <div class='home-cultures-imgs-longimg-item' v-for="item,index in cultures" :key='index' >
                <div class='home-cultures-imgs-longimg-item-title'>{{item.title}}</div>
                <div class='home-cultures-imgs-longimg-item-text'>{{item.text}}</div>
                <div class='home-cultures-imgs-longimg-item-img'><img :src="item.imgUrl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Home from './Home'
  export default Home
</script>
<style src='./Home.less' lang='less' scoped></style>
