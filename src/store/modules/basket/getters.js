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

/*
장바구니에 체크된 항목 개수를 조회합니다.
*/
export const getCheckedCount = (state) => {
  let result = 0;
  state.myBasket.map((selected) => {
    result += selected.checked ? 1 : 0;
    return selected;
  });
  return result;
};

/*
체크된 항목들에 대한 가격을 합산합니다.
*/
export const getCheckedPrice = (state) => {
  let result = 0;
  state.myBasket.map((selected) => {
    if (selected.checked) {
      let howMany = 0;
      selected.selectedOptions.map((op) => {
        howMany += op.count;
        return op;
      });
      result += selected.goods.price * howMany;
    }
    return selected;
  });
  return result;
};

export default {
  getMyBasket,
  getMyBasketLength,
  getCheckedCount,
  getCheckedPrice,
};
