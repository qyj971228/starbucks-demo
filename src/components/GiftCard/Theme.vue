<template>
<div style="display:inline-blick;">
  <div id='mini'>
      <div id='theme-in-box'>
        <p id='theme-title'>{{item.title}}</p>
        <p id='theme-img'><img :src="item.img" alt=""></p>
        <p id='theme-describe' v-for="describe,index in item.describe" :key='index'>{{describe}}</p>
      </div>
    </div>
</div>
    
</template>

<script>

export default {
  name: 'Theme',
  props:['item']
}
</script>
<style lang='less' scoped>
  #mini{
    width: 100%;
    position: relative;
    display: inline-block;
    // margin: 20px 10px;
    #theme-in-box{
      border-radius: 3px;
      overflow: hidden;
      position: absolute;
      top: 3px;
      padding-bottom: 20px;
      transition: all .2s;
      box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 20%);
      &:hover{
        top: 0px;
        transition: all .2s;
        box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 30%);
      }
      #theme-title{
        position: absolute;
        top: 5px;
        left: 0px;
        height: 25px;
        background: #C2A661;
        display: inline-block;
        padding: 4px 12px;
        color: white;
        margin: 0;
      }
      #theme-img{
        overflow: hidden;
        margin: 0;
        img{
          height: 100%;
          width: 100%;
        }
      }
      #theme-describe{
        margin-left: 20px;
        opacity: 0.7;
        line-height: 70%;
      }
    }
  }
</style>