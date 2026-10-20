const { createService } = require('../lib/crud');
const model = require('../models/events.model');

// Data access for Events
module.exports = createService(model.name);
