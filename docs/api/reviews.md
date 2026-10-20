# Reviews API

What our guests say about us.

Base path: `/api/reviews`

| Method | Path | Access |
| --- | --- | --- |
| GET | `/api/reviews` | Public |
| GET | `/api/reviews/:id` | Public |
| POST | `/api/reviews` | Public (customer facing form) |
| PUT | `/api/reviews/:id` | Admin token required |
| DELETE | `/api/reviews/:id` | Admin token required |

List endpoints accept `?q=` for free text search.

## Fields

| Field | Type | Required |
| --- | --- | --- |
| `customerName` | string | yes |
| `rating` | number | yes |
| `comment` | string | no |

## Example request body

```json
{ "customerName": "Sample customerName", "rating": 10, "comment": "Sample comment" }
```
