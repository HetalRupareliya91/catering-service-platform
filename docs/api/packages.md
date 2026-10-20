# Packages API

Per plate packages for any guest count.

Base path: `/api/packages`

| Method | Path | Access |
| --- | --- | --- |
| GET | `/api/packages` | Public |
| GET | `/api/packages/:id` | Public |
| POST | `/api/packages` | Admin token required |
| PUT | `/api/packages/:id` | Admin token required |
| DELETE | `/api/packages/:id` | Admin token required |

List endpoints accept `?q=` for free text search.

## Fields

| Field | Type | Required |
| --- | --- | --- |
| `name` | string | yes |
| `pricePerPlate` | number | yes |
| `minGuests` | number | yes |
| `includes` | string | no |

## Example request body

```json
{ "name": "Sample name", "pricePerPlate": 10, "minGuests": 10, "includes": "Sample includes" }
```
