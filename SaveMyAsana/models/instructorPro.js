module.exports = function(sequelize, DataTypes) {
  var instructorPro = sequelize.define("instructorPro", {
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
