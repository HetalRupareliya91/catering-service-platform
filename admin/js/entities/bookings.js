// Admin table and form configuration for Bookings
window.AdminEntities = window.AdminEntities || {};
window.AdminEntities['bookings'] = {
  columns: ['customerName', 'phone', 'email', 'packageName'],
  defaults: { status: 'pending' }
};
