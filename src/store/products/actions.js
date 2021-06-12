import { api } from '../../services/apiServies';
import * as actionTypes from '../actionTypes';

export const initProducts = () => {
	return dispatch => {
		api.getProducts()
			.then(data => dispatch(fetchProductsSuccess(data)))
			.catch(error => dispatch(fetchProductsFailed(error)));
	}
};

export const fetchProductsSuccess = products => {
	return {
		type: actionTypes.FETCH_PRODUCTS_SUCCESS,
		payload: {
			products,
		}
	}
};

export const fetchProductsFailed = error => {
	return {
		type: actionTypes.FETCH_PRODUCTS_FAILED,
		payload: {
			error,
		}
	}
};