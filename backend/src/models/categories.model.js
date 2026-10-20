// Categories data model - Browse our menu by course and cuisine
module.exports = {
  name: 'categories',
  title: 'Categories',
  public: true,
  publicCreate: false,
  fields: {
    name: { type: 'string', required: true },
    description: { type: 'string', required: false },
    sortOrder: { type: 'number', required: false },
  }
};
