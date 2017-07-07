var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/', function(req, res){
	fs.readFile('./imports/Hangman-Game/index.html', 'utf-8', function(err, data){
		if (err) throw err;
		res.send(data);
	});
});

module.exports = router;