module.exports = function(sequelize, DataTypes) {
  var clientSurvey = sequelize.define("clientSurvey", {
    clientName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    question1: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    question2: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    question3: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      },
      question4: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      question5: {
        type: DataTypes.TEXT,
        validate: {
          len: [1]
        }
      },
      question6: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      }
    }
  });

  return clientSurvey;
};
