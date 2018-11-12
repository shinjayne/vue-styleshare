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
    "id": 1,
    "name": "Python Hood T-Shirts",
    "provider": "StyleShare",
    "price": 20000,
    "options": [
      {
        "id": 1001,
        "color": "yellow",
        "size": "S",
        "stock": 10
      },
      {
        "id": 1002,
        "color": "yellow",
        "size": "M",
        "stock": 10
      },
      {
        "id": 1003,
        "color": "yellow",
        "size": "L",
        "stock": 10
      },
      {
        "id": 1004,
        "color": "blue",
        "size": "S",
        "stock": 10
      },
      {
        "id": 1005,
        "color": "blue",
        "size": "M",
        "stock": 10
      },
      {
        "id": 1006,
        "color": "blue",
        "size": "L",
        "stock": 10
      }
    ],
    "shipping": {
      "method": "FREE",
      "price": 0,
      "canBundle": true
    }
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
