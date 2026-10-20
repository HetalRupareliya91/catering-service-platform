const { createRouter } = require('../lib/crud');
const model = require('../models/packages.model');
const validate = require('../validators/packages.validator');
const service = require('../services/packages.service');

// Packages: GET /api/packages, GET /api/packages/:id, POST, PUT /:id, DELETE /:id
module.exports = { path: '/packages', router: createRouter({ model, validate, service }) };
