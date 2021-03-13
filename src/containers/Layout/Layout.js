import classes from './Layout.module.sass';
import React from 'react';
import NavBar from '../../components/Navigation/NavBar/NavBar';

const layout = props => {
	return(
		<>
			<NavBar />
			<div className={classes.container}>
				{props.children}
			</div>
		</>
	);
}

export default layout;