const test = require('node:test');
const assert = require('node:assert');
const validate = require('../src/validators/categories.validator');

test('categories validator accepts a valid payload', () => {
  const result = validate({ "name": "Sample name", "description": "Sample description", "sortOrder": 10 });
  assert.ok(result.valid, result.errors.join(', '));
});

test('categories validator rejects a payload missing required fields', () => {
  const result = validate({});
  assert.strictEqual(result.valid, false);
  assert.ok(result.errors.length > 0);
});
