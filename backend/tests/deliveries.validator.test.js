const test = require('node:test');
const assert = require('node:assert');
const validate = require('../src/validators/deliveries.validator');

test('deliveries validator accepts a valid payload', () => {
  const result = validate({ "bookingRef": "Sample bookingRef", "driver": "Sample driver", "scheduledAt": "2026-12-01", "status": "Sample status" });
  assert.ok(result.valid, result.errors.join(', '));
});

test('deliveries validator rejects a payload missing required fields', () => {
  const result = validate({});
  assert.strictEqual(result.valid, false);
  assert.ok(result.errors.length > 0);
});
