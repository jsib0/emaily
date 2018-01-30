const mongoose = require('mogoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');


const Survey = mongoose.model('surveys'); // done this way for testing purposes

module.exports = app => {
	app.post('/api/surveys', requireLogin, requireCredits, (req, res) => {
		const {title, subject, body, recipients } = req.body;

		const survey = new Survey({
			title,
			subject,
			body,
			recipients: recipients.split(',').map( email =>  ({ email }))
		})
	});
}