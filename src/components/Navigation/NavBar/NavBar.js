import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../UI/Logo/Logo';
import classes from './NavBar.module.sass';
import { typicalRoutes } from '../../../router';
import CartBtn from '../CartBtn/CartBtn';

const NavBar = props => {
	const getNavBtns = linksList => {
		return linksList.map(link => {
			return <li key={link.name}>
				<NavLink
					to={link.ref}
					className={classes.btnNav}
					activeClassName={[classes.btnNav, classes.active].join(' ')}>{link.name}</NavLink>
			</li>
		});
	}

	const navBtns = getNavBtns(typicalRoutes);

	return(
		<>
			<header className={classes.navBar}>
				<Logo />
				<nav>
					<ul className={classes.navList}>
						{navBtns}
					</ul>
				</nav>

				<div className={classes.actions}>
					<CartBtn />
					<div className={classes.profile}>
						<i className="material-icons">account_box</i>
					</div>
				</div>

				<div className="mobile-menu-bnt-wrap dnone-lg dblock-sm">
					<div className="btn btn--icon"><span className="icon-menu"></span></div>
				</div>
			</header>
		</>
	);
}

export default NavBar;