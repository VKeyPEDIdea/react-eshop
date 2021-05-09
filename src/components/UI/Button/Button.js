import React from 'react';
import classes from './Button.module.sass';
const styles = [classes.button, classes.buttonCart].join(' ');

const Button = props => {
	const {
		click,
		id,
		name,
		disabled
	} = props;

	return(
		<button
			className={styles}
			disabled={disabled}
			onClick={click}
			data-id={id}>{name}</button>
	);
}

export default Button;