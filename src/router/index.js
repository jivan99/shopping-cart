import Vue from 'vue';
import VueRouter from 'vue-router';

import CartList from '@/components/cart/CartList.vue';
import ProductList from '@/components/product/ProductList.vue';
import ProductItem from '@/components/product/ProductItem.vue';
import NotFound from '@/components/NotFound.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/cart',
		component: CartList,
	},
	{
		path: '/products',
		component: ProductList,
  },
  {
    path: '/products/:id',
    component: ProductItem,
    props: true
  },
	{
		path: '/',
		component: ProductList,
	},
	{
		path: '*',
		component: NotFound,
	},
];

export default new VueRouter({
	mode: 'history',
	routes,
});
