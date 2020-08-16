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
router.get('/allemployeelist', function(req, res){
	
	
		userModel.employee(function(result){
			res.render('home/allemployeelist', { results : result, uname: req.session.username});
		});
	
});
router.get('/update/:id', function(req, res){

	userModel.get(req.params.id, function(result){
		res.render('home/update', {user: result});
	});
	
});

router.post('/update/:id', function(req, res){
	
		var user = {
		ename: req.body.ename,
	    ephone: req.body.ephone,
		id: req.params.id
	};

 userModel.update(user, function(status){
		if(status){
			res.redirect('/home/allemployeelist');
		}else{
			res.redirect('/home/allemployeelist');
		}
	});
	
});
router.get('/delete/:id', function(req, res){
	
	userModel.get(req.params.id, function(result){
		res.render('home/delete', {user: result});
	});

});

router.post('/delete/:id', function(req, res){
	
	userModel.delete(req.body.id, function(status){
		if(status){
			res.redirect('/home/allemployeelist');
		}else{
			res.redirect('/home/allemployeelist');
		}
	});
	
});


module.exports = router;