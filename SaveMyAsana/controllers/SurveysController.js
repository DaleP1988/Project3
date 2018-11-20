//===================================================================================
// DEPENDENCIES AND REQUIRED FILES
//===================================================================================

var db = require("../models");

//===================================================================================
// Surveys Controller Methods
//===================================================================================

//DEFINING METHODS FOR THE SURVEYSCONTROLLER

module.exports = {
  //////////////////
  ///CLIENT PRO/////
  //////////////////

  //find all

  findClientPros: function(req, res) {
    db.clientPro
      .find(req.query)
      .sort({ date: -1 }) //this needs to sort by a new param.
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  //find by id

  findOneClientPro: function(req, res) {
    db.clientPro
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  //createone

  createClientPro: function(req, res) {
    db.clientPro
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  //update

  updateClientPro: function(req, res) {
    db.clientPro
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  //delete

  removeClientPro: function(req, res) {
    db.clientPro
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // };

  //////////////////
  ///CLIENT SURV/////
  //////////////////

  //find all

  findClientSurv: function(req, res) {
    db.clientSurvey
      .find(req.query)
      .sort({ date: -1 }) //this needs to sort by a new param.
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  //find by id

  findOneClientSurv: function(req, res) {
    db.clientSurvey
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  //createone

  createClientSurv: function(req, res) {
    db.clientSurvey
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // };

  ///////////////////
  ///INSTRUCT PRO/////
  ////////////////////

  //find all

  findInstructPros: function(req, res) {
    db.instructorPro
      .find(req.query)
      .sort({ date: -1 }) //this needs to sort by a new param.
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  //find by id

  findOneInstructPro: function(req, res) {
    db.instructorPro
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  //createone

  createInstructPros: function(req, res) {
    db.instructorPro
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  //update

  updateInstructPros: function(req, res) {
    db.instructorPro
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  //delete

  removeInstructPros: function(req, res) {
    db.instructorPro
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  /////////////////////
  ///INSTRUCT SURV//////
  //////////////////////

  findInstructSurv: function(req, res) {
    db.instructorSurvey
      .find(req.query)
      .sort({ date: -1 }) //this needs to sort by a new param.
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  //find by id

  findOneInstructSurv: function(req, res) {
    db.instructorSurvey
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  //createone

  createInstructSurv: function(req, res) {
    db.instructorSurvey
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  //update

  updateInstructSurv: function(req, res) {
    db.instructorSurvey
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  //delete

  removeInstructSurv: function(req, res) {
    db.instructorSurvey
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  /////////////////////
  ////////LOGIN////////
  /////////////////////

  findLogin: function(req, res) {
    db.login
      .find(req.query)
      .sort({ date: -1 }) //this needs to sort by a new param.
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  //find by id

  findOneLogin: function(req, res) {
    db.login
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  //createone

  createLogin: function(req, res) {
    db.login
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
