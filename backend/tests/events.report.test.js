const test = require('node:test');
const assert = require('node:assert');
const report = require('../src/reports/events.report');

test('events report summarises rows', () => {
  const row = { "title": "Sample title", "eventDate": "2026-12-01", "venue": "Sample venue", "guests": 10, "status": "Sample status" };
  const result = report([row, row]);
  assert.strictEqual(result.total, 2);
});
