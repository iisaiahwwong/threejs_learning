var express = require('express');
var router = express.Router();

router.get('/curve', function(req, res, next) {
	res.render('learning/curve', { title: 'Curve'} );
})

module.exports = router;