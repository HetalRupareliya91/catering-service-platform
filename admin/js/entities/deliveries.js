// Admin table and form configuration for Deliveries
window.AdminEntities = window.AdminEntities || {};
window.AdminEntities['deliveries'] = {
  columns: ['bookingRef', 'driver', 'scheduledAt', 'status'],
  defaults: { status: 'pending' }
};
