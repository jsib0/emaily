const keys = require('../config/keys');

const stripe = require('stripe')(keys.stripeSecretKey)



module.exports = (app) => {
	app.post('/api/stripe', async (req, res) => {
		const charge = await stripe.charges.create({
			amount: 500,
			currency: "usd",
			source: req.body.id,
			description: "charge for credits"
		});

		req.user.credits += 5;
		const user = await req.used.save();

		res.send(user)
	})
}