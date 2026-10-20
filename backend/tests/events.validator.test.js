const test = require('node:test');
const assert = require('node:assert');
const validate = require('../src/validators/events.validator');

test('events validator accepts a valid payload', () => {
  const result = validate({ "title": "Sample title", "eventDate": "2026-12-01", "venue": "Sample venue", "guests": 10, "status": "Sample status" });
  assert.ok(result.valid, result.errors.join(', '));
});

test('events validator rejects a payload missing required fields', () => {
  const result = validate({});
  assert.strictEqual(result.valid, false);
  assert.ok(result.errors.length > 0);
});
