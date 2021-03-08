'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    hashedPassword: DataTypes.STRING.BINARY,
    email: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Question, {foreignKey: 'userId'})
    User.hasMany(models.Answer, {foreignKey: 'userId'})
    User.hasMany(models.Vote, {foreignKey:'userId'})
  };
  return User;
};
