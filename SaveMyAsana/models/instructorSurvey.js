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
    loc: {
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