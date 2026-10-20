// Admin dashboard: revenue and record counts for every module
window.renderDashboard = async function (container) {
  container.innerHTML = '<p class="muted">Loading dashboard...</p>';
  try {
    const stats = await AdminAPI.get('/stats');
    const tiles = Object.entries(stats.counts).map(([name, count]) => {
      const entity = Admin.entities.find(e => e.name === name);
      return '<a class="stat" href="#/e/' + name + '"><span>' + Admin.esc(entity ? entity.title : name) + '</span><strong>' + count + '</strong></a>';
    }).join('');
    container.innerHTML = '<div class="stat stat--wide"><span>Total revenue collected</span><strong>&#8377;'
      + Number(stats.revenue).toLocaleString('en-IN') + '</strong></div><div class="stats">' + tiles + '</div>';
  } catch (e) {
    container.innerHTML = '<p class="muted">' + Admin.esc(e.message) + '</p>';
  }
};
