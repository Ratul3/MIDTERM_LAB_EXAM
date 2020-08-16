var express = require('express');
var db = require.main.require('./models/db');
var userModel = require.main.require('./models/user');
var router = express.Router();


router.get('*', function(req, res, next){
	if(req.session.username == null){
		res.redirect('/login');
	}else{
		next();
	}
});




module.exports = router;