// figure out what set of credentials to return 
//NODE_ENV heroku sets this by default

if (process.env.NODE_ENV === 'production'){

	module.exports = require('./prod');
} else {

	module.exports = require('./dev');
}