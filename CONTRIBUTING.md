# Contributing

1. Branch from `main` using `feature/...`, `test/...` or `chore/...`.
2. Keep commits small and focused; use conventional messages
   (`feat(api): ...`, `feat(admin): ...`, `style(web): ...`, `test(api): ...`, `docs: ...`).
3. Run `npm test` inside `backend/` before opening a pull request.
4. Every pull request is reviewed and merged by another team member.

## Adding a new module

1. `backend/src/models/<name>.model.js` - fields and access rules
2. `backend/src/validators`, `services`, `routes` - one line each, using the shared factories
3. `admin/js/entities/<name>.js` - table columns and form defaults
4. For public modules: `frontend/js/entities/<name>.js` and a card view

The website and admin panel discover new modules automatically through `/api/meta/entities`.
