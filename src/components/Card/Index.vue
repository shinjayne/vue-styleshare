<template>
  <div
    :class="'card '+ color"
    @click="$emit('click')">
    <slot/>
  </div>
</template>

<script>
export default {
  /*
  스타일쉐어 앱의 모든 카드 컴포넌트의 모양을 담당하는 기본 컴포넌트입니다.
  */
  name: 'StyleshareCard',

  props: {
    color: {
      /*
      색상 옵션
      */
      type: String,
      required: false,
      default: 'white', // red
    },
  },
};
</script>

<style lang="scss" scoped>
  // import color set
  @import '@/assets/style/color.scss';

  .card{
    padding: 20px 30px;
    background-color: $color-gray-50;

    &.red{
      background-color: $color-red-light;
    }
  }
</style>

