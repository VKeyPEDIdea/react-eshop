import classes from './Order.module.sass';
import React from 'react';
import { connect } from 'react-redux';
import BasketProductItem from '../../components/UI/BasketProductItem/BasketProductItem';
import { getBasketProductCount } from '../../orderHelpers';
import * as actions from '../../store/';
import Input from '../../components/UI/Input/Input';

const Order = props => {
	const {
		basket,
		products,
		addProductToBasket,
		removeProductFromBasket
	} = props;

	const config = [
		{
			type: 'text',
			label: 'Имя',
			id: 'name'
		},
		{
			type: 'text',
			label: 'Телефон',
			id: 'phone'
		},
		{
			type: 'select',
			label: 'Способ доставки',
			optionList: ['Курьером', 'Самовывоз'],
		},
		{
			type: 'select',
			label: 'Адрес',
			optionList: ['Домашний', 'Рабочий'],
		},
	];

	const getOrderForm = formConfig => {
		return formConfig.map(element => {
			return <Input
				type={element.type}
				label={element.label}
				id={element.id}
				optionList={element.optionList}/>
		});
	};

	const getProductList = basketList => {
		return basketList.map(product => {
			const productId = Object.keys(product)[0];
			const item = products[productId];
			return <BasketProductItem
				key={productId}
				id={productId}
				img={item.img}
				title={item.name}
				count={product[productId]}
				addProduct={addProductToBasket}
				removeProduct={removeProductFromBasket}
				price={item.price} />;
		});
	};

	return(
		<>
			<h2>Корзина</h2>
			<div className={classes.order}>
				<div>
					<h4>Товары: {getBasketProductCount(basket)}</h4>
					{getProductList(basket)}
				</div>
				<div>
					<h4>Доставка</h4>
					{getOrderForm(config)}
				</div>
			</div>
		</>
	);
}

const mapStateToProps = state => {
	return {
		basket: state.order.basket,
		products: state.products.products
	};
};

const mapDispatchToProps = dispatch => {
	return {
		addProductToBasket: (id) => dispatch(actions.addProductToBasket(id)),
		removeProductFromBasket: (id) => dispatch(actions.removeProductFromBasket(id)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Order);