const { createService } = require('../lib/crud');
const model = require('../models/deliveries.model');

// Data access for Deliveries
module.exports = createService(model.name);
