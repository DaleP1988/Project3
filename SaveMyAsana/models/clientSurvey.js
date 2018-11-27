module.exports = function(sequelize, DataTypes) {
  var clientSurvey = sequelize.define("clientSurvey", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
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
