
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);
app.get('/word_cloud',function(req,res){
	res.render('word_cloud.ejs');
});

app.get('/distribution',function(req,res){
	res.render('distribution.ejs');
});

app.get('/reviews',function(req,res){
	res.render('reviews.ejs');
});

app.get('/checkins',function(req,res){
	res.render('checkins.ejs');
});

app.get('/ratings',function(req,res){
	res.render('ratings.ejs');
});

app.get('/aboutus',function(req,res){
	res.render('aboutus.ejs');
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
