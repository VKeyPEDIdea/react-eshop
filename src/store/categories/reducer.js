import * as actionTypes from '../actionTypes';

const initialState = {
	categories: {},
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
		default:
			return state;
	}
};

export default reducer;