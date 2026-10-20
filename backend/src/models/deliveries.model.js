// Deliveries data model - Food delivery and dispatch schedule
module.exports = {
  name: 'deliveries',
  title: 'Deliveries',
  public: false,
  publicCreate: false,
  fields: {
    bookingRef: { type: 'string', required: true },
    driver: { type: 'string', required: true },
    scheduledAt: { type: 'date', required: true },
    status: { type: 'string', required: false },
  }
};
