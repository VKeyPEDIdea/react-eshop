import Catalog from "./containers/Catalog/Catalog";
import Promotion from "./containers/Promotion/Promotion";

export const links = [
	{
		ref: '/catalog',
		name: 'Каталог',
		component: Catalog,
	},
	{
		ref: '/promo',
		name: 'Акции',
		component: Promotion,
	}
];