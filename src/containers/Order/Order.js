import React from 'react';
import classes from './Order.module.sass';
import OrderForm from './OrderForm/';
import BasketList from './BasketList/';
import { useSelector } from 'react-redux';
import { selectBasketProductCount } from './basketSlice';

const Order = props => {
	const count = useSelector(selectBasketProductCount);

	return(
		<div className={classes.container}>
			<h2>Корзина</h2>
			<div className={classes.order}>
				<div className={classes.products}>
					<BasketList />
				</div>
				<div>{count ? <OrderForm /> : null}</div>
			</div>
		</div>
	);
};

export default Order;