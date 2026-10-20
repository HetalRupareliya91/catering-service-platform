# Inventory API

Kitchen stock levels and reorder points.

Base path: `/api/inventory`

| Method | Path | Access |
| --- | --- | --- |
| GET | `/api/inventory` | Admin token required |
| GET | `/api/inventory/:id` | Admin token required |
| POST | `/api/inventory` | Admin token required |
| PUT | `/api/inventory/:id` | Admin token required |
| DELETE | `/api/inventory/:id` | Admin token required |

List endpoints accept `?q=` for free text search.

## Fields

| Field | Type | Required |
| --- | --- | --- |
| `item` | string | yes |
| `quantity` | number | yes |
| `unit` | string | yes |
| `reorderLevel` | number | no |

## Example request body

```json
{ "item": "Sample item", "quantity": 10, "unit": "Sample unit", "reorderLevel": 10 }
```
