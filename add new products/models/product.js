var db = require('./db');

module.exports ={

	get: function(id, callback){
		var sql = "select * from user where id=?";
		db.getResults(sql, [id], function(result){
			if(result.length > 0){
				callback(result[0]);
			}else{
				callback([]);
			}
		});
	},

	getAll: function(callback){
		var sql = "select * from user";
		db.getResults(sql, function(result){
			if(result.length > 0){
				callback(result);
			}else{
				callback([]);
			}
		});
	},
	
		students: function(callback){
		var sql = "select * from user where type='student'";
		db.getResults(sql, null, function(result){
			if(result.length > 0){
				callback(result);
			}else{
				callback([]);
			}
		});
	},
			product: function(callback){
		var sql = "select * from product";
		db.getResults(sql, null, function(result){
			if(result.length > 0){
				callback(result);
			}else{
				callback([]);
			}
		});
	},
	
	
	
	ctp: function(callback){
		var sql = "select * from user where type='tp'";
		db.getResults(sql, null, function(result){
			if(result.length > 0){
				callback(result);
			}else{
				callback([]);
			}
		});
	},


getByUname: function(username, callback){
		var sql = "select * from user where username=?";
		db.getResults(sql, [username], function(results){
			if(results.length > 0){
				callback(results[0]);
			}else{
				callback(null);
			}
		});
	},
	

	validate: function(user, callback){
		var sql = "select * from user where username=? and password=? and type=?";
		db.getResults(sql, [user.uname, user.password, user.type], function(result){
			if(result.length > 0){
				callback(true);
			}else{
				callback(false);
			}
		});
	},

	einsert: function(user, callback){
	var sql = "insert into user values(?, ?, ?, ?, ?)";

		

		db.execute(sql, ['', user.uname, user.password, user.type, user.contact], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	insert: function(user, callback){
	var sql = "insert into product values(?, ?)";

		db.execute(sql, ['', user.ename], function(status){
			if(status){
				console.log(status);
				callback(true);
			}else{
				callback(false);
			}
		});
	},

		
		update: function(user, callback){
var sql = "update user set username=?, contact=? where id=?";
				
		db.execute(sql, [user.ename, user.ephone, user.id], function(status){
			if(status){
			
				callback(true);
			}else{
				callback(false);
			}
		});
	
	},
	
delete: function(id, callback){
		var sql = "delete from user where id=?";
		db.execute(sql, [id], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	}
}