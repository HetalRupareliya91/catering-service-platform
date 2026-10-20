const { buildValidator } = require('../lib/validate');
const model = require('../models/packages.model');

// Validates and normalises incoming Packages payloads
module.exports = buildValidator(model.fields);
