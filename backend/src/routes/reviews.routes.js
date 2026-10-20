const { createRouter } = require('../lib/crud');
const model = require('../models/reviews.model');
const validate = require('../validators/reviews.validator');
const service = require('../services/reviews.service');

// Reviews: GET /api/reviews, GET /api/reviews/:id, POST, PUT /:id, DELETE /:id
module.exports = { path: '/reviews', router: createRouter({ model, validate, service }) };
