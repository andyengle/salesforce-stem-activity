import React, { Component } from 'react';

// This brings in components from react-bootstrap that we will be using within
// the component we are building now.
import { Button, FormControl, FormGroup, ControlLabel } from 'react-bootstrap';

// This sends the message to the server, which is the mechanism that will
// update the sign.
import sendMessage from './send-message';

// Styling for this component.
import './App.css';


class App extends Component {

	constructor (props) {
		super (props);

		// TODO: Bind onMessageSendSuccess and onMessageSendFailure to "this".
		// The syntax for that would be something like:
		// this.functionName = this.functionName.bind(this);

		// This instantiates this component's state.  It's scope is limited only
		// to this component.
		this.state = {
			name: '',
			message: '',
			isSending: false
		};
	}

	// ----- Message sending ---------------------------------------------------

	onMessageSendClick () {
		console.log('onMessageSendClick has been called.');

		// TODO: Call sendMessage here.  It's signature is:
		// sendMessage(name, message, success callback, failure callback)
	}

	onMessageSendSuccess (res) {
		console.log('%cSweet, the message was sent: ', 'color: #00AA00; font-weight: bold', res);

		// TODO: Reset the form here.
	}

	onMessageSendFailure (err) {
		console.log('%cBummer, the message was not sent: ', 'color: #DD0000; font-weight: bold', err);

		// TODO: Set state value "isSending" to false.
	}

	// ----- Form event handling -----------------------------------------------

	onNameChange (event) {
		const name = event.target.value.substr(0, 40);
		this.setState({
			name
		});
	}

	onMessageChange (event) {
		// TODO: Write some code here!
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

						{
							// Write your code here
						}

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
