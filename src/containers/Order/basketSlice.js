import { createSlice } from '@reduxjs/toolkit';
import { storage } from '../../services/storage';

export const basketSlice = createSlice({
	name: 'basket',
	initialState: {
		list: [],
		loading: false,
		error: false,
	},
	reducers: {
		initLoading: state => {
			state.loading = true;
		},
		loadSuccess: (state, { payload }) => {
			state.list = payload || [];
			state.loading = false;
			state.error = false;
		},
		addProduct: (state, { payload }) => {
			const item = state.list.find(({ id }) => id === payload);
			if (item) {
				item.count += 1;
			} else {
				state.list = state.list.concat({ id: payload, count: 1 });
			} 
		},
		removeProduct: (state, { payload }) => {
			const item = state.list.find(({ id }) => id === payload);
			if (item.count > 1) {
				item.count -= 1;
			} else {
				state.list = state.list.filter(basketProduct => basketProduct !== item);
			}
		},
	}
});

export const {
	addProduct,
	removeProduct,
	initLoading,
	loadSuccess,
} = basketSlice.actions;

export const getBasketList = () => dispatch => {
	dispatch(initLoading());
	const list = storage('basket');
	dispatch(loadSuccess(list));
};

export const addProductToBasket = id => (dispatch, getState) => {
	dispatch(addProduct(id));
	const { list } = getState().basket;
	storage('basket', list);
};

export const removeProductFromBasket = id => (dispatch, getState) => {
	dispatch(removeProduct(id));
	const { list } = getState().basket;
	storage('basket', list);
};

export const selectBasketList = ({ basket }) => basket.list;
export const selectLoading = ({ basket }) => basket.loading;
export const selectBasketProductCount = ({ basket }) => {
	return basket.list.reduce((count, product) => {
		return count += product.count;
	}, 0);
};
export const selectBasketPrice = ({ basket, products}) => {
	if (isEmptyObj(products.list)) return 0;
	let productName;
	return basket.list.reduce((price, product) => {
		productName = product.id;
		price += product.list[productName].price * product.count;
		return price;
	}, 0);
};
export const selectItemCount = ({ basket }, productId) => {
	let amount = 0;
	basket.list.forEach(({ id, count }) => {
		if (id === productId) {
			amount = count;
			return amount;
		};
	});
	return amount;
};
export const selectCheckIsAdded = ({ basket }, productId) => {
	let result = false;
	basket.list.forEach(({ id }) => {
		if (id === productId) {
			result = true;
			return result;
		};
	});
	return result;
};

export default basketSlice.reducer;