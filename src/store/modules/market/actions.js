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
  commit(types.CLEAR_GOODS_LIST);
};

export const loadGoodsListFromServer = async ({ commit, getters }) => {
  /*
  서버로부터 goods list 들을 불러오고, store 에 저장합니다
  */
  // 다음 페이지가 없다면 실행하지 않는다
  if (!getters.getGoodsListNextPage) return;

  // 로드를 시작한다.
  commit(types.LOAD_START_GOODS_LIST);

  const goodsProxy = new GoodsProxy();

  // parameter 설정
  // 다음 페이지 정보를 가져와서  요청 parameter 로 설정한다.
  goodsProxy.setParameters({
    page: getters.getGoodsListNextPage,
  });

  let isSuccessful = false;
  try {
    // listGoods API Call 을 수행하고, 받은 정보를 state 에 기록한다.
    const response = await goodsProxy.listGoods();
    const { results, next } = response;

    commit(types.CONCAT_GOODS_LIST, { list: results });
    if (!next) commit(types.CHANGE_NEXT_PAGE, { newNextPage: null });
    else commit(types.CHANGE_NEXT_PAGE, { newNextPage: getters.getGoodsListNextPage + 1 });
    isSuccessful = true;
  } catch (e) {
    // 실패하면 console 에 남긴다.
    console.log(e);
    isSuccessful = false;
  }
  // 로드가 끝났음과 요청 결과의 성공과 실패를 알린다.
  commit(types.LOAD_ENDED_GOODS_LIST, { isSuccessful });
};

export const loadGoodsDetailFromServer = async ({ commit }, { goodsId }) => {
  /*
  서버로부터 하나의 goods 에 대한 세부 정보들을 불러옵니다.
  */

  // 로드를 시작한다.
  commit(types.LOAD_START_SELECTED_GOODS);

  const goodsProxy = new GoodsProxy();

  let isSuccessful = false;
  try {
    // retrieveGoods API Call 을 수행하고 받은 정보를 state 에 기록한다.
    const goods = await goodsProxy.retrieveGoods({ goodsId });
    commit(types.CHANGE_SELECTED_GOODS, { newGoods: goods });
    isSuccessful = true;
  } catch (e) {
    console.log(e);
    isSuccessful = false;
  }

  // 로드가 끝났음과 요청 결과의 성공과 실패를 알린다.
  commit(types.LOAD_ENDED_SELECTED_GOODS, { isSuccessful });
};

export default {
  resetNextPage,
  loadGoodsListFromServer,
  loadGoodsDetailFromServer,
};
