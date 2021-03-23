import axios from 'axios';
import { apiConfig } from '../config/apiConfig';

export class Api {
	constructor(config) {
		this.url = config.url
	}

	async getCategories() {
		try {
			const response = await axios.get(`${this.url}db/categories.json`);
			return response.data;
		} catch (error) {
			console.warn(error);
			return Promise.reject(error);
		}
	}

	async getProducts() {
		try {
			const response = await axios.get(`${this.url}db/products.json`);
			return response.data;
		} catch (error) {
			console.warn(error);
			return Promise.reject(error);
		}
	}
}

export const api = new Api(apiConfig);