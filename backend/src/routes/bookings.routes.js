const { createRouter } = require('../lib/crud');
const model = require('../models/bookings.model');
const validate = require('../validators/bookings.validator');
const service = require('../services/bookings.service');

// Bookings: GET /api/bookings, GET /api/bookings/:id, POST, PUT /:id, DELETE /:id
module.exports = { path: '/bookings', router: createRouter({ model, validate, service }) };
