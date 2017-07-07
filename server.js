var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var PORT = process.env.PORT || 3000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use('/assets', express.static(__dirname + "/main/public/assets"));
app.use('/apps/Hangman-Game/assets', express.static(__dirname + "/imports/Hangman-Game/assets"));


app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));


// ______ IGNORE ______
	// // Set Handlebars.
	// var exphbs = require("express-handlebars");

	// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
	// app.set("view engine", "handlebars");

	// Import routes and give the server access to them.
	// var routes = require("./controllers/burgers_controller.js");

	// app.use("/", routes);
// ____________________


var routes = require("./main/routing/htmlRoutes.js");

app.use("/", routes);

var appRoutes = require("./imports/_helpers/RoutingHelper.js");

app.use("/apps/", appRoutes);


app.listen(PORT, function(){
	console.log("App listening on port: " + PORT);
});
