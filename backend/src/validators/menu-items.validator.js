const { buildValidator } = require('../lib/validate');
const model = require('../models/menu-items.model');

// Validates and normalises incoming Menu Items payloads
module.exports = buildValidator(model.fields);
