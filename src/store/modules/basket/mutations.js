/* ============
 * 장바구니 Basket Store 의 Mutation
 * ============
 */

import Vue from 'vue';
import * as types from './mutation-types';

/* eslint-disable no-param-reassign */
export default {
  [types.PUSH_GOODS_TO_BASKET](state, goodsAndOptions) {
    state.myBasket.push(goodsAndOptions);
  },
};
