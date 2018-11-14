const router = require("express").Router();
const surveyRoutes = require("./surveyRoutes");

// survey routes
router.use("/surveyRoutes", surveyRoutes);



module.exports = router;
