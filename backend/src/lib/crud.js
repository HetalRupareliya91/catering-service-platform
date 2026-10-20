// Generic service + router factories shared by every module
const express = require('express');
const db = require('../db');
const { requireAdmin } = require('../middleware/auth');

const open = (req, res, next) => next();

function createService(collection) {
  return {
    list(query = {}) {
      let rows = db.all(collection);
      const q = String(query.q || '').toLowerCase();
      if (q) rows = rows.filter(r => JSON.stringify(r).toLowerCase().includes(q));
      return rows;
    },
    get: id => db.get(collection, id),
    create: data => db.insert(collection, data),
    update: (id, data) => db.update(collection, id, data),
    remove: id => db.remove(collection, id)
  };
}

function createRouter({ model, validate, service }) {
  const router = express.Router();
  const readGuard = model.public ? open : requireAdmin;
  const createGuard = model.publicCreate ? open : requireAdmin;

  router.get('/', readGuard, (req, res) => res.json(service.list(req.query)));

  router.get('/:id', readGuard, (req, res) => {
    const row = service.get(req.params.id);
    if (!row) return res.status(404).json({ error: 'Not found' });
    res.json(row);
  });

  router.post('/', createGuard, (req, res) => {
    const result = validate(req.body || {});
    if (!result.valid) return res.status(400).json({ errors: result.errors });
    res.status(201).json(service.create(result.value));
  });

  router.put('/:id', requireAdmin, (req, res) => {
    const result = validate(req.body || {}, { partial: true });
    if (!result.valid) return res.status(400).json({ errors: result.errors });
    const row = service.update(req.params.id, result.value);
    if (!row) return res.status(404).json({ error: 'Not found' });
    res.json(row);
  });

  router.delete('/:id', requireAdmin, (req, res) => {
    if (!service.remove(req.params.id)) return res.status(404).json({ error: 'Not found' });
    res.status(204).end();
  });

  return router;
}

module.exports = { createService, createRouter };
