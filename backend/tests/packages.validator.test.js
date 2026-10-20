const test = require('node:test');
const assert = require('node:assert');
const validate = require('../src/validators/packages.validator');

test('packages validator accepts a valid payload', () => {
  const result = validate({ "name": "Sample name", "pricePerPlate": 10, "minGuests": 10, "includes": "Sample includes" });
  assert.ok(result.valid, result.errors.join(', '));
});

test('packages validator rejects a payload missing required fields', () => {
  const result = validate({});
  assert.strictEqual(result.valid, false);
  assert.ok(result.errors.length > 0);
});
