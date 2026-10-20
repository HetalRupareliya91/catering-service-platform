// Events data model - Upcoming events on the catering calendar
module.exports = {
  name: 'events',
  title: 'Events',
  public: false,
  publicCreate: false,
  fields: {
    title: { type: 'string', required: true },
    eventDate: { type: 'date', required: true },
    venue: { type: 'string', required: false },
    guests: { type: 'number', required: true },
    status: { type: 'string', required: false },
  }
};
