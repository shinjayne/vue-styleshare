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
  commit(types.PUSH_GOODS_TO_BASKET, { goods, selectedOptions });
};

export default {
  pushGoodsToMyBasket,
};
