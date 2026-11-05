# Module 10 — Cross-platform config (reference only) & WebView bridging (exercise)

The cross-platform config part below is reference only — a trainer-demoed
change from the course's own material, not included in this scaffold and
not something attendees write from scratch. The WebView bridging part
(`webview/`) is a real exercise: attendees write
`webview/starter/webview-help.spec.ts` themselves. This scaffold ships
starter files only, no solution folders.

The demoed config extends the single-platform root config
into a `projects` array so the same spec files run unchanged on both Android
and iOS. Gadget Shop uses the same bundle id, `com.polteq.gadgetshop.mobile`,
on both platforms, so both projects only differ in `platform`.

`mobilewright test -c <that config> --list` expands
one spec file into two entries, `[android] › ...` and `[ios] › ...`, and
`--project android` / `--project ios` each run that same unmodified spec file.
The `projects[].use` shape (`platform`, `bundleId`) is exactly Playwright's
per-project `use` convention.

## WebView bridging (`webview/`) — exercise

The shop's Help, Terms and Privacy pages are its website shown inside the app
in a WebView (the URL carries `?embedded=1`, which hides the site's own
header and footer). Open one from the **Service** tab:
`tab-service-button`, then `service-help-button`. The native screen is
`webpage-screen`; the web content inside is a normal web page with
`data-testid` attributes.

Bridge from native to web with:

```ts
const page = await screen.getByWebView({ testId: 'webpage-webview' }).page();
```

On iOS the testId sits on a wrapper node, not on the WebView itself, so
`getByWebView({ testId })` matches nothing there; the page has a single
WebView and `screen.getByWebView()` finds it. `appWebView(screen)` in
`support/navigation.ts` does the right thing per platform.

`page` is a Playwright-like Page. `page()` does not wait, so first wait for
`webpage-screen` to be visible. Bridging needs a debuggable app: use the APK
in `gadgetshop/`, not the plain release build, which fails with
`webview injection requires a debug build`. A debuggable build starts
slowly, so give the first `home-screen` assertion a long timeout
(`{ timeout: 60_000 }`). The exercise has two tests:

1. Read the page: its URL contains `/help`, the "Help & FAQ" heading and the
   shipping FAQ title are visible.
2. Expand the shipping FAQ with a web `click()` and read its answer. Then
   open the "How do I contact support?" FAQ and click its **Contact us**
   link. The app recognises links to its own screens and opens the native
   Contact screen instead, so the WebView is gone: assert on `screen`
   (native locators), not on `page`.

`page.locator()`/`page.getByRole()` return a `WebLocator` at runtime, but
`@mobilewright/core` types them as Playwright's `Locator`. If TypeScript says
`toBeVisible()` doesn't exist, cast to `WebLocator`.

## Platform gotchas: keyboard occlusion

On iOS the on-screen keyboard can cover a field or button your test wants to
tap next. On Android the keyboard is not part of the accessibility tree, so
a tap can land on the keyboard instead of the element below it. Dismiss the
keyboard (or scroll the element into view) before the next tap, especially at
the end of long forms such as checkout.

## Platform gotchas: system dialogs (iOS)

iOS shows two system dialogs on top of Gadget Shop: "Open in
GadgetShopMobile?" after `device.openUrl()`, and "Save Password?" after
logging in or registering. They belong to the operating system, not the app,
and hide it until answered. `confirmOpenInApp(screen)` and
`dismissSavePasswordPrompt(screen)` in `support/navigation.ts` answer them and
do nothing on Android.

Mobilewright also has a built-in dialog API, the same idea as Playwright's
`page.on('dialog')`: `screen.on('dialog', d => d.accept())`,
`screen.once(...)` and `screen.waitForEvent('dialog')`. Without a listener a
dialog stays on screen (Playwright dismisses it for you). Dialogs are only
noticed while an action or `expect()` reads the screen, and action sheets and
bottom sheets don't count as dialogs. Whether these two iOS dialogs are
picked up hasn't been checked yet, so the exercises keep using the helpers.

## What this app does not have

Gadget Shop has no location-aware screen and triggers no OS permission
dialog, so there is no GPS mocking or permission handling to practise with it.
