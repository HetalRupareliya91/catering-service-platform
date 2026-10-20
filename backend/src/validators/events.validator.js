const { buildValidator } = require('../lib/validate');
const model = require('../models/events.model');

// Validates and normalises incoming Events payloads
module.exports = buildValidator(model.fields);
