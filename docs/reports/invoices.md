# Invoices report

Endpoint: `GET /api/reports/invoices` (admin token required)

Returns a quick summary used by the admin panel:

- `total` - number of Invoices records
- `sum` - total of `amount`
- `groups` - record count grouped by `status`

Open **Admin > Invoices > View report** to see it.
