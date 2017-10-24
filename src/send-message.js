import request from 'superagent';

const sendMessage = (name, message, onMessageSendSuccess, onMessageSendFailure) => {
	console.log('Sending message...');
	request
		.post('https://sparkette-one.herokuapp.com/msg')
		.send({
			name,
			message
		})
		.end(function(err, res){
			console.log('Message send finished.');
			if ((err !== null) && (onMessageSendFailure !== undefined)) {
				onMessageSendFailure(err);
			} else if (onMessageSendSuccess !== undefined) {
				onMessageSendSuccess(res);
			}
		});
}

export default sendMessage;
