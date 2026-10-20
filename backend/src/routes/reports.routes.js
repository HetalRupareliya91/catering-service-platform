const express = require('express');
const fs = require('fs');
const path = require('path');
const db = require('../db');
const { requireAdmin } = require('../middleware/auth');

const router = express.Router();

router.get('/:name', requireAdmin, (req, res) => {
  const name = String(req.params.name).replace(/[^a-z0-9-]/g, '');
  const file = path.join(__dirname, '..', 'reports', name + '.report.js');
  if (!fs.existsSync(file)) return res.status(404).json({ error: 'No report for ' + name });
  res.json(require(file)(db.all(name)));
});

module.exports = { path: '/reports', router };
