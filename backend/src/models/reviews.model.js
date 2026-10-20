// Reviews data model - What our guests say about us
module.exports = {
  name: 'reviews',
  title: 'Reviews',
  public: true,
  publicCreate: true,
  fields: {
    customerName: { type: 'string', required: true },
    rating: { type: 'number', required: true },
    comment: { type: 'string', required: false },
  }
};
