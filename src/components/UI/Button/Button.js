import React from 'react';
import classes from './Button.module.sass';
const styles = [classes.Button, classes.ButtonCart].join(' ');

const Button = props => {
	return(
		<div
			className={styles}
			data-id={props.id}>{props.name}</div>
	);
}

export default Button;