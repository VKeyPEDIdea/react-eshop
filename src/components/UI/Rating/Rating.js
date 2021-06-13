import React from 'react';
import classes from './Rating.module.sass';

const Rating = props => {
	const { rate } = props;

	function getRating(number) {
		let stars = [];
		for (let i = 0; i < number; i++) {
			stars.push(<i key={`star${i}`} className='material-icons'>star</i>)
		}
		return stars;
	}
	
	return(
		<>
			<span className={classes.star}>{getRating(rate)}</span>
		</>
	);
}

export default Rating;