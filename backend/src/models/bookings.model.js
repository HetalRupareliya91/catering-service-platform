// Bookings data model - Tell us about your event and we will call you back
module.exports = {
  name: 'bookings',
  title: 'Bookings',
  public: false,
  publicCreate: true,
  fields: {
    customerName: { type: 'string', required: true },
    phone: { type: 'string', required: true },
    email: { type: 'email', required: true },
    packageName: { type: 'string', required: false },
    eventDate: { type: 'date', required: true },
    guests: { type: 'number', required: true },
    status: { type: 'string', required: false },
  }
};
