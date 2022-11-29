import React from 'react';
import ProductList from './ProductList';
import classes from './Catalog.module.scss';

const Catalog = props => {

	return(
		<div className={classes.catalog}>
			<ProductList />
		</div>
	);
};

export default Catalog;