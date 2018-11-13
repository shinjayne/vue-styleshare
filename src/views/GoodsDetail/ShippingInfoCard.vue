<template>
  <v-card>
    <v-h
      class="head"
      size="fourth">배송비</v-h>
    <v-h
      v-if="!isFreeShipping"
      class="head"
      size="third"
      theme="red">{{ price }} 원</v-h>
    <v-h
      v-else
      class="head"
      size="third"
      theme="red">무료</v-h>
    <v-h
      class="head"
      size="fourth">묶음배송 가능여부</v-h>
    <v-h
      v-if="canBundle"
      class="head"
      size="third"
      theme="orange">가능</v-h>
    <v-h
      v-else
      class="head"
      size="third"
      theme="orange">불가능</v-h>
    <v-description>
      - 가능시 묶음배송가능한 상품의 배송비는 한번만 부과.  <br>
      - 묶음 배송가능 상품들의 배송 비용이 다를경우 최저금액을 적용. <br>
      - 불가능시 상품마다 배송비 부과 <br>
    </v-description>
  </v-card>
</template>

<script>
import VCard from '@/components/Card/Index';
import VH from '@/components/H/Index';
import VDescription from '@/components/Description/Index';

export default {
  /*
  Goods Detail 페이지에 종속된 배송 정책 카드
  */
  name: 'ShippingInfoCard',

  components: {
    VCard,
    VH,
    VDescription,
  },

  props: {
    /*
    배송비 부과 방식 (FREE, PREPAY)
    */
    method: {
      type: String,
      required: false,
      default: 'FREE',
    },
    /*
    가격
    */
    price: {
      type: Number,
      required: false,
      default: 0,
    },
    /*
    같은 입점사 상품의 묶음배송 가능 여부
    */
    canBundle: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    isFreeShipping() {
      return this.method == 'FREE';
    },
  },
};
</script>


<style lang="scss" scoped>
  .head{
    margin-bottom: 10px;
  }
</style>

