import React from 'react';
import InputText from '../InputText/InputText';
import InputSelect from '../InputSelect/InputSelect';

const Input = props => {
	const {
		type,
		label,
		optionList,
		id
	} = props;

	let inputElement = null;
	switch (type) {
		case 'text':
			inputElement = <InputText
			 label={label}
			 id={id}/>
			break;
		case 'select':
			inputElement = <InputSelect
			label={label}
			optionList={optionList} />
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