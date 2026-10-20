const test = require('node:test');
const assert = require('node:assert');
const report = require('../src/reports/vendors.report');

test('vendors report summarises rows', () => {
  const row = { "name": "Sample name", "supplies": "Sample supplies", "phone": "Sample phone", "email": "guest@example.com" };
  const result = report([row, row]);
  assert.strictEqual(result.total, 2);
});
