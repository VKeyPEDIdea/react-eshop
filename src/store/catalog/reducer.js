import * as actionTypes from '../actionTypes';
// import { api } from '../../services/apiServies';

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
		case actionTypes.INIT_CATEGORIES:
			return state;
		case actionTypes.FETCH_CATEGORIES_SUCCESS:
			return {...state, categories: action.payload.categories};
		case actionTypes.FETCH_CATEGORIES_FAILED:
			return {...state, error: action.error};
		default:
			return state;
	}
};

export default reducer;