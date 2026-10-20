// Cell renderers for the Packages table
window.AdminViews = window.AdminViews || {};
window.AdminViews['packages'] = {
  cell(field, value) {
    if (value === undefined || value === null || value === '') return '<span class="muted">-</span>';
    if (typeof value === 'boolean') return value ? '<span class="badge badge--yes">Yes</span>' : '<span class="badge badge--no">No</span>';
    if (field === 'status') return '<span class="badge badge--' + Admin.esc(value) + '">' + Admin.esc(value) + '</span>';
    if (/amount|price/i.test(field)) return '&#8377;' + Number(value).toLocaleString('en-IN');
    if (/date|At|On$/.test(field)) return Admin.esc(String(value).slice(0, 10));
    return Admin.esc(value);
  }
};
