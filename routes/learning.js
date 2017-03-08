var express = require('express');
var router = express.Router();

router.get('/:str', function(res, req, next) {
    var id = req.param.str;
    switch(id) {
        case 'lights':
            res.render('learning/lights');
            break;
        default:
            res.status(404);
    }
});