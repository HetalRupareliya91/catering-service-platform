const { createService } = require('../lib/crud');
const model = require('../models/payments.model');

// Data access for Payments
module.exports = createService(model.name);
