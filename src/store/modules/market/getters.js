/* ============
 * 장바구니 Basket Store 의 Getters
 * ============
 *
 * The getters that are available on the
 * auth module.
 */

/*
getGoodsList
Store 에 있는 goods 의 list 를 조회한다.
*/
export const getGoodsList = state => state.goods;

/*
getSelectedGoods
Store 에 있는 selectedGoods 에 대한 정보를 가져온다.
*/
export const getSelectedGoods = state => state.selectedGoods;


export default {
  getGoodsList,
  getSelectedGoods,
};
