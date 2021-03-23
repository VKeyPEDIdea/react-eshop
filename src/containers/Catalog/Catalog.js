import React from 'react';
import classes from './Catalog.module.sass';
import NavigationTree from '../../components/UI/NavigationTree/NavigationTree';
import ProductList from './ProductList/ProductList';

const Catalog = props => {
	return(
		<div className={classes.catalog}>
			<NavigationTree/>
			<ProductList/>
		</div>
	);
}

export default Catalog;