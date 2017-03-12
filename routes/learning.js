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

router.get('/words', function(req, res, next) {
	res.render('learning/words.hbs', { title: 'Word' });
});

router.get('/advance-word', function(req, res, next) {
	res.render('learning/advanceWord.hbs', { title: 'Advance Word' });
});

router.get('/lights', function(req, res, next) {
	res.render('learning/lights.hbs', { title: 'lights' });
});

router.get('/ironman', function(req, res, next) {
	res.render('learning/ironman.hbs', { title: 'Iron Man' });
});

router.get('/audio', function(req, res, next) {
	res.render('learning/audio.hbs', { title: 'Audio!!!' });
});


module.exports = router;