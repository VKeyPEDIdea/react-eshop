import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from './ProductList.module.sass';
import { location } from '../../../services/locationService';
import {
	debounce,
	productsSortSelectDic,
	checkIsAdded,
	getItemCount,
} from '../../../utilities/';
import NavigationTree from '../NavigationTree';
import Spinner from '../../../components/UI/Spinner';
import ProductItem from '../../../components/UI/ProductItem';
import InputText from '../../../components/UI/InputText';
import InputSelect from '../../../components/UI/InputSelect';
import {
	fetchProducts,
	selectFilteredList
} from './productsSlice';
import {
	selectBasketList,
	selectLoading,
	addProductToBasket,
	removeProductFromBasket,
} from '../../Order/basketSlice';
import { useHistory } from 'react-router-dom';

const ProductList = props => {
	const routerLocation = useHistory().location;

	const [search, setSearch] = useState(null);
	const [sort, setSort] = useState(null);

	const loading = useSelector(selectLoading);
	const basket = useSelector(selectBasketList);
	const dispatch = useDispatch();
	
	useEffect(() => {
		dispatch(fetchProducts());
	}, [fetchProducts]);
	
	const selectedCategory = location.getCurrentCategory(routerLocation.pathname) || '';
	const products = useSelector(state => selectFilteredList(state, selectedCategory, search));
	
	const list = products
		.sort((a, b) => {
			switch(sort) {
				case '1':
					return a.price - b.price;
				case '2':
					return b.price - a.price;
				case '3':
					return a.name > b.name;
				default:
					return a - b;
			}
		})
		.map(product => {
			return <ProductItem
				key={product.id}
				id={product.id}
				title={product.name}
				about={product.description}
				price={product.price}
				path={product.id}
				imgPath={product.img}
				isAdded={checkIsAdded(product.id, basket)}
				count={getItemCount(product.id, basket)}
				addProductHandler={() => dispatch(addProductToBasket(product.id))}
				removeProductHandler={() => dispatch(removeProductFromBasket(product.id))}/>
	});
	
	const onSearchChange = debounce(event => {
		setSearch(event.target.value);
	}, 500);

	const onSortChange = event => {
		setSort(event.target.value);
	};
	
	return(
		<div className={classes.catalogList}>
			<div>
				<div className={classes.categories}>
					<NavigationTree/>
				</div>
			</div>
			<div>
				<div className={classes.sorter}>
					<div className={classes.search}>
						<InputText
							label='Поиск'
							id='search'
							onChange={(event) => onSearchChange(event)}
							/>
					</div>
					<InputSelect
						label='Сортировать по'
						onChange={event => onSortChange(event)}
						optionList={productsSortSelectDic}/>
				</div>
				<div className={classes.productList}>
					{loading ? <Spinner /> : list}
				</div>
			</div>
		</div>
	);
};

export default ProductList;