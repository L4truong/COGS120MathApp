
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var login = require('./routes/login');
var home = require('./routes/home');
var signup = require('./routes/signup');
var homework = require('./routes/homework');
var problem = require('./routes/problem');
var settings = require('./routes/settings');
var about = require('./routes/about');
var support = require('./routes/support');
var page_A = require('./routes/page_A');
var page_B = require('./routes/page_B');
var page_B_2 = require('./routes/page_B_2');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here

app.get('/signup', signup.view);
app.get('/', login.view);
app.get('/home', home.view);
app.get('/homework', homework.view);
app.get('/settings', settings.view);
app.get('/problem', problem.view);
app.get('/support', support.view);
app.get('/about', about.view);
app.get('/page_A', page_A.view);
app.get('/page_B', page_B.view);
app.get('/page_B_2', page_B_2.view);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
