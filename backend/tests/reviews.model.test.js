const test = require('node:test');
const assert = require('node:assert');
const model = require('../src/models/reviews.model');

test('reviews model is well formed', () => {
  assert.strictEqual(model.name, 'reviews');
  assert.ok(Object.keys(model.fields).length > 0);
  for (const def of Object.values(model.fields)) {
    assert.ok(['string', 'number', 'boolean', 'date', 'email'].includes(def.type));
  }
});
