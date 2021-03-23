import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../UI/Logo/Logo';
import classes from './NavBar.module.sass';
import { routes } from '../../../router';

// Выделить в отдельный компонент логотип
// Вынести в отдельное хранилище список ссылок для навигации

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

	const navBtns = getNavBtns(routes);

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

export default NavBar;