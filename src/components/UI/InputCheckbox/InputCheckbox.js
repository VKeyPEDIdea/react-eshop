import React from 'react';
import classes from './InputCheckbox.module.sass';

const InputCheckbox = props => {
	const { label } = props;
	
	return(
		<>
			<label className={classes.inputCheckbox}>
				<input className={classes.field} type="checkbox" />
				<span className={classes.box}>
					<span className={classes.surface}></span>
				</span>
				{label}
			</label>
		</>
	);
}

export default InputCheckbox;