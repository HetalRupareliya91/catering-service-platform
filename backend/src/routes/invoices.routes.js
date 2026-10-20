const { createRouter } = require('../lib/crud');
const model = require('../models/invoices.model');
const validate = require('../validators/invoices.validator');
const service = require('../services/invoices.service');

// Invoices: GET /api/invoices, GET /api/invoices/:id, POST, PUT /:id, DELETE /:id
module.exports = { path: '/invoices', router: createRouter({ model, validate, service }) };
