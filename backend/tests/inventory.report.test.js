const test = require('node:test');
const assert = require('node:assert');
const report = require('../src/reports/inventory.report');

test('inventory report summarises rows', () => {
  const row = { "item": "Sample item", "quantity": 10, "unit": "Sample unit", "reorderLevel": 10 };
  const result = report([row, row]);
  assert.strictEqual(result.total, 2);
});
