import React from 'react';
import './alertModal.scss'

class AlertModal extends React.Component {

	componentDidMount() {
		const modal = document.querySelector('.alertModal');
		modal.classList.add('vanish');
		modal.classList.add('display-none');
	}
	componentDidUpdate() {
		const modal = document.querySelector('.alertModal');
		modal.classList.remove('vanish');
		modal.classList.remove('display-none');

		setTimeout(() =>
			modal.classList.add('vanish')
			, 200)
		setTimeout(() =>
			modal.classList.add('display-none')
			, 500)
	}
	render() {
		const message = this.props.message;
		return (
			<div className="alertModal">
				<span className="alertModal__message">
					{message}
				</span>
			</div>
		)
	}
}
export default AlertModal;