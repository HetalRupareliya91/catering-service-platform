const { createRouter } = require('../lib/crud');
const model = require('../models/inventory.model');
const validate = require('../validators/inventory.validator');
const service = require('../services/inventory.service');

// Inventory: GET /api/inventory, GET /api/inventory/:id, POST, PUT /:id, DELETE /:id
module.exports = { path: '/inventory', router: createRouter({ model, validate, service }) };
