import React, { useRef } from 'react';

import { withRouter } from 'react-router';
import { location } from '../../../services/locationService';
import CartButton from '../../../components/UI/CartButton/CartButton';
import classes from './ProductDetail.module.sass';
import { checkIsAdded, getItemCount } from '../../../orderHelpers';
import Rating from '../../../components/UI/Rating/Rating';

const ProductDetail = props => {
	const {
		products,
		basket,
		addProduct,
		removeProduct
	} = props;

	const productName = location.getCurrentProductName(props.location.pathname);
	const {
		id,
		name,
		description,
		price,
		img,
		rating,
		brandId,
		comments
	} = getCurrentProduct(products, productName);

	let bounds;
	const imgEl = useRef(null);
	const glowEl = useRef(null);
	const imageEL = useRef(null);

	function getCurrentProduct(productList, productTitle) {
		return productList[productTitle];
	}

	function rotateToMouse(e) {
		const mouseX = e.clientX;
		const mouseY = e.clientY;
		const leftX = mouseX - bounds.x;
		const topY = mouseY - bounds.y;
		const center = {
			x: leftX - bounds.width / 2,
			y: topY - bounds.height / 2
		}
		const distance = Math.sqrt(center.x**2 + center.y**2);

		imageEL.current.style.filter = `
			drop-shadow(${-center.x / 10}px ${-center.y / 10}px 0px #000)
		`;
		
		imgEl.current.style.transform = `
			scale3d(1.1, 1.1, 1.1)
			rotate3d(
				${center.y / 100},
				${-center.x / 100},
				0,
				${Math.log(distance)* 2}deg
			)
		`;
		
		glowEl.current.style.backgroundImage = `
			radial-gradient(
				circle at
				${center.x * 2 + bounds.width / 2}px
				${center.y * 2 + bounds.height / 2}px,
				#ffffff11,
				#0000000f
			)
		`;
	}

	const onImgMouseEnterHandler = () => {
		bounds = imgEl.current.getBoundingClientRect();
		imgEl.current.addEventListener('mousemove', rotateToMouse);
	};

	const onImgMouseLeaveHandler = () => {
		imgEl.current.removeEventListener('mousemove', rotateToMouse);
		imgEl.current.style.transform = '';
	};

	return (
		<div className={classes.productDetail}>
			<div className={classes.imgBox}>
				<div className={classes.productImg}
					ref={imgEl}
					alt={name}
					onMouseEnter={onImgMouseEnterHandler}
					onMouseLeave={onImgMouseLeaveHandler}>
					<div className={classes.glow}
						ref={glowEl}
						alt={name}>
							<img className={classes.image} ref={imageEL} src={img} alt={name} />
						<div className={classes.rating}>
							<Rating rate={rating} />
						</div>
					</div>
				</div>

			</div>
			<div className={classes.contentBox}>
				<h1 className={classes.title}>{name}</h1>
				<p className={classes.price}>{price} ₸</p>
				<div className={classes.buttonBox} >
					<CartButton
						id={name}
						isAvailable={checkIsAdded(id, basket)}
						count={getItemCount(id, basket)}
						onRemove={() => removeProduct(id)}
						onAdd={() => addProduct(id)}/>
				</div>
				<div className={classes.factoid}>
					<p className={classes.subtitle}>Описание</p>
					<p className={classes.description}>{description}</p>
				</div>
				<p className={classes.subtitle}>Производитель</p>
				<p>{brandId}</p>
				<p>Комментарии: {comments[0]}</p>
			</div>
		</div>
	);
};


export default withRouter(ProductDetail);