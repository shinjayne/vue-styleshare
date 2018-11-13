<template>
  <base-layout
    title="장바구니"
    subtitle="요리조리 살펴보아요!">

    <!-- 전체 선택/해제 가능한 컨트롤러  -->
    <v-card class="top-card">
      <div class="left">
        <v-checkbox
          :value="getCheckedCount==getMyBasketLength"
          class="check"
          @click="toggleAll"/>
        전체선택/해제
      </div>
      <v-button
        color="white"
        @click="removeCheckedFromBasketAction">선택 지우기</v-button>
    </v-card>

    <!-- 장바구니 항목 목록 리스트 -->
    <goods-and-options-card
      v-for="(singleItem, index) in getMyBasket"
      :key="index"
      :name="singleItem.goods.name"
      :provider="singleItem.goods.provider"
      :price="singleItem.goods.price"
      :has-checked-brother="getSelectedHasCheckedCheaperShipping(index)"
      :can-bundle="singleItem.goods.shipping.canBundle"
      :shipping-price="singleItem.goods.shipping.price"
      :selected-options="singleItem.selectedOptions"
      :checked="singleItem.checked"
      class="go-card"
      @check="checkSingleItemOnBasketAction({index})"
      @remove="removeGoodsFromBasketAction({index})"
    />

    <!-- 배송비 및 상품금액 총액 보여주기 -->
    <v-card class="bottom-card">
      <v-h
        size="third"
        class="row">상품 총액</v-h>
      <v-h
        size="third"
        theme="red"
        class="row">{{ getCheckedPrice }} 원</v-h>
      <v-h
        size="third"
        class="row">배송비 총액</v-h>
      <v-h
        size="third"
        theme="red"
        class="row">{{ getCheckedShippingPrice }} 원</v-h>
      <v-h
        size="second"
        class="row">합산 총액</v-h>
      <v-h
        size="third"
        theme="red"
        class="row">{{ getCheckedPrice + getCheckedShippingPrice }} 원</v-h>
      <v-button @click="togglePopup">구매하기</v-button>
    </v-card>

    <!-- 구매 확정 의사 묻는 팝업 -->
    <v-popup v-if="showPopup">
      <div class="confirm">
        정말로 구매하시겠습니까?
        <div class="button">
          <v-button
            color="white"
            class="cancel"
            @click="togglePopup">취소</v-button>
          <v-button color="main">확인</v-button>
        </div>
      </div>
    </v-popup>
  </base-layout>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import BaseLayout from '@/layouts/Base.vue';
import VCard from '@/components/Card/Index';
import VH from '@/components/H/Index';
import VCheckbox from '@/components/Form/Checkbox.vue';
import VButton from '@/components/Button/Index';
import VPopup from '@/components/Popup/Index';
import GoodsAndOptionsCard from './GoodsAndOptionsCard.vue';

export default {
  /*
  내 장바구니를 볼 수 있는 페이지입니다.
  */
  name: 'BasketView',

  components: {
    BaseLayout,
    VCard,
    VH,
    VCheckbox,
    VButton,
    VPopup,
    GoodsAndOptionsCard,
  },

  data() {
    return {
      /*
      확정 구매 의사 묻는 팝업 보여줄지
      */
      showPopup: false,
    };
  },
  computed: {
    ...mapGetters({
      getMyBasket: 'basket/getMyBasket',
      getMyBasketLength: 'basket/getMyBasketLength',
      getCheckedCount: 'basket/getCheckedCount',
      getSelectedHasCheckedCheaperShipping: 'basket/getSelectedHasCheckedCheaperShipping',
      getCheckedPrice: 'basket/getCheckedPrice',
      getCheckedShippingPrice: 'basket/getCheckedShippingPrice',
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
    toggleAll() {
      /*
      장바구니의 모든 항목에 대해 체크박스를 선택/해제합니다.
      */
      if (this.getCheckedCount == 0) { this.checkAllOnBasketAction(); } else { this.unCheckAllOnBasketAction(); }
    },
    togglePopup() {
      /*
      확정 구매 의사 팝업을 열고 닫습니다.
      */
      this.showPopup = !this.showPopup;
    },
  },
};
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
  .bottom-card{
    .row{
      margin-bottom: 10px;
    }
  }
  .confirm{
    display: flex;
    flex-direction: column;
    align-items: center;
    .button{
      margin-top: 20px;
      display:flex;
      .cancel{
        margin-right: 10px;
      }
    }
  }

</style>
