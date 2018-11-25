const router = require("express").Router();
const SurveysController = require("../../controllers/SurveysController");

//////////////////
//CLIENT SURVEY///
/////////////////

// the one below is from clientSurvey.js
// it helps post result to the server
// this will be used in the modal
//make sure the api route matches what is pictured here...
//this key doesnt have to do with the folder name. it uses api/name for technique and convention
console.log("THIS WORKED");
// router.route("api/instructorMatches").post(SurveysController.bestMatch);
// router.route("api/instructorProfile").post(DTO);
// router.route("api/clientChoices").post(DTO);

//
router.get("/", (req, res) => {
  res.status(200).json({ message: "Connected!" });
});

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
// .put(SurveysController.update)
// .delete(SurveysController.remove);

module.exports = router;

//Matches with /api/clientSurv

//Matches with /api/clientProf

//Matches with /api/instructorSurv

//Matches with /api/instructorProf

//Matches with /api/clientSurv

//Matches with /api/clientSurv

//Matches with /api/clientSurv

//Matches with /api/clientSurv

//Matches with /api/clientSurv
