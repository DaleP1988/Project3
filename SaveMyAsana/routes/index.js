const express = require('express');
const router = express.Router(); // calls an instance of express.Router() to create the frontend routes for our app
const userController = require('../controllers/userController');

// home page route (http://localhost:8888)
// after getting the url (i.e. "/"), then we have a callback function that will run whenever someone visits that
// that specific url
// req: object full of info that's coming in
// res: object full of methods for sending data back to the user
router.get('/', (req, res) => {
    res.send('Hey! It works!');
});

// userController will take care of all of our signup and registration validation, and logging out
// and all the forms, password reset and so on.
router.get('/login', userController.loginForm);

router.get('/register', userController.registerForm);


//1. Validate the registration data
//2. Register the user
//3. we need to log them in
router.post('/register', userController.validateRegister);


module.exports = router;
