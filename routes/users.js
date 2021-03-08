const express = require("express");
const { csrfProtection, asyncHandler, userValidator } = require("../utils");
const db = require("../db/models");

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

module.exports = router;
