<template>
  <div class="dot">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'styleshare-dot',

}
</script>

<style lang="scss" scoped>
  @import '@/assets/style/color.scss';
  .dot{
    height: 15px;
    // width: 15px;
    padding: 0 5px;
    border-radius: 7.5px;
    background-color: $color-red;
    color: $color-gray-0;
    font-size: 11px;
    font-weight: 500;
    display:flex;
    align-items: center;
    justify-content: center;
  }
</style>

