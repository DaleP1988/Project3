// ==============================================================================
// DEPENDENCIES and REQUIRED FILES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================

var path = require("path");
var express = require("express");
var bodyParser = require("body-parser");
var axios = require("axios");
const morgan = require("morgan");
const http = require("http");
var db = require("./models");
const session = require("express-session"); // for sessions
const passport = require("passport");
const user = express.Router();
const routes = require("./routes/api/surveyRoutes");

// ==============================================================================
// EXPRESS CONFIGURATION
// and MIDDLEWARE
// ==============================================================================

var app = express();
var PORT = process.env.PORT || 8080;

console.log("=========================server running================");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//server static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//===============================================================================

// ROUTING (API AND REACT VIEWS)

//===============================================================================

app.use(routes);
// app.use("api/surveyRoutes", routes);

//================================================================================
// PASSPORT
//=================================================================================

//additions for the passport

const LocalStrategy = require("passport-local").Strategy;
// const User = require("./src/user");
// Sets an initial port. We"ll use this later in our listener

// Sets up the Express app to handle data parsing

app.use(express.static(path.join(__dirname, "/public")));

app.get("/", function(req, res) {
  res.sendFile(path.join(_dirname, "/pages/Home"));
});

//================================================================================
// DATABASE SYNC OPTIONS
//=================================================================================

// set to true to clear the database
const syncOptions = { force: false };

//================================================================================
// SERVER
//=================================================================================

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
});

app.use(morgan("combined"));
app.use(bodyParser.json()); // body-parser MW
app.use(bodyParser.urlencoded({ extended: false })); // See doc of it for ref

app.use(
  session({
    // Session MW
    secret: "keyboard cat", // Use a more secure secret LOL
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 100 * 60 * 60 * 24 * 30 } // = 30 days
  })
);

// Passport intialization
app.use(passport.initialize());
app.use(passport.session());

// Our passport stategy
passport.use(
  new LocalStrategy(function(username, password, done) {
    User.findOne({
      // Using sequelize model function
      where: {
        // Take an object with options where self explanatory
        username: username
      }
    }).then(function(user) {
      // Sequelize return a promise with user in callback
      if (user == null) {
        // Checking if user exsists
        return done(null, false); // Standerd Passport callback
      }

      if (password == user.password) {
        // use your password hash comparing logic here for security
        return done(null, user); // Standerd Passport callback
      }
      return done(null, false); // Standerd Passport callback
    });
  })
);

// for maintaining session
passport.serializeUser(function(user, done) {
  // Standered Serialize for session
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findOne({
    // Using sequelize model functoin
    where: {
      id: id
    }
  }).then(function(user) {
    if (user == null) {
      done(new Error("Wrong user id."));
    }

    done(null, user); // Standerd deserailize callback
  });
});

// Post request handling route for login
app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/testGuard",
    failureRedirect: "/testGuard"
  })
);

// Standerd middleware taking req, res and next as parameters
function loggedIn(req, res, next) {
  if (req.user) {
    // if request contains the user
    next(); // call next
  } else {
    res.status(403).send("Unauthorized"); // throwing unauthorized
  }
}

// Protected route
app.get("/testGuard", loggedIn, (req, res) => {
  res.send("YOU ARE AUTHENTICATED");
});

// Handle logout
app.get("/logout", (req, res) => {
  req.logout();
  res.send("YOU ARE NOW LOGGED OUT");
});

// start the app
app.listen(4000, () => {
  console.log("magical number is 4000");
});
