// Get all of our friend data
var data = require('../data.json');

exports.view = function(req, res){
	console.log("Initializing home.js");
	console.log(data);
	res.render('home', data);
};