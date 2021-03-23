import React from 'react';
import classes from './Catalog.module.sass';
import NavigationTree from '../../components/UI/NavigationTree/NavigationTree';
import ProductList from './ProductList/ProductList';
import { location } from '../../services/locationService';

const Catalog = props => {
	const setCategory = (id) => {
		const selected = location.getSelected(props.location.search);

		if (selected.includes(id)) {
			const directory = location.getDirectory(id, selected);
			props.history.replace(`${props.location.pathname}?${directory}`)
		} else {
			props.history.push({
				search: `${props.location.search}${id}-`,
			});
		}
	};
	
	return(
		<div className={classes['row2--1-3']}>
			<NavigationTree
				fullList={props.categories}
				click={setCategory}/>
			<ProductList
				productList={props.products}/>
		</div>
	);
}

export default Catalog;