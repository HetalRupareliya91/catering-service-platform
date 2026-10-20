const test = require('node:test');
const assert = require('node:assert');
const validate = require('../src/validators/reviews.validator');

test('reviews validator accepts a valid payload', () => {
  const result = validate({ "customerName": "Sample customerName", "rating": 10, "comment": "Sample comment" });
  assert.ok(result.valid, result.errors.join(', '));
});

test('reviews validator rejects a payload missing required fields', () => {
  const result = validate({});
  assert.strictEqual(result.valid, false);
  assert.ok(result.errors.length > 0);
});
