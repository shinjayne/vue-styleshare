/* ============
 * 장바구니 Basket Store 의 Mutation
 * ============
 */

import Vue from 'vue';
import * as types from './mutation-types';

/* eslint-disable no-param-reassign */
export default {
  [types.PUSH_GOODS_TO_BASKET](state, goodsAndOptions) {
    // find same goods
    const index = state.myBasket.findIndex(obj => obj.goods.id === goodsAndOptions.goods.id);
    // 같은 goods 가 없다면 새로운 goods 추가
    if (index < 0) state.myBasket.push(goodsAndOptions);
    else {
      // 같은 goods 가 있다면 selectedOptions 를 조정
      const sameGoods = state.myBasket[index];
      goodsAndOptions.selectedOptions.map((newSelected) => {
        const oldSelectedIndex = sameGoods.selectedOptions.findIndex(candidate => candidate.option.id === newSelected.option.id);
        // 같은 option 없다면 새로운 selectedOption 추가
        if (oldSelectedIndex < 0) sameGoods.selectedOptions.push(newSelected);
        else {
          // 같은 option 있다면  selectedOptions.count 만 조정
          sameGoods.selectedOptions[oldSelectedIndex].count += newSelected.count;
        }
        return newSelected;
      });
    }
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
