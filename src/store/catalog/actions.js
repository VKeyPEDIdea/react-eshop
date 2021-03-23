import { api } from '../../services/apiServies';
import * as actionTypes from '../actionTypes';

export const initCategories = () => {
	return dispatch => {
		api.getCategories()
			.then(data => {dispatch(fetchCategoriesSuccess(data))})
			.catch(error => dispatch(fetchCategoriesFailed(error)));
	};
};

export const fetchCategoriesFailed = error => {
	return {
		type: actionTypes.FETCH_CATEGORIES_FAILED,
		payload: {
			error,
		}
	};
};

export const fetchCategoriesSuccess = categoriesList => {
	return {
		type: actionTypes.FETCH_CATEGORIES_SUCCESS,
		payload: {
			categories: categoriesList,
		}
	};
};

export const initProducts = () => {
	return dispatch => {
		api.getProducts()
			.then(data => dispatch(fetchProductsSuccess(data)))
			.catch(error => dispatch(fetchCategoriesFailed(error)));
	}
}

export const fetchProductsSuccess = products => {
	return {
		type: actionTypes.FETCH_PRODUCTS_SUCCESS,
		payload: {
			products,
		}
	}
}

export const fetchProductsFailed = error => {
	return {
		type: actionTypes.FETCH_PRODUCTS_SUCCESS,
		payload: {
			error,
		}
	}
}