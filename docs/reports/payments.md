# Payments report

Endpoint: `GET /api/reports/payments` (admin token required)

Returns a quick summary used by the admin panel:

- `total` - number of Payments records
- `sum` - total of `amount`
- `groups` - record count grouped by `method`

Open **Admin > Payments > View report** to see it.
