import React, { useRef } from 'react';

import { connect } from 'react-redux'
import { withRouter } from 'react-router';
import { location } from '../../../services/locationService';
import classes from './ProductDetail.module.sass';

const ProductDetail = props => {
	const {
		products,
	} = props;

	const productName = location.getCurrentProductName(props.location.pathname);
	const {
		name,
		description,
		price,
		img,
		rating,
		brandId,
		comments
	} = getCurrentProduct(products, productName);

	console.log('detail product');

	let bounds;
	const imgEl = useRef(null);
	const glowEl = useRef(null);
	const imageEL = useRef(null);

	function getCurrentProduct(productList, productTitle) {
		return productList[productTitle];
	}

	function rotateToMouse(e) {
		console.log(e);
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
				<div
					ref={imgEl}
					onMouseEnter={onImgMouseEnterHandler}
					onMouseLeave={onImgMouseLeaveHandler}
					alt={name}
					className={classes.productImg}>
					<div
						ref={glowEl}
						className={classes.glow}
						alt={name}>
							<img ref={imageEL} src={img} alt={name} className={classes.image}/>
					</div>
				</div>

			</div>
			<div>
				<h1 className={classes.title}>{name}</h1>
				<p className={classes.price}>{price} ₸</p>
				<p>Оценка: {rating}</p>
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

const mapStateToProps = state => {
	return {
		products: state.products.products,
		basket: state.order.basket,
	};
};

export default connect(mapStateToProps)(withRouter(ProductDetail));