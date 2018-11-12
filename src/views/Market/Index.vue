<template>
  <base-layout title="Market" subtitle="원하는 물품을 장바구니에!">

  <!-- Goods 카드 리스트 -->
  <v-goods-card v-for="goods in getGoodsList" 
  class="goods-card"
  :key="goods.id"
  :name="goods.name"
  :provider="goods.provider"
  :price="goods.price"
  @click="$router.push({name:'goods-detail.index', query:{id:String(goods.id)}})"/>
  </base-layout>

</template>

<script>
import {mapGetters, mapActions} from 'vuex';

import BaseLayout from '@/layouts/Base';
import VH from '@/components/H/Index';
import VGoodsCard from '@/components/Card/Goods.vue';

export default {
  name: 'market-view',

  components: {
    BaseLayout,
    VH,
    VGoodsCard,
  },

  computed:{
    ...mapGetters({
      /*
      Store Getters 를 매핑합니다.
      */
      getGoodsList: 'market/getGoodsList',
    }),
  },

  methods: {
    ...mapActions({
      /*
      Store Actions 를 매핑합니다.
      */
      resetNextPageAction : 'market/resetNextPage',
      loadGoodsListFromServerAction : 'market/loadGoodsListFromServer',
    }),
    
  },

  mounted() {
    /*
    Lifecycle Hook. View 가 생성되고 바로 실행됩니다.
    */

   // 페이지를 1로 초기화시킵니다.
   this.resetNextPageAction();
   // goods list 를 불러옵니다.
   this.loadGoodsListFromServerAction();
  }
  
}
</script>

<style lang="scss" scoped>
  .goods-card{
    margin-bottom: 20px;
    cursor: pointer;
  }
</style>


