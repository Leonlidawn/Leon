import './homePage.scss';
import React from 'react';
import TypeMe from 'react-typeme';
import portrait from './portrait1.jpeg'
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
						<img className="homePage__portrait__image" src={portrait} />
					</div>
					<div className="homePage__intro">{myFormat('introduction')}</div>
				</div>
				<div className="homePage__left__bottom">
					<div className="homePage__contacts">						<p>
						{myFormat('contact.email')}: leonlidawn@gmail.com
						</p>
						<p>
							{myFormat('contact.mobile')}: +61 481 555 767
						</p>
					</div>
					<div className="homePage__banner">
						<TypeMe strings={myFormat('home.banner.array')} loop='true'
							backspaceDelay='600'
							typingSpeed='550'
						/>
					</div>
				</div>
			</div>

			{/* right side */}
			<div className="homePage__right">
				<div className="homePage__social">
					<span className="homePage__social__follow-me">
						{myFormat('follow-me')}
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
