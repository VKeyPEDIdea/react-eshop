import classes from './Order.module.sass';
import React from 'react';
import { connect } from 'react-redux';
import BasketProductItem from '../../components/UI/BasketProductItem/BasketProductItem';
import { getBasketProductCount, getBasketPrice } from '../../orderHelpers';
import * as actions from '../../store/';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';

const Order = props => {
	const {
		basket,
		products,
		addProductToBasket,
		removeProductFromBasket
	} = props;
	
	const count = getBasketProductCount(basket);

	const config = [
		{
			groupTitle: 'Доставка',
			fields: [
				{
					type: 'text',
					label: 'Имя',
					id: 'name'
				},
				{
					type: 'tel',
					label: 'Телефон',
					id: 'phone',
				},
				{
					type: 'checkbox',
					label: 'Доставить как можно скорее',
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
			]
		},
		{
			groupTitle: 'Оплата',
			fields: [
				{
					type: 'radio',
					label: 'Наличными',
					id: 'cash-money',
					name: 'paymentMethod',
					value: 'cash-money',
				},
				{
					type: 'radio',
					label: 'Картой через POS-терминал',
					id: 'terminal',
					name: 'paymentMethod',
					value: 'terminal',
				},
				{
					type: 'text',
					label: 'Сумма, с которой потребуется сдача',
					id: 'cashCount'
				},
			]
		}
	];

	const getOrderForm = formConfig => {
		return <>
			{formConfig.map(group => {
				return <div className={classes.formGroup}>
					<h4>{group.groupTitle}</h4>
					{group.fields.map(field => {
						return <Input
							type={field.type}
							label={field.label}
							id={field.id}
							name={field.name}
							value={field.value}
							isRequired={field.isRequired}
							optionList={field.optionList}/>
					})}
				</div>
			})}
			<div className={classes.countSummary}>
				<span>Итого к оплате</span><span>{getBasketPrice(basket, products)} ₸</span>
			</div>
			<Button	name='Заказать'/>
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
		<>
			<h2>Корзина</h2>
			<div className={classes.order}>
				<div>
					<h4>Товары: {count}</h4>
					{getBasketList(basket)}
				</div>
				<div>
					{count ? getOrderForm(config) : null}
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