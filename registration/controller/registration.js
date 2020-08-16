var express 	= require('express');
var userModel 	= require.main.require('./models/user');

var router 		= express.Router();

router.get('/', function(req, res){

		res.render('registration/index');
	
});

router.post('/', function(req, res){
	

		var user ={
			uname 		: req.body.uname,
			password	: req.body.password,
			contact		: req.body.contact,
			type		: req.body.type
			 
		}

		userModel.insert(user, function(status){
			if(status){
				res.redirect('/login');
			}else{
				res.redirect('/login');
			}
		});
		
	});


module.exports = router;