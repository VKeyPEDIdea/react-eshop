import * as actionTypes from '../actionTypes';

const initialState = {
	basket: [],
};

const reducer = (state = initialState, action) => {
	let updatedState = { ...state };
	let updatedBasket = updatedState.basket.concat();
	const basketProductIds = updatedBasket.map(product => {
		return Object.keys(product)[0];
	});
	
	switch(action.type) {
		case actionTypes.ADDED_PRODUCT_TO_BASKET:
			if (basketProductIds.includes(action.payload.productId)) {
				updatedBasket.forEach(product => {
					if (product[action.payload.productId]) {
						product[action.payload.productId] += 1;
					};
				});
			} else {
				updatedBasket.push({[action.payload.productId]: 1});
			}

			return { ...updatedState, basket: updatedBasket };
		case actionTypes.REMOVED_PRODUCT_FROM_BASKET:
			if (basketProductIds.includes(action.payload.productId)) {
				updatedBasket.forEach(product => {
					if (product[action.payload.productId] === 1) {
						updatedBasket = updatedBasket.filter(currentProduct => currentProduct !== product);
					} else {
						product[action.payload.productId] -= 1;
					};
				});
			}

			return { ...updatedState, basket: updatedBasket };
		default:
			return state;
	}
};

export default reducer;