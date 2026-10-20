const test = require('node:test');
const assert = require('node:assert');
const report = require('../src/reports/customers.report');

test('customers report summarises rows', () => {
  const row = { "name": "Sample name", "email": "guest@example.com", "phone": "Sample phone", "city": "Sample city" };
  const result = report([row, row]);
  assert.strictEqual(result.total, 2);
});
