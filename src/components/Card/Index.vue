<template>
  <div class="card" @click="$emit('click')">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'styleshare-card',
}
</script>

<style lang="scss" scoped>
  // import color set
  @import '@/assets/style/color.scss';

  .card{
    padding: 20px 30px;
    background-color: $color-gray-50;
  }
</style>


