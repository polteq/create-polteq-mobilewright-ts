# Module 5 — Fixtures & deep links

## Exercise

Three small tests across two files:

1. **A deliberately failing test** (`video-recording-failure.spec.ts`, on its
   own — see why below). Assert on text that doesn't exist on the home
   screen, run it, and look at the automatic failure screenshot in the HTML
   report. This is the whole point of the exercise — see what a failure
   looks like before you're debugging a real one. The solution also sets
   `test.use({ video: 'retain-on-failure' })`, so the failure gets a video
   attached to the report too (`'retain-on-failure'` discards recordings for
   tests that pass, so a passing run wouldn't get one).

   **Why this test is alone in its own file, and named to run last:**
   recording starts for every test in a file once `video` is set — not just
   the ones that fail — so the fixture is doing real, sustained work
   (`retain-on-failure` only affects whether the recording is *attached*
   afterwards, not whether it's *made*). Isolating it keeps that extra load
   off the other two tests, and the file name deliberately sorts
   alphabetically after `fixtures-and-deep-link.spec.ts` so it always runs
   last, meaning nothing else in this exercise can be affected regardless of
   how the emulator handles that load.
2. **Register + log in** (`fixtures-and-deep-link.spec.ts`). Use the shared
   `registerFreshAccount()` helper from
   `support/account.ts` (it hits the Sprint 4 API directly — no UI involved)
   to get a fresh email/password pair, then open the drawer, navigate to
   Sign In, log in through Toolshop's own form and confirm you land on the
   product catalog.
3. **A real deep link.** Terminate the app, then use `device.openUrl(...)`
   with the app's custom scheme to cold-start it again.

`device` is worker-scoped (reused across a worker's tests); `screen` is
test-scoped and gets a fresh app per test. Notice that in test 2 you don't
need to explicitly launch the app — it's already there by the time your test
body runs.

This build only registers the bare
`exp+practice-software-testing-mobile-app://` scheme at the OS level —
opening it with a sub-path like `.../SignIn` or `.../Register` is delivered
to the app but never reaches the in-app router,
so it silently leaves you on whatever screen you were already on. That rules
out per-screen deep linking as a navigation shortcut for this app; test 3
instead demonstrates the deep link that *does* work — cold-starting the app
through its custom scheme — and tests 2/12/13/15/16 reach Sign In and
Register by tapping through the navigation drawer instead.

**Two more things worth knowing, both easy to trip over:**

- `device.terminateApp()` and `device.launchApp()` both require the app's
  bundle ID as an explicit argument — it's not implied by config. Request the
  built-in `bundleId` fixture alongside `screen`/`device` and pass it through:
  `device.terminateApp(bundleId)`.
- The app's login session persists across `terminateApp()` + `launchApp()` —
  there's no data-clear call in the Device API, only a full uninstall/install
  would truly reset it. That means the drawer can already show "Logout"
  instead of "Sign In"/"Register" if an earlier test left a session behind.
  `support/navigation.ts` exports `openDrawer(screen)`, which opens the
  drawer and logs out first if needed — use it instead of tapping
  `drawer-button` directly whenever you need to reach Sign In or Register.
