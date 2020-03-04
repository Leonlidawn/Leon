import './homePage.scss';
import React from 'react';
// import en from 'src/locales/en-US';
import zh from 'src/locales/zh-CN';
import { LANGUAGE } from 'src/constants/language';
import { format } from 'src/util';

function HomePage() {
	let bannerArray = format('home.banner.arry');

	return (
		<div className="homePage">
			{/* left side */}
			<div className="homePage__left">
				{/* up  */}
				<div className="homePage__left__up">
					<div className="homePage__portrait"></div>
					<div className="homePage__intro">{format('introduction')}</div>
				</div>

				{/* down */}
				<div className="homePage__left__bottom">
					<div className="homePage__contacts">
						<p>E: leonlidawn@gmail.com</p>
						<p>T: +61 481 555 767</p>
					</div>
					<div className="homePage__banner">

					</div>

				</div>
			</div>

			{/* right side */}
			<div className="homePage__right social media">
				media
			</div>
		</div>
	)
}
export default HomePage;
