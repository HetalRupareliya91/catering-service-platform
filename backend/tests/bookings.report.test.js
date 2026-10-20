const test = require('node:test');
const assert = require('node:assert');
const report = require('../src/reports/bookings.report');

test('bookings report summarises rows', () => {
  const row = { "customerName": "Sample customerName", "phone": "Sample phone", "email": "guest@example.com", "packageName": "Sample packageName", "eventDate": "2026-12-01", "guests": 10, "status": "Sample status" };
  const result = report([row, row]);
  assert.strictEqual(result.total, 2);
});
