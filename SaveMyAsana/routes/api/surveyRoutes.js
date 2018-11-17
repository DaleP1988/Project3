const router = require("express").Router();
const SurveysController = require("../../controllers/SurveysController");

//////////////////
//CLIENT SURVEY///
/////////////////

// Matches with "/api/CS"
router
  .route("/CS")
  .get(SurveysController.findAll)
  .post(SurveysController.create);

// Matches with "/api/CS/:id"
router
  .route("/CS/:id")
  .get(SurveysController.findById)
  .put(SurveysController.update)
  .delete(SurveysController.remove);

//////////////////
//CLIENT PROFILE//
/////////////////

// Matches with "/api/CP"
router
  .route("/CP")
  .get(SurveysController.findAll)
  .post(SurveysController.create);

// Matches with "/api/CP/:id"
router
  .route("/CP/:id")
  .get(SurveysController.findById)
  .put(SurveysController.update)
  .delete(SurveysController.remove);

/////////////////////
//INSTRUCTOR SURVEY//
/////////////////////

// Matches with "/api/IS"
router
  .route("/IS")
  .get(SurveysController.findAll)
  .post(SurveysController.create);

// Matches with "/api/IS/:id"
router
  .route("/IS/:id")
  .get(SurveysController.findById)
  .put(SurveysController.update)
  .delete(SurveysController.remove);

///////////////////////
//INSTRUCTOR PROFILE///
///////////////////////

// Matches with "/api/IP"
router
  .route("/IP")
  .get(SurveysController.findAll)
  .post(SurveysController.create);

// Matches with "/api/IP/:id"
router
  .route("/IP/:id")
  .get(SurveysController.findById)
  .put(SurveysController.update)
  .delete(SurveysController.remove);

///////////////////////
//////////LOGIN////////
///////////////////////

// Matches with "/api/Login"

router
  .route("/Login")
  .get(SurveysController.findAll)
  .post(SurveysController.create);

// Matches with "/api/Login/:id"

router
  .route("/Login/:id")
  .get(SurveysController.findById)
  .put(SurveysController.update)
  .delete(SurveysController.remove);

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
