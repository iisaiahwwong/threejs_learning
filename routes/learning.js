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

module.exports = router;