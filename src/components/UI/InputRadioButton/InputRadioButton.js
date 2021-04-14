import classes from './InputRadioButton.module.sass';
import React from 'react';

const InputRadioButton = props => {
	const {
		label,
		id,
		name,
		value,
	} = props;

	return(
		<>
			<label className={classes.inputRadioButton} for={id}>
				<input
					className={classes.field}
					type='radio'
					id={id}
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