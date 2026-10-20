const { createService } = require('../lib/crud');
const model = require('../models/bookings.model');

// Data access for Bookings
module.exports = createService(model.name);
