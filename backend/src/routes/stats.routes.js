const express = require('express');
const fs = require('fs');
const path = require('path');
const db = require('../db');
const { requireAdmin } = require('../middleware/auth');

const router = express.Router();

router.get('/', requireAdmin, (req, res) => {
  const dir = path.join(__dirname, '..', 'models');
  const counts = {};
  if (fs.existsSync(dir)) {
    for (const f of fs.readdirSync(dir).filter(x => x.endsWith('.model.js'))) {
      const model = require(path.join(dir, f));
      counts[model.name] = db.all(model.name).length;
    }
  }
  const revenue = db.all('payments').reduce((sum, p) => sum + (Number(p.amount) || 0), 0);
  res.json({ counts, revenue });
});

module.exports = { path: '/stats', router };
