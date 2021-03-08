const csrf = require('csurf')
const csrfProtection = csrf({ cookie: true })
const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next)
const { check, validationResult } = require('express-validator')
const db = require('./db/models')

const userValidator = [
    check('username')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a username')
        .isLength({ max: 20 })
        .withMessage('Username cannot exceed twenty characters')
        .custom((value) => {
            return db.User.findOne({where: {username: value}})
                .then((user) => {
                    if(user) {
                        return Promise.reject('This username is already in use')
                    }
                })
        }),
    check('email')
        .exists({ checkFalsy: true })
        .withMessage('Please provide an email address')
        .isEmail()
        .withMessage('Please provide a valid email address')
        .custom((value) => {
            return db.User.findOne({ where: { email: value } })
                .then((user) => {
                    if (user) {
                        return Promise.reject('This email address is already in use')
                    }
            })
        }),
    check('password')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a password')
        .isLength({ max: 255 })
        .withMessage('Password cannot exceed 255 characters')
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/, 'g')
        .withMessage('Password must contain at least 1 lowercase letter, uppercase letter, and number'),
];


const loginValidators = [
    check('email')
        .exists({ checkFalsy: true })
        .withMessage('Please provide an email address'),
    check('password')
        .exists({ checkFalsy: true})
        .withMessage('Please provide a password'),
];


module.exports = { csrfProtection, asyncHandler, userValidator, loginValidators }
