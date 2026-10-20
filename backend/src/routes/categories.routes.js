const { createRouter } = require('../lib/crud');
const model = require('../models/categories.model');
const validate = require('../validators/categories.validator');
const service = require('../services/categories.service');

// Categories: GET /api/categories, GET /api/categories/:id, POST, PUT /:id, DELETE /:id
module.exports = { path: '/categories', router: createRouter({ model, validate, service }) };
