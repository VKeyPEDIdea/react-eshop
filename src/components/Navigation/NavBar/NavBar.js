import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../UI/Logo/Logo';
import classes from './NavBar.module.sass';
import { typicalRoutes } from '../../../router';
import CartBtn from '../CartBtn/CartBtn';
import { connect } from 'react-redux';
import { getBasketPrice, getBasketProductCount } from '../../../orderHelpers';

const NavBar = props => {
	const {
		basket,
		products,
		navDrawerToggleHandler,
	} = props;

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
	
	const onBurgerBtnClickHandler = () => {

	};

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
					<CartBtn 
						count={getBasketProductCount(basket)}
						price={getBasketPrice(basket, products)}/>
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

const mapStateToProps = state => {
	return {
		basket: state.order.basket,
		products: state.products.products
	};
};

export default connect(mapStateToProps)(NavBar);