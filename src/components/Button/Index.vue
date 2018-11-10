<template>
  <!-- https://kr.vuejs.org/v2/guide/components.html#단일-슬롯 -->
  <div :class="'codemate-button ' + color + ' ' + size" @click="$emit('click')">
    <slot>기본값</slot>
  </div>
</template>

<script>
export default {
  name: 'styleshare-button',
  props:{
    color:{
      /*
      색깔 지정 가능
      main, white, green, on, off
      */
      type: String,
      required: false,
      default: 'main',
    },
    size:{
      /*
      타입 지정 가능
      big, small
      */
      type: String,
      required: false,
      default: 'big',
    },
  },
}
</script>

<style lang="scss" scoped>
  /*
  import Color sets 
  */
  @import '@/assets/style/color.scss';
  
  // define style
  .codemate-button{
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 3px;
    
    cursor: pointer;

    /*
    About Color Difference
    */
    &.main{
      background-color: $color-main;
      border: none;
      color: $color-main-text;
      &:hover{
        background-color: $color-main-dark;
      }          
    }
    &.white{
      background-color: $color-gray-100;
      border: 1px solid $color-gray-100;
      color: $color-gray-600;
      &:hover{
        background-color: $color-gray-50;
      }      
    }
    &.on{
      background-color: white;
      border: solid 1px #3d897f;
      color: #3d897f;
      &:hover{
        border: solid 1px #cccccc;
        color: #999999;
      }      
    }
    &.off{
      background-color: white;
      border: solid 1px #cccccc;
      color: #999999;
      &:hover{
        border: solid 1px #3d897f;  
        color: #3d897f;        
      }
    }
    /*
    About Size Differnece
    */
    &.big{
      max-height: 40px;
      padding: 11px 20px;   
      font-size: 14px;
      font-weight: 500;      
    }
    &.small{
      height: 30px;
      padding: 0px 24px;
      font-size: 12px;
      font-weight: 500;      
    }
  }
</style>


