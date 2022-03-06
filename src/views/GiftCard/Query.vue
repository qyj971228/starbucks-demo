<template>
  <div>
    <div id='label-box'>
      <label id='label' for="number" :style="getChange()">label</label>
      <input id='text' @focus='change()' @blur="change()" type="text" :placeholder="label.placeholder">
    </div>
  </div>
</template>

<script>

export default {
  name: 'Query',
  data(){
    return{
      label:{
        isChange: false,
        top: 0,
        left: 0,
        fontSize: 25,
        backgroundColor: '',
        placeholder: ''
      },
    }
  },
  methods:{
    setLabel(top,left,fontSize,backgroundColor,text,placeholder){
      this.label.top = top
      this.label.left = left
      this.label.fontSize = fontSize
      this.label.backgroundColor = backgroundColor
      this.label.placeholder = placeholder
    },
    change(){
      if(this.label.isChange == false){
        this.label.isChange = !this.label.isChange
        this.setLabel(-15,5,20,'white','请输入内容')
      }else if(this.label.isChange == true){
        this.label.isChange = !this.label.isChange
        this.setLabel(0,0,25,'','')
      }
    },
    getChange(){
      return{
          'top': this.label.top+'px',
          'left' : this.label.left+'px',
          'font-size' : this.label.fontSize+'px',
          'background-color' : this.label.backgroundColor,
      }
    }
  }
}
</script>

<style lang='less' scoped>
  #label-box{
    position: relative;
    margin-top: 20px;
    #label{
      position: absolute;
      transition: all .2s;
    }
    #text{
      outline: none;
      line-height: 30px;
      border-radius: 3px;
      border: none;
      border-bottom: 2px solid #00A862;
    }
  }
</style>