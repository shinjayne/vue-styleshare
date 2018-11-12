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
  [types.CHANGE_NEXT_PAGE](state, { newNextPage }) {
    state.goodsList.nextPage = newNextPage;
  },
};
