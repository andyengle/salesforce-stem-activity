import React, { Component } from 'react';

import { Button, FormControl, FormGroup, ControlLabel } from 'react-bootstrap';

import sendMessage from './send-message';

import './App.css';


class App extends Component {

	constructor (props) {
		super (props);

		this.onMessageSendSuccess = this.onMessageSendSuccess.bind(this);
		this.onMessageSendFailure = this.onMessageSendFailure.bind(this);

		this.state = {
			name: '',
			message: '',
			isSending: false
		};
	}

	// ----- Message sending ---------------------------------------------------

	onMessageSendClick () {
		const { name, message } = this.state;

		this.setState({
			isSending: true
		});

		sendMessage(name, message, this.onMessageSendSuccess, this.onMessageSendFailure);
	}

	onMessageSendSuccess (res) {
		console.log('%cSweet, the message was sent: ', 'color: #00AA00; font-weight: bold', res);
		this.setState({
			name: '',
			message: '',
			isSending: false
		});
	}

	onMessageSendFailure (err) {
		console.log('%cBummer, the message was not sent: ', 'color: #DD0000; font-weight: bold', err);
		this.setState({
			isSending: false
		});
	}

	// ----- Form event handling -----------------------------------------------

	onNameChange (event) {
		const name = event.target.value.substr(0, 40);
		this.setState({
			name
		});
	}

	onMessageChange (event) {
		const message = event.target.value.substr(0, 140);
		this.setState({
			message
		});
	}

	isSubmitButtonDisabled () {
		let returnFlag = false;

		if (((this.state.name === '') || (this.state.message === '')) ||
			(this.state.isSending === true)) {
			return true;
		}

		return returnFlag;
	}

	render() {
		return (
			<div className="App">
				<form>
					<FormGroup
						controlId="formBasicText"
					>
						<ControlLabel>Name</ControlLabel>
						<FormControl
							type="text"
							value={this.state.name}
							placeholder="Your name here"
							onChange={(e) => { this.onNameChange(e); }}
						/>

						<ControlLabel className="message-field">Message</ControlLabel>
						<FormControl
							type="text"
							value={this.state.message}
							placeholder="Your message here"
							onChange={(e) => { this.onMessageChange(e); }}
						/>

						<Button
							className="send-button"
							bsStyle="primary"
							onClick={() => { this.onMessageSendClick(); }}
							disabled={this.isSubmitButtonDisabled()}
						>
							Update the sign!
						</Button>
					</FormGroup>
				</form>
			</div>
		);
	}
}

export default App;
