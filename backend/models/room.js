const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    roomId: {
        type: String,
        required: true,
        unique: true,
    },
    code: {
        type: String,
        required: true,
    },
    // Other fields in your schema
});

const Rooms = mongoose.model('Rooms', roomSchema);

module.exports = Rooms;
