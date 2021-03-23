import Catalog from "./containers/Catalog/Catalog";
import Order from "./containers/Order/Order";
import Promotion from "./containers/Promotion/Promotion";

export const routes = [
	{
		ref: '/catalog',
		name: 'Каталог',
		component: Catalog,
	},
	{
		ref: '/promo',
		name: 'Акции',
		component: Promotion,
	},
	{
		ref: '/order',
		name: 'Корзина',
		component: Order,
	},
];