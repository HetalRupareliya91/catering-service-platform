const test = require('node:test');
const assert = require('node:assert');
const report = require('../src/reports/staff.report');

test('staff report summarises rows', () => {
  const row = { "name": "Sample name", "role": "Sample role", "phone": "Sample phone", "active": true };
  const result = report([row, row]);
  assert.strictEqual(result.total, 2);
});
