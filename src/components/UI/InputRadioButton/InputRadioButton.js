import React from 'react';
import classes from './InputRadioButton.module.sass';

const InputRadioButton = props => {
	const {
		label,
		id,
		name,
		value,
		onChange
	} = props;

	return(
		<>
			<label className={classes.inputRadioButton} htmlFor={id}>
				<input
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