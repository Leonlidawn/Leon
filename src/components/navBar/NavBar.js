import React from 'react';
import { NavLink } from "react-router-dom";
import './navBar.scss';
import { LANGUAGE } from 'src/constants/language';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { observer } from 'mobx-react';
import resume from 'src/resume.pdf';

class NavBar extends React.Component {

	toggleLanguageMenu = () => {
		const menu = document.querySelector('.navigation-bar__language__menu');
		if (menu.classList.contains("display-none")) {
			menu.classList.remove("display-none");
		} else {
			menu.classList.add("display-none");
		}
	}

	render() {
		let format = this.props.format;
		return (

			<nav className='navigation-bar' >
				<NavLink exact to="/">
					<div className="navigation-bar__name">
						<div className='navigation-bar__name__first'>
							{format('name.first')}
						</div>
						<div className='navigation-bar__name__second'>{format('name.second')}</div>
					</div>
				</NavLink>

				<ul className="navigation-bar__top-bar">
					<li>
						<NavLink exact to="/">
							<i className="icon fas fa-home"></i>
							<span>{format('menu.home')}</span>
						</NavLink>
					</li>
					<li>
						<NavLink to="/portfolio">
							<i className="icon fas fa-laptop-code"></i>
							<span>{format('menu.portfolio')}</span>
						</NavLink>
					</li>
					<li>
						<a href={resume}
							target="_blank" rel='noopener noreferrer'
						>
							<i className="icon fas fa-id-badge"></i>
							<span>{format('menu.resume')}</span>
						</a>
					</li>
					<li>
						<div className="navigation-bar__language" onClick={this.toggleLanguageMenu}>
							<i className="icon fas fa-globe"></i>
							<span>{format('menu.language')}</span>
							<ul className="navigation-bar__language__menu display-none">
								{Object.values(LANGUAGE).map(
									(value) => (
										<li key={value} onClick={() => this.props.oState.language = value}>
											{value}
										</li>
									)
								)
								}
							</ul>
						</div>
					</li>
				</ul >
			</nav >
		);
	}
}
export default observer(NavBar);