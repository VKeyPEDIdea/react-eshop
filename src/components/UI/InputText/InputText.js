import React from 'react';
import classes from './InputText.module.scss';

const InputText = props => {
	const {
		id,
		label,
		value,
		onChange,
		isRequired,
		isValid,
		touched,
	} = props.data;

	const inputStyles = [classes.inputText];

	if (!isValid && isRequired && touched) {
		inputStyles.push(classes.invalid);
	}

	return(
		<div className={inputStyles.join(' ')}>
			<input
				onChange={onChange}
				required={isRequired}
				type="text"
				name={id}
				id={id}
				value={value}
				className={classes.field}/>
			<label
				htmlFor={id}
				className={classes.label}>{label}</label>			
		</div>
	);
}

export default InputText;