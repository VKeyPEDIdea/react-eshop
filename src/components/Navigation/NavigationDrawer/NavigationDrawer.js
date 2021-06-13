import React from 'react';
import classes from './NavigationDrawer.module.sass';
import Logo from '../../UI/Logo/Logo';
import { NavLink } from 'react-router-dom';
import { singularRoutes, typicalRoutes } from '../../../router';

const NavigationDrawer = props => {
	const {
		navDrawerClick,
		isVisible,
	} = props;

	let visibilityStyles = [classes.nav];
	if (isVisible) {
		visibilityStyles = [classes.nav, classes.navOpen].join(' ');
	};

	const getNavBtns = (linksList) => {
		return linksList.map(link => {
			if (!link.ref.includes('/product')) {
				return <li key={link.name}>
					<NavLink
						to={link.ref}
						className={classes.btnNav}
						activeClassName={[classes.btnNav, classes.active].join(' ')}>{link.name}</NavLink>
				</li>
			}
		});
	};

	const mobileNavBtns = getNavBtns(typicalRoutes.concat(singularRoutes));

	return(
		<>
			<nav onClick={() => navDrawerClick()}
				className={visibilityStyles}>
				<div className={classes.logoBox}>
					<Logo />
				</div>
				<ul className={classes.navList}>
					{mobileNavBtns}
				</ul>
			</nav>
		</>
	);
}

export default NavigationDrawer;