<template>
  <base-layout title="상품 정보">
  <!-- 상품정보 로드 실패시 나타날 메세지  -->
  <v-card color="red" v-if="getSelectedGoodsComplete && !getSelectedGoodsSuccess">
    상품 정보를 로드하는데에 실패하였습니다.
  </v-card>
  <!-- 상품 상세 정보 -->
  <goods-info-card
  v-if="getSelectedGoodsComplete && getSelectedGoodsSuccess"
  :name="getSelectedGoods.name"
  :provider="getSelectedGoods.provider"
  :price="getSelectedGoods.price"
  @click="toggleSlider"
  class="goods-info"
  />
  <!-- 배송비 및 묶음배송 정보 -->
  <shipping-info-card
  v-if="getSelectedGoodsComplete && getSelectedGoodsSuccess"
  :method="getSelectedGoods.shipping.method"
  :price="getSelectedGoods.shipping.price"
  :canBundle="getSelectedGoods.shipping.canBundle"
  class="shipping-info"
  />
  <!-- 옵션 선택 슬라이더 -->
  <v-slider v-if="showSlider" class="slider">
    <!-- 상단 버튼 -->
    <v-button color="white" size="big" @click="toggleSlider" class="button">닫기</v-button>
    
    <!-- 옵션 선택 Form -->
    <v-option 
    :values="getSelectedGoods.options" 
    :stringify="optionObjectToString" 
    @click="appendToSelectedOptions" 
    class="option-input"/>
    <!-- 선택된 옵션들과 수량 조정 -->
    <option-item 
    v-for="selected in selectedOptions" 
    :color="selected.option.color"
    :size="selected.option.size"
    :stock="selected.option.stock"
    :count="selected.count"
    @update:count="val=>selected.count=val"
    @popThis="popFromSelectedOptions(selected)"
    :key="selected.option.id"
    class="option-item"/>
    
    <!-- 장바구니 담기 버튼  -->
    <v-button 
    v-if="selectedOptions.length > 0" 
    color="main" 
    size="big" 
    @click="()=>{moveSelectedOptionsToMyBasket();toggleSlider();}" 
    class="button">
      장바구니에 담기
    </v-button>
    
  </v-slider>

  </base-layout>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';

import BaseLayout from '@/layouts/Base';
import VCard from '@/components/Card/Index';
import VH from '@/components/H/Index';
import VSlider from '@/components/Slider/Index';
import VButton from '@/components/Button/Index';
import VOption from '@/components/Form/Option';
import GoodsInfoCard from './GoodsInfoCard.vue';
import ShippingInfoCard from './ShippingInfoCard.vue';
import OptionItem from './OptionItem.vue';

export default {
  name: 'goods-detail-view',

  components: {
    BaseLayout,
    VCard,
    VH,
    VSlider,
    VButton,
    VOption,
    GoodsInfoCard,
    ShippingInfoCard,
    OptionItem,
  },

  props: {
    id: {
      /*
      찾으려고 하는 Goods id
      */
      type: String,
      required: false,
      default: 0,
    },
  },
  data(){
    return {
      /*
      옵션 선택 Slider 보여줄지 여부
      */
      showSlider: false,
      /*
      장바구니에 들어가기 직전인, 선택된 상품 옵션 종류 와 갯수들
      */
      selectedOptions: [
        // {
        //   count: 0,
        //   option: {id, color, size, stock}
        // }
      ],
    }
  },
  methods: {
    ...mapActions({
      /*
      Store Action Mapping
      */
      loadGoodsDetailFromServerAction: 'market/loadGoodsDetailFromServer',
      pushGoodsToMyBasketAction: 'basket/pushGoodsToMyBasket',
    }),
    /*
    옵션 선택 Slider 를 열고 닫습니다.
    */
    toggleSlider(){
      this.showSlider = !this.showSlider;
    },
    /*
    options 들 중 상품을 골라서 selectedOptions 에 추가합니다.
    */
    appendToSelectedOptions(newOption){
      // 만약 추가하려는 항목이 이미 존재한다면, 추가하지 않는다.
      const exsistOption = this.selectedOptions.find(selected => {return selected.option.id == newOption.id});
      if(!!exsistOption) 
        return
      // 만약 추가하려는 항목의 재고가 없다면, 추가하지 않는다.
      if(newOption.stock == 0)
        return

      // 일반적인 경우 selectedOptions 에 항목을 추가한다.
      this.selectedOptions.push({
        count: 0,
        option: newOption,
      });
    },
    /*
    selectedOptions 에 있는 항목중 하나를 제거합니다.
    */
    popFromSelectedOptions(targetSelected){
      // 선택 항목중 있는 항목인지 체크합니다.
      const targetIndex = this.selectedOptions.findIndex(selected => {return selected.option.id == targetSelected.option.id});

      if(targetIndex != -1)
        this.selectedOptions.splice(targetIndex,1);
    },
    /*
    selectedOptions 에 선택된 option 과 수량 정보를 내 장바구니에 기록하는 Action 을 dispatch 합니다.
    */
    moveSelectedOptionsToMyBasket(){

      // 장바구니 추가에 대한 Action 을 Dispatch 합니다.
      this.pushGoodsToMyBasketAction({
        goods: this.getSelectedGoods,
        selectedOptions: this.selectedOptions,
      });

      this.selectedOptions = [];
    },
    optionObjectToString(option) {
      /*
      option 을 String 으로 예쁘게 보여줄 방식을 정의합니다.
      */
      return "Color: " + option.color + "| Size: " + option.size + " (" + option.stock + " 개 남음)"
    },

  },

  computed:{
    ...mapGetters({
      /*
      Store Getter Mapping
      */      
      getSelectedGoods: 'market/getSelectedGoods',
      getSelectedGoodsComplete: 'market/getSelectedGoodsComplete',
      getSelectedGoodsSuccess: 'market/getSelectedGoodsSuccess',
    }),
  },

  mounted(){
    /*
    페이지 생성될때 최초로 불리는 라이프사이클 훅
    */

   // detail 값을 불러옵니다
   this.loadGoodsDetailFromServerAction({ goodsId: this.id });
  }
}
</script>

<style lang="scss" scoped>

  .goods-info{
    margin-bottom: 20px;
  }
  .slider{
    .button{
      margin-bottom: 10px;
      width: fit-content;
    }
    .option-input{
      width: 350px;
      margin-bottom: 10px;
    }
    .option-item{
      width: 350px;
      margin-bottom: 10px;
    }
  }
</style>

