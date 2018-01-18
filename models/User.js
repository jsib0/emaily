const mongoose = require('mongoose');
const { Schema } = mongoose;


const userSchema = new Schema({
	googleId: String
});

//model class * a new collection called users
mongoose.model('users', userSchema)


