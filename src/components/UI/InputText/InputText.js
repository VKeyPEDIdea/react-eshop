import React from 'react';
import classes from './InputText.module.sass';

const InputText = props => {
	const {
		label,
		id
	} = props;
	return(
		<div className={classes.inputText}>
			<input
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