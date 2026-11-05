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
notes below cover the things most likely to trip you up.

`login-with-fixture.spec.ts` reaches Log in and Register through the Account
tab via `openAccountAsGuest(screen)` (from `support/navigation.ts`).

Two things your `fixtures.ts` needs to get right: `device.terminateApp()` and
`device.launchApp()` both require the app's bundle ID as an explicit
argument — request the built-in `bundleId` fixture alongside `screen`/
`device` and pass it through. And the app's login session survives that
restart (`terminateApp()` + `launchApp()` don't clear app data), so anything that
reaches Sign In/Register afterwards should go through `openAccountAsGuest(screen)`
rather than assuming a logged-out Account tab.
