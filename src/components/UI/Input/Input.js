import React from 'react';
import InputText from '../InputText/InputText';
import InputSelect from '../InputSelect/InputSelect';
import InputCheckbox from '../InputCheckbox/InputCheckbox';
import InputRadioButton from '../InputRadioButton/InputRadioButton';

const Input = props => {
	const {
		type,
		label,
		optionList,
		id,
		name,
		value,
		isRequired,
		isValid,
		isTouched,
		changeHandler,
		checked,
	} = props;

	let inputElement = null;
	switch (type) {
		case 'text':
			inputElement = <InputText
			 label={label}
			 onChange={changeHandler}
			 required={isRequired}
			 validity={isValid}
			 isTouched={isTouched}
			 id={id}/>
			break;
		case 'select':
			inputElement = <InputSelect
				label={label}
				id={id}
				onChange={changeHandler}
				optionList={optionList}
				required={isRequired}
				validity={isValid}
				isTouched={isTouched} />
			break;
		case 'checkbox':
			inputElement = <InputCheckbox
				onChange={changeHandler}
				label={label}
				required={isRequired}
				validity={isValid}
				isTouched={isTouched}/>
			break;
		case 'radio':
			inputElement = <InputRadioButton
				checked={checked}
				label={label}
				id={id}
				onChange={changeHandler}
				name={name}
				value={value}
				required={isRequired}
				validity={isValid}
				isTouched={isTouched}/>
			break;
		default:
			inputElement = <InputText
				label={label}
				onChange={changeHandler}
				id={id}
				required={isRequired}
				validity={isValid}
				isTouched={isTouched}/>
			break;
};

	return(
		<>
			{inputElement}
		</>
	);
}

export default Input;