const { buildValidator } = require('../lib/validate');
const model = require('../models/deliveries.model');

// Validates and normalises incoming Deliveries payloads
module.exports = buildValidator(model.fields);
