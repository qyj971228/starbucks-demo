<template>
  <div style="display:inline-block;">
    <div :id='size'>
      <div id='commody-img'>
        <!-- <img :src='commody.img'> -->
        <img v-lazy='commody.img'>
      </div>
      <div id='commody-text'>
        <p>{{commody.text}}</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Commody',
  props: [
    'commody','size'
  ],
  methods: {
    
  }
}
</script>
<style lang='less' type='text/less' scoped>
  #mini{
    height: 176px;
    width: 176px;
    text-align: center;
    // border: 1px solid black;
    position: relative;
    &:hover{
      #commody-img{
        img{
          box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 50%);
        }
      }
    }
    &:hover{
      #commody-img{
        top: 3px;
      }
      #commody-text{
        top: 140px;
      }
    }
    #commody-img{
      position: absolute;
      top: 8px;
      left: 22px;
      height: 132px;
      width: 132px;
      // border: 1px solid red;
      transition: top .2s;
      img{
        height: 100%;
        width: 100%;
        border-radius: 100px;
        box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 20%);
      }
    }
    #commody-text{
      position: absolute;
      width: 140px;
      top: 145px;
      left: 18px;
      // border: 1px solid green;
      transition: all .2s;
      p{
        margin: 0px;
        font-weight: bolder;
        color: black;
      }
    }
  }
  #standard{
    height: 180px;
    width: 180px;
    text-align: center;
    // border: 1px solid black;
    position: relative;
    &:hover{
      #commody-img{
        img{
          box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 20%);
        }
      }
    }
    &:hover{
      #commody-img{
        top: 5px;
      }
      #commody-text{
        top: 165px;
      }
    }
    #commody-img{
      position: absolute;
      top: 10px;
      left: 25px;
      height: 150px;
      width: 150px;
      // border: 1px solid red;
      transition: top .2s;
      img{
        height: 100%;
        width: 100%;
        border-radius: 100px;
        box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 50%);
      }
    }
    #commody-text{
      position: absolute;
      width: 160px;
      top: 170px;
      left: 20px;
      // border: 1px solid green;
      transition: all .2s;
      p{
        margin: 0px;
        font-weight: bolder;
        color: black;
      }
    }
  }
  
  
</style>
