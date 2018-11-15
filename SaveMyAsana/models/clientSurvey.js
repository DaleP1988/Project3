module.exports = function(sequelize, DataTypes) {
  var clientSurvey = sequelize.define("clientSurvey", {
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
        type: DataTypes.TEXT,
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

  return clientSurvey;
};

// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const clientSurv = new Schema({
//   Firstname: { type: String, required: true },
//   Lastname: { type: String, required: true },
//   q1: { type: String, required: true },
//   q2: { type: String, required: true },
//   q3: { type: String, required: true },
//   q4: { type: Text, required: true },
//   q5: { type: String, required: true },
//   q6: { type: String, required: true }
// });

// const CS = mongoose.model("CS", CSSchema);

// module.exports = CS;
