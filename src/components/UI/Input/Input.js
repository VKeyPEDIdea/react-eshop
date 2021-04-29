import React from 'react';
import InputText from '../InputText/InputText';
import InputSelect from '../InputSelect/InputSelect';
import InputCheckbox from '../InputCheckbox/InputCheckbox';
import InputRadioButton from '../InputRadioButton/InputRadioButton';
import InputTelephone from '../InputTelephone/InputTelephone';

const Input = props => {
	const {
		type,
		label,
		optionList,
		id,
		name,
		value,
		isRequired,
		changeHandler
	} = props;

	let inputElement = null;
	switch (type) {
		case 'text':
			inputElement = <InputText
			 label={label}
			 onChange={changeHandler}
			 id={id}/>
			break;
		case 'tel':
			inputElement = <InputTelephone 
				label={label}
				id={id}
				onChange={changeHandler}
				required={isRequired}/>
			break;
		case 'select':
			inputElement = <InputSelect
				label={label}
				onChange={changeHandler}
				optionList={optionList} />
			break;
		case 'checkbox':
			inputElement = <InputCheckbox
				onChange={changeHandler}
				label={label} />
			break;
		case 'radio':
			inputElement = <InputRadioButton
				label={label}
				id={id}
				onChange={changeHandler}
				name={name}
				value={value} />
			break;
		default:
			inputElement = <InputText
				label={label}
				onChange={changeHandler}
				id={id}/>
			break;
};

	return(
		<>
			{inputElement}
		</>
	);
}

export default Input;