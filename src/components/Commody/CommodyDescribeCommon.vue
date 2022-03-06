<template>
  <div id='commody-describe' style="overflow: hidden;">
    <div id='describe'>
      <div id='img'>
        <div id='in-img'>
          <img :src="thisList.img">
        </div>
      </div>
      <div id='text'>
        <div id='in-text'>
          <p>{{describe.name}}</p>
          <p>{{thisList.text}}</p>
          <p v-for="item,index in thisList.describe" :key='index'>{{item}}</p>

          <slot name="progress"></slot>
          <slot name="list"></slot>

        </div>
      </div>
    </div>

    <div id='buttons'>
      <button id='others-button-left' @click="moveLeft()" :style="isShowLeftButton()">
        <img :src="scrollLeft">
      </button>
      <button id='others-button-right' @click="moveRight()" :style="isShowRightButton()">
        <img :src="scrollRight">
      </button>
    </div>
    
    <div id='others'>
      <p id='guess'>猜你喜欢</p>
      <div :style='whereToMove()'>
        <div class='commody'  v-for="item,index in otherList" :key='index'>
          <router-link :to='item.path'>
            <commody :size='"mini"' :commody='item'></commody>
          </router-link>
        </div>
      </div>
    </div>
    <!-- <p>{{product}}</p> -->
  </div>
</template>
<style lang='less' type='text/less' scoped>
  #commody-describe{
    overflow: hidden;
  }
  #describe{
    margin-top: 50px;
    margin-bottom: 50px;
    width: 100%;
    #img{
      width: 50%;
      display: inline-block;
      text-align: center;
      vertical-align: middle;
      #in-img{
        margin: auto;
        width: 80%;
        height: 80%;
        img{
          height: 100%;
          width: 100%;
        }
      }
    }
    #text{
      width: 50%;
      display: inline-block;
      vertical-align: middle;
      #in-text{
        width: 80%;
        // height: 100%;
        p:nth-child(1){
          color: #C2A661;
          font-weight: bolder;
        }
        p:nth-child(2){
          font-weight: 700;
          font-size: 170%;
          margin-top: 0px;
          margin-bottom: 10px;
        }
        p:nth-child(3){
          line-height: 150%;
        }
      }
    }
  }
  // #guess{
  //   margin-left: 50px;
  //   font-size: 130%;
  // }

  #others{
    width: 2800px;
    margin-left: 30px;
    margin-bottom: 80px;
    // border: 1px solid black;
    p{
      font-size: 130%;
    }
    .commody{
      margin-left: -5px;
      // border: 1px solid black;
      display: inline-block;
    }
  }
  #buttons{
    width: 100%;
    position: relative;
    // border: 1px solid red;
    #others-button-left,#others-button-right{
      height: 28px;
      width: 28px;
      border-radius: 100px;
      animation: all 0.2s;
      z-index: 100;
      border: 1px solid white;
      background-color: white;
      box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1), 0 1px 1px 0 rgba(0, 0, 0, 0.1);
      img{
        height: 18px;
        width: 18px;
      }
    }
    #others-button-left{
      position: absolute;
      top: 115px;
      left: 20px;
      &:hover{
        left: 17px;
        animation: all 0.2s;
        box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.1), 0 5px 5px 0 rgba(0, 0, 0, 0.1);
      }
    }
    #others-button-right{
      position: absolute;
      top: 115px;
      right: 20px;
      &:hover{
        right: 17px;
        animation: all 0.2s;
        box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.1), 0 5px 5px 0 rgba(0, 0, 0, 0.1);
      }
    }
  }
  @media only screen and (max-width: 640px){
    #describe{
      margin-top: 0px;
      #img{
        width: 100%;
        #in-img{
          height: 100%;
          width: 100%;
        }
      }
      #text{
        width: 100%;
        margin: auto;
        margin-left: 30px;
         #in-text{
          width: 90%;
          p:nth-child(2){
            font-size: 150%;
          }
        }
      }
    }
  }
    
    
  
</style>
<script>

import Commody from './Commody.vue'

export default {
  name: 'CommodyDescribeCommon',
  components: {
    Commody
  },
  methods: {
    whereToMove(){
      return {
        'margin-left' :  this.moveSize + 'px',
        'transition': 'all 0.2s'
      }
    },
    moveLeft(){
      if(this.moveSize >= 0){
        this.moveSize = 0
      }else{
        this.moveSize += 450
      }
    },
    isShowLeftButton(){
      if(this.moveSize == 0){
        return {
          'display' : 'none'
        }
      }
    },
    moveRight(){
      if(this.moveSize <= -150 * this.otherList.length){
        this.moveSize = -150 * this.otherList.length
      }else{
        this.moveSize -= 450
      }
    },
    isShowRightButton(){
      if(this.moveSize == -150 * this.otherList.length){
        return {
          'display' : 'none'
        }
      }
    },
  },
  computed: {
    // 传参的形式导致直接访问丢失数据,生产环境下直接在页面创建时请求数据
    // product(){
    //   return decodeURIComponent(this.$route.query.product)
    // }
  },
  created(){
    for(let i = 0; i < this.describe.list.length; i++){
      if(this.describe.list[i].path == this.$route.path){
        this.thisList = this.describe.list[i]
      }else{
        this.otherList.push(this.describe.list[i])
      }
    }
  },
  props:[
      'describe'
  ],
  data(){
    return{
      thisList: '',
      otherList: [],
      scrollLeft: require('../../assets/icon-scroll-left.svg'),
      scrollRight: require('../../assets/icon-scroll-right.svg'),
      moveSize: 0,
    } 
  }
}
</script>

