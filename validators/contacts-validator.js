const { body, validationResult } = require('express-validator');

// These are the validators. They store errors in results that must be retrieved with validationResult()
const validators = [
  body('firstName').exists().isAlpha().isLength({ min: 2, max: 40 }).withMessage('Invalid firstName'),
  body('lastName').exists().isAlpha().isLength({ min: 2, max: 40 }).withMessage('Invalid lastName'),
  body('email').exists().isEmail().withMessage('Invalid email'),
  body('favoriteColor').exists().isAlpha().isLength({ min: 2, max: 40 }).withMessage('Invalid favoriteColor'),
  body('birthday').exists().toDate().isISO8601().withMessage('Invalid date format.')
];

// Handles any errors stored in the request object
const validationHandler = (request, response, next) => {
  const error = validationResult(request);
  if (!error.isEmpty()) {
    return response.status(400).json({ ValidationError: error.array() });
  }
  next();
};

module.exports = { validators, validationHandler };
