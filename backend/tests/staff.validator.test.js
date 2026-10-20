const test = require('node:test');
const assert = require('node:assert');
const validate = require('../src/validators/staff.validator');

test('staff validator accepts a valid payload', () => {
  const result = validate({ "name": "Sample name", "role": "Sample role", "phone": "Sample phone", "active": true });
  assert.ok(result.valid, result.errors.join(', '));
});

test('staff validator rejects a payload missing required fields', () => {
  const result = validate({});
  assert.strictEqual(result.valid, false);
  assert.ok(result.errors.length > 0);
});
