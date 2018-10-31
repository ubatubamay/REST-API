const mongoose = require('mongoose');
const { Schema } = mongoose;

const MovieSchema = new Schema({
    name: { type: String, required: true },
    year: { type: String, required: true }
});

module.exports = mongoose.model('Movie', MovieSchema);
