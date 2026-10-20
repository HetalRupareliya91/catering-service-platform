// Inventory data model - Kitchen stock levels and reorder points
module.exports = {
  name: 'inventory',
  title: 'Inventory',
  public: false,
  publicCreate: false,
  fields: {
    item: { type: 'string', required: true },
    quantity: { type: 'number', required: true },
    unit: { type: 'string', required: true },
    reorderLevel: { type: 'number', required: false },
  }
};
