import React from 'react';
import classes from './Order.module.sass';
import { connect } from 'react-redux';
import { getBasketProductCount } from '../../orderHelpers';
import OrderForm from './OrderForm/OrderForm';
import OrderProductList from './OrderProductList/OrderProductList';

const Order = props => {
	const {
		basket,
	} = props;
	const count = getBasketProductCount(basket);

	return(
		<div className={classes.container}>
			<h2>Корзина</h2>
			<div className={classes.order}>
				<div className={classes.products}>
					<OrderProductList />
				</div>
				<div>{count ? <OrderForm /> : null}</div>
			</div>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		basket: state.order.basket,
	};
};

export default connect(mapStateToProps)(Order);