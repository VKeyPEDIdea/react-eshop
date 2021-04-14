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
		isRequired
	} = props;

	let inputElement = null;
	switch (type) {
		case 'text':
			inputElement = <InputText
			 label={label}
			 id={id}/>
			break;
		case 'tel':
			inputElement = <InputTelephone 
			label={label}
			id={id}
			required={isRequired}/>
			break;
		case 'select':
			inputElement = <InputSelect
			label={label}
			optionList={optionList} />
			break;
		case 'checkbox':
			inputElement = <InputCheckbox label={label} />
			break;
		case 'radio':
			inputElement = <InputRadioButton
				label={label}
				id={id}
				name={name}
				value={value} />
				break;
		default:
			inputElement = <InputText />
			break;
};

	return(
		<>
			{inputElement}
		</>
	);
}

export default Input;