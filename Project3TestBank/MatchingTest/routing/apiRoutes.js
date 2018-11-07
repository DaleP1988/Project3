// LOAD DATA

var instructorData = require("../data/instructor");

//ROUTING
module.exports = function(app) {
  //API GET REQUESTS

  app.get("/api/instructors", function(req, res) {
    res.json(instructorData);
    console.log(instructorData);
  });

  app.post("/api/client", function(req, res) {
    res.json({}); //this will return client after added. save client into database here
  });

  //req.body is a part of the body-parser middleware. //req is the rest request. res is the response
  app.post("/api/match", function(req, res) {
    var clientData = req.body;
    instructorData.forEach(function(instructor) {
      var score = 0;

      for (var question in instructor) {
        // go through all variables in instructor object
        if (instructor.hasOwnProperty(question) && question.startsWith("q")) {
          clientData[question].forEach(function(answer) {
            if (instructor[question].indexOf(answer) > -1) {
              score++;
            }
          });
        }
      }

      instructor.score = score;
    });

    function sortScores(a, b) {
      //Compare "a" and "b" in some fashion, and return -1, 0, or 1
      return a.score - b.score;
    }
    instructorData.sort(sortScores);

    res.json(instructorData);
  });
};
