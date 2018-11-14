<template>
  <input 
  :placeholder="placeholder" 
  :value="value" 
  @input="$emit('input', $event.target.value)"
  @keyup.enter="$emit('enter')"
  class="styleshare-input"/>
</template>

<script>
export default {
  name: 'styleshareInput',

  props: {
    value: {
      /*
      양방향 데이터  바인딩입니다.
      */
      type: String,
      required: false,
      default: "",
    },
    placeholder: {
      /*
      placeholder 입니다.
      */
      type: String,
      required: false,
      default: "input something",
    },
  },
}
</script>

<style lang="scss" scoped>
  @import '@/assets/style/color.scss';
  .styleshare-input{
    padding: 10px 15px;
    border: 1px solid $color-gray-400;
    border-radius: 3px;
    font-size: 12px;

    &:focus{
      border: 1px solid $color-main;
      outline: none;
    }
  }
</style>

