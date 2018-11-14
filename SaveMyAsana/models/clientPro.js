module.exports = function(sequelize, DataTypes) {
  var clientPro = sequelize.define("clientPro", {
    clientName: {
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
