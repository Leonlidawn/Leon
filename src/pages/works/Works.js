import './works.scss';
import React from 'react';
import { observer } from 'mobx-react';

function Works() {
	return (
		<div className="works">
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
export default observer(Works);
