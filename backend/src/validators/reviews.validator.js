const { buildValidator } = require('../lib/validate');
const model = require('../models/reviews.model');

// Validates and normalises incoming Reviews payloads
module.exports = buildValidator(model.fields);
