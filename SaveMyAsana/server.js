
// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================

var express = require("express");
var bodyParser = require("body-parser");
var axis = require("axios");
const morgan = require('morgan');
// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

// Tells node that we are creating an "express" server
var app = express();
var db = require("./models");
const session = require('express-session') // for sessions
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/view", express.static(__dirname + "/view"));

//make sure you get to the right location to get files.

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

// require("./routes/apiRoutes")(app);
// require("./routes/htmlRoutes")(app);

// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
});

// const express = require('express');
// const path = require('path');
// const bodyParser = require('body-parser');
// const routes = require('./routes/index');

// // create our Express app
// const app = express();

// // view engine setup
// app.set('views', path.join(__dirname, 'views')); // this is the folder where we keep our pug files
// // app.set('view engine', 'pug'); // we could use the engine pug, mustache or EJS or etc.

// // serves up static files from the public folder. Anything in public/ will just be served up as the file it is
// app.use(express.static(path.join(__dirname, 'public')));

// // Takes the raw requests and turns them into usable properties on req.body
// // So checks the url for data & puts all the data in the request so we can access it via request.query or request.body or etc.
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // After all the middleware above, we finally handle our own routes
// // Meaning: anytime someone goes to "/anything" then we go to the routes file (routes defined above)
// app.use('/', routes);

// // we export it so we can start the site in server.js
// module.exports = app;

