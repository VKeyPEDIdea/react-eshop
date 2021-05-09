import * as actionTypes from '../actionTypes';

const initialState = {
	products: {},
	error: null,
	loading: true,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.FETCH_PRODUCTS_SUCCESS:
			return {
				...state,
				loading: false,
				error: false,
				products: action.payload.products
			}
		case actionTypes.FETCH_PRODUCTS_FAILED:
			return {
				...state,
				loading: false,
				error: action.error
			};
		default:
			return state;
	}
};

export default reducer;