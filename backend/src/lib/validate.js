// Builds a validator from a model field map
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function buildValidator(fields) {
  return function validate(input, options = {}) {
    const partial = Boolean(options.partial);
    const errors = [];
    const value = {};
    for (const [key, def] of Object.entries(fields)) {
      let v = input[key];
      if (v === undefined || v === null || v === '') {
        if (def.required && !partial) errors.push(key + ' is required');
        continue;
      }
      switch (def.type) {
        case 'number':
          v = Number(v);
          if (Number.isNaN(v)) errors.push(key + ' must be a number');
          break;
        case 'boolean':
          v = v === true || v === 'true' || v === 'on' || v === 1;
          break;
        case 'date':
          if (Number.isNaN(Date.parse(v))) errors.push(key + ' must be a valid date');
          v = String(v);
          break;
        case 'email':
          v = String(v).trim().toLowerCase();
          if (!EMAIL.test(v)) errors.push(key + ' must be a valid email');
          break;
        default:
          v = String(v).trim();
      }
      value[key] = v;
    }
    return { valid: errors.length === 0, errors, value };
  };
}

module.exports = { buildValidator };
