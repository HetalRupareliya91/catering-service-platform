# Inventory report

Endpoint: `GET /api/reports/inventory` (admin token required)

Returns a quick summary used by the admin panel:

- `total` - number of Inventory records
- `sum` - total of `quantity`
- `groups` - record count grouped by `unit`

Open **Admin > Inventory > View report** to see it.
