<template>
  <div class="styleshare-popup">
    <div class="container">
      <slot>팝업 내용 기본값</slot>
    </div>
  </div>
</template>

<script>
export default {
  /*
  스타일쉐어 스토어의 기본 팝업 디자인을 정의합니다.
  */
  name: 'styleshare-popup',
}
</script>

<style lang="scss" >
  @import '@/assets/style/color.scss';
  .styleshare-popup{
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #3535358c;
    

    .container{
      display:flex;
      flex-direction: column;
      background-color: $color-gray-50;
      width: 400px;
      max-height: 400px;
      overflow-y: scroll;
      padding: 20px 30px;
      border-radius: 3px;

    }
  }
</style>
