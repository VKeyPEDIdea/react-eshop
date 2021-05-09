import React, { useCallback } from 'react';
import ProductItem from '../../../components/UI/ProductItem/ProductItem';
import { location } from '../../../services/locationService';
import classes from './ProductList.module.sass';
import { withRouter } from 'react-router';
import NavigationTree from '../../../components/UI/NavigationTree/NavigationTree';
import Spinner from '../../../components/UI/Spinner/Spinner';
import { checkIsAdded, getItemCount } from '../../../orderHelpers';

const listStyles = [
	classes.productList,
	// classes['row3-sm'],
	// classes['row2-xs'],
].join(' ');

const ProductList = props => {
	const {
		products,
		addProduct,
		removeProduct,
		basket,
		location: routerLocation,
	} = props;

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
			<div className={listStyles}>
				{list ? list : <Spinner />}
			</div>
		</div>
	);
}

export default (withRouter(ProductList));