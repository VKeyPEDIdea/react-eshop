import React, { useEffect } from 'react';
import classes from './Catalog.module.sass';
import NavigationTree from '../../components/UI/NavigationTree/NavigationTree';
import ProductList from './ProductList/ProductList';
import { connect } from 'react-redux';
import * as actions from '../../store/';
import { Route } from 'react-router';
import ProductDetail from './ProductDetail/ProductDetail';

const Catalog = props => {
	const { initProducts, loading } = props;
	console.log(loading);

	useEffect(() => {
		initProducts();
	}, [initProducts]);

	const productCard = <Route path={'/catalog/product'} component={ProductDetail} />;

	return(
		<>
			<div className={classes.catalog}>
				<NavigationTree/>
				<ProductList/>
			</div>
			{ !loading ? productCard : null}
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