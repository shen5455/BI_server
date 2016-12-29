// var jsapi = require('js-api');

// var data = {posts: [{id: 'p1', title: 'first post', body: new Date()}]};
// // var data = {
// // 	key: new Date()
// // };
// console.log(data);

// jsapi.start(data, 3000);


var app = require('koa')();
var router = require('koa-router')();

var join = require('path').join;
var config = {
  modelPath: join(__dirname, 'models'),
  db: 'test',
  username: 'root',
  password: '123',
  dialect: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  pool: {
    maxConnections: 10,
    minConnections: 0,
    maxIdleTime: 30000
  }
};

var orm = require('koa-orm')(config);
app.use(orm.middleware);

router
  .get('/dd', function *(next) {
    this.body = 'Hello World1111!';
  })
  .get('/users', function *(next) {
    var raws = yield this.orm().sql.select().from('user').query();
    this.body = raws;
  })
  .get('/users/:id', function *(next) {
    this.body = 'Hello World333!';
  })
  .get('/users/:id', function *(next) {
    this.body = 'Hello World!444';
  });

app
  .use(router.routes())
  .use(router.allowedMethods());




app.listen(3000);