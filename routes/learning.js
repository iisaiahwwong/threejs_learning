var express = require('express');
var router = express.Router();

router.get('/:ID', function(res, req, next) {
    var id = req.param.ID;
    switch(id) {
        case 1:
            res.render('learning/first');
            break;
        default:
            res.status(404);
    }
});