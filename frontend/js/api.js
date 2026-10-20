// Minimal API client for the customer website
const Api = {
  async get(url) {
    const res = await fetch('/api' + url);
    if (!res.ok) throw new Error('Could not load ' + url);
    return res.json();
  },
  async post(url, body) {
    const res = await fetch('/api' + url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(data.error || (data.errors || []).join(', ') || 'Request failed');
    return data;
  }
};
