import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectCheckIsAdded, selectItemCount } from '../../../containers/Order/basketSlice';
import CartButton from '../CartButton';
import classes from './ProductItem.module.scss';

const ProductItem = props => {
	const {
		id,
		img,
		name,
		description,
		price,
		addProductHandler,
		removeProductHandler
	} = props.data;
	const isAdded = useSelector(state => selectCheckIsAdded(state, id));
	const count = useSelector(state => selectItemCount(state, id));

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
					src={img}
					alt="alt"
					className={getImgWrapStyles()}/>
				<div className={getCartBtnWrapStyles()}>
					<CartButton
						isAvailable={isAdded}
						count={count}
						id={id}
						onRemove={removeProductHandler}
						onAdd={addProductHandler}
					/>
				</div>
			</div>
			<Link to={'/catalog/product/' + id} className={classes.title}>{name}</Link>
			<p className={classes.description}>{description}</p>
			<p className={classes.price}>
				<span data-id={id}>{price}</span>
				<span>₸</span>
			</p>

		</div>
	);
}

export default ProductItem;