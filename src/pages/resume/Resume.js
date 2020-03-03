import './resume.scss';
import React from 'react';
import zh from 'src/locales/zh-CN';
import { LANGUAGE } from 'src/constants/language';

function Resume() {
	return (
		<div className="Resume">
			{/* left side */}
			<div>
				{/* up  */}
				<div className="portrait"></div>
				<div className="intro"></div>


				{/* down */}
				<div>
					<div className="contacts"></div>
					<div className="banner"></div>
				</div>
			</div>

			{/* right side */}
			<div className="social media">

			</div>
		</div>
	)
}
export default Resume;
