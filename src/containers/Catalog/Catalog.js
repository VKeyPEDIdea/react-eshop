import React, { useEffect } from 'react';
import ProductList from './ProductList/ProductList';
import { connect } from 'react-redux';
import * as actions from '../../store/';
import { Redirect, Route, Switch } from 'react-router';
import ProductDetail from './ProductDetail/ProductDetail';

const Catalog = props => {
	const { initProducts, loading } = props;

	useEffect(() => {
		initProducts();
	}, [initProducts]);

	let routes;
	if (!loading) {
		routes = (
			<Switch>
				<Route path={'/catalog/productList'} component={ProductList} />;
				<Route path={'/catalog/product/'} component={ProductDetail} />
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
	};
};

const mapDispatchToProps = dispatch => {
	return {
		initProducts: () => dispatch(actions.initProducts()),
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);