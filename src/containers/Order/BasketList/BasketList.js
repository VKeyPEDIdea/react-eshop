import React, { useEffect } from 'react';
import BasketProductItem from '../../../components/UI/BasketProductItem';
import Spinner from '../../../components/UI/Spinner';
import { useDispatch, useSelector } from 'react-redux';
import {
	fetchProducts,
	selectProductsList,
	selectProductsLoading
} from '../../Catalog/ProductList/productsSlice';
import {
	selectBasketList,
	addProductToBasket,
	removeProductFromBasket,
	selectBasketProductCount
} from '../basketSlice';

const BasketList = props => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchProducts());
	}, [fetchProducts]);

	const basket = useSelector(selectBasketList);
	const products = useSelector(selectProductsList);
	const productsLoading = useSelector(selectProductsLoading);
	const count = useSelector(selectBasketProductCount);

	const list = productsLoading ? null : basket.map(({ id, count }) => {
		const product = products.find(product => id === product.id);
		return <BasketProductItem
			key={product.id}
			data={{
				...product,
				count,
				price: product.price,
				addProduct: () => dispatch(addProductToBasket(id)),
				removeProduct: () => dispatch(removeProductFromBasket(id))
			}}/>;
	});

	return(
		<>
			<h4>Товары: {count}</h4>
			{!productsLoading ? list : <Spinner />}
		</>
	);
};

export default BasketList;