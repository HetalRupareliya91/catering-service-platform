# Customers API

Customer directory and contact details.

Base path: `/api/customers`

| Method | Path | Access |
| --- | --- | --- |
| GET | `/api/customers` | Admin token required |
| GET | `/api/customers/:id` | Admin token required |
| POST | `/api/customers` | Admin token required |
| PUT | `/api/customers/:id` | Admin token required |
| DELETE | `/api/customers/:id` | Admin token required |

List endpoints accept `?q=` for free text search.

## Fields

| Field | Type | Required |
| --- | --- | --- |
| `name` | string | yes |
| `email` | email | yes |
| `phone` | string | yes |
| `city` | string | no |

## Example request body

```json
{ "name": "Sample name", "email": "guest@example.com", "phone": "Sample phone", "city": "Sample city" }
```
