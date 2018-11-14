<template>
  <base-layout
    title="Market"
    subtitle="원하는 물품을 장바구니에!"
    :scrollCallBack="loadMoreAtBottom">
    
    <!-- 검색창 -->
    <div class="search">
      <v-input placeholder="상품을 검색해보세요!" @input="val=>setSearchKeyAction({newSearchKey:val})" @enter="loadAgain" class="input"/>
      <v-button @click="loadAgain">검색</v-button>
    </div>
    
    <!-- 리스트 로드 실패시 나타날 메세지  -->
    <v-card
      v-if="getGoodsListComplete && !getGoodsListSuccess"
      color="red">
      제품 리스트를 로드하는데에 실패하였습니다.
    </v-card>

    <!-- Goods 카드 리스트 -->
    <v-goods-card
      v-for="(goods, index) in getGoodsList"
      :key="index"
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
import VInput from '@/components/Form/Input.vue';
import VButton from '@/components/Button/Index.vue';
import VGoodsCard from '@/components/Card/Goods.vue';

export default {
  name: 'MarketView',

  components: {
    BaseLayout,
    VCard,
    VH,
    VInput,
    VButton,
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

  data() {
    return {
      searchKey: "",
      isEditing: false,
    }
  },

  methods: {
    ...mapActions({
      /*
      Store Actions 를 매핑합니다.
      */
      resetNextPageAction: 'market/resetNextPage',
      setSearchKeyAction: 'market/setSearchKey',
      loadGoodsListFromServerAction: 'market/loadGoodsListFromServer',
    }),
    loadMoreAtBottom(dom, isBottom) {
      /*
      scroll 이벤트에 실행되며, 바닥에 도착하면 더 불러옵니다.
      */
      if(isBottom) this.loadGoodsListFromServerAction();
    },
    async loadAgain() {
      /*
      searchKey 를 변경하고 다시 검색한다.
      */
      await this.resetNextPageAction();
      this.loadGoodsListFromServerAction();
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
  .search{
    display: flex;
    justify-content: flex-start;
    min-height: fit-content;
    margin-bottom: 20px;
    .input{
      width:300px;
      margin-right: 10px;
    }
  }
  .goods-card{
    margin-bottom: 20px;
    cursor: pointer;
  }
</style>

