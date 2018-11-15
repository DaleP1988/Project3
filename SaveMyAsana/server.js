
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

const User = require('./src/user') 
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

app.use(morgan('combined'));
app.use(bodyParser.json()); // body-parser MW
app.use(bodyParser.urlencoded({ extended: false })) // See doc of it for ref

app.use(session({  // Session MW
  secret: 'keyboard cat', // Use a more secure secret LOL
  resave: true,
  saveUninitialized: true,
  cookie: { maxAge: 100 * 60 * 60 * 24 * 30} // = 30 days
}))

// Passport intialization
app.use(passport.initialize());
app.use(passport.session());

// Our passport stategy
passport.use(new LocalStrategy(
    function(username, password, done) {
        User.findOne({  // Using sequelize model function
            where: { // Take an object with options where self explanatory
                'username': username
            }
        }).then(function (user) { // Sequelize return a promise with user in callback
            if (user == null) { // Checking if user exsists
                return done(null, false)  // Standerd Passport callback
            }

            if (password == user.password) { // use your password hash comparing logic here for security
                return done(null, user) // Standerd Passport callback
            }
            return done(null, false) // Standerd Passport callback
        })
    }
))

// for maintaining session
 passport.serializeUser(function(user, done) { // Standered Serialize for session
    done(null, user.id)
})

passport.deserializeUser(function(id, done) {
    User.findOne({ // Using sequelize model functoin
        where: {
            'id': id
        }
    }).then(function (user) {
        if (user == null) {
            done(new Error('Wrong user id.'))
        }

        done(null, user) // Standerd deserailize callback
    })
})

// Post request handling route for login
app.post('/login', passport.authenticate('local', { successRedirect: '/testGuard',
        failureRedirect: '/testGuard'}))


// Standerd middleware taking req, res and next as parameters
function loggedIn(req, res, next) {
    if (req.user) { // if request contains the user
        next(); // call next
    } else {
        res.status(403).send("Unauthorized")  // throwing unauthorized
    }
}

// Protected route
app.get('/testGuard',loggedIn, (req,res)=>{
  res.send("YOU ARE AUTHENTICATED");
})

// Handle logout
app.get('/logout',(req,res)=>{
    req.logout();
    res.send("YOU ARE NOW LOGGED OUT")
})

// start the app
app.listen(3000,()=>{
  console.log("magical number is 3000")
})