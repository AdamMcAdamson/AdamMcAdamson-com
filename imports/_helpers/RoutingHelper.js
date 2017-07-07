var express = require('express');
var router = express.Router();
var fs = require('fs');

var HangmanGame = require("./Hangman-Game_Helper.js");

router.use('/Hangman-Game', HangmanGame);

module.exports = router;