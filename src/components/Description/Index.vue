<template>
  <div class="description">
    <slot/>
  </div>
</template>

<script>
export default {
  /*
  줄글 설명에 대한
  */
  name: 'StyleshareDescription',

};
</script>

<style lang="scss" scoped>
  @import '@/assets/style/color.scss';

  .description{
    padding: 10px 15px;

    background-color: $color-gray-100;

    font-size: 11px;
    font-weight: 300;
    line-height: 2;
    font-color: $color-gray-600;
  }
</style>

