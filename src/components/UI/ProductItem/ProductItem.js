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
		price,
		isAdded,
	} = props;

	function getImgWrapStyles() {
		let imgStyles = [classes.img, classes['img-responsive']];
		if (isAdded) imgStyles.push(classes.imgAdded);
		return imgStyles.join(' ');
	}
	
	return(
		<div className={classes.productItem}>
			<div className={classes.imgWrap}>
				<img
					src={imgPath}
					alt="alt"
					className={getImgWrapStyles()}/>
				<div className={classes.cartBtnWrap}>
				</div>
				{isAdded
					? <Counter
							count={props.count}
							remove={() => removeProductHandler(id, price)}
							add={() => addProductHandler(id, price)}/>
					: <Button
							id={props.id}
							click={() => addProductHandler(id, price)}
							name={'В корзину'}/>} 
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