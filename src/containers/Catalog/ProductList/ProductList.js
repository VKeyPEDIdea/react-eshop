import React, { useCallback, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import ProductItem from '../../../components/UI/ProductItem/ProductItem';
import classes from './ProductList.module.sass';
import * as actions from '../../../store/';

const listStyles = [
	classes.productList,
	classes['row3'],
	classes['row3-sm'],
	classes['row2-xs'],
].join(' ');

const ProductList = props => {
	const {
		initProducts,
		products,
		addProductToBasket,
		removeProductFromBasket,
		basket,
	} = props;

	let list = useRef();
	
	const checkIsAdded = useCallback((id, basket) => {
		let result = false;
		basket.forEach(product => {
			if (Object.keys(product).includes(id)) {
				result = true;
				return result;
			};
		});
		return result;
	}, []);

	const getItemCount = (id, basket) => {
		let count = 0;
		basket.forEach(product => {
			if (Object.keys(product).includes(id)) {
				count = product[id];
				return count;
			};
		});
		return count;
	};
	
	const getList = useCallback((productsList, basket) => {
		return Object.values(productsList)
			.map(product => {
				return <ProductItem
					key={product.id}
					id={product.id}
					title={product.name}
					about={product.description}
					price={product.price}
					imgPath={product.img}
					isAdded={checkIsAdded(product.id, basket)}
					count={getItemCount(product.id, basket)}
					addProductHandler={addProductToBasket}
					removeProductHandler={removeProductFromBasket}/>
		});
	}, [addProductToBasket, removeProductFromBasket, checkIsAdded]);
	
	list.current = getList(products, basket);

	useEffect(() => {
		initProducts();
	}, [initProducts]);

	useEffect(() => {
		list.current = getList(products, basket);
	}, [products, basket, getList, checkIsAdded]);

	return(
		<div className={listStyles}>
			{list.current}
		</div>
	);
}

const mapStateToProps = state => {
	return {
		products: state.products.products,
		basket: state.order.basket,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		initProducts: () => dispatch(actions.initProducts()),
		addProductToBasket: (id, price) => dispatch(actions.addProductToBasket(id, price)),
		removeProductFromBasket: (id, price) => dispatch(actions.removeProductFromBasket(id, price)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);