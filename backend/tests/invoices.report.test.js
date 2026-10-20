const test = require('node:test');
const assert = require('node:assert');
const report = require('../src/reports/invoices.report');

test('invoices report summarises rows', () => {
  const row = { "bookingRef": "Sample bookingRef", "amount": 10, "dueDate": "2026-12-01", "status": "Sample status" };
  const result = report([row, row]);
  assert.strictEqual(result.total, 2);
});
