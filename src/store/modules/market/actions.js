/* ============
 * 장바구니 Basket Store 관련 Action
 * ============
 */

import Vue from 'vue';
import store from '@/store';

import GoodsProxy from '@/proxies/GoodsProxy';

import * as types from './mutation-types';


export const resetNextPage = async ({ commit }) => {
  /*
  nextPage 를 1로 초기화시킵니다
  */
  commit(types.CHANGE_NEXT_PAGE, { newNextPage: 1 });
};

export const loadGoodsListFromServer = async ({ commit, getters }) => {
  /*
  서버로부터 goods list 들을 불러오고, store 에 저장합니다
  */
  const goodsProxy = new GoodsProxy();

  // parameter 설정
  // 다음 페이지를 가져온다.
  goodsProxy.setParameters({
    page: getters.getGoodsListNextPage,
  });

  try {
    const response = await goodsProxy.listGoods();
    const { results, next } = response;

    commit(types.CONCAT_GOODS_LIST, { list: results });
    commit(types.CHANGE_NEXT_PAGE, { newNextPage: next });
  } catch (e) {
    console.log(e);
  }
};

export default {
  resetNextPage,
  loadGoodsListFromServer,
};
