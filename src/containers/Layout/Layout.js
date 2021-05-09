import classes from './Layout.module.sass';
import React, { useState } from 'react';
import NavBar from '../../components/Navigation/NavBar/NavBar';
import NavigationDrawer from '../../components/Navigation/NavigationDrawer/NavigationDrawer';

const Layout = props => {
	const [isVisibleNavDrawer, setIsVisibleNavDrawer] = useState(false);

	const navDrawerCloseHandler = () => {
		setIsVisibleNavDrawer(false);
	};

	const navDrawerOpenHandler = () => {
		setIsVisibleNavDrawer(!isVisibleNavDrawer);
	};
	
	return(
		<>
			<NavBar
				navDrawerToggleHandler={navDrawerOpenHandler}/>
			<NavigationDrawer
				navDrawerClick={navDrawerCloseHandler}
				isVisible={isVisibleNavDrawer}/>
			<div className={classes.container}>
				{props.children}
			</div>
		</>
	);
}

export default Layout;