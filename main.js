const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const blogRoutes = require('./Blogs/blogRoutes');

//Create app
const app = express();

//Setting the view engine to ejs
app.set('view engine', 'ejs');

app.listen(3000);


app.use(morgan('dev'));
app.use(express.static('public'));
app.use(blogRoutes);

app.route('/', (req, res)=>{
    res.render('index');
})
