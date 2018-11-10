<template>
  <div :class="String(value) + ' checkbox'" @click="$emit('input', !value); $emit('click');">
    <div v-if="value">✔︎</div>
  </div>
</template>

<script>
export default {
  /*
  v-model 을 이용해 true, false 를 binding 할 수 있는 체크박스 컴포넌트입니다.
  */
  name: 'styleshare-checkbox',

  props:{
    value:{
      /*
      v-model 로 바인딩되는 boolean 값
      */
      type: Boolean,
      required: false,
      default: false,
    },
  }
}
</script>

<style lang="scss" scoped>
  @import '@/assets/style/color.scss';
  .false{
    border: 1px solid $color-gray-400;
    background-color: $color-gray-100;
    &:hover{
      background-color: $color-main;
    }    
  }
  .true{
    color: $color-gray-0;
    background-color: $color-main;

    &:hover{
      background-color: $color-main-dark;
    }
  }
  .checkbox{
    width: 25px;
    height: 25px;
    border-radius: 3px;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
  }
</style>


