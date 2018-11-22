const router = require("express").Router();
const SurveysController = require("../../controllers/SurveysController");

//////////////////
//CLIENT SURVEY///
/////////////////

// the one below is from clientSurvey.js
// it helps post result to the server
// this will be used in the modal
//make sure the api route matches what is pictured here...
//this key doesnt have to do with the folder name. it uses api/name for e=organizational technique and following convention
console.log("THIS WORKED");
router.route("/api/instructorMatches").post(SurveysController.bestMatch);

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
