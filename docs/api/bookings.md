# Bookings API

Tell us about your event and we will call you back.

Base path: `/api/bookings`

| Method | Path | Access |
| --- | --- | --- |
| GET | `/api/bookings` | Admin token required |
| GET | `/api/bookings/:id` | Admin token required |
| POST | `/api/bookings` | Public (customer facing form) |
| PUT | `/api/bookings/:id` | Admin token required |
| DELETE | `/api/bookings/:id` | Admin token required |

List endpoints accept `?q=` for free text search.

## Fields

| Field | Type | Required |
| --- | --- | --- |
| `customerName` | string | yes |
| `phone` | string | yes |
| `email` | email | yes |
| `packageName` | string | no |
| `eventDate` | date | yes |
| `guests` | number | yes |
| `status` | string | no |

## Example request body

```json
{ "customerName": "Sample customerName", "phone": "Sample phone", "email": "guest@example.com", "packageName": "Sample packageName", "eventDate": "2026-12-01", "guests": 10, "status": "Sample status" }
```
