const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  gender: {
    type: String,
    require: true,
  },
  age: {
    type: Number,
    require: true,
  },
  mobile: {
    type: Number,
    require: true,
    unique: true,
    maxlength: 10,
  },
  email: {
    require: true,
    type: String,
    match: /.+\@.+\..+/,
    unique: true,
  },
  password: {
    require: true,
    type: String
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;