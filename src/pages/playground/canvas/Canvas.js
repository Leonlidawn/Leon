import './canvas.scss';
import React, { createContext } from 'react';
import TypeMe from 'react-typeme';
import { message } from 'antd';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { observer } from 'mobx-react';


class Canvas extends React.Component {
	ctx;
	isPainting = false;
	canvas;
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		const board = document.getElementById('drawing-board');

		this.canvas = document.getElementById('drawing-canvas');
		const canvas = this.canvas;
		this.ctx = canvas.getContext('2d');
		const ctx = this.ctx;
		canvas.height = board.getBoundingClientRect().height;
		canvas.width = board.getBoundingClientRect().width;
		canvas.addEventListener('mousedown', (e) => this.togglePainting(true, e, ctx));
		canvas.addEventListener('mouseup', () => this.togglePainting(false));
		canvas.addEventListener('mousemove', (e) => this.draw(e, ctx));

		window.addEventListener('resize', this.resize);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.resize);
	}

	resize() {
		const board = document.getElementById('drawing-board');
		this.canvas = document.getElementById('drawing-canvas');
		const canvas = this.canvas;
		canvas.height = board.getBoundingClientRect().height;
		canvas.width = board.getBoundingClientRect().width;
	}

	togglePainting(v, e, c) {
		this.painting = v;
		if (v) {
			const ctx = this.ctx;
			ctx.beginPath();
			this.draw(e, c)
			ctx.lineWidth = 5;
			ctx.lineCap = "round"
		}
	}

	draw(e, c) {
		if (!this.painting) return;
		const rect = this.canvas.getBoundingClientRect();
		c.lineTo(e.clientX - rect.left, e.clientY - rect.top);
		let r1 = Math.random() * 255;
		let r2 = Math.random() * 255;
		let r3 = Math.random() * 255;
		c.strokeStyle = `rgb(${r1},${r2},${r3})`;
		console.log(c.strokeStyle)
		c.stroke();
	}

	onClear() {
		const canvas = this.canvas;
		let height = canvas.getBoundingClientRect().height;
		let width = canvas.getBoundingClientRect().width;
		this.ctx.clearRect(0, 0, width, height);
	}

	render() {
		return (
			<div id="drawing-board" className="drawing-board">
				<div className="canvas-wrapper paper">
					<canvas id="drawing-canvas" > </canvas>
				</div>
				<div className="button" onClick={() => this.onClear()}>
					<i className="fas fa-redo-alt"></i>
				</div>
			</div>
		)
	}
}
export default observer(Canvas);
