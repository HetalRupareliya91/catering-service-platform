// Menu Items data model - Freshly prepared dishes for every occasion
module.exports = {
  name: 'menu-items',
  title: 'Menu Items',
  public: true,
  publicCreate: false,
  fields: {
    name: { type: 'string', required: true },
    category: { type: 'string', required: true },
    price: { type: 'number', required: true },
    isVeg: { type: 'boolean', required: false },
    description: { type: 'string', required: false },
  }
};
