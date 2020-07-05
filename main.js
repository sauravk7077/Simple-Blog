const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const blogRoutes = require('./Blogs/blogRoutes');
const process = require('process');

//Create app
const app = express();

//Load the environment variable
require('dotenv').config();
const URI = process.env.URI;

//Configuring mongoose
mongoose.connect(URI, {useUnifiedTopology: true, useNewUrlParser: true});

//Setting the view engine to ejs
app.set('view engine', 'ejs');

app.listen(3000);


app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(blogRoutes);

app.get('/', (req, res)=>{
    res.render('index')
});

