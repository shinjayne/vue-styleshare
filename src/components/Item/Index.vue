<template>
  <div class="item" @click="$emit('click')">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'styleshare-item',
}
</script>

<style lang="scss" scoped>
  // import color set
  @import '@/assets/style/color.scss';

  .item{
    padding: 10px 15px;
    background-color: $color-gray-50;
    border: 1px solid $color-gray-100;
    border-radius: 3px;
  }
</style>


