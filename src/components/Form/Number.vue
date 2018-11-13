<template>
  <div class="number">
    <div
      class="down"
      @click="decrease">-</div>
    <div class="count">{{ value }}</div>
    <div
      class="up"
      @click="increase">+</div>
  </div>
</template>

<script>
export default {
  /*
  v-model 로 받은 Number value 값을 조정할 수 있는 form component 입니다.
  */
  name: 'StyleshareNumber',

  props: {
    value: {
      /*
      v-model 로 받는 값입니다.
      */
      type: Number,
      required: false,
      default: 0,
    },
    max: {
      /*
      최대값 제한을 걸 수 있습니다.
      */
      type: Number,
      required: false,
      default: 1000,
    },
    min: {
      /*
      최소값 제한을 걸 수 있습니다.
      */
      type: Number,
      required: false,
      default: -1000,
    },
  },

  mounted() {
    // 만약 v-model 초기값이 min 보다 작거나 max 보다 크다면, 조정합니다.
    if (this.value < this.min || this.value > this.max) { this.$emit('input', this.min); }
  },

  methods: {
    increase() {
      /*
      max 값과 비교하여 value 를 높입니다.
      */
      if (this.value + 1 > this.max) { return; }
      this.$emit('input', this.value + 1);
    },
    decrease() {
      /*
      max 값과 비교하여 value 를 높입니다.
      */
      if (this.value - 1 < this.min) { return; }
      this.$emit('input', this.value - 1);
    },
  },
};
</script>

<style lang="scss" scoped>
  @import '@/assets/style/color.scss';

  .number{
    display: flex;
    height: 30px;
    border: 1px soild $color-gray-100;

    .up, .down{
      width: 25px;

      display: flex;
      align-items: center;
      justify-content: center;

      background-color: $color-gray-100;
      font-size: 13px;
      font-weight: 700;
      color: $color-gray-400;

      cursor: pointer;
      &:hover{
        border: 1px solid $color-gray-100;
        background-color: $color-gray-50;
      }
    }
    .down{
      border-radius: 3px 0 0 3px;
    }
    .up{
      border-radius: 0 3px 3px 0;
    }
    .count{
      width: 30px;

      display: flex;
      align-items: center;
      justify-content: center;

      background-color: $color-gray-0;
      font-size: 15px;
      color: $color-gray-600;
    }
  }
</style>

