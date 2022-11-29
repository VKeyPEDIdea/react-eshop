import React from 'react';
import classes from './InputCheckbox.module.scss';

const InputCheckbox = props => {
	const { label, onChange } = props;
	
	return(
		<>
			<label className={classes.inputCheckbox}>
				<input className={classes.field} type="checkbox" onChange={onChange}/>
				<span className={classes.box}>
					<span className={classes.surface}></span>
				</span>
				{label}
			</label>
		</>
	);
}

export default InputCheckbox;