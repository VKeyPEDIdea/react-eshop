import React from 'react';
import classes from './InputTelephone.module.sass';

const InputTelephone = props => {
	const {
		label,
		id,
		required
	} = props;

	return(
		<div className={classes.inputTelephone}>
			<input
				pattern='+7-[0-9]{3}-[0-9]{3}-[0-9]{2}-{0-9}{2}'
				type="tel"
				name={id}
				id={id}
				required={required}
				className={classes.field}/>
			<label
				htmlFor={id}
				className={classes.label}>{label}</label>			
		</div>
	);
}

export default InputTelephone;