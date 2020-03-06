import React from 'react';
import { NavLink } from "react-router-dom";
import './navBar.scss';
import { LANGUAGE } from 'src/constants/language';
import { format } from 'src/util';
import '@fortawesome/fontawesome-free/css/all.min.css';

function NavBar() {
	let myformat = (id) => format(LANGUAGE.CHINESE, id);

	return (

		<nav className='navigation-bar' >
			<div className="navigation-bar__name">
				<div className='navigation-bar__name__first'>
					{myformat('name.first')}
				</div>
				<div className='navigation-bar__name__second'>{myformat('name.second')}</div>
			</div>
			<ul className="navigation-bar__top-bar">
				<li>
					<NavLink exact to="/">
						<i className="icon fas fa-home"></i>
						{myformat('menu.home')}
					</NavLink>
				</li>
				<li>
					<NavLink to="/works">
						<i className="icon fas fa-laptop-code"></i>
						{myformat('menu.works')}
					</NavLink>
				</li>
				<li>
					<NavLink to="/resume">
						<i className="icon fas fa-id-badge"></i>
						{myformat('menu.resume')}
					</NavLink>
				</li>
				<li>
					<div className="language">
						<i className="icon fas fa-globe"></i>
						{myformat('menu.language')}
					</div>
				</li>
			</ul >

			<ul className="navigation-bar__side-bar hide">
				<li><button className="navigation-bar__side-bar__menu-button "></button></li>
				<div className="navigation-bar__side-bar__options hide">
					<li><NavLink to="/">Home</NavLink></li>
					<li><NavLink to="/works">Works</NavLink></li>
					<li><NavLink to="/resume">Resume</NavLink></li>
					<li><NavLink to="/language">Language</NavLink></li>
				</div>
			</ul >

		</nav >
	);
}

export default NavBar;