const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bankSchema = new Schema({
  state: {
    type: String,
    required: true,
    trim: true,
  },
  city: {
    type: String,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

const Bank = mongoose.model('Bank', bankSchema);

module.exports = Bank;