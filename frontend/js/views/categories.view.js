// Card renderer for Categories on the customer website
window.Views = window.Views || {};
window.Views['categories'] = function (row, cfg) {
  const title = row[cfg.cardTitle] || 'Categories';
  const details = (cfg.cardFields || [])
    .filter(f => row[f] !== undefined && row[f] !== '')
    .map(f => '<li><span>' + App.label(f) + '</span><strong>' + App.format(f, row[f]) + '</strong></li>')
    .join('');
  return '<article class="card card--categories"><h3>' + App.esc(title) + '</h3><ul class="card__details">' + details + '</ul></article>';
};
