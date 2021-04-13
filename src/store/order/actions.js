import * as actionTypes from '../actionTypes';

export const addProductToBasket = (productId) => {
	return {
		type: actionTypes.ADDED_PRODUCT_TO_BASKET,
		payload: {
			productId,
		}
	};
};

export const removeProductFromBasket = (productId) => {
	return {
		type: actionTypes.REMOVED_PRODUCT_FROM_BASKET,
		payload: {
			productId,
		}
	};
};