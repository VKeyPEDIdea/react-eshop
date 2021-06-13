import { createSlice } from '@reduxjs/toolkit';
import { api } from '../../../services/apiServies';

export const categoriesSlice = createSlice({
	name: 'categories',
	initialState: {
		list: [],
		loading: false,
		error: false,
	},
	reducers: {
		initFetch: state => {
			state.loading = true;
		},
		fetchSuccess: (state, { payload }) => {
			state.list = payload;
			state.error = false;
			state.loading = false;
		},
		fetchFailed: (state, { payload }) => {
			state.error = payload;
			state.loading = false;
		},
	}
});

export const {
	initFetch,
	fetchSuccess,
	fetchFailed,
} = categoriesSlice.actions;

export const fetchCategories = () => dispatch => {
	dispatch(initFetch());
	api.getCategories()
		.then(data => dispatch(fetchSuccess(data)))
		.catch(error => dispatch(fetchFailed(error)));
};

export const selectCategoriesList = ({ categories }) => categories.list;

export default categoriesSlice.reducer;