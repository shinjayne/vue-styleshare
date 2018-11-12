/* ============
 * 장바구니 Basket Store 의 State
 * ============
 */

export default {
  /*
  selectedGoods : Object
  Detail 정보를 조회하는 Goods
  */
  selectedGoods: {
    /*
    서버로부터 로드되었는지 여부
    서버로부터의 로드가 성공인지 실패인지 여부
    */
    loadComplete: false,
    loadSuccess: false,
    /*
    실제 object 데이터
    */
    goods: null,
  },

  /*
  goodsList
  Goods 목록을 보관합니다.
  */
  goodsList: {
    /*
    goods : Array
    Goods (상품) List
    */
    goods: [],
    /*
    nextPage : Integer (or NULL)
    goods 다음 페이지에 대한 정보입니다
    */
    nextPage: 1,
  },
};
