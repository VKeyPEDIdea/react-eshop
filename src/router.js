import Catalog from "./containers/Catalog/Catalog";
import ProductDetail from "./containers/Catalog/ProductDetail/ProductDetail";
import Order from "./containers/Order/Order";
import Promotion from "./containers/Promotion/Promotion";
import UserProfile from './containers/UserProfile/UserProfile';

export const typicalRoutes = [
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
];

export const singularRoutes = [
	{
		ref: '/order',
		name: 'Корзина',
		component: Order,
	},
	{
		ref: '/catalog/product',
		name: 'Страница товара',
		component: ProductDetail,
	},
	{
		ref: '/profile',
		name: 'Личный профиль',
		component: UserProfile,
	}
];