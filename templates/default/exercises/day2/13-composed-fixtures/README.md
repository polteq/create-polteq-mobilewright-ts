# Module 13 — Composed fixtures & options (reference only)

No exercise here, and no files in this scaffold — a trainer-demoed
extension of Module 12's `fixtures.ts`, shown live from the course's own
material. It demonstrates:

- **Composed fixtures**: `loggedInScreen` depends on `freshScreen` by naming
  it in its own parameter list, then does a real login on top of it. This is
  what "fixtures can depend on other fixtures" means in practice.
- **`test.use({...})`**: a per-file fixture-option override, demonstrated
  live rather than shipped in this scaffold — e.g. `test.use({ video: 'retain-on-failure' })` to opt into video
  capture just for one spec file (video defaults to `'off'`).

`loggedInScreen` reaches Log in via
`openAccountAsGuest(freshScreen)` (from `support/navigation.ts`): the app's
login session survives `terminateApp()`+`launchApp()`, so the Account tab
can't be assumed logged-out.
