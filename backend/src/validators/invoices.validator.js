const { buildValidator } = require('../lib/validate');
const model = require('../models/invoices.model');

// Validates and normalises incoming Invoices payloads
module.exports = buildValidator(model.fields);
