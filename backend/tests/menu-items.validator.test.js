const test = require('node:test');
const assert = require('node:assert');
const validate = require('../src/validators/menu-items.validator');

test('menu-items validator accepts a valid payload', () => {
  const result = validate({ "name": "Sample name", "category": "Sample category", "price": 10, "isVeg": true, "description": "Sample description" });
  assert.ok(result.valid, result.errors.join(', '));
});

test('menu-items validator rejects a payload missing required fields', () => {
  const result = validate({});
  assert.strictEqual(result.valid, false);
  assert.ok(result.errors.length > 0);
});
