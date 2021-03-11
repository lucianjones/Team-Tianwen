const express = require('express');

const db = require('../db/models');
const { asyncHandler } = require('../utils');
const { Op } = require("sequelize");

const router = express.Router();

// /search?q=(\\.+)
router.get('/search?q=(\\.+)', asyncHandler(async(req, res) => {
  const {query} = req.query.q
  const newQuery = query.split('+')

  const results = await db.Question.findAll({
    where: {
      title: {
      [Op.like]: '%' + newQuery + '%'
      }
    }
  })
  res.render('search', {results})
}))

// router.post('/search', asyncHandler(async(req, res) => {
//   const {query} = req.body
//   const queryWords = query.split(' ')

//   const results = await db.Question.findAll({
//     where: {
//       title: {
//       [Op.like]: '%' + query + '%'
//       }
//     }
//   })

//   res.redirect('/search', {results})
// }))


module.exports = router
