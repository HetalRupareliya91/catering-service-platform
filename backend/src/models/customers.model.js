// Customers data model - Customer directory and contact details
module.exports = {
  name: 'customers',
  title: 'Customers',
  public: false,
  publicCreate: false,
  fields: {
    name: { type: 'string', required: true },
    email: { type: 'email', required: true },
    phone: { type: 'string', required: true },
    city: { type: 'string', required: false },
  }
};
