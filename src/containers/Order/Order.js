import React, { useState } from 'react';
import classes from './Order.module.sass';
import { connect } from 'react-redux';
import BasketProductItem from '../../components/UI/BasketProductItem/BasketProductItem';
import { getBasketProductCount, getBasketPrice } from '../../orderHelpers';
import * as actions from '../../store/';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import { updateObject } from '../../utilities/shared';

const Order = props => {
	const {
		basket,
		products,
		addProductToBasket,
		removeProductFromBasket
	} = props;
	const [orderIsReady, setOrderIsReady] = useState(false);	
	const count = getBasketProductCount(basket);
	const [config, setConfig] = useState({
		name: {
			type: 'text',
			label: 'Имя',
			id: 'name',
			value: '',
			isRequired: true,
			isValid: false,
			touched: false,
		},
		phone: {
			type: 'tel',
			label: 'Телефон',
			id: 'phone',
			value: '',
			isRequired: true,
			isValid: false,
			touched: false,
		},
		'delivery-speed': {
			type: 'checkbox',
			label: 'Доставить как можно скорее',
			id: 'delivery-speed',
			isRequired: false,
			isValid: true,
			touched: false,
		},
		'delivery-method': {
			type: 'select',
			label: 'Способ доставки',
			optionList: ['Курьером', 'Самовывоз'],
			id: 'delivery-method',
			value: '',
			isRequired: false,
			isValid: true,
			touched: false,
		},
		address: {
			type: 'text',
			label: 'Адрес',
			id: 'address',
			value: '',
			isRequired: true,
			isValid: false,
			touched: false,
		},
		'cash-money': {
			type: 'radio',
			label: 'Наличными',
			id: 'cash-money',
			name: 'paymentMethod',
			value: 'cash-money',
			isRequired: true,
			checked: true,
			isValid: true,
			touched: false,
		},
		terminal: {
			type: 'radio',
			label: 'Картой через POS-терминал',
			id: 'terminal',
			name: 'paymentMethod',
			value: 'terminal',
			isRequired: true,
			isValid: true,
			touched: false,
		},
		cashCount: {
			type: 'text',
			label: 'Сумма, с которой потребуется сдача',
			id: 'cashCount',
			value: '',
			isRequired: false,
			isValid: true,
			touched: false,
		},
	});

	const orderHandler = e => {
		e.preventDefault();
	}

	const inputChangeHandler = (event, id) => {
		const updatedInput = updateObject(config[id],{
			touched: true,
			isValid: event.target.value ? true : false,
			value: event.target.value,
		});
		const updatedConfig = updateObject(config, {
			[id]: updatedInput,
		});

		let isReady = true;

		for (let field in updatedConfig) {
			console.log(field);
			isReady = updatedConfig[field].isValid && isReady;
		};
		setOrderIsReady(isReady);
		console.log(orderIsReady);
		setConfig(updatedConfig);
	};

	const getOrderForm = formConfig => {
		return <>
			<h4>Данные заказа</h4>
			<form>
				{Object.values(formConfig).map(field => <Input
					checked={field.checked}
					type={field.type}
					key={field.id}
					label={field.label}
					id={field.id}
					changeHandler={(event) => inputChangeHandler(event, field.id)}
					name={field.name}
					value={field.value}
					isRequired={field.isRequired}
					isValid={field.isValid}
					isTouched={field.touched}
					optionList={field.optionList}/>)}
				<div className={classes.countSummary}>
					<span>Итого к оплате</span><span>{getBasketPrice(basket, products)} ₸</span>
				</div>
				<Button
					disabled={!orderIsReady}
					name='Заказать'
					click={orderHandler}/>
			</form>
		</>
	};

	const getBasketList = basketList => {
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
		<div className={classes.container}>
			<h2>Корзина</h2>
			<div className={classes.order}>
				<div className={classes.products}>
					<h4>Товары: {count}</h4>
					{getBasketList(basket)}
				</div>
				<div>{count ? getOrderForm(config) : null}</div>
			</div>
		</div>
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