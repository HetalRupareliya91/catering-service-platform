const { createService } = require('../lib/crud');
const model = require('../models/categories.model');

// Data access for Categories
module.exports = createService(model.name);
