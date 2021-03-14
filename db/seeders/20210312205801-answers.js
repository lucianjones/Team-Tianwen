'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Answers', [
      {
        description: "To remove items from an array I recommend you go to the mdn docs and look it up",
        userId: 1,
        questionId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: "Its easy if you use array.slice(). Just pass it in a start and end (end not included) and youll get whatever you need",
        userId: 2,
        questionId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: "actually, if you know the index of the item you can remove it from the array by using array.splice(pos, i) array.slice will only copy the item",
        userId: 3,
        questionId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: "Using regular expressions is probably the best way. You can see a bunch of tests here (taken from chromium function validateEmail(email",
        userId: 1,
        questionId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: "What you want is the splice function on the native array object. arr.splice(index, 0, item); will insert item into arr at the specified index (deleting 0 items first, that is, it's just an insert).",
        userId: 2,
        questionId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: "You can implement the Array.insert method by doing this: Array.prototype.insert = function ( index, item ) {this.splice( index, 0, item ); };",
        userId: 3,
        questionId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: "Math.round(num * 100) / 100",
        userId: 4,
        questionId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: "parseFloat('123.456').toFixed(2);",
        userId: 1,
        questionId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: "document.getElementById('MyElement').classList.add('MyClass');",
        userId: 1,
        questionId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: "Use new Date() to generate a new Date object containing the current date and time.",
        userId: 5,
        questionId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        description: "let today = new Date().toISOString().slice(0, 10)",
        userId: 4,
        questionId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: "Math.floor(Math.random() * 6) + 1  ",
        userId: 2,
        questionId: 7,
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
