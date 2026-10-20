// Tiny JSON file data store: one file per collection inside DATA_DIR
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const config = require('./config');

const file = collection => path.join(config.dataDir, collection + '.json');

function read(collection) {
  try {
    return JSON.parse(fs.readFileSync(file(collection), 'utf8'));
  } catch (err) {
    return [];
  }
}

function write(collection, rows) {
  fs.mkdirSync(config.dataDir, { recursive: true });
  fs.writeFileSync(file(collection), JSON.stringify(rows, null, 2));
}

module.exports = {
  all: collection => read(collection),
  get: (collection, id) => read(collection).find(r => r.id === id) || null,
  insert(collection, data) {
    const rows = read(collection);
    const now = new Date().toISOString();
    const row = { id: crypto.randomUUID(), ...data, createdAt: now, updatedAt: now };
    rows.push(row);
    write(collection, rows);
    return row;
  },
  update(collection, id, data) {
    const rows = read(collection);
    const index = rows.findIndex(r => r.id === id);
    if (index < 0) return null;
    rows[index] = { ...rows[index], ...data, id, updatedAt: new Date().toISOString() };
    write(collection, rows);
    return rows[index];
  },
  remove(collection, id) {
    const rows = read(collection);
    const next = rows.filter(r => r.id !== id);
    if (next.length === rows.length) return false;
    write(collection, next);
    return true;
  }
};
