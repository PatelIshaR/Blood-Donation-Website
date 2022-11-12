const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const campSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        require: true,
    },
    city: {
        type: String,
        require: true,
    },
    state: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        require: true,
    },
});

const Camp = mongoose.model('bloodCamp', campSchema);

module.exports = Camp;