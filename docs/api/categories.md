# Categories API

Browse our menu by course and cuisine.

Base path: `/api/categories`

| Method | Path | Access |
| --- | --- | --- |
| GET | `/api/categories` | Public |
| GET | `/api/categories/:id` | Public |
| POST | `/api/categories` | Admin token required |
| PUT | `/api/categories/:id` | Admin token required |
| DELETE | `/api/categories/:id` | Admin token required |

List endpoints accept `?q=` for free text search.

## Fields

| Field | Type | Required |
| --- | --- | --- |
| `name` | string | yes |
| `description` | string | no |
| `sortOrder` | number | no |

## Example request body

```json
{ "name": "Sample name", "description": "Sample description", "sortOrder": 10 }
```
