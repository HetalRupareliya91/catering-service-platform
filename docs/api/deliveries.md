# Deliveries API

Food delivery and dispatch schedule.

Base path: `/api/deliveries`

| Method | Path | Access |
| --- | --- | --- |
| GET | `/api/deliveries` | Admin token required |
| GET | `/api/deliveries/:id` | Admin token required |
| POST | `/api/deliveries` | Admin token required |
| PUT | `/api/deliveries/:id` | Admin token required |
| DELETE | `/api/deliveries/:id` | Admin token required |

List endpoints accept `?q=` for free text search.

## Fields

| Field | Type | Required |
| --- | --- | --- |
| `bookingRef` | string | yes |
| `driver` | string | yes |
| `scheduledAt` | date | yes |
| `status` | string | no |

## Example request body

```json
{ "bookingRef": "Sample bookingRef", "driver": "Sample driver", "scheduledAt": "2026-12-01", "status": "Sample status" }
```
