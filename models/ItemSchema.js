const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const PostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    comments: [{
            title: {
                type: String,
                required: true
            },
        }]
});

module.exports = Post = mongoose.model('post', PostSchema);
