const mongoose = require('mongoose')


const Schema = mongoose.Schema;

blogSchema = Schema({
    title:{
        type: String,
        required: true
    },
    body:{
        type: String,
        required: true
    }
}, {timestamp: true});

var Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;