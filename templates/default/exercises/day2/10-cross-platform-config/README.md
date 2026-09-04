# Module 10 — Cross-platform config (reference only)

No exercise here — this is a trainer-demoed config change, shown here as a
reference the root `mobilewright.config.ts` evolves toward, not something
attendees write from scratch.

`solution/mobilewright.config.ts` extends the single-platform root config
into a `projects` array so the same spec files run unchanged on both Android
and iOS.

**Confirmed live**, on a booted Android emulator and a booted iOS Simulator
(bundle id `practice-software-testing-mobile-app`) with Toolshop installed on
both: `mobilewright test -c solution/mobilewright.config.ts --list` expands
one spec file into two entries, `[android] › ...` and `[ios] › ...`, and
`--project android` / `--project ios` each run that same unmodified spec file
end to end — `example.spec.ts` passes unchanged on both platforms. The
`projects[].use` shape (`platform`, `bundleId`) is exactly Playwright's
per-project `use` convention, as expected.

## WebView bridging (`webview/`)

**Confirmed: Toolshop has no WebView.** So this uses a second app instead —
`playground/playground.apk` (Android) / `playground/playground.zip` (iOS
Simulator) at the repo root, the mobile-next playground app (bundle id
`com.mobilenext.playground` — **confirmed live the same value on both
platforms**, unlike Toolshop), which is debuggable and does bundle a real
WebView screen.

Setup (once per machine, same pattern as Module 3):

```
npx mobilecli apps install playground/playground.apk   # Android
npx mobilecli apps install playground/playground.zip   # iOS Simulator
```

`webview/solution/webview-login.spec.ts` is reference-only, same kind as the
rest of this module. It points `test.use({ bundleId: 'com.mobilenext.playground' })`
at the playground app instead of Toolshop — overriding the root config's
default for that one file, no config changes needed — then:

- Taps into the app's **Web View** menu entry and gets a Playwright-like
  `Page` back from `screen.getByWebView().page()`, asserting against its DOM
  with the same `getByRole`/`locator` calls as regular Playwright.
- Fills and submits the WebView's login form, which redirects through a
  custom `playground://` URL scheme. The native app intercepts that and
  shows a real native "Login Successful" screen — the exercise asserts on
  that hand-off with ordinary `screen.getByTestId`/`getByText`, back on
  native locators once the WebView itself is gone.

**Confirmed live** on the Android emulator: the playground app's menu
buttons are native Android views, so their identifiers are full resource-id
strings (`com.mobilenext.playground:id/btn_web_view`), not bare testIDs like
Toolshop's — `getByTestId('btn_web_view')` does **not** match (the query
engine requires an exact string match against `identifier`/`resourceId`,
no prefix stripping), so the spec uses `getByText('Web View')` instead. The
WebView's own URL is `https://mobilewright.dev/samples/webview/?source=webview`,
title "Sample Login". After submitting the form with a name, the resulting
native screen carries a `com.mobilenext.playground:id/message` resource-id
(a real testID, so `getByTestId` works there), reading "You have
successfully logged in to the native app, Marco!" for whatever name was
typed.

## Platform gotchas: permission dialogs & keyboard occlusion

Two cross-platform gotchas worth knowing about before writing specs against
either app.

### OS permission dialogs

**Confirmed live** on the playground app (`com.mobilenext.playground`),
Android: its "Permissions and Alerts" screen lists several Android runtime
permissions with per-permission request buttons, and two of them genuinely
trigger a real OS-level dialog (only after the in-app button is tapped, not
just from navigating to the screen):

- **Location** — "REQUEST LOCATION PERMISSION" triggers the standard Android
  location dialog, with a Precise/Approximate toggle and three buttons:
  "While using the app" / "Only this time" / "Don't allow".
- **Camera** — "REQUEST CAMERA PERMISSION" triggers "Allow Playground to take
  pictures and record video?" (no Precise toggle), with the same three
  buttons.

A spec that drives either flow needs to handle this dialog explicitly (e.g.
via the driver's OS-dialog/permission handling, or by pre-granting the
permission at install time) — ignoring it blocks the test, since the dialog
sits outside the app's own view hierarchy.

**Confirmed live** on the same playground app, iOS Simulator: the
"Permissions and Alerts" screen has **no Location section at all** — only
Camera, unlike the Android build which has both. Tapping "Request Camera
Permission" triggers a real OS-level dialog too, but with iOS's own wording
and only two buttons (no Precise-location-style toggle, and no
"only this time" option): `"Playground" would like to access the Camera.` /
`Used to demonstrate permission request dialogs.` / `Don't Allow` / `Allow`.
Dismissing it updates the app's own `camera_permission_status` label (to
"Denied" in this case), confirming the dialog is a real OS integration and
not just an app-level mock. A spec targeting this screen on iOS needs
platform-specific handling: there's one fewer permission to worry about, and
the dialog's button layout differs from Android's.

**Confirmed: Toolshop does not trigger any OS-level permission dialog**,
on Android. The full app surface was walked looking for one: the
unauthenticated drawer (Register / Sign In / Contact), the authenticated
drawer (Home / Favorites / Invoices / Logout), the Products catalog, the
Rentals tab, the Contact form, Register/Login, and the (empty) Invoices
screen. None of them touch camera, location, notifications, or storage —
Toolshop is a plain e-commerce demo app with no such features in its UI, so
whatever permissions it declares in its manifest are never exercised by a
live user flow. This gotcha is not applicable to Toolshop specs.

### Software-keyboard occlusion

**Confirmed live** this only bites on iOS, not Android: on this Android
emulator, no full on-screen software keyboard ever renders while typing into
a text field, so there is nothing for it to occlude — this gotcha does not
apply on Android at all.

On iOS it's field- and screen-dependent, not a blanket problem:

- Register screen: the keyboard opens over the form, but the "Register"
  button stays fully visible above it — a near miss, not an actual
  occlusion.
- Contact screen: after filling `message-input`, the keyboard genuinely
  covers both `message-input` and `send-message-button`. Fixed reliably by
  calling `scrollIntoViewIfNeeded()` on the target button before tapping it.

**Confirmed live**, though, this isn't a blanket "iOS always shows a
keyboard" rule: on the playground app's own "Preferences"
(SharedPref/Keychain) screen, iOS Simulator, tapping `username_field` or
`password_field` focuses the field (confirmed via the system
Paste/AutoFill callout that pops up above it) but **no on-screen software
keyboard ever renders** — checked across three separate taps on both
fields. The fields still work — text delivered to the focused field lands
correctly (confirmed via the dump showing `password_field`'s masked value
update after sending text) — there's just no visible keyboard on this
screen to occlude anything. So on iOS the risk is real but
screen-dependent: check each screen individually rather than assuming
every text field triggers a keyboard worth scrolling around.

## Note

- `mobilecli webview list` can't be used to double-check the "no WebView"
  claim above on the installed release builds — it needs a debuggable build
  to attach (`does not have get-task-allow entitlement` on iOS, `is not
  debuggable` on Android) — and `mobilewright inspect` has no non-interactive
  mode either, just an interactive browser UI. Worked around above with a
  second, debuggable app instead of a debug build of Toolshop itself.
  **Confirmed live**: `playground/playground.zip` installs and launches on
  the iOS Simulator (`mobilecli apps install`/`apps launch`), landing on the
  same six-item menu (Basic UI, Web View, SharedPref / Keychain, Continuous
  Animation, Permissions and Alerts, GPS Location) as the Android build,
  under the same `com.mobilenext.playground` bundle id.
