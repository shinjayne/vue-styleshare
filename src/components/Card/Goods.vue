<template>
  <v-card>
    <v-img class="image"/>
    <v-h class="head" size="fourth">{{provider}}</v-h>
    <v-h class="head" size="second">{{name}}</v-h>
    <v-h class="head" size="third" theme="red">{{price}} 원</v-h>
    <v-button color="white" size="small" @click="$emit('click')">상세보기</v-button>
  </v-card>  
</template>

<script>
import VCard from '@/components/Card/Index';
import VH from '@/components/H/Index';
import VImg from '@/components/Img/Index';
import VButton from '@/components/Button/Index';

export default {
  /*
  상품 (Goods 정보를 담는 카드)
  */
  name: 'goods-card',

  components: {
    VCard,
    VH,
    VImg,
    VButton,
  },

  props: {
    /*
    상품의 이름
    */
    name: {
      type: String,
      required: false,
      default: '이름 없는 상품',
    },
    provider: {
      type: String,
      required: false,
      default: '이름 없는 제공자',
    },
    price: {
      type: Number,
      required: false,
      default: 0,
    }
  },
}
</script>


<style lang="scss" scoped>
  .image{
    height: 200px;
    margin-bottom: 20px;
  }
  .head{
    margin-bottom: 10px;
  }
</style>



