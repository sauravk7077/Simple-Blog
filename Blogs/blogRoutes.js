const express = require('express');

var router = express.Router();


router.get('/blogs', (req, res) => {
    res.render('index');  
});


module.exports = router;