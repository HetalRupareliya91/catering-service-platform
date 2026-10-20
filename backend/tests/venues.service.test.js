const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');
const os = require('os');
const path = require('path');

process.env.DATA_DIR = fs.mkdtempSync(path.join(os.tmpdir(), 'catering-venues-'));
const service = require('../src/services/venues.service');

test('venues service supports create, read, update and delete', () => {
  const created = service.create({ "name": "Sample name", "city": "Sample city", "capacity": 10, "address": "Sample address" });
  assert.ok(created.id);
  assert.strictEqual(service.get(created.id).id, created.id);
  assert.strictEqual(service.list().length, 1);
  assert.ok(service.update(created.id, {}));
  assert.ok(service.remove(created.id));
  assert.strictEqual(service.get(created.id), null);
});
