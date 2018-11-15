module.exports = function(sequelize, DataTypes) {
  var clientPro = sequelize.define("clientPro", {
    Firstname: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    Lastname: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    City: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
      },
      locState: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [1]
        }
      },
      img: {
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
        }
      },
      q4: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [1]
        }
      }
    }
  });

  return clientPro;
};

// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const clientPro = new Schema({
//   Firstname: { type: String, required: true },
//   Lastname: { type: String, required: true },
//   email: { type: String, required: true },
//   phone: { type: String, required: true },
//   City: { type: String, required: true },
//   locState: { type: String, required: true },
//   img: { type: Text, required: true },
//   q1: { type: String, required: true },
//   q2: { type: String, required: true },
//   q3: { type: String, required: true },
//   q4: { type: String, required: true }
// });

// const CP = mongoose.model("CP", CPSchema);

// module.exports = CP;

// Firstname: survey.Contact.Firstname,
// Lastname: survey.Contact.Lastname,
// email: survey.Contact.Email,
// phone: survey.Contact.Phone,
// locState: survey.Location,
// img: survey.Photo.content,
// q1: survey.question1,
// q2: survey.question2,
// q3: survey.question3,
// q4: survey.question4
