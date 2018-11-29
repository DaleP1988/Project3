const router = require("express").Router();
const db = require("../../models");

router.get("/:name/:location", (req, res) => {
  const name = req.params.name;
  const location = req.params.location;
  db.clientPro
    .findAll({
      where: {
        Firstname: name,
        city: location
      }
    })
    .then(results => res.json(results))
    .catch(err => console.log(err));
});

module.exports = router;
