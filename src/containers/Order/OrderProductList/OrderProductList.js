import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getBasketProductCount } from '../../../orderHelpers';
import BasketProductItem from '../../../components/UI/BasketProductItem/BasketProductItem';
import * as actions from '../../../store/';
import Spinner from '../../../components/UI/Spinner/Spinner';

const OrderProductList = props => {
	const {
		basket,
		products,
		addProductToBasket,
		removeProductFromBasket,
		productsLoading,
		initProducts
	} = props;

	useEffect(() => {
		initProducts();
	}, [initProducts]);

	const count = getBasketProductCount(basket);

	const getBasketList = basketList => {
		return basketList.map(product => {
			const productId = Object.keys(product)[0];
			const item = products[productId];
			return <BasketProductItem
				key={productId}
				id={productId}
				img={item.img}
				title={item.name}
				count={product[productId]}
				addProduct={addProductToBasket}
				removeProduct={removeProductFromBasket}
				price={item.price} />;
		});
	};

	return(
		<>
			<h4>Товары: {count}</h4>
			{!productsLoading ? getBasketList(basket) :	<Spinner />}
		</>
	);
};

const mapStateToProps = state => {
	return {
		basket: state.order.basket,
		products: state.products.products,
		productsLoading: state.products.loading,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		initProducts: () => dispatch(actions.initProducts()),
		addProductToBasket: (id) => dispatch(actions.addProductToBasket(id)),
		removeProductFromBasket: (id) => dispatch(actions.removeProductFromBasket(id)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderProductList);