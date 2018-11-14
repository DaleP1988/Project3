const mongoose = require('mongoose');

// import environmental variables from our variables.env file
require('dotenv').config({ path: 'variables.env' }); //package dotenv will take anything in variables.env
//& allows you access via process.env.{theNameOfTheVariable}

// Connect to our Database and handle any bad connections
mongoose.connect(process.env.DATABASE); // Connecting to Mongodb instance
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (err) => { //listens to any errors when connecting & shows error in terminal
    console.error(`🙅 🚫 → ${err.message}`);
});

// Starts our app
const app = require('./server');
app.set('port', process.env.PORT || 8888);
const server = app.listen(app.get('port'), () => {
    console.log(`Express running → PORT ${server.address().port}`);
});
