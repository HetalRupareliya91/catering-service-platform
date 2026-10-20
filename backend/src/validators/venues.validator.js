const { buildValidator } = require('../lib/validate');
const model = require('../models/venues.model');

// Validates and normalises incoming Venues payloads
module.exports = buildValidator(model.fields);
