import React, { useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import ProductItem from '../../../components/UI/ProductItem/ProductItem';
import { location } from '../../../services/locationService';
import classes from './ProductList.module.sass';
import * as actions from '../../../store/';
import { withRouter } from 'react-router';

const listStyles = [
	classes.productList,
	classes['row3'],
	classes['row3-sm'],
	classes['row2-xs'],
].join(' ');

const ProductList = props => {
	const {
		initProducts,
		products,
		addProductToBasket,
		removeProductFromBasket,
		basket,
		location: routerLocation,
	} = props;

	const selectedCategory = location.getCurrentCategory(routerLocation.pathname) || '';
	
	const checkIsAdded = useCallback((id, basket) => {
		let result = false;
		basket.forEach(product => {
			if (Object.keys(product).includes(id)) {
				result = true;
				return result;
			};
		});
		return result;
	}, []);

	const getItemCount = (id, basket) => {
		let count = 0;
		basket.forEach(product => {
			if (Object.keys(product).includes(id)) {
				count = product[id];
				return count;
			};
		});
		return count;
	};
	
	const getList = useCallback((productsList, basket, selectedCategory) => {
		const filteredList = Object.values(productsList)
			.filter(product => product.categoryId === selectedCategory)
			.map(product => {
				return <ProductItem
					key={product.id}
					id={product.id}
					title={product.name}
					about={product.description}
					price={product.price}
					imgPath={product.img}
					isAdded={checkIsAdded(product.id, basket)}
					count={getItemCount(product.id, basket)}
					addProductHandler={addProductToBasket}
					removeProductHandler={removeProductFromBasket}/>
		});
		return filteredList;
	}, [addProductToBasket, removeProductFromBasket, checkIsAdded]);
	
	const list = getList(products, basket, selectedCategory);

	useEffect(() => {
		initProducts();
	}, [initProducts]);

	return(
		<div className={listStyles}>
			{list}
		</div>
	);
}

const mapStateToProps = state => {
	return {
		products: state.products.products,
		basket: state.order.basket,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		initProducts: () => dispatch(actions.initProducts()),
		addProductToBasket: (id, price) => dispatch(actions.addProductToBasket(id, price)),
		removeProductFromBasket: (id, price) => dispatch(actions.removeProductFromBasket(id, price)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProductList));