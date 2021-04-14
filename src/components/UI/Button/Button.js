import React from 'react';
import classes from './Button.module.sass';
const styles = [classes.button, classes.buttonCart].join(' ');

const Button = props => {
	const {
		click,
		id,
		name
	} = props;

	return(
		<div
			className={styles}
			onClick={click}
			data-id={id}>{name}</div>
	);
}

export default Button;