var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.render('custom/visual', {title: 'Visualisation'});
});

router.get('/render', function(req, res, next) {
	res.render('custom/twoRenderers', {title: 'Render'});
});

router.get('/audio', function(req, res, next) {
	res.render('custom/audio', {title: 'Audio'});
});

router.get('/node', function(req, res, next) {
	res.render('custom/node', {title: 'Node'});
});

router.get('/c', function(req, res, next) {
	res.render('custom/cylinder', {title: 'Node'});
});

router.get('/child-node', function(req, res, next) {
	res.render('custom/childNode', {title: 'Child Node'});
});

router.get('/test/line', function(req, res, next) {
	res.render('test/line', {title: 'Line'});
});

router.get('/test/arc', function(req, res, next) {
	res.render('test/arc', {title: 'Arc'});
});

router.get('/test/label', function(req, res, next) {
	res.render('test/label', {title: 'Label'});
});


module.exports = router;