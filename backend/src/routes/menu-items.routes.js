const { createRouter } = require('../lib/crud');
const model = require('../models/menu-items.model');
const validate = require('../validators/menu-items.validator');
const service = require('../services/menu-items.service');

// Menu Items: GET /api/menu-items, GET /api/menu-items/:id, POST, PUT /:id, DELETE /:id
module.exports = { path: '/menu-items', router: createRouter({ model, validate, service }) };
