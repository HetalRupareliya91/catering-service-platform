const path = require('path');

module.exports = {
  port: Number(process.env.PORT) || 4000,
  dataDir: process.env.DATA_DIR || path.join(__dirname, '..', 'data'),
  adminEmail: process.env.ADMIN_EMAIL || 'admin@catering.local',
  adminPassword: process.env.ADMIN_PASSWORD || 'admin123',
  tokenSecret: process.env.TOKEN_SECRET || 'change-me-in-production'
};
