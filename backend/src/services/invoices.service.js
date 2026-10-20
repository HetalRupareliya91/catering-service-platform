const { createService } = require('../lib/crud');
const model = require('../models/invoices.model');

// Data access for Invoices
module.exports = createService(model.name);
