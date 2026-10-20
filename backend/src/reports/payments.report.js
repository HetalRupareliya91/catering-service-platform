// Summary report for Payments
module.exports = function report(rows) {
  const sumField = 'amount' || null;
  const groupField = 'method' || null;
  const sum = sumField ? rows.reduce((total, r) => total + (Number(r[sumField]) || 0), 0) : 0;
  const groups = {};
  if (groupField) {
    for (const r of rows) {
      const key = r[groupField] || 'unknown';
      groups[key] = (groups[key] || 0) + 1;
    }
  }
  return { total: rows.length, sumField, sum, groupField, groups };
};
