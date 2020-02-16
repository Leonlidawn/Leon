import React from 'react';
import { NavLink } from "react-router-dom";
import './navBar.scss';
function NavBar() {

	return (

		<nav className='navigation-bar' >
			<div className="navigation-bar__name">
				Leon Li
			</div>
			<ul className="navigation-bar__top-bar">
				<li><NavLink to="/">Home</NavLink></li>
				<li><NavLink to="/works">Works</NavLink></li>
				<li><NavLink to="/resume">Resume</NavLink></li>
				<li><NavLink to="/contacts">Contact</NavLink></li>
			</ul >


			<ul className="navigation-bar__side-bar">
				<li><button className="navigation-bar__side-bar__menu-button"></button></li>
				<div className="navigation-bar__side-bar__options">
					<li><NavLink to="/">Home</NavLink></li>
					<li><NavLink to="/works">Works</NavLink></li>
					<li><NavLink to="/resume">Resume</NavLink></li>
					<li><NavLink to="/contacts">Contact</NavLink></li>
				</div>
			</ul >

		</nav >
	);
}

export default NavBar;