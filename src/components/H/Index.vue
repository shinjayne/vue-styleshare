<template>
<div :class="styleClass"><slot></slot></div>
</template>

<script>
/*
Heading 과 같은 제목 레벨의 글자 크기를 표현하는 기초 컴포넌트입니다.
*/
export default {
  name: 'styleshare-heading',

  props:{
    /*
    Size : 헤딩 사이즈 크기 
    first, second, third, fourth
    */
   size: {
     type: String,
     required: false,
     default: 'first',
   },
    /*
    theme : 색상
    dark, light, red, orange
    */
    theme: {
      type: String,
      requried: false,
      default: 'dark',
    },
  },
  computed:{
    styleClass(){
      /*
      색상과 크기 지정할 class
      */
      return this.theme + ' ' + this.size;
    },
  }  
}
</script>

<style lang="scss" scoped>
  @import '@/assets/style/color.scss';

  div{
    margin: 0;
    /*
    About Size
    */
    &.first{
      font-size: 19px;
      font-weight: 700;
    }
    &.second{
      font-size: 17px;
      font-weight: 700;
    }    
    &.third{
      font-size: 15px;
      font-weight: 500;
    }   
    &.fourth{
      font-size: 13px;
      font-weight: 500;
    }    
    /*
    About Theme
    */            
    &.dark{
      color: $color-gray-900;
    }
    &.light{
      color: $color-gray-50;
    }
    &.red{
      color: $color-red;
    }
    &.orange{
      color: $color-orange;
    }    
    &.blue{
      color: $color-blue;
    }
  }
</style>

