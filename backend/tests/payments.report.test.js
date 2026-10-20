const test = require('node:test');
const assert = require('node:assert');
const report = require('../src/reports/payments.report');

test('payments report summarises rows', () => {
  const row = { "invoiceRef": "Sample invoiceRef", "amount": 10, "method": "Sample method", "paidOn": "2026-12-01" };
  const result = report([row, row]);
  assert.strictEqual(result.total, 2);
});
