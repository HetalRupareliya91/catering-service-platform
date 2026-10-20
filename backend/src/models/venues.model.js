// Venues data model - Partner venues where we regularly serve
module.exports = {
  name: 'venues',
  title: 'Venues',
  public: true,
  publicCreate: false,
  fields: {
    name: { type: 'string', required: true },
    city: { type: 'string', required: true },
    capacity: { type: 'number', required: true },
    address: { type: 'string', required: false },
  }
};
