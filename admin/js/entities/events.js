// Admin table and form configuration for Events
window.AdminEntities = window.AdminEntities || {};
window.AdminEntities['events'] = {
  columns: ['title', 'eventDate', 'venue', 'guests'],
  defaults: { status: 'pending' }
};
