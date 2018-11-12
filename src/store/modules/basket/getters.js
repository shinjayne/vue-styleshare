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
장바구니 해당 index 의 제품의 provider가(체크된 항목들 중) "유일하지 않고 더 싼 게 존재하는" => 즉 "묶음 배송 대상인" 지를 확인하고
boolean 값을 리턴합니다.
*/
export const getSelectedHasCheckedCheaperShipping = state => (index) => {
  const selected = state.myBasket[index];
  const myShippingPrice = selected.goods.shipping.price;
  const len = state.myBasket.length;

  let hasBrother = false;
  for (let i = 0; i < len; i += 1) {
    const target = state.myBasket[i];
    const shippingPrice = target.goods.shipping.price;
    if ((target.goods.provider === selected.goods.provider) && target.checked) {
      // 판매자가 같은데, 체크되어있는 상대라면

      // 나보다 가격이 싼 상대인지 확인
      if (myShippingPrice > shippingPrice) hasBrother = true;
      // 가격이 같다면 나보다 앞선 상대인지 확인
      else if ((myShippingPrice === shippingPrice) && (i < index)) hasBrother = true;
    }
  }
  return hasBrother;
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

/*
체크된 항목들에 대한 운송 비용을 합산합니다.
*/

export default {
  getMyBasket,
  getMyBasketLength,
  getSelectedHasCheckedCheaperShipping,
  getCheckedCount,
  getCheckedPrice,
};
