// Staff data model - Chefs, servers and event managers
module.exports = {
  name: 'staff',
  title: 'Staff',
  public: false,
  publicCreate: false,
  fields: {
    name: { type: 'string', required: true },
    role: { type: 'string', required: true },
    phone: { type: 'string', required: true },
    active: { type: 'boolean', required: false },
  }
};
