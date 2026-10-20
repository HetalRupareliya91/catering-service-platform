const test = require('node:test');
const assert = require('node:assert');
const validate = require('../src/validators/inventory.validator');

test('inventory validator accepts a valid payload', () => {
  const result = validate({ "item": "Sample item", "quantity": 10, "unit": "Sample unit", "reorderLevel": 10 });
  assert.ok(result.valid, result.errors.join(', '));
});

test('inventory validator rejects a payload missing required fields', () => {
  const result = validate({});
  assert.strictEqual(result.valid, false);
  assert.ok(result.errors.length > 0);
});
