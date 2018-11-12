<template>
  <div></div>
</template>

<script>
/*
이미지 표시를 담당하는 기초 컴포넌트입니다.
*/
export default {
  name: 'styleshare-img',
}
</script>

<style lang="scss" scoped>
  @import '@/assets/style/color.scss';
  div{
    border: 1px solid $color-gray-100;
    border-radius: 3px;

    background-color: $color-gray-400;     
  }
</style>
