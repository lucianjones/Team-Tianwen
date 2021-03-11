const express = require('express');
const { check, validationResult } = require('express-validator');

const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('../utils');

const router = express.Router();

router.get('/', asyncHandler(async(req, res) => {
  const questions = await db.Question.findAll({
    limit: 10
  })
  const nextQ = await db.Question.findAll({
    offset: 10
  })
  res.render('questions', {questions, nextQ})
}))

router.get('/:id(\\d+)', csrfProtection, asyncHandler(async(req, res) => {
  const questionId = parseInt(req.params.id, 10);
  const question = await db.Question.findByPk(questionId);
  const answers = await db.Answer.findAll({where: {questionId}, order: ['createdAt']})
  res.render('question-detail', {question, answers,  csrfToken: req.csrfToken()})
}))

router.get("/ask", csrfProtection, function (req,res, next) {
  if (!req.session.auth) {
    const error = new Error('You must login to ask a question')
    const errors = [error]
    res.render('question', {
      errors,
    })}
  const question = db.Question.build();
  res.render('question-add', {
    csrfToken: req.csrfToken(),
  })
})


const questionValidator = [
  check('title')
    .exists({ checkFalsy: true})
    .withMessage('Please provide a title')
    .isLength({ max: 80})
    .withMessage('Title should not be more than 80 characters long')
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
  if (!req.session.auth) {
    const error = new Error('You must login to ask a question')
    const errors = [error]
    res.render('question', {
      errors,
    })}
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
    res.redirect(`/questions`)
  }
  else {
    const errors = validErrors.array().map((error) => error.param);
    if (errors.includes("title")) {
      const titleError = errors.indexOf('title');
      var titleErr = validErrors.array()[titleError].msg
    }
    if (errors.includes("description")) {
      const descriptionError = errors.indexOf('description');
      var descriptionErr = validErrors.array()[descriptionError].msg
    }

    res.render('question-add', {
      title,
      description,
      errors,
      titleErr,
      descriptionErr,
      csrfToken: req.csrfToken(),
    });
  }
}))

router.get('/:id(\\d+)/edit', csrfProtection, asyncHandler(async(req, res) => {
  const questionId = parseInt(req.params.id, 10);
  const question = await db.Question.findByPk(questionId);
  if (req.session.auth.userId !== question.userId) {
    const error = new Error('You are not the question owner')
    const errors = [error]
    res.render('question-detail', {
      question,
      errors,
    })}
  res.render('question-edit', {question, csrfToken: req.csrfToken()})
}))

router.post('/:id(\\d+)/edit', csrfProtection, questionValidator, asyncHandler(async(req, res) => {
  const questionId = parseInt(req.params.id, 10);
  const questionToUpdate = await db.Question.findByPk(questionId);

  if (req.session.auth.userId !== questionToUpdate.userId) {
    const error = new Error('You are not the question owner')
    const errors = [error]
    res.render('question-detail', {
      question,
      errors,
    })}

  const {
    title,
    description
  } = req.body;

  const question = {
    title,
    description,
  }

  const validatorErrors = validationResult(req);
  if (validatorErrors.isEmpty()) {
    await questionToUpdate.update(question);
    res.redirect(`/questions/${questionId}`);
  }
  else {
    const errors = validatorErrors.array().map((error) => error.param);
    if (errors.includes("title")) {
      const titleError = errors.indexOf('title');
      var titleErrr = validatorErrors.array()[titleError].msg
    }
    if (errors.includes("description")) {
      const descriptionError = errors.indexOf('description');
      var descriptionErrr = validatorErrors.array()[descriptionError].msg
    }

    res.render('question-edit', {
      question: { ...question, id: questionId},
      errors,
      titleErrr,
      descriptionErrr,
      csrfToken: req.csrfToken(),
    });
  }
}));

router.get('/:id(\\d+)/delete', csrfProtection, asyncHandler(async(req, res) => {
  const questionId = parseInt(req.params.id, 10);
  const question = await db.Question.findByPk(questionId);
  if (req.session.auth.userId !== question.userId) {
    const error = new Error('You are not the question owner')
    const errors = [error]
    res.render('question-detail', {
      question,
      errors,
    })}
  res.render('question-delete', {
    question,
    csrfToken: req.csrfToken()
  });
}));

router.post('/:id(\\d+)/delete', csrfProtection, asyncHandler(async(req, res) => {
  const questionId = parseInt(req.params.id, 10);
  const questionToDelete = await db.Question.findByPk(questionId);
  if (req.session.auth.userId !== questionToDelete.userId) {
    const error = new Error('You are not the question owner')
    const errors = [error]
    res.render('question-detail', {
      question,
      errors,
    })}
  await questionToDelete.destroy();
  res.redirect('/questions');
}));

const answerValidator = [
  check('description')
    .exists({ checkFalsy: true })
    .withMessage('Please fill out an answer')
    .isLength({ max: 500 })
    .withMessage('Answer must be shorter than 2000 characters')
]

router.post('/:id(\\d+)/answer', csrfProtection, answerValidator, asyncHandler(async(req, res) => {
  const questionId = parseInt(req.params.id, 10)
  const question = await db.Question.findByPk(questionId);

  if (!req.session.auth) {
    const error = new Error('You must login to answer a question')
    const errors = [error]
    res.render('question-detail', {
      question,
      errors,
    })
  }
  const {
    description
  } = req.body


  const userId = req.session.auth.userId

  const answer = db.Answer.build({
    description,
    userId,
    questionId,
  })

  const validatorErrors = validationResult(req)

  if (validatorErrors.isEmpty()) {
    await answer.save()
    res.redirect(`/questions/${questionId}`)
  } else {
    const errors = validatorErrors.array().map((error) => error.msg);
    res.render('question-detail', {
      question,
      errors,
      csrfToken: req.csrfToken(),
    });
  }}
))


router.patch('/:qid(\\d+)/answer/:id(\\d+)/edit', csrfProtection, asyncHandler(async (req, res) => {
  const id = parseInt(req.params.id, 10)
  const answer = await db.Answer.findByPk(id);
  const {description} = req.body
  console.log(description)
  const edit = {description}
  await answer.update(edit)
  res.json({message: 'success'})
}));


router.delete('/:qid(\\d+)/answer/:id(\\d+)/delete', asyncHandler(async (req, res) => {
  const id = parseInt(req.params.id, 10)
  const answer = await db.Answer.findByPk(id);
  await answer.destroy();
  res.json({ message: 'success' })
}))


module.exports = router;
