// Renders the Deliveries summary report in the admin panel
window.AdminReports = window.AdminReports || {};
window.AdminReports['deliveries'] = function (data) {
  const groups = Object.entries(data.groups || {})
    .map(([k, v]) => '<li><span>' + Admin.esc(k) + '</span><strong>' + v + '</strong></li>')
    .join('');
  return '<div class="report">'
    + '<div class="stat"><span>Total Deliveries</span><strong>' + data.total + '</strong></div>'
    + (data.sumField ? '<div class="stat"><span>Total ' + Admin.label(data.sumField) + '</span><strong>' + Number(data.sum).toLocaleString('en-IN') + '</strong></div>' : '')
    + (groups ? '<ul class="report__groups">' + groups + '</ul>' : '')
    + '</div>';
};
