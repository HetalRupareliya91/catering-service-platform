const express = require('express');
const config = require('../config');
const { sign } = require('../middleware/auth');

const router = express.Router();

router.post('/login', (req, res) => {
  const { email, password } = req.body || {};
  if (email !== config.adminEmail || password !== config.adminPassword) {
    return res.status(401).json({ error: 'Invalid email or password' });
  }
  const token = sign({ email, role: 'admin', exp: Date.now() + 12 * 60 * 60 * 1000 });
  res.json({ token });
});

module.exports = { path: '/auth', router };
