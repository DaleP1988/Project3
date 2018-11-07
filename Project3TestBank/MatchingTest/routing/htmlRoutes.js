var path = require("path");

//ROUTING

module.exports = function(app) {
  //API GET REQUESTS

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });
};
