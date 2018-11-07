var db = require("../models");

const requets = require("request");
const axios = require("axios");

module.exports = function(app) {
  // Find New Templat HTML
  app.get("/api/newtemp/:temp", function(req, res) {
    db.Newtemps.findOne({
      where: {
        lable: req.params.temp
      }
    })
      .then(function(result) {
        res.json(result);
      })
      .catch(function(err) {
        res.status(400).json(err);
      });
  });

  // Find New Templat HTML
  app.get("/api/usertemp/:userid", function(req, res) {
    db.Temps.findAll({
      where: {
        UserId: req.params.userid
      }
    })
      .then(function(result) {
        res.json(result);
      })
      .catch(function(err) {
        res.status(400).json(err);
      });
  });

  // Create User Temp
  app.post("/api/usertemp", function(req, res) {
    db.Temps.create(req.body)
      .then(function(result) {
        res.json(result);
      })
      .catch(function(err) {
        res.status(400).json(err);
      });
  });

  ///////////////////
  //CLIENT PROFILE///
  ///////////////////

  //create client profile data: template to database
  //call the db client

  app.post("/api/clientProf", function(req, res) {
    db.clientP
      .create(req.body)
      .then(function(result) {
        res.json(result);
      })
      .catch(function(err) {
        res.status(400).json(err);
      });
  });

  //get the client profile data: data to page
  //change the userid field (in sequelize) to match the below

  // Find New Templat HTML
  app.get("/api/clientProf/:userid", function(req, res) {
    db.clientP
      .findAll({
        where: {
          UserId: req.params.userid
        }
      })
      .then(function(result) {
        res.json(result);
      })
      .catch(function(err) {
        res.status(400).json(err);
      });
  });

  ///////////////////
  //CLIENT SURVEY///
  ///////////////////

  //create client survey data: template to database
  //call the db client

  app.post("/api/clientSurv", function(req, res) {
    db.clientS
      .create(req.body)
      .then(function(result) {
        res.json(result);
      })
      .catch(function(err) {
        res.status(400).json(err);
      });
  });

  //get the client survey data: data to page
  //change the userid field (in sequelize) to match the below

  // Find New Templat HTML
  app.get("/api/clientSurv/:userid", function(req, res) {
    db.clientS
      .findAll({
        where: {
          UserId: req.params.userid
          // need to change this to get all data
        }
      })
      .then(function(result) {
        res.json(result);
      })
      .catch(function(err) {
        res.status(400).json(err);
      });
  });

  ///////////////////////
  //INSTRUCTOR PROFILE///
  ///////////////////////

  //create instructor profile data: template to database
  //call the db instructor

  app.post("/api/instructorProf", function(req, res) {
    db.instructor
      .create(req.body)
      .then(function(result) {
        res.json(result);
      })
      .catch(function(err) {
        res.status(400).json(err);
      });
  });

  //get the instructor survey data: data to page
  //change the userid field (in sequelize) to match the below

  // Find New Templat HTML
  app.get("/api/instructorProf/:userid", function(req, res) {
    db.Temps.findAll({
      where: {
        UserId: req.params.userid
        // need to change this to get all data
      }
    })
      .then(function(result) {
        res.json(result);
      })
      .catch(function(err) {
        res.status(400).json(err);
      });
  });

  ///////////////////////
  //INSTRUCTOR SURVEY///
  ///////////////////////

  //create instructor profile data: template to database
  //call the db instructor

  app.post("/api/instructorProf", function(req, res) {
    db.instructor
      .create(req.body)
      .then(function(result) {
        res.json(result);
      })
      .catch(function(err) {
        res.status(400).json(err);
      });
  });

  //get the instructor survey data: data to page
  //change the userid field (in sequelize) to match the below

  // Find New Templat HTML
  app.get("/api/instructorProf/:userid", function(req, res) {
    db.Temps.findAll({
      where: {
        UserId: req.params.userid
        // need to change this to get all data
      }
    })
      .then(function(result) {
        res.json(result);
      })
      .catch(function(err) {
        res.status(400).json(err);
      });
  });

  ///////////////////////
  ////////SEARCH/////////
  ///////////////////////

  //create db of select instructor profile data: template to database
  //call the db survey

  app.post("/api/search", function(req, res) {
    db.instructor
      .create(req.body)
      .then(function(result) {
        res.json(result);
      })
      .catch(function(err) {
        res.status(400).json(err);
      });
  });

  //get the instructor survey : data to page
  //change the userid field (in sequelize) to match the below

  // Find New Templat HTML
  app.get("/api/search/:userid", function(req, res) {
    db.Temps.findAll({
      where: {
        UserId: req.params.userid
        // need to change this to get all data
      }
    })
      .then(function(result) {
        res.json(result);
      })
      .catch(function(err) {
        res.status(400).json(err);
      });
  });
};
