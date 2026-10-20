const { createService } = require('../lib/crud');
const model = require('../models/inventory.model');

// Data access for Inventory
module.exports = createService(model.name);
