const test = require('node:test');
const assert = require('node:assert');
const validate = require('../src/validators/venues.validator');

test('venues validator accepts a valid payload', () => {
  const result = validate({ "name": "Sample name", "city": "Sample city", "capacity": 10, "address": "Sample address" });
  assert.ok(result.valid, result.errors.join(', '));
});

test('venues validator rejects a payload missing required fields', () => {
  const result = validate({});
  assert.strictEqual(result.valid, false);
  assert.ok(result.errors.length > 0);
});
