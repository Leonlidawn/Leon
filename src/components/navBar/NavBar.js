import React from 'react';
import { NavLink } from "react-router-dom";
import './navBar.scss';
import { LANGUAGE } from 'src/constants/language';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { observer } from 'mobx-react';


class NavBar extends React.Component {

	constructor() {
		super();
	}



	languageMenu = () => (
		<ul>
			{Object.values(LANGUAGE).map(
				(value) => (
					<li>
						<button onClick={() => this.props.oState.language = value}>
							{value}
						</button>
					</li>
				)
			)
			}
		</ul>
	)

	render() {
		let format = this.props.format;
		let oState = this.props.oState;

		return (

			<nav className='navigation-bar' >
				<div className="navigation-bar__name">
					<div className='navigation-bar__name__first'>
						{format('name.first')}
					</div>
					<div className='navigation-bar__name__second'>{format('name.second')}</div>
				</div>
				<ul className="navigation-bar__top-bar">
					<li>
						{this.languageMenu()}
					</li>
					<li>
						<NavLink exact to="/">
							<i className="icon fas fa-home"></i>
							{format('menu.home')}
						</NavLink>
					</li>
					<li>
						<NavLink to="/works">
							<i className="icon fas fa-laptop-code"></i>
							{format('menu.works')}
						</NavLink>
					</li>
					<li>
						<NavLink to="/resume">
							<i className="icon fas fa-id-badge"></i>
							{format('menu.resume')}
						</NavLink>
					</li>
					<li>

						<div className="language">
							<i className="icon fas fa-globe"></i>
							{format('menu.language')}
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
}
export default observer(NavBar);