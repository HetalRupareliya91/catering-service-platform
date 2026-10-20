const test = require('node:test');
const assert = require('node:assert');
const report = require('../src/reports/deliveries.report');

test('deliveries report summarises rows', () => {
  const row = { "bookingRef": "Sample bookingRef", "driver": "Sample driver", "scheduledAt": "2026-12-01", "status": "Sample status" };
  const result = report([row, row]);
  assert.strictEqual(result.total, 2);
});
