<template>
  <div :class="'remove ' + size" @click="$emit('click')">✖︎</div>
</template>

<script>
export default {
  name: 'styleshare-remove-button',

  props:{
    size:{
      /*
      삭제 버튼의 크기를 지정합니다. 
      big, small
      */
      type: String,
      required:false,
      default: 'small',
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '@/assets/style/color.scss';
  .remove{
    background-color: $color-gray-100;
    color: $color-gray-400;
    border-radius: 50%;
    font-size: 10px;

    display:flex;
    align-items: center;
    justify-content: center;
    
    cursor: pointer;
    &:hover{
      border: 1px solid $color-gray-100;
      background-color: $color-gray-50;
    }
  }
  .big{
    width: 20px;
    height: 20px;
  }
  .small{
    width: 15px;
    height: 15px;
  }  

</style>

