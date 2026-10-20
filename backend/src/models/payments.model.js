// Payments data model - Payments received from customers
module.exports = {
  name: 'payments',
  title: 'Payments',
  public: false,
  publicCreate: false,
  fields: {
    invoiceRef: { type: 'string', required: true },
    amount: { type: 'number', required: true },
    method: { type: 'string', required: true },
    paidOn: { type: 'date', required: true },
  }
};
