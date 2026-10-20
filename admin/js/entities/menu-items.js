// Admin table and form configuration for Menu Items
window.AdminEntities = window.AdminEntities || {};
window.AdminEntities['menu-items'] = {
  columns: ['name', 'category', 'price', 'isVeg'],
  defaults: { isVeg: true }
};
