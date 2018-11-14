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
  }
};

//////////////////
///CLIENT SURV/////
//////////////////

///////////////////
///ISNTRUCT PRO/////
////////////////////

/////////////////////
///INSTRUCT SURV//////
//////////////////////

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
