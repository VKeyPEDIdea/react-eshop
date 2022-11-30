import React from 'react';
import classes from './Counter.module.scss';

const Counter = props => {
	const {
		remove,
		add,
		count,
		mode
	} = props;
	
	let styles = {
		counter: classes.counter,
		btn: classes.btn
	};
	switch (mode) {
		case 'dark':
			styles.counter = [styles.counter, classes.counterDark].join(' ');
			styles.btn = [styles.btn, classes.btnDark].join(' ');
			break;
		default:
			styles.counter = classes.counter;
			styles.btn = classes.btn;
			break;
	}

	return(
	<div className={styles.counter}>
		<div className={styles.btn} onClick={remove}>
			<i className='material-icons'>remove</i> 
		</div>
		<div className={classes.count}>{count}</div>
		<div className={styles.btn} onClick={add}>
			<i className='material-icons'>add</i> 
		</div>
	</div>
	);
}

export default Counter;