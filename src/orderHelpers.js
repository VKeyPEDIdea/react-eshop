import { isEmptyObj } from './utilities/';

export const checkIsAdded = (productId, basket) => {
	let result = false;
	basket.forEach(({ id }) => {
		if (id === productId) {
			result = true;
			return result;
		};
	});
	return result;
};

export const getItemCount = (productId, basket) => {
	let amount = 0;
	basket.forEach(({ id, count }) => {
		if (id === productId) {
			amount = count;
			return amount;
		};
	});
	return amount;
};

export const getBasketProductCount = basketProductList => {
	return basketProductList.reduce((count, product) => {
		return count += product.count;
	}, 0);
};

export const getBasketPrice = (basketProductList, catalogProducts) => {
	if (isEmptyObj(catalogProducts)) return 0;
	let productName;
	return basketProductList.reduce((price, product) => {
		productName = product.id;
		price += catalogProducts[productName].price * product.count;
		return price;
	}, 0);
};