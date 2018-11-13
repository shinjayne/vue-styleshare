<template>
  <div
    class="item"
    @click="$emit('click')">
    <slot/>
  </div>
</template>

<script>
/*
Item 을 나타내는 모습을 띄는 기초 컴포넌트입니다.
*/
export default {
  name: 'StyleshareItem',
};
</script>

<style lang="scss" scoped>
  // import color set
  @import '@/assets/style/color.scss';

  .item{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 15px;
    background-color: $color-gray-50;
    border: 1px solid $color-gray-100;
    border-radius: 3px;
  }
</style>

