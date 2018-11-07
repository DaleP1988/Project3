require("./soapTest");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/class", function(req, res) {
    console.log("something");
    var mindbody = require("./soapTest.js");
    mindbody.getClasses(res);
  });

  // app.get("/classes", function(req, res) {
  //   console.log("something");
  //   var mindbody = require("./soapTest.js");
  //   mindbody.getClasses(res);
  // });
};

// app.post("/classes", function(req, res) {
//   // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
//   // It will do this by sending out the value "true" have a table
//   // req.body is available since we're using the body-parser middleware
//   if (classData.length < 5) {
//     classData.push(req.body);
//     res.json(true);
//     alert("you've got data!");
//   } else {
//     classData.push(req.body);
//     res.json(false);
//   }
// });

//go over how to handle get requests
//check how to handle

//gets called when we click "click here"
// in api routes we call /classes
//in html it is just / for the url

//with app.get think of the string as the name of the function
//this is like running /classes "function" on the server
