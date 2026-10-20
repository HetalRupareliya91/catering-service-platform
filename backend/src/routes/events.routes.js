const { createRouter } = require('../lib/crud');
const model = require('../models/events.model');
const validate = require('../validators/events.validator');
const service = require('../services/events.service');

// Events: GET /api/events, GET /api/events/:id, POST, PUT /:id, DELETE /:id
module.exports = { path: '/events', router: createRouter({ model, validate, service }) };
