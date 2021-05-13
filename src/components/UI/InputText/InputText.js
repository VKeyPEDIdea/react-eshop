import React from 'react';
import classes from './InputText.module.sass';

const InputText = props => {
	const {
		label,
		id,
		onChange,
		required,
		validity,
		isTouched
	} = props;

	const inputStyles = [classes.inputText];

	if (!validity && required && isTouched) {
		inputStyles.push(classes.invalid);
	}

	return(
		<div className={classes.inputText}>
			<input
				onChange={onChange}
				required={required}
				type="text"
				name={id}
				id={id}
				className={classes.field}/>
			<label
				htmlFor={id}
				className={classes.label}>{label}</label>			
		</div>
	);
}

export default InputText;