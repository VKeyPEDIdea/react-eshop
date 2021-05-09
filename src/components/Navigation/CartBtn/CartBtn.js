import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './CartBtn.module.sass';

const cartBtn = props => {
	const {	count, price } = props;

	return(
		<NavLink
			to={'/order'}
			activeClassName={classes.active}
			className={classes.cartBtn}>
			<i className={[classes.icon, 'material-icons'].join(' ')}>shopping_cart</i>
			<div className={classes.info}>
				<p className={classes.price}>
					<span>{price}</span>
					<span> ₸</span>
				</p>
				<p className={classes.amount}>
					<span>{count}</span>
					<span> товаров</span>
				</p>
			</div>
		</NavLink>
	);
}

export default cartBtn;