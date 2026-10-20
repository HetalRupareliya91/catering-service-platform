const { createService } = require('../lib/crud');
const model = require('../models/vendors.model');

// Data access for Vendors
module.exports = createService(model.name);
