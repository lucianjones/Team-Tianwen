const csrf = require('csurf')
const csrfProtection = csrf({ cookie: true })
const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next)
const { check, validationResult } = require('express-validator')

module.exports = { csrfProtection, asyncHandler }