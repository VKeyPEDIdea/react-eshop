import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavBar.module.sass';

const navBar = props => {
	return(
		<>
			<header className={classes.NavBar}>

				<div className={classes.logo}>
					<img src="Logo.svg" alt="logo"/>
				</div>

				<nav className="nav nav-header-desktop">
					<ul>
						<li>
							<NavLink
								to='/catalog'
								className={classes.btnNav}
								activeClassName={[classes.btnNav, classes.active].join(' ')}>Каталог</NavLink>
						</li>
						<li>
							<NavLink
								to='/promo'
								className={classes.btnNav}
								activeClassName={[classes.btnNav, classes.active].join(' ')}>Акции</NavLink>
							</li>
					</ul>
				</nav>

				<div className="header-func-box">

					{/* <div className="cart">
						<i className="cart-icon material-icons">shopping_cart</i>
						<div className="cart-info">
							<p className="cart-info__price">
								<span className="cart-info__price-value" id="cart-price-value">0</span>
								<span	className="cart-info__price-currency"> ₸</span>
							</p>
							<p className="cart-info__amount">
								<span className="cart-info__amount-value" id="cart-amount-value">0</span>
								<span	className="cart-info__amount-title"> товаров</span>
							</p>
						</div>
					</div> */}

					{/* <div className="user-profile">
						<i className="user-profile-icon material-icons">account_box</i>
					</div> */}
				</div>

				{/* <div className="mobile-menu-bnt-wrap dnone-lg dblock-sm">
					<div className="btn btn--icon"><span className="icon-menu"></span></div>
				</div> */}
			</header>
		</>
	);
}

export default navBar;