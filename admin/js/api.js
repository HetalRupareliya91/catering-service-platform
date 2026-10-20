// Authenticated API client for the admin panel
const AdminAPI = {
  token() {
    try { return localStorage.getItem('adminToken'); } catch (e) { return null; }
  },
  async request(method, url, body) {
    const headers = { 'Content-Type': 'application/json' };
    if (this.token()) headers.Authorization = 'Bearer ' + this.token();
    const res = await fetch('/api' + url, { method, headers, body: body ? JSON.stringify(body) : undefined });
    if (res.status === 401 && url !== '/auth/login') {
      try { localStorage.removeItem('adminToken'); } catch (e) { /* ignore */ }
      throw new Error('Session expired, please sign in again');
    }
    if (res.status === 204) return null;
    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(data.error || (data.errors || []).join(', ') || 'Request failed');
    return data;
  },
  get(url) { return this.request('GET', url); },
  post(url, body) { return this.request('POST', url, body); },
  put(url, body) { return this.request('PUT', url, body); },
  del(url) { return this.request('DELETE', url); }
};
