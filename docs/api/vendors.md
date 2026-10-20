# Vendors API

Suppliers for groceries, crockery and decor.

Base path: `/api/vendors`

| Method | Path | Access |
| --- | --- | --- |
| GET | `/api/vendors` | Admin token required |
| GET | `/api/vendors/:id` | Admin token required |
| POST | `/api/vendors` | Admin token required |
| PUT | `/api/vendors/:id` | Admin token required |
| DELETE | `/api/vendors/:id` | Admin token required |

List endpoints accept `?q=` for free text search.

## Fields

| Field | Type | Required |
| --- | --- | --- |
| `name` | string | yes |
| `supplies` | string | yes |
| `phone` | string | no |
| `email` | email | no |

## Example request body

```json
{ "name": "Sample name", "supplies": "Sample supplies", "phone": "Sample phone", "email": "guest@example.com" }
```
