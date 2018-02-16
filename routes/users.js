var express = require('express');
var router = express.Router();

var lib = require('fake-social-exam');

var validTokens = ['Pippo','Caio','Sempronio','Ciccio'];

var authUser = function(req, res, next) {
    if (validTokens.includes(req.query.token)){
        return next();
    }
    res.status(401).json({message:'Invalid token'});
}


router.get('/Social', function(req, res) {
    res.json(lib.getSocial());
})

router.post('/login/:id',validTokens, function(req, res) {
    res.json(lib.login(req.body.token, req.query.token));
})

router.post('/addPost/:id',validTokens, function(req, res) {
    
    res.json(lib.addPost(req.body.token, req.query.token));
})

module.exports = router;
