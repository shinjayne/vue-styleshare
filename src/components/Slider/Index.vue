<template>
  <div class="slider">
    <div class="solid-part">
      <div class="container">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'styleshare-slider',

}
</script>

<style lang="scss" scoped>
  @import '@/assets/style/color.scss';

  .slider{
    position: fixed;
    top: 0px;
    left: 0px;
    
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    background-color: rgba(128, 128, 128, 0.404);

    .solid-part{
      width: 100%;
      height: 300px;

      display: flex;
      flex-direction: column;
      align-items: center;

      background-color: $color-gray-50;

      overflow-y: scroll;
      .container{
        
        width: 80%;
        max-width: 700px;
        
        padding: 20px 0;

        display: flex;
        flex-direction: column;
        align-items: center;
        
        min-height: fit-content;
      }
    }
  }
</style>


