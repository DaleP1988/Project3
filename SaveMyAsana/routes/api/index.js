// ==============================================================================
// Dependencies & Required Files
// ==============================================================================

const router = require("express").Router();
const surveyRtes = require("./surveyRoutes");
const insClassRoutes = require("./instructorClass");
const instructorSurvey = require("./instructorSurvey");

// ==============================================================================
// Set Routes
// ==============================================================================
// router.get("/", (req, res) => {
//   res.status(200).json({ message: "Connected!" });
// });
router.use("/surveyRoutes", surveyRtes);
router.use("/instructor", insClassRoutes);
router.use("/instructorSurvey", instructorSurvey);

//individual api routes here
//

// ==============================================================================
// Export Router
// ==============================================================================

module.exports = router;
