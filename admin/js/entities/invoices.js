// Admin table and form configuration for Invoices
window.AdminEntities = window.AdminEntities || {};
window.AdminEntities['invoices'] = {
  columns: ['bookingRef', 'amount', 'dueDate', 'status'],
  defaults: { status: 'pending' }
};
