const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');
const os = require('os');
const path = require('path');

process.env.DATA_DIR = fs.mkdtempSync(path.join(os.tmpdir(), 'catering-menu-items-'));
const service = require('../src/services/menu-items.service');

test('menu-items service supports create, read, update and delete', () => {
  const created = service.create({ "name": "Sample name", "category": "Sample category", "price": 10, "isVeg": true, "description": "Sample description" });
  assert.ok(created.id);
  assert.strictEqual(service.get(created.id).id, created.id);
  assert.strictEqual(service.list().length, 1);
  assert.ok(service.update(created.id, {}));
  assert.ok(service.remove(created.id));
  assert.strictEqual(service.get(created.id), null);
});
