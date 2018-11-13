<template>
  <base-layout
    title="Market"
    subtitle="원하는 물품을 장바구니에!"
    :scrollCallBack="loadMoreAtBottom">

    <!-- 리스트 로드 실패시 나타날 메세지  -->
    <v-card
      v-if="getGoodsListComplete && !getGoodsListSuccess"
      color="red">
      제품 리스트를 로드하는데에 실패하였습니다.
    </v-card>

    <!-- Goods 카드 리스트 -->
    <v-goods-card
      v-for="goods in getGoodsList"
      :key="goods.id"
      :name="goods.name"
      :provider="goods.provider"
      :price="goods.price"
      class="goods-card"
      @click="$router.push({name:'goods-detail.index', query:{id:String(goods.id)}})"/>
  </base-layout>

</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import BaseLayout from '@/layouts/Base';
import VCard from '@/components/Card/Index';
import VH from '@/components/H/Index';
import VGoodsCard from '@/components/Card/Goods.vue';

export default {
  name: 'MarketView',

  components: {
    BaseLayout,
    VCard,
    VH,
    VGoodsCard,
  },

  computed: {
    ...mapGetters({
      /*
      Store Getters 를 매핑합니다.
      */
      getGoodsList: 'market/getGoodsList',
      getGoodsListSuccess: 'market/getGoodsListSuccess',
      getGoodsListComplete: 'market/getGoodsListComplete',
    }),
  },

  methods: {
    ...mapActions({
      /*
      Store Actions 를 매핑합니다.
      */
      resetNextPageAction: 'market/resetNextPage',
      loadGoodsListFromServerAction: 'market/loadGoodsListFromServer',
    }),
    loadMoreAtBottom(dom, isBottom) {
      /*
      scroll 이벤트에 실행되며, 바닥에 도착하면 더 불러옵니다.
      */
      console.log(isBottom);
      if(isBottom) this.loadGoodsListFromServerAction();
    },
  },

  mounted() {
    /*
    Lifecycle Hook. View 가 생성되고 바로 실행됩니다.
    */

    // 페이지를 1로 초기화시킵니다.
    this.resetNextPageAction();
    // goods list 를 불러옵니다.
    this.loadGoodsListFromServerAction();
  },

};
</script>

<style lang="scss" scoped>
  .goods-card{
    margin-bottom: 20px;
    cursor: pointer;
  }
</style>

