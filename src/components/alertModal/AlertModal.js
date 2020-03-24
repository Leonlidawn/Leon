import React from 'react';
import './alertModal.scss'

class AlertModal extends React.Component {

	componentDidMount() {
		const modal = document.querySelector('.alertModal');
		modal.classList.add('display-none');
	}
	componentDidUpdate() {
		if (this.props.message) {
			const modal = document.querySelector('.alertModal');
			modal.classList.remove('display-none');
			modal.classList.remove('vanish');

			setTimeout(() =>
				modal.classList.add('vanish')
				, 200)
			setTimeout(
				() => {
					modal.classList.add('display-none');
					modal.classList.remove('vanish');
				}
				, 500)
		}
	}
	render() {
		const message = this.props.message;
		return (
			<div className="alertModal display-none">
				<span className="alertModal__message">
					{message}
				</span>
			</div>
		)
	}
}
export default AlertModal;