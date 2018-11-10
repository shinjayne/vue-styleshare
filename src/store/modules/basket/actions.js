/* ============
 * 장바구니 Basket Store 관련 Action
 * ============
 */

import Vue from 'vue';
import store from '@/store';
import * as types from './mutation-types';

export const pushGoodsToMyBasket = ({ commit }, { goods, selectedOptions }) => {
  /*
  goods 정보와 옵션 선택 정보를 내 장바구니에 넣습니다.
  */
  commit(types.PUSH_GOODS_TO_BASKET, { goods, selectedOptions, checked: true });
};

export const checkSingleItemOnBasket = ({ commit }, { index }) => {
  /*
  my Basket 내 장바구니에서 아이템 하나를 "선택" 합니다.
  */
  commit(types.TOGGLE_CHECK_ITEM_ON_BASKET, index);
};

export const checkAllOnBasket = ({ commit }) => {
  /*
  내 장바구니의 모든 아이템을 선택 상태로 바꿉니다.
  */
  commit(types.CHECK_ALL_ITEMS_ON_BASKET);
};

export const unCheckAllOnBasket = ({ commit }) => {
  /*
  내 장바구니의 모든 아이템을 비선택 상태로 바꿉니다.
  */
  commit(types.UNCHECK_ALL_ITEMS_ON_BASKET);
};

export const removeGoodsFromBasket = ({ commit }, { index }) => {
  /*
  장바구니에서 항목 하나를 제거합니다.
  */
  commit(types.REMOVE_GOODS_FROM_BASKET, index);
};

export const removeCheckedFromBasket = ({ commit }) => {
  /*
  장바구니에서 선택된 항목을 모두 제거합니다.
  */
  commit(types.REMOVE_CHECKED_FROM_BASKET);
};

export default {
  pushGoodsToMyBasket,
  checkSingleItemOnBasket,
  checkAllOnBasket,
  unCheckAllOnBasket,
  removeGoodsFromBasket,
  removeCheckedFromBasket,
};
