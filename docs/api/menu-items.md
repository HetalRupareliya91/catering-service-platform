# Menu Items API

Freshly prepared dishes for every occasion.

Base path: `/api/menu-items`

| Method | Path | Access |
| --- | --- | --- |
| GET | `/api/menu-items` | Public |
| GET | `/api/menu-items/:id` | Public |
| POST | `/api/menu-items` | Admin token required |
| PUT | `/api/menu-items/:id` | Admin token required |
| DELETE | `/api/menu-items/:id` | Admin token required |

List endpoints accept `?q=` for free text search.

## Fields

| Field | Type | Required |
| --- | --- | --- |
| `name` | string | yes |
| `category` | string | yes |
| `price` | number | yes |
| `isVeg` | boolean | no |
| `description` | string | no |

## Example request body

```json
{ "name": "Sample name", "category": "Sample category", "price": 10, "isVeg": true, "description": "Sample description" }
```
