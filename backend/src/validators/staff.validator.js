const { buildValidator } = require('../lib/validate');
const model = require('../models/staff.model');

// Validates and normalises incoming Staff payloads
module.exports = buildValidator(model.fields);
