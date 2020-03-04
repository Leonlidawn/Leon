import './homePage.scss';
import React from 'react';
import Typewriter from 'typewriter-effect';
// import en from 'src/locales/en-US';
import zh from 'src/locales/zh-CN';
import { LANGUAGE } from 'src/constants/language';
import { format } from 'src/util';

function HomePage() {
	let myFormat = (id) => format(LANGUAGE.CHINESE, id)

	return (
		<div className="homePage">
			{/* left side */}
			<div className="homePage__left">
				{/* up  */}
				<div className="homePage__left__up">
					<div className="homePage__portrait"></div>
					<div className="homePage__intro">{myFormat('introduction')}</div>
				</div>

				{/* down */}
				<div className="homePage__left__bottom">
					<div className="homePage__contacts">
						<p>E: leonlidawn@gmail.com</p>
						<p>T: +61 481 555 767</p>
					</div>
					<div className="homePage__banner">
						<Typewriter
							options={{
								strings: myFormat('home.banner.array'),
								autoStart: true,
								loop: true,

							}}
						/>
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
