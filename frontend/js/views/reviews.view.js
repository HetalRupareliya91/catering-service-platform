// Card renderer for Reviews on the customer website
window.Views = window.Views || {};
window.Views['reviews'] = function (row, cfg) {
  const title = row[cfg.cardTitle] || 'Reviews';
  const details = (cfg.cardFields || [])
    .filter(f => row[f] !== undefined && row[f] !== '')
    .map(f => '<li><span>' + App.label(f) + '</span><strong>' + App.format(f, row[f]) + '</strong></li>')
    .join('');
  return '<article class="card card--reviews"><h3>' + App.esc(title) + '</h3><ul class="card__details">' + details + '</ul></article>';
};
