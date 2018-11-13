/* ============
 * Routes File
 * ============
 *
 * The routes and redirects are defined in this file.
 */

export default [
  // Market
  {
    path: '/market',
    name: 'market.index',
    component: () => import('@/views/Market/Index.vue'),

    // If the user needs to be authenticated to view this page
    meta: {
      auth: false,
    },
  },
  // Goods Detail
  {
    path: '/goods-detail',
    name: 'goods-detail.index',
    component: () => import('@/views/GoodsDetail/Index.vue'),

    props: route => ({
      id: route.query.id,
    }),

    // If the user needs to be authenticated to view this page
    meta: {
      auth: false,
    },
  },
  // 내 장바구니 페이지
  {
    path: '/basket',
    name: 'basket.index',
    component: () => import('@/views/Basket/Index.vue'),

    // If the user needs to be authenticated to view this page
    meta: {
      auth: false,
    },
  },

  // 모든 페이지는 market 으로 통한다.
  {
    path: '/*',
    redirect: '/market',
  },
];
