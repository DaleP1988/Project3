const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes/index');

// create our Express app
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views')); // this is the folder where we keep our pug files
app.set('view engine', 'pug'); // we could use the engine pug, mustache or EJS or etc.

// serves up static files from the public folder. Anything in public/ will just be served up as the file it is
app.use(express.static(path.join(__dirname, 'public')));

// Takes the raw requests and turns them into usable properties on req.body
// So checks the url for data & puts all the data in the request so we can access it via request.query or request.body or etc.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



// After all the middleware above, we finally handle our own routes
// Meaning: anytime someone goes to "/anything" then we go to the routes file (routes defined above)
app.use('/', routes);

// we export it so we can start the site in start.js
module.exports = app;
