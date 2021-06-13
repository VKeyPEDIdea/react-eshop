import { configureStore } from '@reduxjs/toolkit';
import basketSlice from '../containers/Order/basketSlice';
import productsSlice from '../containers/Catalog/ProductList/productsSlice';
import categoriesSlice from '../containers/Catalog/NavigationTree/categoriesSlice';

export const store = configureStore({
	reducer: {
		categories: categoriesSlice,
		products: productsSlice,
		basket: basketSlice
	}
});