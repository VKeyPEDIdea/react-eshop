import React from 'react';
import { Link } from 'react-router-dom';
import CartButton from '../CartButton/CartButton';
import classes from './ProductItem.module.sass';

const ProductItem = props => {
	const {
		removeProductHandler,
		addProductHandler,
		id,
		imgPath,
		title,
		about,
		count,
		price,
		isAdded,
		path
	} = props;

	function getImgWrapStyles() {
		let imgStyles = [classes.img, classes['img-responsive']];
		if (isAdded) imgStyles.push(classes.imgAdded);
		return imgStyles.join(' ');
	}

	function getCartBtnWrapStyles() {
		let btnStyles = [classes.cartBtnWrap];
		if (isAdded) btnStyles.push(classes.cartBtnWrapShow);
		return btnStyles.join(' ');
	}
	
	return(
		<div className={classes.productItem}>
			<div className={classes.imgWrap}>
				<img
					src={imgPath}
					alt="alt"
					className={getImgWrapStyles()}/>
				<div className={getCartBtnWrapStyles()}>
					<CartButton
						isAvailable={isAdded}
						count={count}
						id={id}
						onRemove={() => removeProductHandler(id)}
						onAdd={() => addProductHandler(id)}
					/>
				</div>
			</div>
			<Link to={'/catalog/product/' + path} className={classes.title}>{title}</Link>
			<p className={classes.description}>{about}</p>
			<p className={classes.price}>
				<span data-id={id}>{price}</span>
				<span>₸</span>
			</p>

		</div>
	);
}

export default ProductItem;