import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ProductItem from '../../../components/UI/ProductItem/ProductItem';
import classes from './ProductList.module.sass';
import * as actions from '../../../store/';

const listStyles = [
	classes.ProductList,
	classes['row3'],
	classes['row3-sm'],
	classes['row2-xs'],
].join(' ');

const ProductList = props => {
	const { initProducts, products } = props;

	useEffect(() => {
		initProducts();
	}, [initProducts]);

	const getProductList = (productsList) => {
		let list = [];
		Object.values(productsList)
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

		return list;
	}

	const list = getProductList(products);

	return(
		<div className={listStyles}>
			{list}
		</div>
	);
}

const mapStateToProps = state => {
	return {
		products: state.products.products,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		initProducts: () => dispatch(actions.initProducts()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);