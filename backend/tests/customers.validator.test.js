const test = require('node:test');
const assert = require('node:assert');
const validate = require('../src/validators/customers.validator');

test('customers validator accepts a valid payload', () => {
  const result = validate({ "name": "Sample name", "email": "guest@example.com", "phone": "Sample phone", "city": "Sample city" });
  assert.ok(result.valid, result.errors.join(', '));
});

test('customers validator rejects a payload missing required fields', () => {
  const result = validate({});
  assert.strictEqual(result.valid, false);
  assert.ok(result.errors.length > 0);
});
