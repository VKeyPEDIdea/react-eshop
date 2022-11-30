import React from 'react';
import classes from './InputRadioButton.module.scss';

const InputRadioButton = props => {
	const {
		id,
		label,
		name,
		value,
		onChange,
		isValid,
		isRequired,
		isTouched,
		checked
	} = props.data;

	return(
		<>
			<label className={classes.inputRadioButton} htmlFor={id}>
				<input
					checked={checked}
					className={classes.field}
					type='radio'
					id={id}
					onChange={onChange}
					name={name}
					value={value} />
				<span className={classes.box}>
					<span className={classes.surface}></span>
				</span>
				{label}
			</label>
		</>
	);
}

export default InputRadioButton;