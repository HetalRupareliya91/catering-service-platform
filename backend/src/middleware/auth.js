// Signed admin tokens (HMAC-SHA256) without external dependencies
const crypto = require('crypto');
const config = require('../config');

const signature = body => crypto.createHmac('sha256', config.tokenSecret).update(body).digest('base64url');

function sign(payload) {
  const body = Buffer.from(JSON.stringify(payload)).toString('base64url');
  return body + '.' + signature(body);
}

function verify(token) {
  if (!token || !token.includes('.')) return null;
  const [body, sig] = token.split('.');
  const expected = signature(body);
  if (!sig || sig.length !== expected.length) return null;
  if (!crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(expected))) return null;
  try {
    const payload = JSON.parse(Buffer.from(body, 'base64url').toString());
    if (payload.exp && payload.exp < Date.now()) return null;
    return payload;
  } catch (err) {
    return null;
  }
}

function requireAdmin(req, res, next) {
  const header = req.headers.authorization || '';
  const payload = verify(header.startsWith('Bearer ') ? header.slice(7) : '');
  if (!payload || payload.role !== 'admin') return res.status(401).json({ error: 'Unauthorized' });
  req.user = payload;
  next();
}

module.exports = { sign, verify, requireAdmin };
