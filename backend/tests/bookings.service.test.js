const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');
const os = require('os');
const path = require('path');

process.env.DATA_DIR = fs.mkdtempSync(path.join(os.tmpdir(), 'catering-bookings-'));
const service = require('../src/services/bookings.service');

test('bookings service supports create, read, update and delete', () => {
  const created = service.create({ "customerName": "Sample customerName", "phone": "Sample phone", "email": "guest@example.com", "packageName": "Sample packageName", "eventDate": "2026-12-01", "guests": 10, "status": "Sample status" });
  assert.ok(created.id);
  assert.strictEqual(service.get(created.id).id, created.id);
  assert.strictEqual(service.list().length, 1);
  assert.ok(service.update(created.id, {}));
  assert.ok(service.remove(created.id));
  assert.strictEqual(service.get(created.id), null);
});
