const { createRouter } = require('../lib/crud');
const model = require('../models/payments.model');
const validate = require('../validators/payments.validator');
const service = require('../services/payments.service');

// Payments: GET /api/payments, GET /api/payments/:id, POST, PUT /:id, DELETE /:id
module.exports = { path: '/payments', router: createRouter({ model, validate, service }) };
