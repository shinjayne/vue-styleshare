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
export const getGoodsList = state => state.goodsList.goods;

/*
getGoodsListNextPage
goods list 의 다음 페이지 번호를 조회한다.
*/
export const getGoodsListNextPage = state => state.goodsList.nextPage;

/*
getGoodsListComplete
goodsList 로드 요청이 끝난는지를 확인합니다.
*/
export const getGoodsListComplete = state => state.goodsList.loadComplete;

/*
getGoodsListSuccess
goodsList 로드 요청이 성공적이였는지 확인합니다.
*/
export const getGoodsListSuccess = state => state.goodsList.loadSuccess;

/*
getSelectedGoods
Store 에 있는 selectedGoods 에 대한 정보를 가져온다.
*/
export const getSelectedGoods = state => state.selectedGoods.goods;

/*
getSelectedGoodsComplete
selectedGoods 로드 요청이 끝난는지를 확인합니다.
*/
export const getSelectedGoodsComplete = state => state.selectedGoods.loadComplete;

/*
getSelectedGoodsSuccess
selectedGoods 로드 요청이 성공적이였는지 확인합니다.
*/
export const getSelectedGoodsSuccess = state => state.selectedGoods.loadSuccess;

export default {
  getGoodsList,
  getGoodsListNextPage,
  getGoodsListComplete,
  getGoodsListSuccess,
  getSelectedGoods,
  getSelectedGoodsComplete,
  getSelectedGoodsSuccess,
};
