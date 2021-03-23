import React from 'react';
import ProductItem from '../../../components/UI/ProductItem/ProductItem';
import classes from './ProductList.module.sass';

const listStyles = [
	classes.ProductList,
	classes['row3'],
	classes['row3-sm'],
	classes['row2-xs'],
].join(' ');

const productList = props => {
	let list = [];

	Object.values(props.productList)
		.forEach(product => {
			let element = <ProductItem
				key={product.id}
				id={product.id}
				title={product.name}
				about={product.description}
				price={product.price}
				imgPath={product.img}/>
			list.push(element)
		});

	return(
		<div className={listStyles}>
			{list}
		</div>
	);
}

export default productList;