const { createRouter } = require('../lib/crud');
const model = require('../models/venues.model');
const validate = require('../validators/venues.validator');
const service = require('../services/venues.service');

// Venues: GET /api/venues, GET /api/venues/:id, POST, PUT /:id, DELETE /:id
module.exports = { path: '/venues', router: createRouter({ model, validate, service }) };
