'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Votes', [
      {
        answerId: 1,
        userId: 1,
        isVote: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        answerId: 2,
        userId: 1,
        isVote: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        answerId: 3,
        userId: 1,
        isVote: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        answerId: 4,
        userId: 1,
        isVote: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        answerId: 5,
        userId: 1,
        isVote: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        answerId: 6,
        userId: 1,
        isVote: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        answerId: 7,
        userId: 1,
        isVote: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        answerId: 8,
        userId: 1,
        isVote: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        answerId: 1,
        userId: 2,
        isVote: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        answerId: 2,
        userId: 2,
        isVote: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        answerId: 3,
        userId: 2,
        isVote: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        answerId: 4,
        userId: 2,
        isVote: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        answerId: 5,
        userId: 2,
        isVote: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        answerId: 6,
        userId: 2,
        isVote: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        answerId: 7,
        userId: 2,
        isVote: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        answerId: 8,
        userId:2 ,
        isVote: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        answerId: 1,
        userId: 3,
        isVote: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        answerId: 2,
        userId: 3,
        isVote: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        answerId: 3,
        userId: 3,
        isVote: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        answerId: 4,
        userId: 3,
        isVote: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        answerId: 5,
        userId: 3,
        isVote: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        answerId: 6,
        userId: 3,
        isVote: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        answerId: 7,
        userId: 3,
        isVote: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        answerId: 8,
        userId: 3,
        isVote: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },


    ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
