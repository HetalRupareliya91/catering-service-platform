const { createService } = require('../lib/crud');
const model = require('../models/venues.model');

// Data access for Venues
module.exports = createService(model.name);
