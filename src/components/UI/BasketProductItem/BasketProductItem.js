import classes from './BasketProductItem.module.scss';
import React from 'react';
import Counter from '../Counter';

const BasketProductItem = props => {
	const {
		id,
		name,
		count,
		price,
		img,
		addProduct,
		removeProduct,
	} = props.data;

	return(
		<div className={classes.basketProductItem}>
			<img className={classes.img}
				 src={img}
				 alt={id}/>
			<div className={classes.info}>
				<h4>{name}</h4>
				<div className={classes.count}>
					<Counter
						mode='dark'
						count={count}
						add={addProduct}
						remove={removeProduct}
					/>
				</div>
				<p className={classes.price}>{price} ₸</p>
			</div>
		</div>
	);
}

export default BasketProductItem;