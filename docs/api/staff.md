# Staff API

Chefs, servers and event managers.

Base path: `/api/staff`

| Method | Path | Access |
| --- | --- | --- |
| GET | `/api/staff` | Admin token required |
| GET | `/api/staff/:id` | Admin token required |
| POST | `/api/staff` | Admin token required |
| PUT | `/api/staff/:id` | Admin token required |
| DELETE | `/api/staff/:id` | Admin token required |

List endpoints accept `?q=` for free text search.

## Fields

| Field | Type | Required |
| --- | --- | --- |
| `name` | string | yes |
| `role` | string | yes |
| `phone` | string | yes |
| `active` | boolean | no |

## Example request body

```json
{ "name": "Sample name", "role": "Sample role", "phone": "Sample phone", "active": true }
```
