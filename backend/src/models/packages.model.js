// Packages data model - Per plate packages for any guest count
module.exports = {
  name: 'packages',
  title: 'Packages',
  public: true,
  publicCreate: false,
  fields: {
    name: { type: 'string', required: true },
    pricePerPlate: { type: 'number', required: true },
    minGuests: { type: 'number', required: true },
    includes: { type: 'string', required: false },
  }
};
