const { buildValidator } = require('../lib/validate');
const model = require('../models/customers.model');

// Validates and normalises incoming Customers payloads
module.exports = buildValidator(model.fields);
