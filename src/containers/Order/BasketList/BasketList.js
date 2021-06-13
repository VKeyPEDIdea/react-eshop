import React, { useEffect } from 'react';
import { getBasketProductCount } from '../../../orderHelpers';
import BasketProductItem from '../../../components/UI/BasketProductItem/BasketProductItem';
import Spinner from '../../../components/UI/Spinner/Spinner';
import {
	fetchProducts,
	selectProductsList,
	selectProductsLoading
} from '../../Catalog/ProductList/productsSlice';
import { useDispatch, useSelector } from 'react-redux';
import {
	selectBasketList,
	addProductToBasket,
	removeProductFromBasket
} from '../basketSlice';

const BasketList = props => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchProducts());
	}, [fetchProducts]);

	const basket = useSelector(selectBasketList);
	const products = useSelector(selectProductsList);
	const productsLoading = useSelector(selectProductsLoading);
	const count = getBasketProductCount(basket);

	const getBasketList = basketList => {
		return basketList.map(({ id, count }) => {
			const item = products[id];
			return <BasketProductItem
				key={id}
				id={id}
				img={item.img}
				title={item.name}
				count={count}
				addProduct={() => dispatch(addProductToBasket(id))}
				removeProduct={() => dispatch(removeProductFromBasket(id))}
				price={item.price} />;
		});
	};

	return(
		<>
			<h4>Товары: {count}</h4>
			{!productsLoading ? getBasketList(basket) :	<Spinner />}
		</>
	);
};

export default BasketList;