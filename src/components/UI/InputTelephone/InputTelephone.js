import React from 'react';
import classes from './InputTelephone.module.sass';

const InputTelephone = props => {
	const {
		label,
		id,
		required,
		onChange
	} = props;

	return(
		<div className={classes.inputTelephone}>
			<input
				pattern='/^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/'
				type="tel"
				name={id}
				id={id}
				onChange={onChange}
				required={required}
				className={classes.field}/>
			<label
				htmlFor={id}
				className={classes.label}>{label}</label>			
		</div>
	);
}

export default InputTelephone;