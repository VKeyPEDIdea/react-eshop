import { createSlice } from '@reduxjs/toolkit';
import { api } from '../../../services/apiServies';
import { template } from '../../../utilities/';
 
export const productsSlice = createSlice({
	name: 'products',
	initialState: {
		list: {},
		error: false,
		loading: false,
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
	},
});

export const {
	initFetch,
	fetchFailed,
	fetchSuccess,
} = productsSlice.actions;

export const fetchProducts = () => dispatch => {
	dispatch(initFetch());
	api.getProducts()
		.then(data => dispatch(fetchSuccess(data)))
		.catch(error => dispatch(fetchFailed(error)));
};

export const selectProductsList = ({ products }) => products.list;
export const selectProductByName = ({ products }, productName) => {
	return products.list[productName] || template; 
};
export const selectProductsLoading = ({ products }) => products.loading;

export default productsSlice.reducer;