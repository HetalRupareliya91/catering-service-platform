// Invoices data model - Invoices raised against confirmed bookings
module.exports = {
  name: 'invoices',
  title: 'Invoices',
  public: false,
  publicCreate: false,
  fields: {
    bookingRef: { type: 'string', required: true },
    amount: { type: 'number', required: true },
    dueDate: { type: 'date', required: true },
    status: { type: 'string', required: false },
  }
};
