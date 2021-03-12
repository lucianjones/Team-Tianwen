const express = require('express');

const db = require('../db/models');
const { asyncHandler } = require('../utils');
const { Op } = require("sequelize");

const router = express.Router();

// /search?q=(\\.+)
router.get('/search', asyncHandler(async(req, res) => {
  const { search } = req.query
  console.log(req.query)
  const searchArr = search.split(' ')
  const searchTerms = searchArr.map(term => {
    return {title: {
      [Op.iLike]:
        '%'+term+'%'
    }}
  })
  const results = await db.Question.findAll({
    where: {
      [Op.or]: searchTerms
    },
    limit: 10
  })
  const nextResult = await db.Question.findAll({
    where: {
      [Op.or]: searchTerms
    },
    offset: 10
  })
  console.log(results)
  res.render('search', { results: results, nextResult })
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
