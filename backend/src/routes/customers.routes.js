const { createRouter } = require('../lib/crud');
const model = require('../models/customers.model');
const validate = require('../validators/customers.validator');
const service = require('../services/customers.service');

// Customers: GET /api/customers, GET /api/customers/:id, POST, PUT /:id, DELETE /:id
module.exports = { path: '/customers', router: createRouter({ model, validate, service }) };
