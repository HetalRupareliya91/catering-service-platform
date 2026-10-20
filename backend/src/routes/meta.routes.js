// Describes the available modules so the website and admin panel build themselves
const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

router.get('/entities', (req, res) => {
  const dir = path.join(__dirname, '..', 'models');
  if (!fs.existsSync(dir)) return res.json([]);
  const list = fs.readdirSync(dir)
    .filter(f => f.endsWith('.model.js'))
    .map(f => require(path.join(dir, f)))
    .map(m => ({ name: m.name, title: m.title, public: Boolean(m.public), publicCreate: Boolean(m.publicCreate), fields: m.fields }));
  res.json(list);
});

module.exports = { path: '/meta', router };
