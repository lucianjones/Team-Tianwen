'use strict';
module.exports = (sequelize, DataTypes) => {
  const Vote = sequelize.define('Vote', {
    answerId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    isVote: DataTypes.BOOLEAN
  }, {});
  Vote.associate = function(models) {
    Vote.belongsTo(models.User, {foreignKey: 'userId'})
    Vote.belongsTo(models.Answer, {foreignKey:'answerId'})
  };
  return Vote;
};
