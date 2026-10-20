const { buildValidator } = require('../lib/validate');
const model = require('../models/categories.model');

// Validates and normalises incoming Categories payloads
module.exports = buildValidator(model.fields);
