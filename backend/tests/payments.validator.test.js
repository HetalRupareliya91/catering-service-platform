const test = require('node:test');
const assert = require('node:assert');
const validate = require('../src/validators/payments.validator');

test('payments validator accepts a valid payload', () => {
  const result = validate({ "invoiceRef": "Sample invoiceRef", "amount": 10, "method": "Sample method", "paidOn": "2026-12-01" });
  assert.ok(result.valid, result.errors.join(', '));
});

test('payments validator rejects a payload missing required fields', () => {
  const result = validate({});
  assert.strictEqual(result.valid, false);
  assert.ok(result.errors.length > 0);
});
