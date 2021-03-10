'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        username: faker.internet.userName(),
        hashedPassword: await bcrypt.hash(faker.internet.password(), 10),
        email: faker.internet.email(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: faker.internet.userName(),
        hashedPassword: await bcrypt.hash(faker.internet.password(), 10),
        email: faker.internet.email(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: faker.internet.userName(),
        hashedPassword: await bcrypt.hash(faker.internet.password(), 10),
        email: faker.internet.email(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: faker.internet.userName(),
        hashedPassword: await bcrypt.hash(faker.internet.password(), 10),
        email: faker.internet.email(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: faker.internet.userName(),
        hashedPassword: await bcrypt.hash(faker.internet.password(), 10),
        email: faker.internet.email(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: faker.internet.userName(),
        hashedPassword: await bcrypt.hash(faker.internet.password(), 10),
        email: faker.internet.email(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: faker.internet.userName(),
        hashedPassword: await bcrypt.hash(faker.internet.password(), 10),
        email: faker.internet.email(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});

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
