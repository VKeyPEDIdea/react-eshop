import React from 'react';
import classes from './Counter.module.sass';

const Counter = props => {
	const {
		remove,
		add,
		count
	} = props;
	return(
	<div className={classes.counter}>
		<div className={classes.minus} onClick={remove}>
			<i className='material-icons'>remove</i> 
		</div>
		<div className={classes.count}>{count}</div>
		<div className={classes.plus} onClick={add}>
			<i className='material-icons'>add</i> 
		</div>
	</div>
	);
}

export default Counter;