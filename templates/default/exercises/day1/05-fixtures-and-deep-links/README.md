# Module 5 — Fixtures & deep links

## Exercise

Three small tests across two files:

1. **A deliberately failing test** (`video-recording-failure.spec.ts`, on its
   own — see why below). Assert on text that doesn't exist on the home
   screen, run it, and look at the automatic failure screenshot in the HTML
   report. This is the whole point of the exercise — see what a failure
   looks like before you're debugging a real one. Also add
   `test.use({ video: 'retain-on-failure' })` to this file, so the failure
   gets a video attached to the report too (`'retain-on-failure'` discards recordings for
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
   `registerFreshAccount()` helper from `support/account.ts` (it calls the
   shop's mobile API directly, no UI involved) to get a fresh email/password
   pair, then open the Account tab, tap **Log in**, fill the form and confirm
   the Account tab now shows your email (`account-summary-email`).
3. **A real deep link.** Terminate the app, then use `device.openUrl(...)`
   with the app's custom scheme to cold-start it straight onto a screen:
   `gadgetshop://service` opens the Service tab. The app maps its paths to
   screens (`gadgetshop://cart`, `gadgetshop://help`, `gadgetshop://account`,
   ...), so a deep link is a real navigation shortcut in this app.
   On iOS the system first asks "Open in GadgetShopMobile?"; answer it with
   `confirmOpenInApp(screen)` from `support/navigation.ts` (it does nothing on
   Android).

`device` is worker-scoped (reused across a worker's tests); `screen` is
test-scoped and gets a fresh app per test. Notice that in test 2 you don't
need to explicitly launch the app — it's already there by the time your test
body runs.

Before tapping the login button, call `swipePastKeyboard(screen)` from
`support/navigation.ts`: the on-screen keyboard otherwise covers the button and
the tap does nothing.

**Two more things worth knowing, both easy to trip over:**

- `device.terminateApp()` and `device.launchApp()` both require the app's
  bundle ID as an explicit argument — it's not implied by config. Request the
  built-in `bundleId` fixture alongside `screen`/`device` and pass it through:
  `device.terminateApp(bundleId)`.
- The app's login session persists across `terminateApp()` + `launchApp()`.
  `device.clearAppData(bundleId)` (since mobilewright 0.0.67) wipes an app's
  data without uninstalling it, but whether that also removes this session
  hasn't been checked, so the course logs out explicitly instead. That means the Account tab can already show your
  profile and a **Log out** button instead of **Log in**/**Register** if an
  earlier test left a session behind. `support/navigation.ts` exports
  `openAccountAsGuest(screen)`, which opens the Account tab and logs out
  first if needed — use it instead of tapping `tab-account-button` directly
  whenever you need to reach Log in or Register.
