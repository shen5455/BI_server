// var config = {
//   // modelPath: join(__dirname, 'models'),
//   db: 'test',
//   username: 'root',
//   password: '123',
//   dialect: 'mysql',
//   host: '127.0.0.1',
//   port: 3306,
//   pool: {
//     maxConnections: 10,
//     minConnections: 0,
//     maxIdleTime: 30000
//   }
// };

// var orm = require('koa-orm')(config);

var User = function(name, age){
	this.name = name || '**';
	this.age = age || '**';
};

User.prototype = {
	getAllUser: function* (obj){
		// console.log(obj);
		// return this.name + ':' +this.age;
		var raws = yield obj.orm().sql.select().from('user').query();
		return raws;
		//
	}
	// getOneUser: function(){
	// 	//
	// },
	// createUser: function(){
	// 	//
	// },
	// editUser: function(){
	// 	//
	// },
	// deleteUser: function(){
	// 	//
	// }
}

module.exports = User;