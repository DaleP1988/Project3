const express = require("express");
const router = express.Router();
// var bodyParser = require("body-parser");
// const SurveysController = require("../../controllers/SurveysController");
const db = require("../../models");

// router.use(bodyParser.urlencoded({ extended: true }));
// router.use(bodyParser.json());

//////////////////
//CLIENT SURVEY///
/////////////////

// router.get("/api/instructors", (req, res) => {
//     res.status(200).json(instructorData);
//     console.log(instructorData);
//   });

// router.post("api/clientChoices", (req, res) => {
//     res.status(200).json(req.body);
//     console.log(req.body);

//     });

// this gets the data, does the matches and sends them back to the client
// post both sends and receives

// could have kept surveyRoutes more simple. Database code would have been in the controller. It can still work as is. The other mthd used to scale efficiently and cleanly.

router.post("api/match", (req, res) => {
  var clientData = req.body;
  console.log("clientData:" + JSON.stringify(clientData));
  alert("posting to server");
  console.log(best);

  instructorData.forEach(function(instructor) {
    var score = 0;

    // need something to make a distinction btw ques. and all other data in obj
    // would want a name and array of questions in the future
    //
    for (var question in instructor) {
      if (instructor.hasOwnProperty(question) && question.startsWith("q")) {
        clientData[question].forEach(function(answer) {
          if (instructor[question].indexOf(answer) > -1) {
            // typescript, looks like java. converted when built. practice with typescript to move towards java...
            // instructor[question] is an array... if you used equal signs you would have to make sure both objs are arrays or strings
            // now there is includes and contains (in ECMA script)... would need to check compatability with windows 11 (for internet explorer ppl). server can handle any version of JS
            // this assumes question1 is in client data
            // this is now dependent on the structure of the survey (for same number of questions on each). this test is not "bulletproof"
            // I am not sure if I am getting all potential answers here since multiple answers can be selected and they come back as "item1, item3" , etc.
            //
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

  // this is returning the data to the client
  // req and res could be named whatever

  // when function is called in surveyRoutes,
  //

  //  code to send the scores back to the component
});

// };

//make sure the api route matches what is pictured here...
//this key doesnt have to do with the folder name. it uses api/name for technique and convention
console.log("THIS WORKED");
// router.route("api/instructorMatches").post(SurveysController.bestMatch);
// router.route("api/instructorProfile").post(DTO);
// router.route("api/clientChoices").post(DTO);

//use routes instead of controller or rename later

// module.exports = function(app) {

//
router.get("/", (req, res) => {
  res.status(200).json({ message: "Connected!" });
});

//////////////////////
//INSTRUCTOR SURVEYS///
//////////////////////

//get

// router.get("../../api/instructorSurveys", (req, res) => {
//   res.status(200).json({});
// });
//POST route for adding new survey to server

router.post("/api/InstructorSurveys", function(req, res) {});

// GET route for getting all of the instructor surveys

router.get("/api/InstructorSurveys", function(req, res) {
  // var query = {};
  // if (req.params.boxId) {
  //     query.BoxId = req.params.boxId;
  // }
  // Here we add an "include" property to our options in our findAll query
  // We set the value to an array of the models we want to include in a left outer join
  // In this case, just db.Box
  db.instructorSurveys
    .findAll({})
    .then(function(Surveys) {
      let iSurveys = {
        SurveyData: Surveys
      };
      res.send(iSurveys);
    })
    .catch(function(err) {
      // Whenever a validation or flag fails, an error is thrown
      // We can "catch" the error to prevent it from being "thrown", which could crash our node router
      res.json(err);
    });
});

//GET route for one instructor survey

///////////////////////
////ONE INS SURVEY////
//////////////////////

router.get("/api/InstructorSurveys/:id", function(req, res) {
  db.instructorSurveys
    .findOne({
      where: {
        Firstname: req.params.Firstname,
        Lastname: req.params.Lastname,
        loc: req.params.loc
      }
    })
    .then(ISurvey => {
      res.json(ISurvey).catch(function(err) {
        res.json(err);
      });
    });
});

// var query = {};
// if (req.params.boxId) {
//     query.BoxId = req.params.boxId;
// }
// Here we add an "include" property to our options in our findAll query
// We set the value to an array of the models we want to include in a left outer join
// In this case, just db.Box
//   db.instructorSurveys
// .findOne({})
// .then(function(Surveys) {
//   let iSurveys = {
//     SurveyData: Surveys
//   };
//   res.send(iSurveys);
// })
// .catch(function(err) {
//   // Whenever a validation or flag fails, an error is thrown
//   // We can "catch" the error to prevent it from being "thrown", which could crash our node router
//   res.json(err);
// });

//PUT route for new survey to db
router.put("/api/InstructorSurveys", function(req, res) {});

//DELETE getting rid of the survey
router.delete("/api/InstructorSurveys", function(req, res) {});

//////////////////////
//INSTRUCTOR PROFILES/
//////////////////////

//get

router.get("/api/InstructorProfiles", function(req, res) {
  db.instructorPros.findAll({}).then(function(dbinstructorPros) {
    res.send(dbinstructorPros);
  });
});

//post

router.post("/api/InstructorProfiles", function(req, res) {
  db.instructorPros
    .findAll({})
    .then(function(Surveys) {
      let iSurveys = {
        SurveyData: Surveys
      };
      res.send(iSurveys);
    })
    .catch(function(err) {
      // Whenever a validation or flag fails, an error is thrown
      // We can "catch" the error to prevent it from being "thrown", which could crash our node router
      res.json(err);
    });
});

// });

//put

router.put("/api/InstructorProfiles", function(req, res) {});

//delete

router.delete("/api/InstructorProfiles", function(req, res) {});

//////////////////////
///CLIENT SURVEYS/////
//////////////////////

//get

router.get("/api/ClientSurveys", function(req, res) {});

//post
router.post("/api/ClientSurveys", function(req, res) {});

//put
router.put("/api/ClientSurveys", function(req, res) {});

//delete
router.delete("/api/ClientSurveys", function(req, res) {});

//////////////////////
//CLIENT PROFILES/////
//////////////////////

//get
router.get("/api/ClientProfiles", function(req, res) {});

//post
router.post("/api/ClientProfiles", function(req, res) {});
//put
router.put("/api/ClientProfiles", function(req, res) {});
//delete
router.delete("/api/ClientProfiles", function(req, res) {});

//////////////////////
//////Booking/////////
//////////////////////

//////////////////////
///////Search/////////
//////////////////////

module.exports = router;

//CRUD CAN GO HERE.
//THIS CAN BE REFERENCED IN THE CLIENT SIDE CODE
//WILL GO TO API
//axios.then (on client side) is the response from here

// router.route("api/clientSelections").post();

// write the code to get instructor scores
//need to get client data from the survey or db?
// get scores for instructors and return array with highest scores first

// var clientData = req.body;
// // console.log("clientData:" + JSON.stringify(clientData));
// instructorData.forEach(function(instructor) {
//   var score = 0;

//   for (var question in instructor) {
//     // console.log("name:" + instructor.name);
//     // console.log("question:" + question);
//     // go through all variables in instructor object
//     if (instructor.hasOwnProperty(question) && question.startsWith("q")) {
//       clientData[question].forEach(function(answer) {
//         if (instructor[question].indexOf(answer) > -1) {
//           // console.log("name:" + instructor.name);
//           // console.log("answer:" + answer);

//           score++;
//           // console.log("score:" + score);
//         }
//       });
//     }
//   }

//   instructor.score = score;
// });

// function sortScores(a, b) {
//   //Compare "a" and "b" in some fashion, and return -1, 0, or 1
//   return a.score - b.score;
// }
// instructorData.sort(sortScores);

// res.json(instructorData);

//can make a local function here
//or make another one in surveyscontroller ... which is the option I chose!
//check surveyscontroller ... and fix others!

//FIND ALL CLIENT SURVEY
// Matches with "/api/surveyRoutes/IS"
//not sure if the

// router.route("/clientSurvey").get(SurveysController.findClientSurv);
// .post(SurveysController.create);

//FIND ONE CLIENT SURVEY
// Matches with "/api/CS/:id"
// router.route("/clientSurvey/:id").get(SurveysController.findOneClientSurv);
// .put(SurveysController.update)
// .delete(SurveysController.remove);

// MATCHES WITH BOOKING PAGE

//////////////////
//CLIENT PROFILE//
/////////////////

// FIND ALL CLIENT PROS
// Matches with "/api/CP"
// router.route("/clientProfile").get(SurveysController.findClientPros);
// .post(SurveysController.createClientPro);

//FIND ONE CLIENT PRO
// Matches with "/api/CP/:id"
// router
//   .route("/clientProfile/:id")
//   .get(SurveysController.findClientPro)
//   .put(SurveysController.updateClientPro)
//   .delete(SurveysController.removeClientPro);

/////////////////////
//INSTRUCTOR SURVEY//
/////////////////////

//FIND ALL INSTRUCTOR SRVY
// Matches with "/api/IS"
// router
//   .route("/InstructorSurvey")
//   .get(SurveysController.findInstructorSurv)
//   .post(SurveysController.createInstructorSurv);

//FIND ONE INSTRUCTOR SURV
// Matches with "/api/IS/:id"
// router
//   .route("/InstructorSurvey/:id")
//   .get(SurveysController.findOneInstructSurv)
//   .put(SurveysController.updateInstructSurv)
//   .delete(SurveysController.removeInstructSurv);

///////////////////////
//INSTRUCTOR PROFILE///
///////////////////////

//FIND ALL INSTRUCT PROS
// Matches with "/api/IP"
// router
//   .route("/InstructorProfile")
//   .get(SurveysController.findInstructPros)
//   .post(SurveysController.createInstructPro);

//FIND ONE INSTRUCT PRO
// Matches with "/api/IP/:id"
// router
//   .route("/InstructorProfile/:id")
//   .get(SurveysController.findOneInstructPro)
//   .put(SurveysController.updateInstructPro)
//   .delete(SurveysController.removeInstructPro);

///////////////////////
//////////LOGIN////////
///////////////////////

// Matches with "/api/Login"

// router
//   .route("/Login")
//   .get(SurveysController.findLogin)
//   .post(SurveysController.createLogin);

// Matches with "/api/Login/:id"

// router.route("/Login/:id").get(SurveysController.findOneLogin);
// .put(SurveysController.update);
// .delete(SurveysController.remove);
// });
