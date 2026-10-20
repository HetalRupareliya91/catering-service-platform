const { buildValidator } = require('../lib/validate');
const model = require('../models/bookings.model');

// Validates and normalises incoming Bookings payloads
module.exports = buildValidator(model.fields);
