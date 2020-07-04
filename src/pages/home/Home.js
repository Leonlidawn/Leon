import './home.scss';
import React from 'react';
import TypeMe from 'react-typeme';
import portrait from './portrait.png'
import { message } from 'antd';

import '@fortawesome/fontawesome-free/css/all.min.css';
import { observer } from 'mobx-react';
import { copyToClipboard } from 'src/util'

class Home extends React.Component {
	constructor() {
		super();
	}

	componentDidMount() {

	}
	render() {
		const format = this.props.format;
		const Banner = () => <TypeMe strings={format('home.banner.array')} loop='true'
			backspaceDelay='600'
			typingSpeed='550'
		/>
		return (
			<div className='home'>

				{/* left side */}

				<div className='home__left'>
					{/* up  */}
					<div className='home__left__up'>
						<div className='home__portrait'>
							<img className='home__portrait__image' src={portrait} alt='profile' />
						</div>
						<div className='home__intro'>{format('introduction')}</div>
					</div>
					<div className='home__left__bottom'>
						<div className='home__contacts' >
							<p className='home__contacts__contact' onClick={() => { copyToClipboard('email'); message.success('Email copied', 1); }}>
								<i className="far fa-clone"></i>	{format('contact.email')}:<span id='email'>leonlidawn@gmail.com</span>
							</p>
							<p className='home__contacts__contact' onClick={() => { copyToClipboard('mobile'); message.success('Mobile copied', 1); }}>
								<i className="far fa-clone"></i>	{format('contact.mobile')}:<span id='mobile'>+61 481 555 767</span>
							</p>
						</div>
						<div className='home__banner'>
							<Banner />
						</div>
					</div>
				</div>

				{/* right side */}
				<div className='home__right'>
					<div className='home__social'>
						<span className='home__social__follow-me'>
							{format('follow-me')}
						</span>

						<a className='home__social__icon' target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/weidong-li-leon/'>
							<i className='icon fab fa-linkedin'></i>
						</a>

						<a className='home__social__icon' target='_blank' rel='noopener noreferrer' href='https://github.com/leonlidawn'>
							<i className='icon fab fa-github-square'></i>
						</a>
						<a className='home__social__icon' target='_blank' rel='noopener noreferrer' href='https://www.instagram.com/leonlidawn/'>
							<i className='icon fab fa-instagram-square'></i>
						</a>
					</div>
				</div>
			</div>
		)
	}
}
export default observer(Home);
