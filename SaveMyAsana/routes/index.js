const express = require('express');
const router = express.Router(); // calls an instance of express.Router() to create the frontend routes for our app

// home page route (http://localhost:8888)
// after getting the url (i.e. "/"), then we have a callback function that will run whenever someone visits that
// that specific url
// req: object full of info that's coming in
// res: object full of methods for sending data back to the user
router.get('/', (req, res) => {
    res.send('Hey! It works!');
});

// Routes to each react file go here



module.exports = router;
