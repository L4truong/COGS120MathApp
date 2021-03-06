
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
var page_A_2 = require('./routes/page_A_2');
var page_A_3 = require('./routes/page_A_3');
var page_A_4 = require('./routes/page_A_4');
var page_A_5 = require('./routes/page_A_5');
var page_A_homework = require('./routes/page_A_homework');
var page_B = require('./routes/page_B');
var page_B_2 = require('./routes/page_B_2');
var page_B_3 = require('./routes/page_B_3');
var page_B_4 = require('./routes/page_B_4');
var page_B_5 = require('./routes/page_B_5');
var page_B_homework = require('./routes/page_B_homework');

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
app.get('/page_A_2', page_A_2.view);
app.get('/page_A_3', page_A_3.view);
app.get('/page_A_4', page_A_4.view);
app.get('/page_A_5', page_A_5.view);
app.get('/page_A_homework', page_A_homework.view);
app.get('/page_B', page_B.view);
app.get('/page_B_2', page_B_2.view);
app.get('/page_B_3', page_B_3.view);
app.get('/page_B_4', page_B_4.view);
app.get('/page_B_5', page_B_5.view);
app.get('/page_B_homework', page_B_homework.view);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
