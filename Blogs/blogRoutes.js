const express = require('express');
var Blog = require('../modules/blog');

var router = express.Router();


router.get('/blogs', (req, res) => {
    Blog.find().then((data)=>{
        console.log(data);
        res.render('allBlogs',{title: 'All Blogs', data: data});
    });
});

router.get('/blog-create', (req, res)=>{
    res.render('blogCreate', {title:'Create a Blog'});
});

router.post('/blog-create', (req, res)=>{
    var blog1 = new Blog(req.body);
    blog1.save().then((data)=>{
        res.redirect('/');
    });

});


module.exports = router;