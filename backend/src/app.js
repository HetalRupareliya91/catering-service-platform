const express = require('express');
const cors = require('cors');
const path = require('path');
const { mountRoutes } = require('./routes');
const { notFound, errorHandler } = require('./middleware/errors');

function createApp() {
  const app = express();
  app.use(cors());
  app.use(express.json({ limit: '1mb' }));

  app.get('/api/health', (req, res) => res.json({ status: 'ok', time: new Date().toISOString() }));
  mountRoutes(app);

  const root = path.join(__dirname, '..', '..');
  app.use('/admin', express.static(path.join(root, 'admin')));
  app.use('/', express.static(path.join(root, 'frontend')));

  app.use('/api', notFound);
  app.use(errorHandler);
  return app;
}

module.exports = { createApp };
