import classes from './Layout.module.scss';
import React, { useState } from 'react';
import NavBar from '../../containers/NavBar';
import NavigationDrawer from '../../components/Navigation/NavigationDrawer';

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