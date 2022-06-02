const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  email: String,
  age: Number,
  programmingLevel: String,
  registerDate: {type: Date, default: Date.now}
});

const User = mongoose.model('User', userSchema);

module.exports = User;