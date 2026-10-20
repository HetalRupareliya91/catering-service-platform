const { buildValidator } = require('../lib/validate');
const model = require('../models/payments.model');

// Validates and normalises incoming Payments payloads
module.exports = buildValidator(model.fields);
