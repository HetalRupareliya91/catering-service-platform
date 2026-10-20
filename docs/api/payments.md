# Payments API

Payments received from customers.

Base path: `/api/payments`

| Method | Path | Access |
| --- | --- | --- |
| GET | `/api/payments` | Admin token required |
| GET | `/api/payments/:id` | Admin token required |
| POST | `/api/payments` | Admin token required |
| PUT | `/api/payments/:id` | Admin token required |
| DELETE | `/api/payments/:id` | Admin token required |

List endpoints accept `?q=` for free text search.

## Fields

| Field | Type | Required |
| --- | --- | --- |
| `invoiceRef` | string | yes |
| `amount` | number | yes |
| `method` | string | yes |
| `paidOn` | date | yes |

## Example request body

```json
{ "invoiceRef": "Sample invoiceRef", "amount": 10, "method": "Sample method", "paidOn": "2026-12-01" }
```
