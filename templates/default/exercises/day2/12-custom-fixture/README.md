# Module 12 — Custom fixture

## Exercise

Write your own `fixtures.ts` that wraps repeated setup — here, a clean app
restart (`terminateApp()` + `launchApp()`) — behind a single fixture named
`freshScreen`, using the `base.extend<{...}>({...})` pattern.

Then rewrite 2–3 of the Module 5/6 tests to consume `freshScreen` from your
own `fixtures.ts` (`import { test, expect } from '../fixtures'`) instead of
importing `@mobilewright/test` directly and repeating the restart logic in
every test body.

This scaffold doesn't include a reference solution for this exercise — the
notes below cover the two things most likely to trip you up.

This build doesn't support deep-linking
to Sign In or Register, so `login-with-fixture.spec.ts` reaches them by
tapping through the drawer via `openDrawer(screen)` (from
`support/navigation.ts`) instead of `device.openUrl(...)`. The login button's
real testID is `login-button` (not `login-submit`).

Two things your `fixtures.ts` needs to get right: `device.terminateApp()` and
`device.launchApp()` both require the app's bundle ID as an explicit
argument — request the built-in `bundleId` fixture alongside `screen`/
`device` and pass it through. And the app's login session survives that
restart (no data-clear call exists in the Device API), so anything that
reaches Sign In/Register afterwards should go through `openDrawer(screen)`
rather than assuming a logged-out drawer.
