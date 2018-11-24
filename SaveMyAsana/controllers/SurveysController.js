//===================================================================================
// DEPENDENCIES AND REQUIRED FILES
//===================================================================================
var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

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

  //find best match

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
  }

  //////////////////
  ////MATCHING//////
  ////SORTING///////
  //////////////////

  // bestMatch
  // name is the same as the function called in surveyRoutes.js
  // client does post, survey routes receives and forwards to surveyscontroller
  //TO DO:
  // add to seeds (instructors and clients)
  // check the old "API" model and match the format for the query

  // bestMatch: function(req, res) {

  //clientChoices:function(req, res){
  //console.log(req+"client choices hit");

  //}
};
//go back and organize client choices DTO
//minimize to the items only

// db.instructorSurveys
//   .findAll()
//   .then(instructorChoices => {

//     // check the dbModel structure to make sure the form of the data
//     console.log(JSON.stringify(instructorChoices));
//     //send all instructors and client survey to perform scoring

//     instructorData = res.json(instructorChoices);
//     // var instructors = getInstructors(dbModel, req.DTO);
//     // sent the data back to the client
//     //function below is called above
//   },

// }),

//   axios.post("api/scores", score )
//   .then(function(score){
//     console.log(score)

// });

// bestMatch(data.data);
//first is response with results.

//       instructorData.forEach(function(instructor) {
//         var score = 0;

//         for (var question in instructor) {
//           // console.log("name:" + instructor.name);
//           // console.log("question:" + question);
//           // go through all variables in instructor object
//           if (instructor.hasOwnProperty(question) && question.startsWith("q")) {
//             clientData[question].forEach(function(answer) {
//               if (instructor[question].indexOf(answer) > -1) {
//                 // console.log("name:" + instructor.name);
//                 // console.log("answer:" + answer);

//                 score++;
//                 // console.log("score:" + score);
//               }
//             });
//           }
//         }

//         instructor.score = score;
//       });

//       function sortScores(a, b) {
//         //Compare "a" and "b" in some fashion, and return -1, 0, or 1
//         return a.score - b.score;
//       }
//       instructorData.sort(sortScores);

//       res.json(instructorData);
//     });
//   };

//       // now implement the sorting
//     })
//     // instructors above is array of all instructors sorted by score

//     .catch(err => res.status(422).json(err));
// },

//     }

//     });

//using axios for a particular route
//getting 404
//have route on server
//can't figure out why it can't find it
//said axios is on server... can I use axios on the client and express on the server to handle?

// };
//#region Create Update
// Create a new  survey
router.get("/", async function(req, res) {
  try {
    console.log("survey endpoint hit" + req);
    //    res.status(200).send(survey);
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .send("There was a problem adding the information to the database.");
  }
});
///////////////////
///INSTRUCT PRO/////
////////////////////

//find all

//   findInstructPros: function(req, res) {
//     db.instructorPro
//       .find(req.query)
//       .sort({ date: -1 }) //this needs to sort by a new param.
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },

//   //find by id

//   findOneInstructPro: function(req, res) {
//     db.instructorPro
//       .findById(req.params.id)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },

//   //////////////////////
//   /////I PROFILE////////
//   //////TO//DB//////////
//   /////////////////////

//   //createone

//   createInstructPro: function(req, res) {
//     db.instructorPro
//       .create(req.body)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },

//   //update

//   updateInstructPro: function(req, res) {
//     db.instructorPro
//       .findOneAndUpdate({ _id: req.params.id }, req.body)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },

//   //delete

//   removeInstructPro: function(req, res) {
//     db.instructorPro
//       .findById({ _id: req.params.id })
//       .then(dbModel => dbModel.remove())
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },

//   /////////////////////
//   ///INSTRUCT SURV//////
//   //////////////////////

//   findInstructSurv: function(req, res) {
//     db.instructorSurvey
//       .find(req.query)
//       .sort({ date: -1 }) //this needs to sort by a new param.
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },

//   //find by id

//   findOneInstructSurv: function(req, res) {
//     db.instructorSurvey
//       .findById(req.params.id)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },

//   //createone

//   createInstructSurv: function(req, res) {
//     db.instructorSurvey
//       .create(req.body)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },

//   //update

//   updateInstructSurv: function(req, res) {
//     db.instructorSurvey
//       .findOneAndUpdate({ _id: req.params.id }, req.body)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },

//   //delete

//   removeInstructSurv: function(req, res) {
//     db.instructorSurvey
//       .findById({ _id: req.params.id })
//       .then(dbModel => dbModel.remove())
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },

//   /////////////////////
//   ////////LOGIN////////
//   /////////////////////

//   findLogin: function(req, res) {
//     db.login
//       .find(req.query)
//       .sort({ date: -1 }) //this needs to sort by a new param.
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },

//   //find by id

//   findOneLogin: function(req, res) {
//     db.login
//       .findById(req.params.id)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },

//   //createone

//   createLogin: function(req, res) {
//     db.login
//       .create(req.body)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   }
// };
