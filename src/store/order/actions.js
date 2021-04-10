import * as actionTypes from '../actionTypes';

export const addProductToBasket = (productId, price) => {
	return {
		type: actionTypes.ADDED_PRODUCT_TO_BASKET,
		payload: {
			productId,
			price,
		}
	};
};

export const removeProductFromBasket = (productId, price) => {
	return {
		type: actionTypes.REMOVED_PRODUCT_FROM_BASKET,
		payload: {
			productId,
			price,
		}
	};
};