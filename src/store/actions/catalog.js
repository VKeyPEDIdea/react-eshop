import * as actionTypes from './actionTypes';

export const setCategory = id => {
	return {
		type: actionTypes.SET_CATEGORY,
		payload: {
			id,
		},
	};
};