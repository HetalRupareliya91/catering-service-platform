// Mounts every *.routes.js file in this folder under /api
const fs = require('fs');
const path = require('path');

function mountRoutes(app) {
  const files = fs.readdirSync(__dirname).filter(f => f.endsWith('.routes.js')).sort();
  for (const file of files) {
    const route = require(path.join(__dirname, file));
    app.use('/api' + route.path, route.router);
  }
}

module.exports = { mountRoutes };
