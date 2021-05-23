import React, { useCallback, useEffect } from 'react';
import { location } from '../../../services/locationService';
import classes from './ProductList.module.sass';
import { withRouter } from 'react-router';
import NavigationTree from '../NavigationTree/NavigationTree';
import Spinner from '../../../components/UI/Spinner/Spinner';
import ProductItem from '../../../components/UI/ProductItem/ProductItem';
import { checkIsAdded, getItemCount } from '../../../orderHelpers';
import * as actions from '../../../store/';
import { connect } from 'react-redux';

const ProductList = props => {
	const {
		products,
		basket,
		addProduct,
		removeProduct,
		initProducts,
		location: routerLocation,
	} = props;

	useEffect(() => {
		initProducts();
	}, [initProducts]);

	const selectedCategory = location.getCurrentCategory(routerLocation.pathname) || '';
	
	const getList = useCallback((productsList, basket, selectedCategory) => {
		const filteredList = Object.values(productsList)
			.filter(product => {
				if (selectedCategory) return product.categoryId === selectedCategory;
				return true;
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
					addProductHandler={addProduct}
					removeProductHandler={removeProduct}/>
		});
		return filteredList;
	}, [addProduct, removeProduct]);
	
	const list = getList(products, basket, selectedCategory);

	return(
		<div className={classes.catalogList}>
			<div>
				<div className={classes.categories}>
					<NavigationTree/>
				</div>
			</div>
			<div className={classes.productList}>
				{list ? list : <Spinner />}
			</div>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		loading: state.products.loading,
		products: state.products.products,
		basket: state.order.basket,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		initProducts: () => dispatch(actions.initProducts()),
		addProduct: (id) => dispatch(actions.addProductToBasket(id)),
		removeProduct: (id) => dispatch(actions.removeProductFromBasket(id)),
	}
};

export default connect(mapStateToProps, mapDispatchToProps)((withRouter(ProductList)));