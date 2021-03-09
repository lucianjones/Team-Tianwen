const express = require('express');
const { check, validationResult } = require('express-validator');

const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('../utils');

const router = express.Router();

router.get('/', asyncHandler(async(req, res) => {
  const questions = await db.Question.findAll({
    limit: 10
  })
  res.render('questions', {questions})
}))

router.get('/:id(\\d+)', asyncHandler(async(req, res) => {
  const questionId = parseInt(req.params.id, 10);
  const question = await db.Question.findByPk(questionId);
  res.render('question-detail', {question})
}))

router.get("/ask", csrfProtection, function (req,res, next) {
  console.log(req.session.auth)
  console.log('hello')
  const question = db.Question.build();
  res.render('question-add', {
    csrfToken: req.csrfToken(),
  })
})


const questionValidator = [
  check('title')
    .exists({ checkFalsy: true})
    .withMessage('Please provide a title')
    .isLength({ max: 30})
    .withMessage('Title should not be more than 30 characters long')
    .isLength({ min: 15 })
    .withMessage('Title should be at least 15 characters long'),
  check('description')
    .exists({ checkFalsy: true})
    .withMessage('Please provide a description')
    .isLength({ max: 30000 })
    .withMessage('Description should be limited to 30,000 characters')
    .isLength({ min: 30 })
    .withMessage('Description should have at least 30 characters')
];

router.post("/ask", csrfProtection, questionValidator, asyncHandler(async (req, res) => {
  console.log(req.session.auth)
  console.log("bye")
  const {
    title,
    description,
  } = req.body;

  const question = db.Question.build({
    title,
    description,
    userId: req.session.auth.userId
  });

  const validErrors = validationResult(req);

  if(validErrors.isEmpty()) {
    await question.save();
    res.redirect('/question/:id')
  }
  else {
    const errors = validErrors.array().map((error) => error.msg);
    res.render('question-add', {
      title,
      description,
      errors,
      csrfToken: req.csrfToken(),
    });
  }
}))










module.exports = router;
