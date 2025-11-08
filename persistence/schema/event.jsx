const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    Id : {
        type: Number,
        required: true,
    },
    Title: {
        type: String,
        required: true,
    },
    Rating:{
        type: Number,
        required: false,
    },
    Colour: {
        type: String,
        required: false,
    },
    Notes: {
        type: String,
        required: false,
    },
    UserId: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Event', eventSchema);