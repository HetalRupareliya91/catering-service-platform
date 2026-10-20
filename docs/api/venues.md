# Venues API

Partner venues where we regularly serve.

Base path: `/api/venues`

| Method | Path | Access |
| --- | --- | --- |
| GET | `/api/venues` | Public |
| GET | `/api/venues/:id` | Public |
| POST | `/api/venues` | Admin token required |
| PUT | `/api/venues/:id` | Admin token required |
| DELETE | `/api/venues/:id` | Admin token required |

List endpoints accept `?q=` for free text search.

## Fields

| Field | Type | Required |
| --- | --- | --- |
| `name` | string | yes |
| `city` | string | yes |
| `capacity` | number | yes |
| `address` | string | no |

## Example request body

```json
{ "name": "Sample name", "city": "Sample city", "capacity": 10, "address": "Sample address" }
```
