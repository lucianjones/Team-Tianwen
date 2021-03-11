'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Questions', [
      {
        title: "How can I remove a specific item from an array?",
        description: "I have an array of numbers and I'm using the .push() method to add elements to it. \n  Is there a simple way to remove a specific element from an array? \n I'm looking for the equivalent of something like: \n array.remove(number);",
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        title: "How to validate an email address in JavaScript",
        description: "Is there a regular expression to validate an email address in JavaScript?",
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        title: "How to insert an item into an array at a specific index?",
        description: "I am looking for a JavaScript array insert method, in the style of: \n arr.insert(index, item)",
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        title: "I'd like to round at most 2 decimal places, but only if necessary.",
        description: "Input: \n 10 \n 1.7777777 \n 9.1 \n Output: \n 10 \n 1.78 \n 9.1 \n How can I do this in JavaScript?",
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        title: "How can I change an element's class with JavaScript?",
        description: "How can I change the class of an HTML element in response to an onclick or any other events using JavaScript?",
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        title: "How do I get the current date in JavaScript?",
        description: "How do I get the current date in JavaScript?",
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        title: "Generate random number between two numbers in JavaScript",
        description: "Is there a way to generate a random number in a specified range (e.g. from 1 to 6: 1, 2, 3, 4, 5, or 6) in JavaScript?",
        userId: 1,
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
