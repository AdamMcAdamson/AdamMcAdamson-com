var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/', function(req, res){
	fs.readFile('./main/public/index.html', 'utf-8', function(err, data){
		if (err) throw err;
		res.send(data);
	});
});

router.get('/portfolio', function(req, res){
	fs.readFile('./main/public/portfolio.html', 'utf-8', function(err, data){
		if (err) throw err;
		res.send(data);
	});
});

router.get('/contact', function(req, res){
	fs.readFile('./main/public/contact.html', 'utf-8', function(err, data){
		if (err) throw err;
		res.send(data);
	});
});

module.exports = router;