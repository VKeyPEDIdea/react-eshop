import React, { useEffect } from 'react';
import { location } from '../../../services/locationService';
import CartButton from '../../../components/UI/CartButton';
import classes from './ProductDetail.module.sass';
import Rating from '../../../components/UI/Rating';
import { useDispatch, useSelector } from 'react-redux';
import {
	fetchProducts,
	selectProductsLoading,
	selectProductByName,
} from '../ProductList/productsSlice';
import {
	addProductToBasket,
	removeProductFromBasket,
	selectCheckIsAdded,
	selectItemCount
} from '../../Order/basketSlice';
import Spinner from '../../../components/UI/Spinner';
import ExtraDimensionСard from '../../../components/UI/ExtraDimensionСard';
import { useHistory } from 'react-router-dom';

const ProductDetail = props => {
	const dispatch = useDispatch();
	const { pathname } = useHistory().location;
	const productName = location.getCurrentDirectoryLevel(pathname);
	
	const loading = useSelector(selectProductsLoading);
	const {
		id,
		name,
		description,
		price,
		img,
		rating,
		brandId,
		comments
	} = useSelector(state => selectProductByName(state, productName));
	const isAdded = useSelector(state => selectCheckIsAdded(state, id));
	const count = useSelector(state => selectItemCount(state, id));
	
	useEffect(() => {
		dispatch(fetchProducts());
	}, [fetchProducts]);
	
	const product = (
		<>
			<div className={classes.imgBox}>
				<ExtraDimensionСard>
					<img className={classes.image} src={img} alt={name} />
					<div className={classes.rating}>
						<Rating rate={rating} />
					</div>
				</ExtraDimensionСard>
			</div>
			<div className={classes.contentBox}>
				<h1 className={classes.title}>{name}</h1>
				<p className={classes.price}>{price} ₸</p>
				<div className={classes.buttonBox} >
					<CartButton
						id={name}
						isAvailable={isAdded}
						count={count}
						onRemove={() => dispatch(removeProductFromBasket(id))}
						onAdd={() => dispatch(addProductToBasket(id))}/>
				</div>
				<div className={classes.factoid}>
					<p className={classes.subtitle}>Описание</p>
					<p className={classes.description}>{description}</p>
				</div>
				<p className={classes.subtitle}>Производитель</p>
				<p>{brandId}</p>
				<p>Комментарии: {comments[0]}</p>
			</div>

		</>
	);

	return (
		<div className={classes.productDetail}>
			{loading ? <Spinner /> : product}
		</div>
	);
};

export default ProductDetail;