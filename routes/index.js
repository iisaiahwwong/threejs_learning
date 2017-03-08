var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Yuxuan | Isaiah' });
});

router.get('/model', function(res, res, next) {
   res.render('models', { title: 'Models'})
});

router.get('/skybox', function(req, res, next) {
  res.render('skybox', { title: 'Skybox'});
});

module.exports = router;
