# Setup guide

## Requirements

- Node.js 18 or newer

## Run locally

```bash
cd backend
npm install
npm run seed     # optional demo data
npm start
```

| URL | What |
| --- | --- |
| http://localhost:4000 | Customer website (works as a mobile PWA) |
| http://localhost:4000/admin | Admin panel |
| http://localhost:4000/api/health | API health check |

## Configuration

Copy `.env.example` values into your environment. Always change
`ADMIN_PASSWORD` and `TOKEN_SECRET` before deploying.

## Tests

```bash
cd backend
npm test
```
