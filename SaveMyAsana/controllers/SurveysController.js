var db = require("../models");

//DEFINING METHODS FOR THE SURVEYSCONTROLLER

module.exports = {
  //////////////////
  ///CLIENT PRO/////
  //////////////////

  //find all

  findAll: function(req, res) {
    db.clientPro
      .find(req.query)
      .sort({ date: -1 }) //this needs to sort by a new param.
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  //find by id

  findById: function(req, res) {
    db.clientPro
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  //cerae

  create: function(req, res) {
    db.clientPro
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  //update

  update: function(req, res) {
    db.clientPro
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  //delete

  remove: function(req, res) {
    db.clientPro
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  //////////////////
  ///CLIENT SURV/////
  //////////////////

  findAll: function(req, res) {
    db.clientSurv
      .find(req.query)
      .sort({ date: -1 }) //this needs to sort by a new param.
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  //find by id

  findById: function(req, res) {
    db.clientSurv
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  //cerae

  create: function(req, res) {
    db.clientSurv
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  //update

  // update: function(req, res) {
  //   db.clientSurv
  //     .findOneAndUpdate({ _id: req.params.id }, req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },

  //delete

  // remove: function(req, res) {
  //   db.clientSurv
  //     .findById({ _id: req.params.id })
  //     .then(dbModel => dbModel.remove())
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));

  ///////////////////
  ///ISNTRUCT PRO/////
  ////////////////////

  //find all

  findAll: function(req, res) {
    db.instructorPro
      .find(req.query)
      .sort({ date: -1 }) //this needs to sort by a new param.
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  //find by id

  findById: function(req, res) {
    db.instructorPro
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  //cerae

  create: function(req, res) {
    db.instructorPro
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  //update

  update: function(req, res) {
    db.instructorPro
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  //delete

  remove: function(req, res) {
    db.instructorPro
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  /////////////////////
  ///INSTRUCT SURV//////
  //////////////////////

  //find all

  findAll: function(req, res) {
    db.instructorSurv
      .find(req.query)
      .sort({ date: -1 }) //this needs to sort by a new param.
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  //find by id

  findById: function(req, res) {
    db.instructorSurv
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  //cerae

  create: function(req, res) {
    db.instructorSurv
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }

  // //update

  // update: function(req, res) {
  //   db.instructorSurv
  //     .findOneAndUpdate({ _id: req.params.id }, req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },

  // //delete

  // remove: function(req, res) {
  //   db.instructorSurv
  //     .findById({ _id: req.params.id })
  //     .then(dbModel => dbModel.remove())
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // }
};

//   findAll: function(req, res) {
//   db.Article
//     .find(req.query)
//     .sort({ date: -1 })
//     .then(dbModel => res.json(dbModel))
//     .catch(err => res.status(422).json(err));
// },
// findById: function(req, res) {
//   db.Article
//     .findById(req.params.id)
//     .then(dbModel => res.json(dbModel))
//     .catch(err => res.status(422).json(err));
// },
// create: function(req, res) {
//   db.Article
//     .create(req.body)
//     .then(dbModel => res.json(dbModel))
//     .catch(err => res.status(422).json(err));
// },
// update: function(req, res) {
//   db.Article
//     .findOneAndUpdate({ _id: req.params.id }, req.body)
//     .then(dbModel => res.json(dbModel))
//     .catch(err => res.status(422).json(err));
// },
// remove: function(req, res) {
//   db.Article
//     .findById({ _id: req.params.id })
//     .then(dbModel => dbModel.remove())
//     .then(dbModel => res.json(dbModel))
//     .catch(err => res.status(422).json(err));
// },
//   }
// };
