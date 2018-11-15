module.exports = function(sequelize, DataTypes) {
  var instructorPro = sequelize.define("instructorPro", {
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
    city: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    loc: {
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
    },
    q7: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
      }
    }
  });

  return instructorPro;
};

// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const instructorPro = new Schema({
//   Firstname: { type: String, required: true },
//   Lastname: { type: String, required: true },
//   email: { type: String, required: true },
//   phone: { type: String, required: true },
//   city: { type: String, required: true },
//   loc: { type: String, required: true },
//   img: { type: Text, required: true },
//   q1: { type: String, required: true },
//   q2: { type: String, required: true },
//   q3: { type: String, required: true },
//   q4: { type: String, required: true },
//   q5: { type: String, required: true },
//   q6: { type: String, required: true },
//   q7: { type: String, required: true }
// });

// const IP = mongoose.model("IP", IPSchema);

// module.exports = IP;
