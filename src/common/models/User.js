const { DataTypes } = require("sequelize");
const { roles } = require("../../config");
const UserModel = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: true,
    unique: false,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
    // defaultValue: roles.USER
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  }
};

module.exports = {
    initialize: (sequelize) => {
      this.model = sequelize.define("user", UserModel);
    },
  
    createUser: (user) => {
      return this.model.create(user);
    }

    // findAllUsers: (query) => {
    //     return this.model.findAll({
    //         where: query
    //     });
    // }
};