import React from 'react';
import classes from './Order.module.sass';
import { getBasketProductCount } from '../../orderHelpers';
import OrderForm from './OrderForm/OrderForm';
import BasketList from './BasketList/';
import { selectBasketList } from './basketSlice'
import { useSelector } from 'react-redux';

const Order = props => {
	const basket = useSelector(selectBasketList)
	const count = getBasketProductCount(basket);

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