import React from 'react';
import Button from '../Button/Button';
import Counter from '../Counter/Counter';
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
					{isAdded
						? <Counter
								count={count}
								remove={() => removeProductHandler(id)}
								add={() => addProductHandler(id)}/>
						: <Button
								id={id}
								click={() => addProductHandler(id)}
								name={'В корзину'}/>} 
				</div>
			</div>
			<a href="/" className={classes.title}>{title}</a>
			<p className={classes.description}>{about}</p>
			<p className={classes.price}>
				<span data-id={id}>{price}</span>
				<span>₸</span>
			</p>

		</div>
	);
}

export default ProductItem;