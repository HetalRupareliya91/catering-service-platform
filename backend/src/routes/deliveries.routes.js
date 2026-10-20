const { createRouter } = require('../lib/crud');
const model = require('../models/deliveries.model');
const validate = require('../validators/deliveries.validator');
const service = require('../services/deliveries.service');

// Deliveries: GET /api/deliveries, GET /api/deliveries/:id, POST, PUT /:id, DELETE /:id
module.exports = { path: '/deliveries', router: createRouter({ model, validate, service }) };
