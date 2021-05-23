import { isEmptyObj } from './utilities/shared';

export const checkIsAdded = (id, basket) => {
	let result = false;
	basket.forEach(product => {
		if (Object.keys(product).includes(id)) {
			result = true;
			return result;
		};
	});
	return result;
};

export const getItemCount = (id, basket) => {
	let count = 0;
	basket.forEach(product => {
		if (Object.keys(product).includes(id)) {
			count = product[id];
			return count;
		};
	});
	return count;
};

export const getBasketProductCount = basketProductList => {
	return basketProductList.reduce((count, product) => {
		return count += Object.values(product)[0];
	}, 0);
}

export const getBasketPrice = (basketProductList , catalogProducts) => {
	if (isEmptyObj(catalogProducts)) return 0;
	let productName;
	return basketProductList.reduce((price, product) => {
		productName = Object.keys(product)[0];
		price += catalogProducts[productName].price * Object.values(product);
		return price;
	}, 0);
};