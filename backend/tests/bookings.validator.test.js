const test = require('node:test');
const assert = require('node:assert');
const validate = require('../src/validators/bookings.validator');

test('bookings validator accepts a valid payload', () => {
  const result = validate({ "customerName": "Sample customerName", "phone": "Sample phone", "email": "guest@example.com", "packageName": "Sample packageName", "eventDate": "2026-12-01", "guests": 10, "status": "Sample status" });
  assert.ok(result.valid, result.errors.join(', '));
});

test('bookings validator rejects a payload missing required fields', () => {
  const result = validate({});
  assert.strictEqual(result.valid, false);
  assert.ok(result.errors.length > 0);
});
