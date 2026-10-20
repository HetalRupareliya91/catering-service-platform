const { createService } = require('../lib/crud');
const model = require('../models/customers.model');

// Data access for Customers
module.exports = createService(model.name);
