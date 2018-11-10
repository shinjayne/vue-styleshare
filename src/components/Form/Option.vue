<template>
  <div class="option">
    <!-- 옵션 선택지 펼칠 수 있는 부분 -->
    <div @click="toggleSelectable" class="face">
      <slot>옵션을 선택하세요</slot> ({{values.length}}가지)
    </div>
    <!-- 펼처친 옵션 선택지 부분 -->
    <div v-if="showSelectable" class="selectable">
      <!-- 개별요소 클릭하면, 해당 요소에 대한 @click event 실행되고, 선택지는 닫힌다 -->
      <div v-for="(val, index) in values" :key="index" @click="()=>{$emit('click', val); toggleSelectable();}" class="single">
        {{val}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  /*
  Native Html 의 Option Input 과 같은 역할을 하는 Component
  */
  name: 'styleshare-option',
  props:{
    values: {
      /*
      선택지 종류
      */
      type: Array,
      required: false,
      default: ()=>[],
    },
  },

  data(){
    return {
      // 선택지 보여줄지 말지 
      showSelectable: false,
    }
  },

  methods:{
    toggleSelectable(){
      /*
      선택지를 보여주거나 끕니다.
      */
      this.showSelectable = !this.showSelectable;
    }
  }  
}
</script>

<style lang="scss" scoped>
  // Import Color set
  @import '@/assets/style/color.scss';

  .option{
    position: relative;
    color: $color-gray-900;
    font-size: 12px;
    width: 200px;

    .face{
      width: 100%;
      padding: 10px 15px;

      display: flex;
      align-items: center;

      background-color: $color-gray-0;
      border-radius: 3px;
      border: 1px solid $color-gray-400;

      cursor: pointer;

      &:hover{
        background-color: $color-gray-50;
      }
    }
    .selectable{
      position: absolute;
      top: 34px;
      max-height: 200px;
      width: 100%;

      border: 1px solid $color-gray-400;
      background-color: $color-gray-0;

      overflow-y: scroll;

      .single{
        cursor: pointer;
        &:hover{
          background-color: $color-gray-50;
        }        
      }
    }
  }
</style>

