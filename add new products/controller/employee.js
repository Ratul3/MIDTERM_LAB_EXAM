var express = require('express');
var db = require.main.require('./models/db');
var userModel = require.main.require('./models/user');
var productModel = require.main.require('./models/product');
var router = express.Router();


router.get('*', function(req, res, next){
	if(req.session.username == null){
		res.redirect('/login');
	}else{
		next();
	}
});

router.get('/', function(req, res){

	
		res.render('employee/index', {uname: req.session.username});
	
});
router.get('/addproduct', function(req, res){
	
		res.render('employee/addproduct');
	
});

router.post('/addproduct', function(req, res){
	
	

		var user ={
			ename 		: req.body.ename
			
		}

		productModel.insert(user, function(status){
			if(status){
				res.redirect('/employee');
			}else{
				res.redirect('/employee');
			}
		});
	
});
router.get('/allproductlist', function(req, res){
	
	
		productModel.product(function(result){
			res.render('employee/allproductlist', { results : result, uname: req.session.username});
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