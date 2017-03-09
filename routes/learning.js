var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.render('learning/index', { title: 'Learning'})
});

router.get('/axis', function(req, res, next) {
	res.render('learning/axis', { title: 'Learning'})
});

router.get('/curve', function(req, res, next) {
    res.render('learning/curve', { title: 'Curve'} );
});

router.get('/mesh', function(req, res, next) {
    res.render('learning/mesh', { title: 'Mesh'} );
});

router.get('/advance-word', function(req, res, next) {
	res.render('learning/advanceWord.hbs', { title: 'Word' });
});

module.exports = router;