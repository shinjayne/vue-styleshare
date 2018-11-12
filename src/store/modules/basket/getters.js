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
장바구니 해당 index 의 항목이 "배송비 면제 대상인지" 를 확인합니다.
같은 판매사의 제품중 1체크되어있고 2묶음 배송 가능하고 3배송비가 더 싼 항목이 존재하면 true 입니다.
boolean 값을 리턴합니다.
*/
export const getSelectedHasCheckedCheaperShipping = state => (index) => {
  const selected = state.myBasket[index];
  const myShippingPrice = selected.goods.shipping.price;

  let hasBrother = false;

  // 내가 묶음 배송 대상이 아니라면 중단
  if (!selected.goods.shipping.canBundle || !selected.checked) return hasBrother;

  const len = state.myBasket.length;
  for (let i = 0; i < len; i += 1) {
    const target = state.myBasket[i];
    const shippingPrice = target.goods.shipping.price;

    // 상대가 묶음 배송 대상이 아니라면 패스
    if (!target.goods.shipping.canBundle || !target.checked) continue;

    if (target.goods.provider === selected.goods.provider) {
      // 판매자가 같다면

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
export const getCheckedShippingPrice = (state) => {
  let result = 0;

  // cheapest shipping object 키는 각 provider 입니다.
  const cheapestShippingEachProvider = {};


  state.myBasket.map((selected) => {
    // 체크된 대상에 대해서
    if (selected.checked) {
      const competitorPrice = cheapestShippingEachProvider[selected.goods.provider];
      
      if (!selected.goods.shipping.canBundle) {
        // bundle 대상이 아니면 운송비용에 바로 합산합니다.
        result += selected.goods.shipping.price;
      } else if (!competitorPrice) {
        // bundle 대상이지만 아직 비교 대상이 없다면, 시초가 됩ㄴ다.
        cheapestShippingEachProvider[selected.goods.provider] = selected.goods.shipping.price;
      } else if (competitorPrice > selected.goods.shipping.price) {
        // bundle 대상이고 비교 대상이 있다면, 더 싸면 대체하고 아니면 넘어갑니다.
        cheapestShippingEachProvider[selected.goods.provider] = selected.goods.shipping.price;
      }
    }
    return selected;
  });

  // 마지막 합산입니다.
  Object.values(cheapestShippingEachProvider).map((val) => {
    result += val;
    return val;
  });

  // 결과값을 반환합니다.
  return result;
};

export default {
  getMyBasket,
  getMyBasketLength,
  getSelectedHasCheckedCheaperShipping,
  getCheckedCount,
  getCheckedPrice,
  getCheckedShippingPrice,
};
