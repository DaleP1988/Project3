module.exports = function(sequelize, DataTypes) {
  var instructorSurvey = sequelize.define("instructorSurvey", {
    Firstname: {
      type: DataTypes.TEXT,
      allowNull: true,
      validate: {
        len: [1]
      }
    },

    Lastname: {
      type: DataTypes.TEXT,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    studio: {
      type: DataTypes.TEXT,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    city: {
      type: DataTypes.TEXT,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    state: {
      type: DataTypes.TEXT,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    q1: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    q2: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    q3: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
      },
      q4: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [1]
        }
      },
      q5: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [1]
        }
      },
      q6: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [1]
        }
      }
    }
  });

  return instructorSurvey;
};

// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const instructorSurv = new Schema({
//   Firstname: { type: String, required: true },
//   Lastname: { type: String, required: true },
//   studio: { type: String, required: true },
//   city: { type: String, required: true },
//   state: { type: String, required: true },
//   q1: { type: String, required: true },
//   q2: { type: Text, required: true },
//   q3: { type: String, required: true },
//   q4: { type: String, required: true },
//   q5: { type: String, required: true },
//   q6: { type: String, required: true },
//   q7: { type: String, required: true }
// });

// const IS = mongoose.model("IP", ISSchema);

// module.exports = IS;

// Firstname: req.body.Contact.Firstname,
// Lastname: req.body.Contact.Lastname,
// studio: req.body.Contact.name.Studio,
// loc: req.body.Contact.name.Location,
// q1: req.body.question1,
// q2: req.body.question2,
// q3: req.body.question3,
// q4: req.body.question4,
// q5: req.body.question5,
// q6: req.body.question6,
// q7: req.body.question7
