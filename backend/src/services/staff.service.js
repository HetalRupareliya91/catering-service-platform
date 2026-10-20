const { createService } = require('../lib/crud');
const model = require('../models/staff.model');

// Data access for Staff
module.exports = createService(model.name);
