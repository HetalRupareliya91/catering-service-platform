const { createRouter } = require('../lib/crud');
const model = require('../models/staff.model');
const validate = require('../validators/staff.validator');
const service = require('../services/staff.service');

// Staff: GET /api/staff, GET /api/staff/:id, POST, PUT /:id, DELETE /:id
module.exports = { path: '/staff', router: createRouter({ model, validate, service }) };
