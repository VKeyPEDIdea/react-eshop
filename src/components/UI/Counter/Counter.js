import React from 'react';
import classes from './Counter.module.sass';

const Counter = props => {
	return(
	<div className={classes.Counter} data-id={props.id} style={{display: "none"}}>
		<div className={ [classes.minus, 'icon-remove'].join(' ') } data-id={props.id}></div>
		<div className={classes.count} data-id={props.id}>0</div>
		<div className={[classes.plus, 'icon-add'].join(' ')} data-id={props.id}></div>
	</div>
	);
}

export default Counter;