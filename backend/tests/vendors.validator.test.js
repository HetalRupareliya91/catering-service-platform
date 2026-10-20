const test = require('node:test');
const assert = require('node:assert');
const validate = require('../src/validators/vendors.validator');

test('vendors validator accepts a valid payload', () => {
  const result = validate({ "name": "Sample name", "supplies": "Sample supplies", "phone": "Sample phone", "email": "guest@example.com" });
  assert.ok(result.valid, result.errors.join(', '));
});

test('vendors validator rejects a payload missing required fields', () => {
  const result = validate({});
  assert.strictEqual(result.valid, false);
  assert.ok(result.errors.length > 0);
});
