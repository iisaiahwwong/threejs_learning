var express = require('express');
var router = express.Router();

router.get('/audio', function(req, res, next) {
	res.render('custom/audio', {title: 'Audio'});
});

router.get('/test/line', function(req, res, next) {
	res.render('test/line', {title: 'Line'});
});

module.exports = router;