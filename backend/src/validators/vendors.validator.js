const { buildValidator } = require('../lib/validate');
const model = require('../models/vendors.model');

// Validates and normalises incoming Vendors payloads
module.exports = buildValidator(model.fields);
