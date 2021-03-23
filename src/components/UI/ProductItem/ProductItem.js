import React from 'react';
import Button from '../Button/Button';
import classes from './ProductItem.module.sass';

// Сделать компонент кнопки
// Сделать компонент Counter

const ProductItem = props => {
	return(
		<div className={classes.productItem}>
			<div className={classes.imgWrap}>
				<img
					src={props.imgPath}
					alt="alt"
					className={[classes.img, classes['img-responsive']].join(' ')}
					data-id={props.id}/>
				<div className={classes.cartBtnWrap}>
					<Button id={props.id}	name={'В корзину'} />
				</div>
			</div>
			<a href="/" className={classes.title}>{props.title}</a>
			<p className={classes.description}>{props.about}</p>
			<p className={classes.price}>
				<span data-id={props.id}>{props.price}</span>
				<span>₸</span>
			</p>

		</div>
	);
}

export default ProductItem;