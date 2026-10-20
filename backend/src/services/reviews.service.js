const { createService } = require('../lib/crud');
const model = require('../models/reviews.model');

// Data access for Reviews
module.exports = createService(model.name);
