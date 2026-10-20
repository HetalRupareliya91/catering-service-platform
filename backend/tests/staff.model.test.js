const test = require('node:test');
const assert = require('node:assert');
const model = require('../src/models/staff.model');

test('staff model is well formed', () => {
  assert.strictEqual(model.name, 'staff');
  assert.ok(Object.keys(model.fields).length > 0);
  for (const def of Object.values(model.fields)) {
    assert.ok(['string', 'number', 'boolean', 'date', 'email'].includes(def.type));
  }
});
