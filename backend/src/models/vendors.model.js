// Vendors data model - Suppliers for groceries, crockery and decor
module.exports = {
  name: 'vendors',
  title: 'Vendors',
  public: false,
  publicCreate: false,
  fields: {
    name: { type: 'string', required: true },
    supplies: { type: 'string', required: true },
    phone: { type: 'string', required: false },
    email: { type: 'email', required: false },
  }
};
