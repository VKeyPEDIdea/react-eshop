import React, { useEffect } from 'react';
import ProductList from './ProductList/ProductList';
import { connect } from 'react-redux';
import * as actions from '../../store/';
import { Redirect, Route, Switch } from 'react-router';
import ProductDetail from './ProductDetail/ProductDetail';

const Catalog = props => {
	const {
		initProducts,
		loading,
		products,
		basket,
		addProductToBasket,
		removeProductFromBasket
	} = props;

	useEffect(() => {
		initProducts();
	}, [initProducts]);

	let routes;
	if (!loading) {
		routes = (
			<Switch>
				<Route path={'/catalog/productList'} render={() => <ProductList
					addProduct={addProductToBasket}
					removeProduct={removeProductFromBasket}
					products={products}
					basket={basket}/>}
				/>;
				<Route path={'/catalog/product/'} render={() => <ProductDetail
					addProduct={addProductToBasket}
					removeProduct={removeProductFromBasket}
					products={products}
					basket={basket}/>}
				/>
				<Redirect to='/catalog/productList' />
			</Switch>
		);
	}
	
	return(
		<>
			{routes}
		</>
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
		addProductToBasket: (id) => dispatch(actions.addProductToBasket(id)),
		removeProductFromBasket: (id) => dispatch(actions.removeProductFromBasket(id)),
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);