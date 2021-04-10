import React from 'react';
import classes from './Counter.module.sass';

const Counter = props => {
	return(
	<div className={classes.counter}>
		<div className={classes.minus} onClick={props.remove}>
			<i className='material-icons'>remove</i> 
		</div>
		<div className={classes.count}>{props.count}</div>
		<div className={classes.plus} onClick={props.add}>
			<i className='material-icons'>add</i> 
		</div>
	</div>
	);
}

export default Counter;