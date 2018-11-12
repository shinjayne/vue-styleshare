<template>
  <div class="base-layout">
    <!-- 내비게이션 바 -->
    <div class="nav">
      <!-- 로고 및 타이틀 -->
      <router-link :to="{name:'market.index'}">
        <v-h size="first" theme="light">StyleShare Store</v-h>
      </router-link>

      <!-- 내비게이션 버튼 -->
      <div class="buttons">
        <router-link :to="{name: 'market.index'}">
          <v-button color="main">Market</v-button>
        </router-link>
        <router-link :to="{name:'basket.index'}">
          <v-button size="big" color="white" class="basket">
            장바구니 
            <v-dot v-if="getMyBasketLength!=0" class="dot">{{getMyBasketLength}}</v-dot>
          </v-button>
        </router-link>
      </div>
    </div>
    <!-- 여기 Slot 에 각 페이지별 컨텐츠가 나타납니다!  -->
    <div class="container">
      <v-h class="title" size="first" theme="dark">{{title}}</v-h>
      <v-h v-if="validSubtitle" class="subtitle" size="third" theme="dark">{{subtitle}}</v-h>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import VH from '@/components/H/Index';
import VButton from '@/components/Button/Index';
import VDot from '@/components/Dot/Index';

export default {
  name: 'base-layout',

  components:{
    VH,
    VButton,
    VDot,
  },

  props:{
    title:{
      /*
      페이지 제목
      */
      type: String,
      required: true,
    },
    subtitle:{
      /*
      페이지 부제목
      */
     type: String, 
     required: false,
     default: "",
    },
  },

  computed:{
    ...mapGetters({
      /*
      Store 상태정보를 읽습니다.
      */
      getMyBasketLength: 'basket/getMyBasketLength',
    }),
    validSubtitle(){
      /*
      유의미한 Subtitle 인지 확인합니다.
      */
      return this.subtitle.length > 0;
    }
  }
}
</script>


<style lang="scss" scoped>
  /*
  import Color sets 
  */
  @import '@/assets/style/color.scss';

  .base-layout{
    display: flex;
    flex-direction: column;
    align-items: center;

    min-height: 100vh;
    padding: 60px 0px;

    overflow-x: hidden;
    overflow-y: scroll;

    background-color: $color-gray-100;
    

    .nav{
      position: fixed;
      top: 0px;
      left: 0px;

      width: 100vw;
      height: 50px;

      padding: 0 20px;

      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      background-color: $color-gray-600;

      color: $color-gray-50;
      .buttons{
        display: flex;
        align-items: center; 
        .basket{
          margin-left: 10px;
          .dot{
            margin-left: 10px;
          }
        }
      }
    }

    .container{
      display: flex;
      flex-direction: column;

      width: 90%;
      max-width: 700px;
      // border: 1px darkblue solid;

      .title{
        margin-bottom: 10px;
      }
      .subtitle{
        margin-bottom: 10px;
      }
    }
  }
</style>
