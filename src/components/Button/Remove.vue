<template>
  <div class="remove" @click="$emit('click')">✖︎</div>
</template>

<script>
export default {
  name: 'styleshare-remove-button',
}
</script>

<style lang="scss" scoped>
  @import '@/assets/style/color.scss';
  .remove{
    background-color: $color-gray-100;
    color: $color-gray-400;
    border-radius: 50%;
    font-size: 10px;
    width: 15px;
    height: 15px;
    display:flex;
    align-items: center;
    justify-content: center;
    
    cursor: pointer;
    &:hover{
      border: 1px solid $color-gray-100;
      background-color: $color-gray-50;
    }
  }

</style>

