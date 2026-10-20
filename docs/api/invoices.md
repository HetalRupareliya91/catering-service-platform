# Invoices API

Invoices raised against confirmed bookings.

Base path: `/api/invoices`

| Method | Path | Access |
| --- | --- | --- |
| GET | `/api/invoices` | Admin token required |
| GET | `/api/invoices/:id` | Admin token required |
| POST | `/api/invoices` | Admin token required |
| PUT | `/api/invoices/:id` | Admin token required |
| DELETE | `/api/invoices/:id` | Admin token required |

List endpoints accept `?q=` for free text search.

## Fields

| Field | Type | Required |
| --- | --- | --- |
| `bookingRef` | string | yes |
| `amount` | number | yes |
| `dueDate` | date | yes |
| `status` | string | no |

## Example request body

```json
{ "bookingRef": "Sample bookingRef", "amount": 10, "dueDate": "2026-12-01", "status": "Sample status" }
```
