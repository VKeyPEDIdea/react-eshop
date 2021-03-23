import React from 'react';
import classes from './Button.module.sass';
const styles = [classes.button, classes.buttonCart].join(' ');

const Button = props => {
	return(
		<div
			className={styles}
			data-id={props.id}>{props.name}</div>
	);
}

export default Button;