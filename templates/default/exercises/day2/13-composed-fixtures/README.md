# Module 13 — Composed fixtures & options (reference only)

No exercise here, and no files in this scaffold — a trainer-demoed
extension of Module 12's `fixtures.ts`, shown live from the course's own
material. It demonstrates:

- **Composed fixtures**: `loggedInScreen` depends on `freshScreen` by naming
  it in its own parameter list, then does a real login on top of it. This is
  what "fixtures can depend on other fixtures" means in practice.
- **`test.use({...})`**: a per-file fixture-option override, demonstrated
  live rather than shipped in this scaffold — e.g.
  `test.use({ video: 'retain-on-failure' })` to opt into video capture just
  for one spec file (video defaults to `'off'`).

`loggedInScreen` reaches Sign In via
`openDrawer(freshScreen)` (from `support/navigation.ts`) rather than a deep
link — this build doesn't support deep-linking to that screen, and the app's
login session survives `terminateApp()`+`launchApp()`, so the drawer can't be
assumed logged-out. The login button's real testID is `login-button` (not
`login-submit`).
