import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../components/UI/Logo';
import classes from './NavBar.module.scss';
import { typicalRoutes } from '../../router';
import CartBtn from '../../components/Navigation/CartBtn';
import { useDispatch, useSelector } from 'react-redux';
import {
	getBasketList,
	selectLoading,
	selectBasketPrice,
	selectBasketProductCount
} from '../Order/basketSlice';

const NavBar = props => {
	const {	navDrawerToggleHandler } = props;

	const loading = useSelector(selectLoading);
	const basketPrice = useSelector(selectBasketPrice);
	const basketCount = useSelector(selectBasketProductCount);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getBasketList());
	}, []);

	const getNavBtns = (linksList) => {
		return linksList.map(link => {
			return <li key={link.name}>
				<NavLink
					to={link.ref}
					className={classes.btnNav}
					activeClassName={[classes.btnNav, classes.active].join(' ')}>{link.name}</NavLink>
			</li>
		});
	};
	const navBtns = getNavBtns(typicalRoutes);
	
	return(
		<>
			<header className={classes.navBar}>
				<div className={classes.logo}>
					<Logo />
				</div>
				<nav className={classes.mainNav}>
					<ul className={classes.navList}>
						{navBtns}
					</ul>
				</nav>

				<div className={classes.actions}>
					{ loading ? null : <CartBtn 
						count={basketCount}
						price={basketPrice}/>}
					<div className={classes.profile}>
						<i className="material-icons">account_box</i>
					</div>
					<div className={classes.burgerBtn}
						onClick={() => navDrawerToggleHandler()}>
						<i className='material-icons'>menu</i>
					</div>
				</div>

			</header>
		</>
	);
}

export default NavBar;