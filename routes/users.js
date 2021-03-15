const express = require("express");
const { csrfProtection, asyncHandler, userValidator, loginValidators } = require("../utils");
const db = require("../db/models");
const {check, validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');
const { login, logout } = require('../auth');

const router = express.Router();

/* GET users listing. */
router.get("/register", csrfProtection, function (req, res, next) {
  const user = db.User.build();
  res.render("user-register", {
    title: "Register",
    user,
    csrfToken: req.csrfToken(),
  });
});

router.post('/register', csrfProtection, userValidator, asyncHandler(async (req, res) => {
  const {
    username,
    email,
    password,
  } = req.body;

  const user = db.User.build({
    username,
    email
  })

  const validatorErrors = validationResult(req);

  if (validatorErrors.isEmpty()) {
    const hashedPassword = await bcrypt.hash(password, 10);
    user.hashedPassword = hashedPassword;
    await user.save();
    login(req,res,user)
    // res.redirect('/questions');
  } else {
    const errors = validatorErrors.array().map((error) => error.param);
    if (errors.includes("username")) {
      const usernameError = errors.indexOf('username');
      var usernameErr = validatorErrors.array()[usernameError].msg
    }
    if (errors.includes("email")) {
      const emailError = errors.indexOf('email');
      var emailErr = validatorErrors.array()[emailError].msg
    }
    if (errors.includes("password")) {
      const passwordError = errors.indexOf('password');
      var passwordErr = validatorErrors.array()[passwordError].msg
    }
    if (errors.includes("confirmPassword")) {
      const confirmPasswordError = errors.indexOf('confirmPassword');
      var confirmPasswordErr = validatorErrors.array()[confirmPasswordError].msg
    }

    res.render('user-register', {
      title: 'Register',
      user,
      errors,
      confirmPasswordErr,
      passwordErr,
      emailErr,
      usernameErr,
      csrfToken: req.csrfToken()
    })
  }
}));

router.get('/login', csrfProtection, (req, res) => {
  res.render('user-login', {
    title: 'Login',
    csrfToken: req.csrfToken(),
  });
});

router.post('/login', csrfProtection, loginValidators, asyncHandler(async (req, res) => {
  const {
    email,
    password,
  } = req.body;

  let errors = [];
  const validatorErrors = validationResult(req);

  if (validatorErrors.isEmpty()) {
    const user = await db.User.findOne({ where: { email }})
    if (user !== null) {
      const passwordMatch = await bcrypt.compare(password, user.hashedPassword.toString());

      if (passwordMatch) {
        login(req,res,user);
        return
      }
    }

    errors.push('Login failed for the provided email address and password');
  } else {
    errors = validatorErrors.array().map((error) => error.param);
    if (errors.includes("email")) {
      const emailError = errors.indexOf('email');
      var emailErrr = validatorErrors.array()[emailError].msg
    }
    if (errors.includes("password")) {
      const passwordError = errors.indexOf('password');
      var passwordErrr = validatorErrors.array()[passwordError].msg
    }
  }

  res.render('user-login', {
    title: 'Login',
    email,
    errors,
    emailErrr,
    passwordErrr,
    csrfToken: req.csrfToken(),
  });
}));


router.post('/logout', asyncHandler( async (req,res) => {
  await logout(req,res);
  res.redirect('/');
}));


module.exports = router;
