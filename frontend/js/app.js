// Customer website: hash router that builds pages from the API's module list
window.EntityConfig = window.EntityConfig || {};
window.Views = window.Views || {};

const App = {
  entities: [],

  esc(v) {
    return String(v == null ? '' : v).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  },
  label(key) {
    return key.replace(/([A-Z])/g, ' $1').replace(/^./, c => c.toUpperCase());
  },
  format(key, value) {
    if (typeof value === 'boolean') return value ? 'Yes' : 'No';
    if (/price|amount/i.test(key)) return '&#8377;' + Number(value).toLocaleString('en-IN');
    return App.esc(value);
  },
  toast(message, type) {
    const t = document.getElementById('toast');
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

  async init() {
    try { this.entities = await Api.get('/meta/entities'); } catch (e) { this.entities = []; }
    const visible = this.entities.filter(e => e.public);
    await Promise.all(visible.map(e => {
      this.loadStyle('css/entities/' + e.name + '.css');
      this.loadStyle('css/mobile/' + e.name + '.mobile.css');
      return Promise.all([this.loadScript('js/entities/' + e.name + '.js'), this.loadScript('js/views/' + e.name + '.view.js')]);
    }));
    const link = e => '<a href="#/e/' + e.name + '">' + App.esc(e.title) + '</a>';
    document.getElementById('nav').innerHTML = '<a href="#/">Home</a>' + visible.map(link).join('');
    document.getElementById('bottom-nav').innerHTML = '<a href="#/">Home</a>' + visible.slice(0, 3).map(link).join('') + '<a href="#/form/bookings">Book</a>';
    window.addEventListener('hashchange', () => this.route());
    this.route();
  },

  route() {
    const parts = location.hash.replace(/^#\/?/, '').split('/');
    const view = document.getElementById('view');
    document.querySelectorAll('#nav a, #bottom-nav a').forEach(a => {
      const href = a.getAttribute('href');
      a.classList.toggle('active', href === location.hash || (href === '#/' && !parts[0]));
    });
    window.scrollTo(0, 0);
    if (parts[0] === 'e' && parts[1]) return this.renderList(view, parts[1]);
    if (parts[0] === 'form' && parts[1]) return this.renderForm(view, parts[1]);
    return this.renderHome(view);
  },

  renderHome(view) {
    const tiles = this.entities.filter(e => e.public).map(e => {
      const cfg = window.EntityConfig[e.name] || {};
      return '<a class="tile" href="#/e/' + e.name + '"><h3>' + App.esc(e.title) + '</h3><p>' + App.esc(cfg.tagline || 'Explore ' + e.title.toLowerCase()) + '</p></a>';
    }).join('');
    view.innerHTML = '<section class="hero"><h1>Catering that makes every event memorable</h1>'
      + '<p>Weddings, corporate lunches, birthdays and festivals - freshly cooked menus served by our professional team.</p>'
      + '<div class="hero__actions"><a class="btn btn--primary" href="#/form/bookings">Book an event</a><a class="btn" href="#/form/reviews">Leave a review</a></div></section>'
      + '<section class="tiles">' + tiles + '</section>';
  },

  async renderList(view, name) {
    const entity = this.entities.find(e => e.name === name && e.public);
    if (!entity) { view.innerHTML = '<p class="empty">This section is not available.</p>'; return; }
    view.innerHTML = '<h2>' + App.esc(entity.title) + '</h2><div class="grid" id="grid"><p class="empty">Loading...</p></div>';
    const grid = document.getElementById('grid');
    try {
      const rows = await Api.get('/' + name);
      const keys = Object.keys(entity.fields);
      const cfg = Object.assign({ cardTitle: keys[0], cardFields: keys.slice(1) }, window.EntityConfig[name] || {});
      const render = window.Views[name] || ((row, c) => '<article class="card"><h3>' + App.esc(row[c.cardTitle]) + '</h3></article>');
      grid.innerHTML = rows.length ? rows.map(r => render(r, cfg)).join('') : '<p class="empty">Nothing here yet.</p>';
    } catch (e) {
      grid.innerHTML = '<p class="empty">' + App.esc(e.message) + '</p>';
    }
  },

  renderForm(view, name) {
    const entity = this.entities.find(e => e.name === name && e.publicCreate);
    if (!entity) { view.innerHTML = '<p class="empty">This form is not available yet.</p>'; return; }
    const types = { number: 'number', date: 'date', email: 'email', boolean: 'checkbox' };
    const inputs = Object.entries(entity.fields).filter(([key]) => key !== 'status').map(([key, def]) => {
      const type = types[def.type] || 'text';
      return '<label class="field"><span>' + App.label(key) + (def.required ? ' *' : '') + '</span>'
        + '<input name="' + key + '" type="' + type + '"' + (def.required && type !== 'checkbox' ? ' required' : '') + '></label>';
    }).join('');
    view.innerHTML = '<h2>' + App.esc(entity.title) + '</h2><form id="public-form" class="form">' + inputs + '<button class="btn btn--primary" type="submit">Submit</button></form>';
    document.getElementById('public-form').addEventListener('submit', async ev => {
      ev.preventDefault();
      const data = {};
      new FormData(ev.target).forEach((v, k) => { data[k] = v; });
      try {
        await Api.post('/' + name, data);
        App.toast('Thank you! We will get back to you shortly.', 'success');
        ev.target.reset();
      } catch (e) {
        App.toast(e.message, 'error');
      }
    });
  }
};

document.addEventListener('DOMContentLoaded', () => App.init());
if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js').catch(() => {});
