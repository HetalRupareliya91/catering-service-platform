const { createService } = require('../lib/crud');
const model = require('../models/packages.model');

// Data access for Packages
module.exports = createService(model.name);
