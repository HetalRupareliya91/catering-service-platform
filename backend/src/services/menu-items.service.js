const { createService } = require('../lib/crud');
const model = require('../models/menu-items.model');

// Data access for Menu Items
module.exports = createService(model.name);
