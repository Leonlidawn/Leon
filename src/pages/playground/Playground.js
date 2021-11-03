import './playground.scss';
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { observer } from 'mobx-react';
import Canvas from './canvas/Canvas';
class Playground extends React.Component {
	constructor() {
		super();
	}

	componentDidMount() {

	}
	render() {
		const format = this.props.format;

		return (

			<div className="playground">
				<div className="title">
					<h1>{format('playground.title')}</h1>
				</div>
				<div>{format('playground.description')}</div>

				<h2>Drawing board</h2>
				<div>
					<Canvas></Canvas>
				</div>
				<h2>Star map</h2>


			</div>
		)
	}
}
export default observer(Playground);
