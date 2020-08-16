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

router.get('/', function(req, res){

	
		res.render('home/index', {uname: req.session.username});
	
});
router.get('/addemployee', function(req, res){
	
		res.render('home/addemployee');
	
});

router.post('/addemployee', function(req, res){
	
	

		var user ={
			ename 		: req.body.ename,
			epassword	: req.body.epassword,
			ephone		: req.body.ephone
		}

		userModel.einsert(user, function(status){
			if(status){
				res.redirect('/home');
			}else{
				res.redirect('/home');
			}
		});
	
});

module.exports = router;