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
  [types.TOGGLE_CHECK_ITEM_ON_BASKET](state, index) {
    state.myBasket[index].checked = !state.myBasket[index].checked;
  },
  [types.CHECK_ALL_ITEMS_ON_BASKET](state) {
    state.myBasket = state.myBasket.map((selected) => {
      selected.checked = true;
      return selected;
    });
  },
  [types.UNCHECK_ALL_ITEMS_ON_BASKET](state) {
    state.myBasket = state.myBasket.map((selected) => {
      selected.checked = false;
      return selected;
    });
  },
  [types.REMOVE_GOODS_FROM_BASKET](state, index) {
    state.myBasket.splice(index, 1);
  },
  [types.REMOVE_CHECKED_FROM_BASKET](state) {
    state.myBasket = state.myBasket.filter(item => !item.checked);
  },
};
