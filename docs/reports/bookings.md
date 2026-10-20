# Bookings report

Endpoint: `GET /api/reports/bookings` (admin token required)

Returns a quick summary used by the admin panel:

- `total` - number of Bookings records
- `sum` - total of `guests`
- `groups` - record count grouped by `status`

Open **Admin > Bookings > View report** to see it.
