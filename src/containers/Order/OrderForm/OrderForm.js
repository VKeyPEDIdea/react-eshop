import React, { useEffect, useState } from 'react';
import { getBasketPrice } from '../../../orderHelpers';
import Button from '../../../components/UI/Button/Button';
import InputSelect from '../../../components/UI/InputSelect/InputSelect';
import InputText from '../../../components/UI/InputText/InputText';
import InputRadioButton from '../../../components/UI/InputRadioButton/InputRadioButton';
import classes from './OrderForm.module.sass';
import { updateObject } from '../../../utilities/shared';
import { connect } from 'react-redux';

const OrderForm = props => {
	const {
		basket,
		products,
	} = props;
	const [orderIsReady, setOrderIsReady] = useState(false);	
	const [name, setName] = useState({
		label: 'Имя',
		id: 'name',
		value: '',
		isRequired: true,
		isValid: false,
		touched: false,
	});
	const [phone, setPhone] = useState({
		label: 'Телефон',
		id: 'phone',
		value: '',
		isRequired: true,
		isValid: false,
		touched: false,
	});
	const [delivery] = useState({
		label: 'Способ доставки',
		id: 'delivery',
		optionList: ['Курьером', 'Самовывоз'],
		value: '',
		isRequired: false,
		isValid: true,
		touched: false,
	});
	const [address, setAddress] = useState({
		label: 'Адрес',
		id: 'address',
		value: '',
		isRequired: true,
		isValid: false,
		touched: false,
	});
	const [cash, setCash] = useState({
		label: 'Наличными',
		id: 'cash-money',
		name: 'paymentMethod',
		value: 'cash-money',
		isRequired: true,
		checked: false,
		isValid: true,
		touched: false,
	});
	const [terminal, setTerminal] = useState({
		label: 'Картой через POS-терминал',
		id: 'terminal',
		name: 'paymentMethod',
		value: 'terminal',
		checked: false,
		isRequired: true,
		isValid: true,
		touched: false,
	});
	const [cashCount, setCashCount] = useState({
		label: 'Сумма, с которой потребуется сдача',
		id: 'cashCount',
		value: '',
		isRequired: false,
		isValid: true,
		touched: false,
	});

	useEffect(() => {
		let isReady = true;
		[name, phone, address].forEach(input => {
			isReady = input.isValid && isReady; 
		});
		setOrderIsReady(isReady);
	}, [name, phone, address]);

	const nameChangeHandler = event => {
		console.log('name', name);
		setName(updateObject(name, {
			touched: true,
			isValid: event.target.value ? true : false,
			value: event.target.value
		}));
	};

	const phoneChangeHandler = event => {
		setPhone(updateObject(phone, {
			touched: true,
			isValid: event.target.value ? true : false,
			value: event.target.value
		}));
	};

	const addressChangeHandler = event => {
		setAddress(updateObject(address, {
			touched: true,
			isValid: event.target.value ? true : false,
			value: event.target.value
		}))
	};

	const cashCountChangeHandler = event => {
		setCashCount(updateObject(cashCount, {
			value: event.target.value,
		}));
	};

	function cashChangeHandler(event) {
		setCash(updateObject(cash, {
			isTouched: true,
			checked: event.target.checked
		}));
		setTerminal(updateObject(terminal, {
			checked: !event.target.checked
		}));
		console.log('cash', cash.checked);
		console.log('terminal', terminal.checked);
	}
	
	function terminalChangeHandler(event) {
		setTerminal(updateObject(terminal, {
			isTouched: true,
			checked: event.target.checked
		}));
		setCash(updateObject(cash), {
			checked: !event.target.checked,
		});
		console.log('cash', cash.checked);
		console.log('terminal', terminal.checked);
	}

	function orderHandler(event) {
		event.preventDefault();
	}

	return(
		<form>
			<h4>Данные заказа</h4>
			<InputText
				label={name.label}
				onChange={event => nameChangeHandler(event)}
				value={name.value}
				required={name.isRequired}
				validity={name.isValid}
				isTouched={name.touched}
				id={name.id}/>
			<InputText
				label={phone.label}
				onChange={event => phoneChangeHandler(event)}
				value={phone.value}
				required={phone.isRequired}
				validity={phone.isValid}
				isTouched={phone.touched}
				id={phone.id}/>
			<InputSelect
				label={delivery.label}
				optionList={delivery.optionList}
				id={delivery.id}
				value={delivery.value}
				required={delivery.isRequired}
				validity={delivery.isValid}
				isTouched={delivery.touched} />
			<InputText
				label={address.label}
				id={address.id}
				value={address.id}
				onChange={event => addressChangeHandler(event)}
				required={address.isRequired}
				validity={address.isValid}
				isTouched={address.touched}/>
			<h4>Оплата</h4>
			<InputRadioButton
				label={cash.label}
				id={cash.id}
				name={cash.name}
				onChange={event => cashChangeHandler(event)}
				value={cash.value}
				validity={cash.isValid}
				required={cash.isRequired}
				isTouched={cash.touched} />
			<InputRadioButton
				label={terminal.label}
				onChange={event => terminalChangeHandler(event)}
				id={terminal.id}
				name={terminal.name}
				value={terminal.value}
				validity={terminal.isValid}
				required={terminal.isRequired}
				isTouched={terminal.touched} />
			<InputText
				label={cashCount.label}
				id={cashCount.id}
				value={cashCount.id}
				onChange={event => cashCountChangeHandler(event)}
				required={cashCount.isRequired}
				validity={cashCount.isValid}
				isTouched={cashCount.touched}/>
			<div className={classes.countSummary}>
				<span>Итого к оплате</span><span>{getBasketPrice(basket, products)} ₸</span>
			</div>
			<Button
				disabled={!orderIsReady}
				click={event => orderHandler(event)}
				name='Заказать'/>
		</form>
	);
};

const mapStateToProps = state => {
	return {
		basket: state.order.basket,
		products: state.products.products
	};
};

export default connect(mapStateToProps)(OrderForm);