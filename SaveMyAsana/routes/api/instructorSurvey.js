const router = require("express").Router();
const db = require("../../models");

router.get("/:name/:location", (req, res) => {
  const name = req.params.name; //Sarah Smith => Sarah, Smith
  console.log("name is ", name);
  const parsedName = name.split(" ");
  const firstName = parsedName[0];
  const lastName = parsedName[1];
  const location = req.params.location;
  db.instructorSurveys
    .findAll({
      where: {
        Firstname: firstName,
        Lastname: lastName,
        city: location
      }
    })
    .then(results => res.json(results))
    .catch(err => console.log(err));
});

module.exports = router;
