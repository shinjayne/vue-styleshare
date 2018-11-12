/* ============
 * 장바구니 Basket Store 의 Mutation
 * ============
 */

import Vue from 'vue';
import * as types from './mutation-types';

/* eslint-disable no-param-reassign */
export default {
  [types.CONCAT_GOODS_LIST](state, { list }) {
    state.goodsList.goods = state.goodsList.goods.concat(list);
  },
  [types.CLEAR_GOODS_LIST](state) {
    state.goodsList.goods = [];
  },
  [types.CHANGE_NEXT_PAGE](state, { newNextPage }) {
    state.goodsList.nextPage = newNextPage;
  },
  [types.CHANGE_SELECTED_GOODS](state, { newGoods }) {
    state.selectedGoods.goods = newGoods;
  },
  [types.LOAD_START_SELECTED_GOODS](state) {
    state.selectedGoods.loadComplete = false;
  },
  [types.LOAD_ENDED_SELECTED_GOODS](state, { isSuccessful }) {
    state.selectedGoods.loadComplete = true;
    state.selectedGoods.loadSuccess = isSuccessful;
  },
};
