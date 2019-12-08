const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var articleShcema = new Schema(
    {
        title: { type: String },
        author: { type: String },
        description: { type: String },
    }
)

module.exports = mongoose.model('Articles', articleShcema);