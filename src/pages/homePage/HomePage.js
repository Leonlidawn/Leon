import './homePage.scss';
import React from 'react';
// @ts-ignore
import Typewriter from 'typewriter-effect';
import TypeMe, { LineBreak, Delete } from 'react-typeme';

import portrat from './portrait1.jpeg'
// import en from 'src/locales/en-US';
import zh from 'src/locales/zh-CN';
import { LANGUAGE } from 'src/constants/language';
import { format } from 'src/util';
import '@fortawesome/fontawesome-free/css/all.min.css';

function HomePage() {
	let myFormat = (id) => format(LANGUAGE.ENGLISH, id)
	return (
		<div className="homePage">
			{/* left side */}
			<div className="homePage__left">
				{/* up  */}
				<div className="homePage__left__up">
					<div className="homePage__portrait">
						<img className="homePage__portrait__image" src={portrat} />
					</div>
					<div className="homePage__intro">{myFormat('introduction')}</div>
				</div>
				<div className="homePage__left__bottom">
					<div className="homePage__contacts">
						<p>
							<i className="icon far fa-envelope"></i>
							Email: leonlidawn@gmail.com
						</p>
						<p><i className="fas fa-mobile-alt"></i>
							Mobile: +61 481 555 767
						</p>
					</div>
					<div className="homePage__banner">
						<TypeMe strings={myFormat('home.banner.array')} loop='true'
							backspaceDelay='600'
							typingSpeed='300'
						/>
					</div>
				</div>
			</div>

			{/* right side */}
			<div className="homePage__right">
				<div className="homePage__social">
					<span className="homePage__social__follow-me">
						Follow Me
					</span>
					<a className="homePage__social__icon" target="_blank" href="https://www.linkedin.com/in/weidong-li-leon/">
						<i className="icon fab fa-linkedin"></i>
					</a>
					<a className="homePage__social__icon" target="_blank" href="https://github.com/Leonlidawn">
						<i className="icon fab fa-github-square"></i>
					</a>
				</div>
			</div>
		</div>
	)
}
export default HomePage;
