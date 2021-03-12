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
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        title: "How to insert an item into an array at a specific index?",
        description: "I am looking for a JavaScript array insert method, in the style of: \n arr.insert(index, item)",
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        title: "I'd like to round at most 2 decimal places, but only if necessary.",
        description: "Input: \n 10 \n 1.7777777 \n 9.1 \n Output: \n 10 \n 1.78 \n 9.1 \n How can I do this in JavaScript?",
        userId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        title: "How can I change an element's class with JavaScript?",
        description: "How can I change the class of an HTML element in response to an onclick or any other events using JavaScript?",
        userId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        title: "How do I get the current date in JavaScript?",
        description: "How do I get the current date in JavaScript?",
        userId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        title: "Generate random number between two numbers in JavaScript",
        description: "Is there a way to generate a random number in a specified range (e.g. from 1 to 6: 1, 2, 3, 4, 5, or 6) in JavaScript?",
        userId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "How to validate an email address in JavaScript",
        description: "Is there a regular expression to validate an email address in JavaScript?",
        userId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        title: "How to prevent javascript from loading until the DOM has loaded",
        description: 'How to prevent javascript from loading until the DOM has loaded',
        userId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        title: "How would you grab an element by Id using javascript",
        description: "I have made a Js file where I have generated simple Html code. I was wondering if there was a way to select a specific Id to use in the javascript",
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        title: "Generate random string/characters in JavaScript",
        description: "I want a 5 character string composed of characters picked randomly from the set [a-zA-Z0-9]. What's the best way to do this with JavaScript?",
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        title: "Check if a variable is a string in JavaScript",
        description: "How can I determine whether a variable is a string or something else in JavaScript?",
        userId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        title: "How do I remove a key from a JavaScript object?",
        description: "Let's say we have an object with this format: var thisIsObject= {'Cow' : 'Moo', 'Cat' : 'Meow', 'Dog' : 'Bark'};I wanted to do a function that removes by key removeFromObjectByKey('Cow');",
        userId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        title: "Get the last item in an array",
        description: `Currently it takes the second to last item in the array from the URL. However, I want to do a check for the last item in the array to be "index.html" and if so, grab the third to last item instead.`,
        userId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        title: "How do I convert a float number to a whole number in JavaScript?",
        description: "I'd like to convert a float to a whole number in JavaScript. Actually, I'd like to know how to do BOTH of the standard conversions: by truncating and by rounding. And efficiently, not via converting to a string and parsing.",
        userId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        title: "Remove element by id",
        description: `When removing an element with standard JavaScript, you must go to its parent first: var element = document.getElementById("element-id") element.parentNode.removeChild(element) Having to go to the parent node first seems a bit odd to me, is there a reason JavaScript works like this`,
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        title: "How to do case insensitive string comparison?",
        description: "How do I perform case insensitive string comparison in JavaScript?",
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        title: "Get the current year in JavaScript",
        description: "How do I get the current year in JavaScript?",
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Get a random item from a JavaScript array",
        description: "Consider: var myArray = ['January', 'February', 'March']; How can I select a random value from this array using JavaScript?",
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        title: "How to replace innerHTML of a div using jQuery?",
        description: "How could I achieve the following: document.all.regTitle.innerHTML = 'Hello World'; Using jQuery where regTitle is my div id?",
        userId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        title: "What is the correct way to check for string equality in JavaScript?",
        description: "What is the correct way to check for equality between Strings in JavaScript?",
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        title: "event listeners on a DOM node when debugging or from the JavaScript code?",
        description: "I have a page where some event listeners are attached to input boxes and select boxes. Is there a way to find out which event listeners are observing a particular DOM node and for what event? Events are attached using: Prototype's Event.observe; DOM's addEventListener; As element attribute element.onclick.",
        userId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        title: "How to add 30 minutes to a JavaScript Date object?",
        description: "I'd like to get a Date object which is 30 minutes later than another Date object. How do I do it with JavaScript?",
        userId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        title: "How to get a JavaScript object's class?",
        description: "I created a JavaScript object, but how I can determine the class of that object I want something similar to Java's .getClass() method.",
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        title: "Storing Objects in HTML5 localStorage",
        description: "I'd like to store a JavaScript object in HTML5 localStorage, but my object is apparently being converted to a string. I can store and retrieve primitive JavaScript types and arrays using localStorage, but objects don't seem to work. Should they?",
        userId: 4,
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
