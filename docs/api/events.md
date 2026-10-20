# Events API

Upcoming events on the catering calendar.

Base path: `/api/events`

| Method | Path | Access |
| --- | --- | --- |
| GET | `/api/events` | Admin token required |
| GET | `/api/events/:id` | Admin token required |
| POST | `/api/events` | Admin token required |
| PUT | `/api/events/:id` | Admin token required |
| DELETE | `/api/events/:id` | Admin token required |

List endpoints accept `?q=` for free text search.

## Fields

| Field | Type | Required |
| --- | --- | --- |
| `title` | string | yes |
| `eventDate` | date | yes |
| `venue` | string | no |
| `guests` | number | yes |
| `status` | string | no |

## Example request body

```json
{ "title": "Sample title", "eventDate": "2026-12-01", "venue": "Sample venue", "guests": 10, "status": "Sample status" }
```
