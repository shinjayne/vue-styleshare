<template>
  <base-layout title="장바구니" subtitle="요리조리 살펴보아요!">

    <!-- 전체 선택/해제 가능한 컨트롤러  -->
    <v-card class="top-card">
      <div class="left">
        <v-checkbox :value="getCheckedCount==getMyBasketLength" @click="toggleAll" class="check"/>
        전체선택/해제
      </div>
      <v-button color="white" @click="removeCheckedFromBasketAction">선택 지우기</v-button>
    </v-card>

    <!-- 장바구니 항목 목록 리스트 -->
    <goods-and-options-card
    v-for="(singleItem, index) in getMyBasket"
    :key="index"
    :name="singleItem.goods.name"
    :provider="singleItem.goods.provider"
    :price="singleItem.goods.price"
    :hasCheckedBrother="getSelectedHasCheckedCheaperShipping(index)"
    :canBundle="singleItem.goods.shipping.canBundle"
    :shippingPrice="singleItem.goods.shipping.price"
    :selected-options="singleItem.selectedOptions"
    :checked="singleItem.checked"
    @check="checkSingleItemOnBasketAction({index})"
    @remove="removeGoodsFromBasketAction({index})"
    class="go-card"
    />

    <v-card class="bottom-card">
      <v-h size="second">선택된 총액</v-h>
      <v-h size="third" theme="red">{{getCheckedPrice}} 원</v-h>
      <v-button>구매하기</v-button>
    </v-card>
  </base-layout>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import BaseLayout from '@/layouts/Base.vue';
import VCard from '@/components/Card/Index';
import VH from '@/components/H/Index';
import VCheckbox from '@/components/Form/Checkbox.vue';
import VButton from '@/components/Button/Index';
import GoodsAndOptionsCard from './GoodsAndOptionsCard.vue';

export default {
  /*
  내 장바구니를 볼 수 있는 페이지입니다.
  */
  name: 'basket-view',
  
  components:{
    BaseLayout,
    VCard,
    VH,
    VCheckbox,
    VButton,
    GoodsAndOptionsCard,
  },

  computed:{
    ...mapGetters({
      getMyBasket: 'basket/getMyBasket',
      getMyBasketLength: 'basket/getMyBasketLength',
      getCheckedCount: 'basket/getCheckedCount',
      getSelectedHasCheckedCheaperShipping: 'basket/getSelectedHasCheckedCheaperShipping',
      getCheckedPrice: 'basket/getCheckedPrice',
    }),
  },

  methods: {
    ...mapActions({
      checkSingleItemOnBasketAction: 'basket/checkSingleItemOnBasket',
      checkAllOnBasketAction: 'basket/checkAllOnBasket',
      unCheckAllOnBasketAction: 'basket/unCheckAllOnBasket',
      removeGoodsFromBasketAction: 'basket/removeGoodsFromBasket',
      removeCheckedFromBasketAction: 'basket/removeCheckedFromBasket',
    }),
    toggleAll(){
      /*
      장바구니의 모든 항목에 대해 체크박스를 선택/해제합니다.
      */
      if(this.getCheckedCount == 0)
        this.checkAllOnBasketAction();
      else
        this.unCheckAllOnBasketAction();
    },
  }
}
</script>

<style lang="scss" scoped>
  .top-card{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    .left{
      display: flex;
      align-items: center;
      .check{
        margin-right: 10px;
      }
    }
  }
  .go-card{
    margin-bottom: 20px;
  }
</style>
