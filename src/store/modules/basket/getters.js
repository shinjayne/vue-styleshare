/* ============
 * 장바구니 Basket Store 의 Getters
 * ============
 *
 * The getters that are available on the
 * auth module.
 */

/*
 내 장바구니 목록을 조회합니다.
*/
export const getMyBasket = state => state.myBasket;

/*
장바구니에 담긴 항목 개수를 조회합니다.
*/
export const getMyBasketLength = state => state.myBasket.length;

export default {
  getMyBasket,
  getMyBasketLength,
};
