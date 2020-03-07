import './home.scss';
import React from 'react';
import TypeMe from 'react-typeme';
import portrait from './portrait1.jpeg'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { observer } from 'mobx-react';


class Home extends React.Component {
	constructor(props) {
		super();
	}

	render() {
		const format = this.props.format;
		const Banner = () => <TypeMe strings={format('home.banner.array')} loop='true'
			backspaceDelay='600'
			typingSpeed='550'
		/>
		return (
			<div className="home">
				{/* left side */}
				<div className="home__left">
					{/* up  */}
					<div className="home__left__up">
						<div className="home__portrait">
							<img className="home__portrait__image" src={portrait} />
						</div>
						<div className="home__intro">{format('introduction')}</div>
					</div>
					<div className="home__left__bottom">
						<div className="home__contacts">						<p>
							{format('contact.email')}: leonlidawn@gmail.com
						</p>
							<p>
								{format('contact.mobile')}: +61 481 555 767
						</p>
						</div>
						<div className="home__banner">
							<Banner />
						</div>
					</div>
				</div>

				{/* right side */}
				<div className="home__right">
					<div className="home__social">
						<span className="home__social__follow-me">
							{format('follow-me')}
						</span>

						<a className="home__social__icon" target="_blank" href="https://www.linkedin.com/in/weidong-li-leon/">
							<i className="icon fab fa-linkedin"></i>
						</a>

						<a className="home__social__icon" target="_blank" href="https://github.com/Leonlidawn">
							<i className="icon fab fa-github-square"></i>
						</a>
					</div>
				</div>
			</div>
		)
	}
}
export default observer(Home);
