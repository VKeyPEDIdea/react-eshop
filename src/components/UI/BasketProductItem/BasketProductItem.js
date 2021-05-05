import classes from './BasketProductItem.module.sass';
import React from 'react';
import Counter from '../Counter/Counter';

const BasketProductItem = props => {
	const {
		count,
		title,
		price,
		img,
		id,
		addProduct,
		removeProduct,
	} = props;

	return(
		<div className={classes.basketProductItem}>
			<img className={classes.img}
				 src={img}
				 alt={id}/>
			<div className={classes.info}>
				<h4>{title}</h4>
				<div className={classes.count}>
					<Counter
						count={count}
						add={() => addProduct(id)}
						remove={() => removeProduct(id)}
					/>
				</div>
				<p className={classes.price}>{price} ₸</p>
			</div>
		</div>
	);
}

export default BasketProductItem;