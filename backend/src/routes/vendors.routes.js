const { createRouter } = require('../lib/crud');
const model = require('../models/vendors.model');
const validate = require('../validators/vendors.validator');
const service = require('../services/vendors.service');

// Vendors: GET /api/vendors, GET /api/vendors/:id, POST, PUT /:id, DELETE /:id
module.exports = { path: '/vendors', router: createRouter({ model, validate, service }) };
