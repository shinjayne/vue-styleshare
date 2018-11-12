import Proxy from './Proxy';

class GoodsProxy extends Proxy {
  /**
   * The constructor for the GoodsProxy.
   *
   * @param {Object} parameters The query parameters.
   */
  constructor(parameters = {}) {
    super('goods', parameters);
  }
  listGoods() {
    /*
    LIST Goods API Endpoint 에 접근합니다.
    */
    return this.submit('get', `${this.endpoint}/goods/`);
  }
  retrieveGoods({ goodsId }) {
    /*
    Retrieve Goods API Endpoint 에 접근합니다.
    */
    return this.submit('get', `${this.endpoint}/goods/${goodsId}/`);
  }
}

export default GoodsProxy;
