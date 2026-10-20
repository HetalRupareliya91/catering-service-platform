const { buildValidator } = require('../lib/validate');
const model = require('../models/inventory.model');

// Validates and normalises incoming Inventory payloads
module.exports = buildValidator(model.fields);
