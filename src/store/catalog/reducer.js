import * as actionTypes from '../actionTypes';
// import { api } from '../../services/apiServies';

const initialState = {
	categories: {},
	products: {},
	error: null,
	loading: true,
};

function updateCategories(categories, id) {
	return {
		...categories,
		[id]: {
			...categories[id],
			selected: !categories[id].selected,
		}
	}
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.SET_CATEGORY:
			const newCategories = updateCategories(state.categories, action.payload.id);
			return {...state, categories: newCategories};
		case actionTypes.FETCH_CATEGORIES_SUCCESS:
			return {
				...state,
				loading: false,
				error: false,
				categories: action.payload.categories
			};
		case actionTypes.FETCH_CATEGORIES_FAILED:
			return {
				...state,
				loading: false,
				error: action.error
			};
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