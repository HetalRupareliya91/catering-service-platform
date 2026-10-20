// Admin panel: sidebar, data tables, add/edit forms and reports for every module
window.AdminEntities = window.AdminEntities || {};
window.AdminViews = window.AdminViews || {};
window.AdminReports = window.AdminReports || {};

const $ = s => document.querySelector(s);
const FIELD_TYPES = { number: 'number', date: 'date', email: 'email', boolean: 'checkbox' };

const Admin = {
  entities: [],
  rows: [],
  current: null,

  esc(v) {
    return String(v == null ? '' : v).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  },
  label(key) {
    return key.replace(/([A-Z])/g, ' $1').replace(/^./, c => c.toUpperCase());
  },
  toast(message, type) {
    const t = $('#toast');
    t.textContent = message;
    t.className = 'toast show ' + (type || '');
    setTimeout(() => { t.className = 'toast'; }, 2800);
  },
  loadScript(src) {
    return new Promise(resolve => {
      const s = document.createElement('script');
      s.src = src;
      s.onload = resolve;
      s.onerror = resolve;
      document.head.appendChild(s);
    });
  },
  loadStyle(href) {
    const l = document.createElement('link');
    l.rel = 'stylesheet';
    l.href = href;
    l.onerror = () => l.remove();
    document.head.appendChild(l);
  },

  showLogin() {
    $('#shell').hidden = true;
    $('#login').hidden = false;
  },

  async boot() {
    if (!AdminAPI.token()) return this.showLogin();
    try {
      this.entities = await AdminAPI.get('/meta/entities');
    } catch (e) {
      this.toast(e.message, 'error');
      return this.showLogin();
    }
    $('#login').hidden = true;
    $('#shell').hidden = false;
    const assets = [this.loadScript('js/dashboard.js')];
    this.entities.forEach(e => {
      this.loadStyle('css/entities/' + e.name + '.css');
      this.loadStyle('css/mobile/' + e.name + '.mobile.css');
      assets.push(this.loadScript('js/entities/' + e.name + '.js'));
      assets.push(this.loadScript('js/views/' + e.name + '.view.js'));
      if (!e.public) assets.push(this.loadScript('js/reports/' + e.name + '.report.js'));
    });
    await Promise.all(assets);
    $('#side-nav').innerHTML = '<a href="#/dashboard">Dashboard</a>'
      + this.entities.map(e => '<a href="#/e/' + e.name + '">' + this.esc(e.title) + '</a>').join('');
    this.route();
  },

  route() {
    if ($('#shell').hidden) return;
    const parts = location.hash.replace(/^#\/?/, '').split('/');
    document.querySelectorAll('#side-nav a').forEach(a => a.classList.toggle('active', a.getAttribute('href') === (location.hash || '#/dashboard')));
    $('#sidebar').classList.remove('open');
    if (parts[0] === 'e' && parts[1]) return this.openEntity(parts[1]);
    return this.openDashboard();
  },

  openDashboard() {
    $('#page-title').textContent = 'Dashboard';
    if (typeof window.renderDashboard === 'function') return window.renderDashboard($('#content'));
    $('#content').innerHTML = '<p class="muted">Select a module from the menu.</p>';
  },

  async openEntity(name) {
    const entity = this.entities.find(e => e.name === name);
    if (!entity) return this.openDashboard();
    this.current = entity;
    $('#page-title').textContent = entity.title;
    const hasReport = typeof window.AdminReports[name] === 'function';
    $('#content').innerHTML = '<div class="toolbar">'
      + '<input id="search" class="search" placeholder="Search ' + this.esc(entity.title.toLowerCase()) + '...">'
      + '<button id="add" class="btn btn--primary">Add new</button>'
      + (hasReport ? '<button id="report" class="btn">View report</button>' : '')
      + '</div><div id="report-box"></div>'
      + '<div class="table-wrap"><table class="table table--' + name + '"><thead></thead><tbody></tbody></table></div>';
    $('#add').onclick = () => this.openForm(null);
    if (hasReport) $('#report').onclick = () => this.showReport(name);
    $('#search').oninput = ev => this.renderRows(ev.target.value);
    try {
      this.rows = await AdminAPI.get('/' + name);
    } catch (e) {
      this.rows = [];
      this.toast(e.message, 'error');
    }
    this.renderRows('');
  },

  columns() {
    const cfg = window.AdminEntities[this.current.name] || {};
    return cfg.columns || Object.keys(this.current.fields).slice(0, 4);
  },

  cell(field, value) {
    const view = window.AdminViews[this.current.name];
    return view && view.cell ? view.cell(field, value) : this.esc(value);
  },

  renderRows(query) {
    const cols = this.columns();
    const q = String(query || '').toLowerCase();
    const rows = this.rows.filter(r => !q || JSON.stringify(r).toLowerCase().includes(q));
    $('.table thead').innerHTML = '<tr>' + cols.map(c => '<th>' + this.label(c) + '</th>').join('') + '<th></th></tr>';
    $('.table tbody').innerHTML = rows.length
      ? rows.map(r => '<tr>'
        + cols.map(c => '<td data-label="' + this.label(c) + '">' + this.cell(c, r[c]) + '</td>').join('')
        + '<td class="actions"><button class="btn btn--small" data-edit="' + r.id + '">Edit</button>'
        + '<button class="btn btn--small btn--danger" data-del="' + r.id + '">Delete</button></td></tr>').join('')
      : '<tr><td colspan="' + (cols.length + 1) + '" class="muted">No records yet.</td></tr>';
    document.querySelectorAll('[data-edit]').forEach(b => { b.onclick = () => this.openForm(this.rows.find(r => r.id === b.dataset.edit)); });
    document.querySelectorAll('[data-del]').forEach(b => { b.onclick = () => this.remove(b.dataset.del); });
  },

  openForm(row) {
    const entity = this.current;
    const cfg = window.AdminEntities[entity.name] || {};
    const values = row || cfg.defaults || {};
    $('#modal-title').textContent = (row ? 'Edit ' : 'Add ') + entity.title;
    $('#modal-form').innerHTML = Object.entries(entity.fields).map(([key, def]) => {
      const type = FIELD_TYPES[def.type] || 'text';
      const val = values[key];
      const attrs = type === 'checkbox'
        ? (val ? ' checked' : '')
        : ' value="' + this.esc(val == null ? '' : (type === 'date' ? String(val).slice(0, 10) : val)) + '"';
      return '<label class="field"><span>' + this.label(key) + (def.required ? ' *' : '') + '</span>'
        + '<input name="' + key + '" type="' + type + '"' + (type === 'number' ? ' step="any"' : '') + attrs
        + (def.required && type !== 'checkbox' ? ' required' : '') + '></label>';
    }).join('') + '<div class="modal__actions"><button type="button" class="btn" id="cancel">Cancel</button><button class="btn btn--primary" type="submit">Save</button></div>';
    $('#modal').hidden = false;
    $('#cancel').onclick = () => { $('#modal').hidden = true; };
    $('#modal-form').onsubmit = async ev => {
      ev.preventDefault();
      const data = {};
      Object.entries(entity.fields).forEach(([key, def]) => {
        const input = ev.target.elements[key];
        data[key] = def.type === 'boolean' ? input.checked : input.value;
      });
      try {
        if (row) await AdminAPI.put('/' + entity.name + '/' + row.id, data);
        else await AdminAPI.post('/' + entity.name, data);
        $('#modal').hidden = true;
        this.toast('Saved', 'success');
        this.openEntity(entity.name);
      } catch (e) {
        this.toast(e.message, 'error');
      }
    };
  },

  async remove(id) {
    if (!confirm('Delete this record?')) return;
    try {
      await AdminAPI.del('/' + this.current.name + '/' + id);
      this.toast('Deleted', 'success');
      this.openEntity(this.current.name);
    } catch (e) {
      this.toast(e.message, 'error');
    }
  },

  async showReport(name) {
    try {
      const data = await AdminAPI.get('/reports/' + name);
      $('#report-box').innerHTML = window.AdminReports[name](data);
    } catch (e) {
      this.toast(e.message, 'error');
    }
  }
};

document.addEventListener('DOMContentLoaded', () => {
  $('#login-form').addEventListener('submit', async ev => {
    ev.preventDefault();
    const form = ev.target;
    try {
      const res = await AdminAPI.post('/auth/login', { email: form.email.value, password: form.password.value });
      try { localStorage.setItem('adminToken', res.token); } catch (e) { /* ignore */ }
      Admin.boot();
    } catch (e) {
      Admin.toast(e.message, 'error');
    }
  });
  $('#logout').onclick = () => {
    try { localStorage.removeItem('adminToken'); } catch (e) { /* ignore */ }
    Admin.showLogin();
  };
  $('#menu-toggle').onclick = () => $('#sidebar').classList.toggle('open');
  window.addEventListener('hashchange', () => Admin.route());
  Admin.boot();
});
