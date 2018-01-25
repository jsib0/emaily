const mongoose = require('mongoose');
const { Schema } = mongoose;


const userSchema = new Schema({
	googleId: String,
	credits: { type: Number, default: 0}
});

//model class * a new collection called users
mongoose.model('users', userSchema)


